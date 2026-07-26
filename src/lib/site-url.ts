const configuredSiteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : "http://localhost:3000");

export const siteUrl = new URL(configuredSiteUrl);

export function absoluteUrl(path = "/") {
  return new URL(path, siteUrl).toString();
}
