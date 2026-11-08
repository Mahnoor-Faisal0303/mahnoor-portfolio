import { useEffect, useRef, useState } from "react";
import { Briefcase, CheckCircle2, CalendarDays } from "lucide-react";
import { Section, Tag } from "@/components/section";
import Reveal from "@/components/reveal";
import { experience } from "@/data/portfolio";

export default function Experiance() {
  const listRef = useRef(null);
  const [progress, setProgress] = useState(0);

  // timeline line fills as the user scrolls through the list
  useEffect(() => {
    const update = () => {
      const el = listRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const viewport = window.innerHeight;
      const p = (viewport * 0.6 - rect.top) / rect.height;
      setProgress(Math.min(Math.max(p, 0), 1));
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  return (
    <Section
      id="experience"
      title="Work Experience"
      subtitle="Three years of growing from intern to leading frontend on a multi-product platform."
      className="relative overflow-hidden"
    >
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute top-1/4 -left-32 h-96 w-96 rounded-full bg-purple-600/20 blur-[120px] animate-glow-pulse" />
        <div className="absolute bottom-10 -right-32 h-96 w-96 rounded-full bg-cyan-500/10 blur-[120px] animate-glow-pulse [animation-delay:3s]" />
      </div>

      <ol ref={listRef} className="relative max-w-4xl mx-auto space-y-12 pl-8 md:pl-12">
        {/* base line + animated progress line */}
        <span aria-hidden className="absolute left-[11px] md:left-[15px] top-2 bottom-2 w-0.5 bg-edge/40" />
        <span
          aria-hidden
          className="absolute left-[11px] md:left-[15px] top-2 bottom-2 w-0.5 origin-top bg-gradient-to-b from-brand via-purple-500 to-purple-700 shadow-[0_0_12px_rgba(168,85,247,0.8)]"
          style={{ transform: `scaleY(${progress})` }}
        />

        {experience.map((job, i) => (
          <li key={job.title + job.period} className="relative">
            {/* timeline node */}
            <span className="absolute -left-8 md:-left-12 top-6 flex h-6 w-6 md:h-8 md:w-8 items-center justify-center">
              {job.current && (
                <span className="absolute inset-0 rounded-full bg-brand animate-ring-pulse" />
              )}
              <span
                className={`relative flex h-full w-full items-center justify-center rounded-full border-2 border-page ${
                  job.current
                    ? "bg-brand text-page shadow-[0_0_18px_#22d3ee]"
                    : "bg-purple-500 text-white shadow-[0_0_14px_#a855f7]"
                }`}
              >
                <Briefcase size={13} />
              </span>
            </span>

            <Reveal from="right" delay={80}>
              <div className="exp-card group relative rounded-2xl border border-edge/70 bg-gradient-to-br from-card-a via-card-b/90 to-card-c p-6 md:p-7 shadow-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_50px_-15px_rgba(168,85,247,0.55)]">
                <div className="flex flex-wrap items-start justify-between gap-x-4 gap-y-2">
                  <div>
                    <div className="flex flex-wrap items-center gap-2">
                      <h3 className="text-xl font-semibold">{job.title}</h3>
                      {job.current && (
                        <span className="inline-flex items-center gap-1.5 rounded-full border border-brand/40 bg-brand/10 px-2.5 py-0.5 text-[11px] font-medium text-brand-soft">
                          <span className="h-1.5 w-1.5 rounded-full bg-brand animate-pulse" />
                          Current
                        </span>
                      )}
                    </div>
                    <p className="text-violet-1 italic mt-1">{job.company}</p>
                  </div>
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-purple-400/30 bg-purple-500/10 px-3 py-1 text-xs text-brand-soft">
                    <CalendarDays size={13} /> {job.period}
                  </span>
                </div>

                <ul className="mt-5 space-y-2.5 text-sm text-ink-soft">
                  {job.points.map((p) => (
                    <li key={p} className="flex gap-2.5 leading-relaxed">
                      <CheckCircle2
                        size={16}
                        className="mt-0.5 shrink-0 text-violet-3 transition-colors group-hover:text-brand"
                      />
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2 mt-6">
                  {job.tags.map((t) => (
                    <span
                      key={t}
                      className="transition-transform duration-200 hover:-translate-y-0.5"
                    >
                      <Tag>{t}</Tag>
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          </li>
        ))}
      </ol>
    </Section>
  );
}
