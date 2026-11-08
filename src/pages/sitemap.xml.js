import { SITE_URL } from "@/lib/site";

export default function Sitemap() {
  return null;
}

export async function getServerSideProps({ res }) {
  const today = new Date().toISOString().split("T")[0];
  res.setHeader("Content-Type", "application/xml");
  res.write(`<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>${SITE_URL}/</loc>
    <lastmod>${today}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>1.0</priority>
  </url>
</urlset>
`);
  res.end();
  return { props: {} };
}
