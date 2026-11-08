import "@/styles/globals.css";
import Head from "next/head";
import Navbar from "@/layout/navbar";
import Footer from "@/layout/footer";
import { Toaster } from "sonner";

export default function App({ Component, pageProps }) {
  return (
    <div className="bg-[#1A0B2E] text-white min-h-screen">
      <Head>
        <title>Mahnoor Faisal | Software Engineer</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Navbar />
      <Toaster
        position="bottom-right"
        theme="dark"
        richColors
        closeButton
        duration={4000}
      />
      <Component {...pageProps} />
      <Footer />
    </div>
  );
}
