const sections = ["skills", "experience", "education", "projects", "articles", "contact"];

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Serve the single-page portfolio for clean section URLs like /contact
  async rewrites() {
    return {
      beforeFiles: sections.map((s) => ({ source: `/${s}`, destination: "/" })),
    };
  },
};

export default nextConfig;
