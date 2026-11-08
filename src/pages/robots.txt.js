import { SITE_URL } from "@/lib/site";

export default function Robots() {
  return null;
}

export async function getServerSideProps({ res }) {
  res.setHeader("Content-Type", "text/plain");
  res.write(`User-agent: *\nAllow: /\n\nSitemap: ${SITE_URL}/sitemap.xml\n`);
  res.end();
  return { props: {} };
}
