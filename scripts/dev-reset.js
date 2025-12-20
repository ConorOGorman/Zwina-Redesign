/* eslint-disable no-console */

const { execSync, spawn } = require("node:child_process");
const fs = require("node:fs");
const path = require("node:path");

const repoRoot = path.resolve(__dirname, "..");

function listNextDevPids() {
  const ps = execSync("ps -ax -o pid= -o command=", { encoding: "utf8" });
  const lines = ps.split("\n").map((l) => l.trim()).filter(Boolean);

  const pids = [];
  for (const line of lines) {
    const match = line.match(/^(\d+)\s+(.*)$/);
    if (!match) continue;

    const pid = Number(match[1]);
    const cmd = match[2];

    // Only target `next dev` launched from this repo.
    // Examples:
    // - node .../Zwina Test/node_modules/.bin/next dev
    // - .../next/dist/bin/next dev
    const isThisRepo = cmd.includes(repoRoot);
    const isNextDev = cmd.includes("next dev") || cmd.includes("/next ") && cmd.includes(" dev");

    if (isThisRepo && isNextDev) pids.push(pid);
  }

  return pids;
}

function killPids(pids) {
  for (const pid of pids) {
    try {
      process.kill(pid, "SIGTERM");
    } catch {
      // ignore
    }
  }

  // Give processes a moment to exit.
  const deadline = Date.now() + 1500;
  while (Date.now() < deadline) {
    const still = pids.filter((pid) => {
      try {
        process.kill(pid, 0);
        return true;
      } catch {
        return false;
      }
    });
    if (still.length === 0) break;
  }

  // Force kill any stragglers.
  for (const pid of pids) {
    try {
      process.kill(pid, 0);
      process.kill(pid, "SIGKILL");
    } catch {
      // ignore
    }
  }
}

function rmrf(relPath) {
  try {
    fs.rmSync(path.join(repoRoot, relPath), { recursive: true, force: true });
  } catch {
    // ignore
  }
}

function main() {
  console.log("[dev:reset] Repo:", repoRoot);

  const pids = listNextDevPids();
  if (pids.length) {
    console.log("[dev:reset] Stopping next dev processes:", pids.join(", "));
    killPids(pids);
  } else {
    console.log("[dev:reset] No next dev processes found for this repo.");
  }

  console.log("[dev:reset] Clearing Next caches (.next, node_modules/.cache)...");
  rmrf(".next");
  rmrf("node_modules/.cache");

  console.log("[dev:reset] Starting next dev...");
  const child = spawn(process.platform === "win32" ? "npm.cmd" : "npm", ["run", "dev"], {
    cwd: repoRoot,
    stdio: "inherit",
    env: process.env,
  });

  child.on("exit", (code) => process.exit(code ?? 0));
}

main();
