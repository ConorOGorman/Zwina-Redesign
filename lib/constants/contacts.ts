/**
 * Contact information constants
 */

export const CONTACT_EMAILS = {
  partnerships: "partnerships@zwinafoundation.org",
  info: "info@zwinafoundation.org",
  volunteer: "info@zwinafoundation.org",
  donation: "info@zwinafoundation.org",
} as const;

export const INQUIRY_EMAIL = {
  partnership: CONTACT_EMAILS.partnerships,
  volunteer: CONTACT_EMAILS.volunteer,
  donation: CONTACT_EMAILS.donation,
} as const;
