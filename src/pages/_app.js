import "@/styles/globals.css";
import Navbar from "@/layout/navbar";
import { Toaster } from "sonner";

export default function App({ Component, pageProps }) {
  return (
    <div className="bg-[#1A0B2E] text-white min-h-screen">
      <Navbar />
      <Toaster
        position="bottom-right"
        theme="dark"
        richColors
        closeButton
        duration={4000}
      />
      <Component {...pageProps} />
    </div>
  );
}
