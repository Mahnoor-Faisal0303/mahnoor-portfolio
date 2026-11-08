import { Html, Head, Main, NextScript } from "next/document";
import { profile } from "@/data/portfolio";
import { SITE_URL } from "@/lib/site";
import { themeInitScript } from "@/components/theme-toggle";

const TITLE = "Mahnoor Faisal | Software Engineer";
const DESCRIPTION =
  "Mahnoor Faisal is a Software Engineer in Karachi, Pakistan with 3 years of experience building web and mobile apps with React, Next.js, React Native and Django.";
const IMAGE = `${SITE_URL}/mahnoor-image.jpeg`;

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: profile.name,
  url: `${SITE_URL}/`,
  image: IMAGE,
  jobTitle: profile.role,
  description: DESCRIPTION,
  address: { "@type": "PostalAddress", addressLocality: "Karachi", addressCountry: "PK" },
  alumniOf: { "@type": "CollegeOrUniversity", name: "University of Karachi" },
  worksFor: { "@type": "Organization", name: "1Percent Labs" },
  knowsAbout: ["React", "Next.js", "React Native", "TypeScript", "Django", "JavaScript"],
  sameAs: [profile.linkedin, profile.github, profile.medium],
};

export default function Document() {
  return (
    <Html lang="en" className="dark" suppressHydrationWarning>
      <Head>
        <meta charSet="utf-8" />
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
        <meta name="description" content={DESCRIPTION} />
        <meta
          name="keywords"
          content="Mahnoor Faisal, Mahnoor Faisal Software Engineer, Mahnoor Faisal Karachi, React developer, Next.js developer, React Native developer, Django, portfolio"
        />
        <meta
          name="google-site-verification"
          content="MAW2bLtXX5sfk_UeAioqcaIrOCFxRND8NbOn2ob6Yy0"
        />
        <meta name="author" content={profile.name} />
        <meta name="robots" content="index, follow, max-image-preview:large" />
        <meta name="theme-color" content="#1A0B2E" />
        <link rel="canonical" href={`${SITE_URL}/`} />

        <meta property="og:title" content={TITLE} />
        <meta property="og:description" content={DESCRIPTION} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`${SITE_URL}/`} />
        <meta property="og:site_name" content={profile.name} />
        <meta property="og:image" content={IMAGE} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={TITLE} />
        <meta name="twitter:description" content={DESCRIPTION} />
        <meta name="twitter:image" content={IMAGE} />

        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
      </Head>
      <body className="antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
