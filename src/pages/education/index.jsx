import { GraduationCap, CalendarDays, MapPin, Award } from "lucide-react";
import { Section } from "@/components/section";
import Reveal from "@/components/reveal";
import { education } from "@/data/portfolio";

export default function Education() {
  return (
    <Section
      id="education"
      title="Education"
      subtitle="Where I built my engineering foundation."
      className="relative overflow-hidden"
    >
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 h-96 w-[34rem] rounded-full bg-purple-600/20 blur-[130px] animate-glow-pulse" />
        <div className="absolute -bottom-20 -right-24 h-80 w-80 rounded-full bg-cyan-500/10 blur-[120px] animate-glow-pulse [animation-delay:3s]" />
      </div>

      <Reveal className="relative z-10 max-w-3xl mx-auto">
        <div className="exp-card group relative rounded-2xl p-px bg-gradient-to-br from-purple-500/60 via-[#693B93]/40 to-cyan-400/60 shadow-xl transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_18px_50px_-15px_rgba(168,85,247,0.6)]">
          <div className="relative overflow-hidden rounded-[15px] bg-gradient-to-br from-[#130428] via-[#2a0e52] to-[#190634] p-8 sm:p-10">
            {/* decorative glow + shine */}
            <div className="absolute -top-16 -right-16 h-48 w-48 rounded-full bg-purple-500/25 blur-3xl" />
            <span className="sheen pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-[120%] group-hover:animate-[sheen_1s_ease-out]" />

            <div className="relative flex flex-col sm:flex-row items-center sm:items-start gap-7 text-center sm:text-left">
              {/* floating cap with rotating ring */}
              <div className="relative h-24 w-24 shrink-0 animate-float">
                <div className="absolute inset-0 rounded-full overflow-hidden p-[3px]">
                  <div className="absolute -inset-[50%] animate-spin-slow bg-[conic-gradient(from_0deg,#3b82f6,#a855f7,#22d3ee,#a855f7,#3b82f6)]" />
                  <div className="relative flex h-full w-full items-center justify-center rounded-full bg-[#1A0B2E]">
                    <GraduationCap className="text-cyan-400" size={40} />
                  </div>
                </div>
                <div className="absolute -inset-2 rounded-full border border-dashed border-purple-400/40 animate-spin-reverse" />
              </div>

              <div className="flex-1">
                <span className="inline-flex items-center gap-1.5 rounded-full border border-cyan-400/40 bg-cyan-400/10 px-3 py-0.5 text-[11px] font-medium text-cyan-300">
                  <Award size={12} /> Graduated
                </span>
                <h3 className="mt-3 text-2xl sm:text-3xl font-bold bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent">
                  {education.degree}
                </h3>
                <p className="text-purple-300 italic mt-2 flex items-center justify-center sm:justify-start gap-1.5">
                  <MapPin size={15} className="shrink-0" /> {education.school}
                </p>

                <div className="mt-5 flex flex-wrap items-center justify-center sm:justify-start gap-3">
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-purple-400/30 bg-purple-500/10 px-3 py-1 text-sm text-cyan-300">
                    <CalendarDays size={14} /> {education.period}
                  </span>
                  <span className="rounded-full border border-[#693B93] bg-[#1A0B2E] px-3 py-1 text-sm text-gray-300">
                    4-year degree
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Reveal>
    </Section>
  );
}
