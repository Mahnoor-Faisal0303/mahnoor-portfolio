import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Reveal from "@/components/reveal";
import { ArrowDown, Download, Github } from "lucide-react";
import { profile, stats, headlineStack } from "@/data/portfolio";
import { scrollToSection } from "@/lib/scroll";

function CountUp({ value, duration = 1800 }) {
  const match = String(value).match(/^(\d+)(.*)$/);
  const target = match ? parseInt(match[1], 10) : 0;
  const suffix = match ? match[2] : "";
  const [count, setCount] = useState(0);
  const ref = useRef(null);

  useEffect(() => {
    if (!match) return;
    const el = ref.current;
    let raf;
    const run = () => {
      const start = performance.now();
      const tick = (now) => {
        const p = Math.min((now - start) / duration, 1);
        const eased = 1 - Math.pow(1 - p, 3); // ease-out
        setCount(Math.round(target * eased));
        if (p < 1) raf = requestAnimationFrame(tick);
      };
      raf = requestAnimationFrame(tick);
    };
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          run();
          observer.disconnect();
        }
      },
      { threshold: 0.4 }
    );
    observer.observe(el);
    return () => {
      observer.disconnect();
      cancelAnimationFrame(raf);
    };
  }, [target, duration]);

  if (!match) return <span>{value}</span>;
  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}

function Typewriter({ words, typeSpeed = 90, deleteSpeed = 45, pause = 1400 }) {
  const [text, setText] = useState(words[0]);
  const [index, setIndex] = useState(0);
  const [deleting, setDeleting] = useState(true);

  useEffect(() => {
    const word = words[index];
    let delay = deleting ? deleteSpeed : typeSpeed;
    if (!deleting && text === word) delay = pause;
    const t = setTimeout(() => {
      if (!deleting && text === word) {
        setDeleting(true);
      } else if (deleting && text === "") {
        setDeleting(false);
        setIndex((i) => (i + 1) % words.length);
      } else {
        setText(deleting ? text.slice(0, -1) : word.slice(0, text.length + 1));
      }
    }, delay);
    return () => clearTimeout(t);
  }, [text, deleting, index, words, typeSpeed, deleteSpeed, pause]);

  return (
    <span className="text-cyan-400">
      {text}
    </span>
  );
}

function splitRows(items, count) {
  const size = Math.ceil(items.length / count);
  return Array.from({ length: count }, (_, i) => items.slice(i * size, (i + 1) * size));
}

