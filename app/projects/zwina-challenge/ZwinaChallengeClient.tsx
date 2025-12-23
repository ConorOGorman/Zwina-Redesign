"use client";

import { Button } from "@/components/primitives/Button";
import { Container } from "@/components/primitives/Container";
import { Section } from "@/components/primitives/Section";
import { Typography } from "@/components/primitives/Typography";
import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";

type TabKey = "why" | "how" | "benefits" | "impact" | "vision" | "eu" | "budget";

const TABS: Array<{ key: TabKey; label: string }> = [
  { key: "why", label: "Why This Project" },
  { key: "how", label: "How It Works" },
  { key: "benefits", label: "Benefits" },
  { key: "impact", label: "Wider Impact" },
  { key: "vision", label: "Long-Term Vision" },
  { key: "eu", label: "EU Alignment" },
  { key: "budget", label: "Budget" },
];

const PANEL_CONTENT: Record<
  TabKey,
  | {
      title: string;
      body?: string[];
      bullets?: string[];
    }
  | {
      title: string;
      rows: Array<{ label: string; value: string }>;
      total: { label: string; value: string };
    }
> = {
  why: {
    title: "Why This Project Is Needed",
    bullets: [
      "Youth are motivated but lack practical tools, mentors, or legitimacy.",
      "Traditional aid has failed to deliver sustainable transformation.",
      "Zwina fosters self-sustaining, locally rooted social business models.",
      "It aligns with EU Youth Goals: Quality learning, participation, and programmes.",
    ],
    body: [
      "Our incubator helps ideas grow into real, tested solutions. We remove admin barriers, provide legal/fiscal cover, and equip youth with mentorship, structure, and visibility.",
    ],
  },
  how: {
    title: "Cohort Model",
    bullets: [
      "12-month program with 2 projects: one in Europe, one outside.",
      "Support includes mentorship, training, €250/month stipend, and visibility assets.",
      "Monthly clinics, progress notes, a mid-term review, and a final Demo Day.",
      "Lean, replicable model: real projects, real results.",
    ],
  },
  benefits: {
    title: "Benefits",
    bullets: [
      "Youth gain practical skills, confidence, and visibility.",
      "Communities benefit from co-designed solutions.",
      "Europe fosters a generation of engaged changemakers.",
    ],
    body: ["Founders exit with an impact report, a sustainability plan, and tools for replication."],
  },
  impact: {
    title: "Wider Impact",
    body: [
      "Zwina is a platform, not just a program. Through storytelling, toolkits, and open access, we inspire action across Europe and beyond.",
    ],
    bullets: [
      "Monthly founder diaries, templates, and behind-the-scenes content.",
      "Free webinars, toolkits, and open learning materials.",
      "Mini-Challenges & replication kits for schools and youth centers.",
    ],
  },
  vision: {
    title: "Long-Term Vision",
    body: [
      "By 2030, Zwina aims to have incubated 100+ youth-led social businesses across Europe, creating a decentralized network of changemakers who are economically independent, socially conscious, and globally connected.",
    ],
  },
  eu: {
    title: "EU Alignment",
    bullets: [
      "Supports EU Youth Goals (Quality Learning, Participation, Employment)",
      "Contributes to SDG 8 (Decent Work), SDG 10 (Reduced Inequalities), SDG 17 (Partnerships)",
      "Promotes cross-border cooperation and cultural exchange",
      "Builds capacity for sustainable, youth-driven development",
    ],
  },
  budget: {
    title: "Budget Overview",
    rows: [
      { label: "Stipends (2 founders × €250/month × 12 months)", value: "€6,000" },
      { label: "Mentorship & Training", value: "€2,500" },
      { label: "Project Implementation Support", value: "€3,000" },
      { label: "Admin & Legal Coverage", value: "€1,500" },
      { label: "Demo Day & Visibility", value: "€1,000" },
    ],
    total: { label: "Total per Cohort", value: "€14,000" },
  },
};

function buildMailtoUrl(params: { to: string; subject: string; bodyLines: string[] }) {
  const to = encodeURIComponent(params.to);
  const subject = encodeURIComponent(params.subject);
  const body = encodeURIComponent(params.bodyLines.join("\n"));
  return `mailto:${to}?subject=${subject}&body=${body}`;
}

type ApplicationFormState = {
  fullName: string;
  email: string;
  phone: string;
  age: string;
  country: string;
  bio: string;
  motivation: string;
  socialIssue: string;
  experience: string;
  portfolio: string;
};

type ApplicationFormErrors = Partial<Record<keyof ApplicationFormState, string>>;

