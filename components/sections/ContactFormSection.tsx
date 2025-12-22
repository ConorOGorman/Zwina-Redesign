"use client";

import { Container } from "@/components/primitives/Container";
import { Section } from "@/components/primitives/Section";
import { Typography } from "@/components/primitives/Typography";
import { Button } from "@/components/primitives/Button";
import { Reveal } from "@/components/primitives/Reveal";
import React from "react";
import { useLocale } from "@/components/i18n/LocaleProvider";
import { t } from "@/lib/i18n/t";

type InquiryType = "partnership" | "volunteer" | "donation";

const INQUIRY_EMAIL: Record<InquiryType, string> = {
  partnership: "partnerships@zwinafoundation.org",
  volunteer: "info@zwinafoundation.org",
  donation: "info@zwinafoundation.org",
};

function buildMailtoUrl(params: {
  to: string;
  name: string;
  email: string;
  organization?: string;
  inquiryLabel: string;
  message: string;
  subjectPrefix: string;
  fieldLabels: {
    name: string;
    email: string;
    organization: string;
    inquiryType: string;
  };
}) {
  const subjectParts = [params.subjectPrefix, params.inquiryLabel, params.name].filter(Boolean);
  const subject = subjectParts.join(" — ");

  const bodyLines = [
    `${params.fieldLabels.name}: ${params.name}`,
    `${params.fieldLabels.email}: ${params.email}`,
    params.organization ? `${params.fieldLabels.organization}: ${params.organization}` : undefined,
    `${params.fieldLabels.inquiryType}: ${params.inquiryLabel}`,
    "",
    params.message.trim(),
  ].filter((l): l is string => Boolean(l));

  const body = bodyLines.join("\n");

  const to = encodeURIComponent(params.to);
  const encodedSubject = encodeURIComponent(subject);
  const encodedBody = encodeURIComponent(body);

  return `mailto:${to}?subject=${encodedSubject}&body=${encodedBody}`;
}

interface ContactFormSectionProps {
  showIntro?: boolean;
}

