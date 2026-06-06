const externalUrlPattern = /^https?:\/\//i;

export function normalizeOptionalUrl(url?: string) {
  const trimmedUrl = url?.trim();
  return trimmedUrl || undefined;
}

export function isExternalUrl(url?: string) {
  return Boolean(url && externalUrlPattern.test(url));
}

export function getExternalAnchorProps(url?: string) {
  return isExternalUrl(url) ? { target: "_blank", rel: "noreferrer" } : {};
}

export function createMailHref(email: string) {
  return `mailto:${email}`;
}