const INITIAL_FORM: ApplicationFormState = {
  fullName: "",
  email: "",
  phone: "",
  age: "",
  country: "",
  bio: "",
  motivation: "",
  socialIssue: "",
  experience: "",
  portfolio: "",
};

function validateApplication(state: ApplicationFormState): ApplicationFormErrors {
  const errors: ApplicationFormErrors = {};

  const fullName = state.fullName.trim();
  if (!fullName) errors.fullName = "Please enter your full name.";

  const email = state.email.trim();
  if (!email) errors.email = "Please enter your email.";
  else if (!/^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/.test(email)) errors.email = "Please enter a valid email.";

  const age = state.age.trim();
  if (!age) errors.age = "Please enter your age.";
  else if (!Number.isFinite(Number(age)) || Number(age) <= 0) errors.age = "Please enter a valid age.";

  const country = state.country.trim();
  if (!country) errors.country = "Please enter your country.";

  const bio = state.bio.trim();
  if (bio.length < 50) errors.bio = "Please write at least 50 characters about you.";
  else if (bio.length > 500) errors.bio = "Please keep this to 500 characters or less.";

  const motivation = state.motivation.trim();
  if (motivation.length < 100) errors.motivation = "Please write at least 100 characters about your motivation.";
  else if (motivation.length > 1000) errors.motivation = "Please keep this to 1000 characters or less.";

  const socialIssue = state.socialIssue.trim();
  if (socialIssue.length < 50) errors.socialIssue = "Please write at least 50 characters about the issue.";
  else if (socialIssue.length > 500) errors.socialIssue = "Please keep this to 500 characters or less.";

  const portfolio = state.portfolio.trim();
  if (portfolio && !/^https?:\/\//i.test(portfolio)) {
    errors.portfolio = "Please enter a valid URL starting with http:// or https://";
  }

  return errors;
}

function FieldError({ children }: { children?: string }) {
  if (!children) return null;
  return <p className="mt-2 text-sm text-destructive">{children}</p>;
}

