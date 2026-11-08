import Image from "next/image";
import { ArrowDown, Download } from "lucide-react";
import { profile, stats, headlineStack } from "@/data/portfolio";

export default function Hero() {
  return (
    <section
      id="home"
      className="scroll-mt-16 bg-[#0b0314] text-white px-5 sm:px-8 pt-16 pb-20 md:pt-24"
    >
      <div className="max-w-6xl mx-auto flex flex-col-reverse md:flex-row items-center gap-12 md:gap-16">
        <div className="flex-1 text-center md:text-left">
          <p className="text-purple-300 font-medium">Hello! I am</p>
          <h1 className="mt-2 text-4xl sm:text-5xl lg:text-6xl font-bold">
            <span className="bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent animate-gradient-x">
              {profile.name}
            </span>
          </h1>
          <h2 className="mt-3 text-xl sm:text-2xl font-semibold text-white">
            {profile.role} · React, Next.js &amp; React Native
          </h2>
          <p className="mt-5 text-gray-400 leading-relaxed max-w-2xl mx-auto md:mx-0">
            {profile.summary}
          </p>
          <p className="mt-3 text-sm text-gray-300">
            Currently at{" "}
            <a
              href="https://1percentlabs.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-cyan-400 hover:underline"
            >
              1Percent Labs
            </a>{" "}
            · {profile.location}
          </p>

          <div className="mt-8 flex flex-wrap gap-4 justify-center md:justify-start">
            <a
              href="#contact"
              className="px-6 py-3 rounded-md bg-blue-800 hover:bg-blue-700 transition-colors font-medium"
            >
              Get in touch
            </a>
            <a
              href={profile.resume}
              target="_blank"
              rel="noopener noreferrer"
              download
              className="inline-flex items-center gap-2 px-6 py-3 rounded-md border border-[#693B93] hover:border-cyan-400 hover:text-cyan-400 transition-colors font-medium"
            >
              <Download size={18} /> Download resume
            </a>
          </div>
        </div>

        <div className="relative w-64 h-64 sm:w-72 sm:h-72 shrink-0">
          <Image
            src="/ellipse-purple.png"
            alt=""
            fill
            sizes="288px"
            className="rounded-full"
          />
          <div className="absolute inset-[15%]">
            <Image
              src="/ellipse.png"
              alt=""
              fill
            sizes="200px"
            className="rounded-full"
            />
          </div>
          <div className="absolute inset-[12%]">
            <Image
              src="/mahnoor.png"
              alt="Portrait of Mahnoor Faisal"
              fill
              sizes="220px"
              priority
              className="rounded-full object-cover"
            />
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto mt-16 grid grid-cols-2 md:grid-cols-4 gap-4">
        {stats.map((s) => (
          <div
            key={s.label}
            className="rounded-xl border border-[#693B93] bg-[#1A0B2E] p-5 text-center"
          >
            <div className="text-3xl font-bold text-cyan-400">{s.value}</div>
            <div className="text-xs sm:text-sm text-gray-400 mt-1">{s.label}</div>
          </div>
        ))}
      </div>

      <div className="max-w-6xl mx-auto mt-12 flex flex-wrap justify-center gap-2">
        {headlineStack.map((t) => (
          <span
            key={t}
            className="text-sm px-3 py-1.5 rounded-full border border-[#693B93] text-gray-300"
          >
            {t}
          </span>
        ))}
      </div>

      <a
        href="#skills"
        aria-label="Scroll to skills"
        className="mt-12 flex justify-center text-purple-300 hover:text-cyan-400 animate-bounce"
      >
        <ArrowDown />
      </a>
    </section>
  );
}