export const ContactFormSection: React.FC<ContactFormSectionProps> = ({ showIntro = true }) => {
  const { locale } = useLocale();
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [organization, setOrganization] = React.useState("");
  const [inquiryType, setInquiryType] = React.useState<InquiryType>("partnership");
  const [message, setMessage] = React.useState("");

  const canSubmit = name.trim().length > 0 && email.trim().length > 0 && message.trim().length > 0;
  const inquiryLabelByType: Record<InquiryType, string> = {
    partnership: t(locale, "contact.partnership"),
    volunteer: t(locale, "contact.volunteer"),
    donation: t(locale, "contact.donation"),
  };

  return (
    <Section className="bg-secondary border-t border-foreground/10 pt-24 md:pt-32">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-5">
            {showIntro && (
              <>
                <Reveal as="div" delay={0.02}>
                  <Typography variant="h2" className="mb-6">
                    {t(locale, "contact.title")}
                  </Typography>
                </Reveal>

                <Reveal as="div" delay={0.08}>
                  <Typography variant="body" className="max-w-xl">
                    {t(locale, "contact.body")}
                  </Typography>
                </Reveal>
              </>
            )}

            <div className="mt-10 space-y-8">
              <Reveal as="div" delay={0.14}>
                <div>
                  <Typography variant="h6" className="mb-2">
                    {t(locale, "contact.partnership")}
                  </Typography>
                  <Typography variant="body-sm" className="m-0">
                    <a
                      className="underline underline-offset-4"
                      href="mailto:partnerships@zwinafoundation.org"
                    >
                      partnerships@zwinafoundation.org
                    </a>
                  </Typography>
                </div>
              </Reveal>

              <Reveal as="div" delay={0.2}>
                <div>
                  <Typography variant="h6" className="mb-2">
                    {t(locale, "contact.volunteer")}
                  </Typography>
                  <Typography variant="body-sm" className="m-0">
                    <a className="underline underline-offset-4" href="mailto:info@zwinafoundation.org">
                      info@zwinafoundation.org
                    </a>
                  </Typography>
                </div>
              </Reveal>

              <Reveal as="div" delay={0.26}>
                <div>
                  <Typography variant="h6" className="mb-2">
                    {t(locale, "contact.donation")}
                  </Typography>
                  <Typography variant="body-sm" className="m-0">
                    <a className="underline underline-offset-4" href="mailto:info@zwinafoundation.org">
                      info@zwinafoundation.org
                    </a>
                  </Typography>
                </div>
              </Reveal>
            </div>
          </div>

          <div className="lg:col-span-7">
            <Reveal as="div" delay={0.1}>
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  if (!canSubmit) return;

                  const to = INQUIRY_EMAIL[inquiryType];
                  const url = buildMailtoUrl({
                    to,
                    name,
                    email,
                    organization: organization.trim() ? organization.trim() : undefined,
                    inquiryLabel: inquiryLabelByType[inquiryType],
                    message,
                    subjectPrefix: t(locale, "contact.mailSubjectPrefix"),
                    fieldLabels: {
                      name: t(locale, "contact.name"),
                      email: t(locale, "contact.email"),
                      organization: t(locale, "contact.organization"),
                      inquiryType: t(locale, "contact.inquiryType"),
                    },
                  });

                  window.location.href = url;
                }}
                className="rounded-lg border border-foreground/15 bg-surface p-6 md:p-10"
                aria-label="Contact form"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-foreground mb-2" htmlFor="contact-name">
                      {t(locale, "contact.name")} <span aria-hidden="true">*</span>
                    </label>
                    <input
                      id="contact-name"
                      name="name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                      className="h-12 w-full rounded-md border border-foreground/15 bg-surface px-4 text-foreground placeholder:text-muted-foreground outline-none transition focus:border-foreground/30 focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-surface"
                      autoComplete="name"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2" htmlFor="contact-email">
                      {t(locale, "contact.email")} <span aria-hidden="true">*</span>
                    </label>
                    <input
                      id="contact-email"
                      name="email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      className="h-12 w-full rounded-md border border-foreground/15 bg-surface px-4 text-foreground placeholder:text-muted-foreground outline-none transition focus:border-foreground/30 focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-surface"
                      autoComplete="email"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2" htmlFor="contact-org">
                      {t(locale, "contact.organization")}{" "}
                      <span className="text-muted-foreground">({t(locale, "contact.optional")})</span>
                    </label>
                    <input
                      id="contact-org"
                      name="organization"
                      value={organization}
                      onChange={(e) => setOrganization(e.target.value)}
                      className="h-12 w-full rounded-md border border-foreground/15 bg-surface px-4 text-foreground placeholder:text-muted-foreground outline-none transition focus:border-foreground/30 focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-surface"
                      autoComplete="organization"
                    />
                  </div>

                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-foreground mb-2" htmlFor="contact-type">
                      {t(locale, "contact.inquiryType")}
                    </label>
                    <select
                      id="contact-type"
                      name="inquiryType"
                      value={inquiryType}
                      onChange={(e) => setInquiryType(e.target.value as InquiryType)}
                      className="h-12 w-full rounded-md border border-foreground/15 bg-surface px-4 text-foreground outline-none transition focus:border-foreground/30 focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-surface"
                    >
                      <option value="partnership">{t(locale, "contact.partnership")}</option>
                      <option value="volunteer">{t(locale, "contact.volunteer")}</option>
                      <option value="donation">{t(locale, "contact.donation")}</option>
                    </select>
                  </div>

                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-foreground mb-2" htmlFor="contact-message">
                      {t(locale, "contact.message")} <span aria-hidden="true">*</span>
                    </label>
                    <textarea
                      id="contact-message"
                      name="message"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      required
                      rows={6}
                      className="w-full resize-y rounded-md border border-foreground/15 bg-surface px-4 py-3 text-foreground placeholder:text-muted-foreground outline-none transition focus:border-foreground/30 focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-surface"
                      placeholder={t(locale, "contact.messagePlaceholder")}
                    />
                  </div>
                </div>

                <div className="mt-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                  <Typography variant="caption" className="m-0 text-muted-foreground">
                    {t(locale, "contact.requiredHint")}
                  </Typography>

                  <Button type="submit" variant="primary" size="lg" effect="sweep" disabled={!canSubmit}>
                    {t(locale, "contact.send")}
                  </Button>
                </div>
              </form>
            </Reveal>
          </div>
        </div>
      </Container>
    </Section>
  );
};