function ApplyModal({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const [state, setState] = React.useState<ApplicationFormState>(INITIAL_FORM);
  const [errors, setErrors] = React.useState<ApplicationFormErrors>({});

  React.useEffect(() => {
    if (open) return;
    setState(INITIAL_FORM);
    setErrors({});
  }, [open]);

  if (!open) return null;

  const setField = (key: keyof ApplicationFormState) => (value: string) => {
    setState((prev) => ({ ...prev, [key]: value }));
    setErrors((prev) => ({ ...prev, [key]: undefined }));
  };

  const onSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    const nextErrors = validateApplication(state);
    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors);
      return;
    }

    const mailto = buildMailtoUrl({
      to: "info@zwinafoundation.org",
      subject: `Zwina Challenge Application — ${state.fullName.trim()}`,
      bodyLines: [
        "Zwina Challenge Application",
        "",
        `Full Name: ${state.fullName.trim()}`,
        `Email: ${state.email.trim()}`,
        state.phone.trim() ? `Phone: ${state.phone.trim()}` : undefined,
        `Age: ${state.age.trim()}`,
        `Country: ${state.country.trim()}`,
        state.portfolio.trim() ? `Portfolio/Social: ${state.portfolio.trim()}` : undefined,
        "",
        "About You:",
        state.bio.trim(),
        "",
        "Motivation:",
        state.motivation.trim(),
        "",
        "Social Issue:",
        state.socialIssue.trim(),
        state.experience.trim()
          ? ["", "Previous Experience:", state.experience.trim()].join("\n")
          : undefined,
      ].filter((line): line is string => Boolean(line)),
    });

    window.location.href = mailto;
    onClose();
  };

  const inputClassName =
    "h-12 w-full rounded-md border border-foreground/15 bg-surface px-4 text-foreground placeholder:text-muted-foreground outline-none transition focus:border-foreground/30 focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-surface";

  const textareaClassName =
    "w-full resize-y rounded-md border border-foreground/15 bg-surface px-4 py-3 text-foreground placeholder:text-muted-foreground outline-none transition focus:border-foreground/30 focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-surface";

  return (
    <div role="dialog" aria-modal="true" aria-label="Apply to Zwina Challenge" className="fixed inset-0 z-50">
      <div className="absolute inset-0 bg-foreground/40 backdrop-blur-sm" onClick={onClose} />
      <div className="absolute inset-0 grid place-items-center p-4">
        <div className="w-full max-w-3xl bg-surface border border-foreground/10 rounded-md overflow-hidden">
          <div className="flex items-center justify-between gap-4 px-5 py-4 border-b border-foreground/10">
            <div>
              <Typography variant="h6" className="m-0">
                Apply to Zwina Challenge
              </Typography>
              <Typography variant="body-sm" className="m-0 text-muted-foreground">
                Fill out this form to apply for the next cohort. We&apos;re looking for passionate young changemakers
                ready to make an impact.
              </Typography>
            </div>
            <Button variant="outline" size="sm" type="button" effect="none" onClick={onClose}>
              Close
            </Button>
          </div>

          <form onSubmit={onSubmit} className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div>
                <label className="block text-sm font-medium text-foreground mb-2" htmlFor="challenge-fullName">
                  Full Name <span aria-hidden="true">*</span>
                </label>
                <input
                  id="challenge-fullName"
                  name="fullName"
                  value={state.fullName}
                  onChange={(e) => setField("fullName")(e.target.value)}
                  placeholder="Your full name"
                  className={inputClassName}
                  autoComplete="name"
                />
                <FieldError>{errors.fullName}</FieldError>
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2" htmlFor="challenge-email">
                  Email <span aria-hidden="true">*</span>
                </label>
                <input
                  id="challenge-email"
                  name="email"
                  type="email"
                  value={state.email}
                  onChange={(e) => setField("email")(e.target.value)}
                  placeholder="your.email@example.com"
                  className={inputClassName}
                  autoComplete="email"
                />
                <FieldError>{errors.email}</FieldError>
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2" htmlFor="challenge-phone">
                  Phone Number
                </label>
                <input
                  id="challenge-phone"
                  name="phone"
                  type="tel"
                  value={state.phone}
                  onChange={(e) => setField("phone")(e.target.value)}
                  placeholder="+1 234 567 8900"
                  className={inputClassName}
                  autoComplete="tel"
                />
                <FieldError>{errors.phone}</FieldError>
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2" htmlFor="challenge-age">
                  Age <span aria-hidden="true">*</span>
                </label>
                <input
                  id="challenge-age"
                  name="age"
                  inputMode="numeric"
                  value={state.age}
                  onChange={(e) => setField("age")(e.target.value)}
                  placeholder="18"
                  className={inputClassName}
                />
                <FieldError>{errors.age}</FieldError>
              </div>

              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-foreground mb-2" htmlFor="challenge-country">
                  Country <span aria-hidden="true">*</span>
                </label>
                <input
                  id="challenge-country"
                  name="country"
                  value={state.country}
                  onChange={(e) => setField("country")(e.target.value)}
                  placeholder="Your country"
                  className={inputClassName}
                  autoComplete="country-name"
                />
                <FieldError>{errors.country}</FieldError>
              </div>

              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-foreground mb-2" htmlFor="challenge-bio">
                  About You <span aria-hidden="true">*</span>{" "}
                  <span className="text-muted-foreground">(50-500 characters)</span>
                </label>
                <textarea
                  id="challenge-bio"
                  name="bio"
                  value={state.bio}
                  onChange={(e) => setField("bio")(e.target.value)}
                  rows={4}
                  placeholder="Tell us about yourself, your background, and interests..."
                  className={textareaClassName}
                />
                <FieldError>{errors.bio}</FieldError>
              </div>

              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-foreground mb-2" htmlFor="challenge-motivation">
                  Why do you want to join the Zwina Challenge? <span aria-hidden="true">*</span>{" "}
                  <span className="text-muted-foreground">(100-1000 characters)</span>
                </label>
                <textarea
                  id="challenge-motivation"
                  name="motivation"
                  value={state.motivation}
                  onChange={(e) => setField("motivation")(e.target.value)}
                  rows={4}
                  placeholder="What motivates you to participate in this program? What do you hope to achieve?"
                  className={textareaClassName}
                />
                <FieldError>{errors.motivation}</FieldError>
              </div>

              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-foreground mb-2" htmlFor="challenge-socialIssue">
                  What social issue are you passionate about? <span aria-hidden="true">*</span>{" "}
                  <span className="text-muted-foreground">(50-500 characters)</span>
                </label>
                <textarea
                  id="challenge-socialIssue"
                  name="socialIssue"
                  value={state.socialIssue}
                  onChange={(e) => setField("socialIssue")(e.target.value)}
                  rows={4}
                  placeholder="Describe the social issue you care about and want to address..."
                  className={textareaClassName}
                />
                <FieldError>{errors.socialIssue}</FieldError>
              </div>

              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-foreground mb-2" htmlFor="challenge-experience">
                  Previous Experience <span className="text-muted-foreground">(optional)</span>
                </label>
                <textarea
                  id="challenge-experience"
                  name="experience"
                  value={state.experience}
                  onChange={(e) => setField("experience")(e.target.value)}
                  rows={4}
                  placeholder="Any previous experience with social entrepreneurship, volunteering, or community projects..."
                  className={textareaClassName}
                />
                <FieldError>{errors.experience}</FieldError>
              </div>

              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-foreground mb-2" htmlFor="challenge-portfolio">
                  Portfolio/Social Media Link <span className="text-muted-foreground">(optional)</span>
                </label>
                <input
                  id="challenge-portfolio"
                  name="portfolio"
                  type="url"
                  value={state.portfolio}
                  onChange={(e) => setField("portfolio")(e.target.value)}
                  placeholder="https://linkedin.com/in/yourprofile or any relevant link"
                  className={inputClassName}
                  autoComplete="url"
                />
                <FieldError>{errors.portfolio}</FieldError>
              </div>
            </div>

            <div className="mt-8 flex flex-col sm:flex-row sm:items-center sm:justify-end gap-3">
              <Button type="button" variant="outline" size="lg" effect="none" onClick={onClose}>
                Cancel
              </Button>
              <Button type="submit" variant="primary" size="lg" effect="sweep">
                Submit Application
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export function ZwinaChallengeClient() {
  const [activeTab, setActiveTab] = React.useState<TabKey>("why");
  const [isApplyOpen, setIsApplyOpen] = React.useState(false);

  const panel = PANEL_CONTENT[activeTab];

  return (
    <>
      <Section>
        <Container className="max-w-5xl">
          <div className="text-center">
            <Typography variant="caption" className="text-muted-foreground">
              Europe &amp; Beyond • 2025
            </Typography>
            <Typography variant="h3" className="mt-4">
              Incubating Youth-Led Social Businesses for a Fair and Sustainable Europe
            </Typography>
          </div>

          <div className="mt-10 flex flex-wrap justify-center gap-2 rounded-md bg-foreground/5 p-2">
            {TABS.map((tab) => {
              const isActive = tab.key === activeTab;
              return (
                <button
                  key={tab.key}
                  type="button"
                  onClick={() => setActiveTab(tab.key)}
                  className={cn(
                    "inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all",
                    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background",
                    isActive
                      ? "bg-surface text-foreground shadow-sm"
                      : "text-muted-foreground hover:bg-foreground/5 hover:text-foreground"
                  )}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>

          <div className="mt-8 bg-surface border border-foreground/10 rounded-md p-6 md:p-10">
            <Typography variant="h4" className="mb-5">
              {panel.title}
            </Typography>

            {"rows" in panel ? (
              <div className="space-y-3">
                {panel.rows.map((row) => (
                  <div
                    key={row.label}
                    className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 border-b border-foreground/10 pb-3"
                  >
                    <p className="m-0 text-foreground">{row.label}</p>
                    <p className="m-0 font-semibold text-foreground">{row.value}</p>
                  </div>
                ))}
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 pt-2">
                  <p className="m-0 font-semibold text-foreground">{panel.total.label}</p>
                  <p className="m-0 font-semibold text-foreground">{panel.total.value}</p>
                </div>
              </div>
            ) : (
              <>
                {panel.bullets && (
                  <ul className="m-0 list-disc pl-6 space-y-2 text-muted-foreground">
                    {panel.bullets.map((bullet) => (
                      <li key={bullet}>{bullet}</li>
                    ))}
                  </ul>
                )}
                {panel.body?.map((paragraph) => (
                  <p key={paragraph} className="mt-6 text-muted-foreground leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </>
            )}

            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
              <Button type="button" variant="primary" size="lg" effect="sweep" onClick={() => setIsApplyOpen(true)}>
                Join the Next Cohort
              </Button>
            </div>
          </div>
        </Container>
      </Section>

      <Section className="bg-secondary border-t border-foreground/10">
        <Container className="max-w-5xl">
          <div className="text-center">
            <Typography variant="h3">Join Us in Rethinking Development</Typography>
            <Typography variant="body" className="mt-5 max-w-3xl mx-auto text-muted-foreground">
              Whether you donate, collaborate, or spread the word — your actions matter. Together, we can create
              meaningful, lasting change.
            </Typography>
          </div>

          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-3">
            <Button variant="primary" size="lg" asChild effect="sweep">
              <Link href="/donate" className="no-underline">
                Support Us
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild effect="none">
              <Link href="/contact" className="no-underline">
                Contact Us
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild effect="none">
              <a href="https://www.instagram.com/zwina.foundation/" className="no-underline" target="_blank" rel="noreferrer">
                Follow Us
              </a>
            </Button>
          </div>
        </Container>
      </Section>

      <ApplyModal open={isApplyOpen} onClose={() => setIsApplyOpen(false)} />
    </>
  );
}
