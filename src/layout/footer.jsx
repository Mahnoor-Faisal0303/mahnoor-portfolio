import { profile } from "@/data/portfolio";
import { scrollToSection } from "@/lib/scroll";

const iconClass =
  "text-purple-300/70 transition-all duration-300 hover:text-cyan-400 hover:-translate-y-0.5";

export default function Footer() {
  return (
    <footer className="border-t border-purple-500/15 bg-[#1A0B2E] px-5 sm:px-8 py-10">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-5">
        <p className="text-sm sm:text-base text-purple-300/60 text-center sm:text-left">
          Designed &amp; built by{" "}
          <a href="#home" onClick={(e) => scrollToSection(e, "#home")} className="text-purple-200 hover:text-cyan-400 transition-colors">
            Mahnoor Faisal
          </a>{" "}
          with Next.js and Tailwind CSS.
        </p>

        <div className="flex items-center gap-5">
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className={iconClass}
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-7 h-7">
              <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.1.79-.25.79-.56v-2c-3.2.7-3.88-1.54-3.88-1.54-.52-1.33-1.28-1.68-1.28-1.68-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.03 1.76 2.69 1.25 3.35.96.1-.74.4-1.25.73-1.54-2.55-.29-5.24-1.28-5.24-5.68 0-1.26.45-2.28 1.18-3.09-.12-.29-.51-1.46.11-3.05 0 0 .97-.31 3.17 1.18a11 11 0 015.78 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.81 1.18 1.83 1.18 3.09 0 4.41-2.69 5.38-5.25 5.67.41.36.78 1.06.78 2.14v3.17c0 .31.21.67.8.56A11.5 11.5 0 0023.5 12C23.5 5.65 18.35.5 12 .5z" />
            </svg>
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className={iconClass}
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-7 h-7">
              <path d="M19 3a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h14zM8.34 18V10H5.67v8h2.67zM7 8.8a1.55 1.55 0 100-3.1 1.55 1.55 0 000 3.1zM18.33 18v-4.4c0-2.36-1.26-3.46-2.94-3.46-1.35 0-1.96.75-2.29 1.27V10h-2.67c.04.75 0 8 0 8h2.67v-4.47c0-.24.02-.48.09-.65.19-.48.63-.97 1.37-.97.97 0 1.36.73 1.36 1.8V18h2.41z" />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
}
