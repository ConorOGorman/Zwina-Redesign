export const INITIAL_SPLASH_STORAGE_KEY = "zwina_initial_splash_shown_v1";
export const INITIAL_SPLASH_HTML_CLASS_ACTIVE = "zwina-splash--active";
export const INITIAL_SPLASH_HTML_CLASS_PENDING = "zwina-splash--pending";

export function getInitialSplashInlineScript() {
  return `
  (function () {
    var pendingClass = ${JSON.stringify(INITIAL_SPLASH_HTML_CLASS_PENDING)};
    try {
      var key = ${JSON.stringify(INITIAL_SPLASH_STORAGE_KEY)};
      var activeClass = ${JSON.stringify(INITIAL_SPLASH_HTML_CLASS_ACTIVE)};
      if (!sessionStorage.getItem(key)) {
        sessionStorage.setItem(key, "1");
        document.documentElement.classList.add(activeClass);
      }
    } catch (e) {}
    try { document.documentElement.classList.remove(pendingClass); } catch (e) {}
  })();
  `;
}
