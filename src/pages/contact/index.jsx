import Image from "next/image";
import { ContactCard } from "./contact-card";

export default function Contact() {
  return (
    <main
      id="contact"
      className="min-h-screen bg-[#0b0314] text-white font-sans p-20 flex flex-col items-center"
    >
      <h1 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent animate-gradient-x">
        Contact Me
      </h1>
      <div className="md:min-w-xl mb-10 flex flex-col items-center justify-center min-h-[100vh]">
        <div className="flex min-h-[100vh] items-center">
          <div className="relative w-70 h-50 md:w-250 md:h-150">
            <div className="absolute inset-1 z-1 flex items-center">
              <Image
                src="/ellipse-purple.png"
                alt="Background"
                layout="fill"
                className="z-0"
              />
              <div className="gap-6 w-full flex flex-wrap justify-center max-h-[540px]">
                <ContactCard />
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
