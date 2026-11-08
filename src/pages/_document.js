import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta charSet="utf-8" />
        <meta
          name="description"
          content="Mahnoor Faisal is a Software Engineer in Karachi with 3 years of experience building web and mobile apps with React, Next.js and React Native."
        />
        <meta name="theme-color" content="#1A0B2E" />
        <meta property="og:title" content="Mahnoor Faisal | Software Engineer" />
        <meta
          property="og:description"
          content="Frontend-focused Software Engineer building web and mobile products with React, Next.js, React Native and AI-assisted workflows."
        />
        <meta property="og:type" content="website" />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
      </Head>
      <body className="antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
