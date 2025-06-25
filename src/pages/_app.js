import "@/styles/globals.css";
import Navbar from "@/layout/navbar";

export default function App({ Component, pageProps }) {
  return (
    <div className="bg-[#1A0B2E] text-white min-h-screen">
      <Navbar />
      <Component {...pageProps} />
    </div>
  );
}
