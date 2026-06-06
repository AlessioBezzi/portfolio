const externalAssetPattern = /^https?:\/\//i;

export function getPublicAssetUrl(path: string): string;
export function getPublicAssetUrl(path?: string): string | undefined;
export function getPublicAssetUrl(path?: string) {
  const trimmedPath = path?.trim();

  if (!trimmedPath) {
    return undefined;
  }

  if (externalAssetPattern.test(trimmedPath)) {
    return trimmedPath;
  }

  const baseUrl = import.meta.env.BASE_URL || "/";
  const normalizedBaseUrl = baseUrl.endsWith("/") ? baseUrl : `${baseUrl}/`;
  const normalizedPath = trimmedPath.replace(/^\/+/, "");

  return `${normalizedBaseUrl}${normalizedPath}`;
}
