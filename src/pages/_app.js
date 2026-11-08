import "@/styles/globals.css";
import Head from "next/head";
import Navbar from "@/layout/navbar";
import Footer from "@/layout/footer";
import { Toaster } from "sonner";
import { useTheme } from "@/components/theme-toggle";

export default function App({ Component, pageProps }) {
  const { theme } = useTheme();
  return (
    <div className="bg-surface text-ink min-h-screen">
      <Head>
        <title>Mahnoor Faisal | Software Engineer</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Navbar />
      <Toaster
        position="bottom-right"
        theme={theme}
        richColors
        closeButton
        duration={4000}
      />
      <Component {...pageProps} />
      <Footer />
    </div>
  );
}