function TechRows({ rows }) {
  return (
    <div className="space-y-3 [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)] [-webkit-mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
      {rows.map((row, r) => (
        <div key={r} className="marquee overflow-hidden">
          <div className={`marquee-track ${r % 2 === 1 ? "reverse" : ""}`}>
            {[...row, ...row].map((t, i) => (
              <span
                key={`${t}-${i}`}
                className="whitespace-nowrap text-sm px-4 py-1.5 rounded-full border border-[#693B93] bg-[#1A0B2E]/60 text-gray-300 transition-colors hover:border-cyan-400 hover:text-cyan-300 hover:bg-cyan-400/10"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden scroll-mt-16 bg-[#0b0314] text-white px-5 sm:px-8 pt-16 pb-20 md:pt-24"
    >
      {/* animated background glows + dot grid */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute -top-32 -left-24 w-[28rem] h-[28rem] rounded-full bg-purple-600/30 blur-[120px] animate-glow-pulse" />
        <div className="absolute top-1/3 -right-24 w-[26rem] h-[26rem] rounded-full bg-cyan-500/20 blur-[120px] animate-glow-pulse [animation-delay:3s]" />
        <div
          className="absolute inset-0 opacity-[0.12]"
          style={{
            backgroundImage: "radial-gradient(#a78bfa 1px, transparent 1px)",
            backgroundSize: "28px 28px",
            maskImage: "radial-gradient(ellipse at center, black 30%, transparent 75%)",
            WebkitMaskImage: "radial-gradient(ellipse at center, black 30%, transparent 75%)",
          }}
        />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto flex flex-col-reverse md:flex-row items-center gap-12 md:gap-16">
        <div className="flex-1 text-center md:text-left">
          <p
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-purple-500/40 bg-purple-500/10 text-purple-200 text-sm font-medium animate-fade-up"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75 animate-ping" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-cyan-400" />
            </span>
            Hello! I am
          </p>
          <h1
            className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-bold animate-fade-up"
            style={{ animationDelay: "0.15s" }}
          >
            <span className="bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent animate-gradient-x">
              {profile.name}
            </span>
          </h1>
          <h2
            className="mt-3 text-xl sm:text-2xl font-semibold text-white animate-fade-up"
            style={{ animationDelay: "0.3s" }}
          >
            {profile.role} ·{" "}
            <Typewriter words={["React", "Next.js", "React Native", "Django", "AI-assisted workflows"]} />
          </h2>
          <p
            className="mt-5 text-gray-400 leading-relaxed max-w-2xl mx-auto md:mx-0 animate-fade-up"
            style={{ animationDelay: "0.45s" }}
          >
            {profile.summary}
          </p>
          <p
            className="mt-3 text-sm text-gray-300 animate-fade-up"
            style={{ animationDelay: "0.6s" }}
          >
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

          <div
            className="mt-8 flex flex-wrap gap-4 justify-center md:justify-start animate-fade-up"
            style={{ animationDelay: "0.75s" }}
          >
            <a
              href="#contact"
              onClick={(e) => scrollToSection(e, "#contact")}
              className="px-6 py-3 rounded-md bg-gradient-to-r from-blue-700 to-purple-700 hover:from-blue-600 hover:to-purple-600 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-purple-700/40 transition-all font-medium"
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
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-md border border-[#693B93] hover:border-cyan-400 hover:text-cyan-400 transition-colors font-medium"
            >
              <Github size={18} /> GitHub
            </a>
          </div>
        </div>

        <div
          className="relative w-72 h-72 sm:w-80 sm:h-80 lg:w-96 lg:h-96 shrink-0 animate-fade-up"
          style={{ animationDelay: "0.3s" }}
        >
          <div className="absolute inset-0 animate-float">
            {/* soft glow behind photo */}
            <div className="absolute inset-[8%] rounded-full bg-purple-600/40 blur-3xl animate-glow-pulse" />

            {/* slowly rotating dashed orbit */}
            <div className="absolute inset-0 rounded-full border border-dashed border-purple-400/40 animate-spin-reverse">
              <span className="absolute -top-1.5 left-1/2 h-3 w-3 -translate-x-1/2 rounded-full bg-cyan-400 shadow-[0_0_12px_#22d3ee]" />
              <span className="absolute bottom-6 left-3 h-2 w-2 rounded-full bg-purple-400 shadow-[0_0_10px_#a855f7]" />
            </div>

            {/* rotating gradient ring + photo */}
            <div className="absolute inset-[8%] rounded-full p-[5px] overflow-hidden">
              <div className="absolute -inset-[50%] animate-spin-slow bg-[conic-gradient(from_0deg,#3b82f6,#a855f7,#22d3ee,#a855f7,#3b82f6)]" />
              <div className="relative w-full h-full rounded-full overflow-hidden bg-[#0b0314]">
                <Image
                  src="/mahnoor-image.jpeg"
                  alt="Portrait of Mahnoor Faisal"
                  fill
                  sizes="340px"
                  priority
                  className="object-cover scale-125"
                />
              </div>
            </div>
          </div>

          {/* floating tech chips */}
          <span className="absolute top-4 -left-2 sm:-left-6 px-3 py-1.5 rounded-full text-xs font-semibold bg-[#1A0B2E]/90 border border-cyan-400/50 text-cyan-300 backdrop-blur animate-float-delayed">
            React
          </span>
          <span className="absolute bottom-10 -right-2 sm:-right-6 px-3 py-1.5 rounded-full text-xs font-semibold bg-[#1A0B2E]/90 border border-purple-400/50 text-purple-300 backdrop-blur animate-float">
            Next.js
          </span>
          <span className="absolute top-12 -right-2 sm:-right-8 px-3 py-1.5 rounded-full text-xs font-semibold bg-[#1A0B2E]/90 border border-emerald-400/50 text-emerald-300 backdrop-blur animate-float">
            Django
          </span>
          <span className="absolute bottom-2 left-4 px-3 py-1.5 rounded-full text-xs font-semibold bg-[#1A0B2E]/90 border border-blue-400/50 text-blue-300 backdrop-blur animate-float-delayed">
            React Native
          </span>
        </div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto mt-16 grid grid-cols-2 md:grid-cols-4 gap-4">
        {stats.map((s, i) => (
          <Reveal key={s.label} delay={i * 120} className="h-full">
            <div className="stat-card group relative h-full rounded-xl p-px bg-gradient-to-br from-purple-500/60 via-[#693B93]/40 to-cyan-400/60 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_10px_40px_-10px_rgba(168,85,247,0.6)]">
              <div className="relative h-full overflow-hidden rounded-[11px] bg-[#1A0B2E] p-5 text-center">
                <span className="sheen pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-[120%]" />
                <div className="absolute -top-10 left-1/2 h-20 w-32 -translate-x-1/2 rounded-full bg-purple-500/20 blur-2xl transition-opacity group-hover:opacity-100 opacity-60" />
                <div className="relative text-3xl sm:text-4xl font-bold bg-gradient-to-r from-cyan-300 to-purple-400 bg-clip-text text-transparent">
                  <CountUp value={s.value} />
                </div>
                <div className="relative text-xs sm:text-sm text-gray-400 mt-1.5">{s.label}</div>
              </div>
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal delay={200} className="relative z-10 max-w-6xl mx-auto mt-14">
        <p className="text-center text-xs uppercase tracking-[0.25em] text-purple-300/70 mb-5">
          Tech I work with
        </p>
        <div className="md:hidden">
          <TechRows rows={splitRows(headlineStack, 3)} />
        </div>
        <div className="hidden md:block">
          <TechRows rows={splitRows(headlineStack, 2)} />
        </div>
      </Reveal>

      <a
        href="#skills"
        onClick={(e) => scrollToSection(e, "#skills")}
        aria-label="Scroll to skills"
        className="relative z-10 mt-12 mx-auto flex h-11 w-11 items-center justify-center rounded-full border border-purple-400/40 text-purple-300 hover:text-cyan-400 hover:border-cyan-400 hover:shadow-[0_0_20px_rgba(34,211,238,0.4)] transition-all animate-bounce"
      >
        <ArrowDown size={20} />
      </a>
    </section>
  );
}
