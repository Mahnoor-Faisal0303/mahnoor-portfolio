import { GraduationCap } from "lucide-react";
import { Section, cardClass } from "@/components/section";
import { education } from "@/data/portfolio";

export default function Education() {
  return (
    <Section id="education" title="Education" subtitle="Where I built my engineering foundation.">
      <div
        className={`${cardClass} max-w-2xl mx-auto p-8 flex flex-col sm:flex-row items-center sm:items-start gap-6 text-center sm:text-left transition-transform duration-300 hover:-translate-y-1`}
      >
        <div className="h-16 w-16 shrink-0 rounded-full bg-[#1A0B2E] border border-[#693B93] flex items-center justify-center">
          <GraduationCap className="text-cyan-400" size={32} />
        </div>
        <div className="flex-1">
          <h3 className="text-xl font-semibold">{education.degree}</h3>
          <p className="text-purple-300 italic mt-1">{education.school}</p>
          <p className="text-sm text-cyan-400 mt-3">{education.period}</p>
        </div>
      </div>
    </Section>
  );
}
