// Public URL of the deployed site. Set NEXT_PUBLIC_SITE_URL to override it
// (e.g. when you move to a custom domain like https://mahnoorfaisal.com).
export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL || "https://mahnoor-portfolio-pi.vercel.app"
).replace(/\/$/, "");
