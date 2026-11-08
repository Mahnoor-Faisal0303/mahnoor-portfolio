import { Section, Tag, cardClass } from "@/components/section";
import { experience } from "@/data/portfolio";

export default function Experiance() {
  return (
    <Section
      id="experience"
      title="Work Experience"
      subtitle="Three years of growing from intern to leading frontend on a multi-product platform."
    >
      <ol className="relative border-l-2 border-[#693B93] mx-3 md:mx-auto max-w-4xl space-y-10">
        {experience.map((job) => (
          <li key={job.title + job.period} className="px-6 md:px-10 relative">
            <span
              className={`absolute -left-[9px] top-2 h-4 w-4 rounded-full border-2 border-[#0b0314] ${
                job.current ? "bg-cyan-400 animate-pulse" : "bg-purple-500"
              }`}
            />
            <div className={`${cardClass} p-6`}>
              <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                <h3 className="text-xl font-semibold">{job.title}</h3>
                <span className="text-sm text-cyan-400">{job.period}</span>
              </div>
              <p className="text-purple-300 italic mb-4">{job.company}</p>
              <ul className="list-disc pl-5 space-y-2 text-sm text-gray-300">
                {job.points.map((p) => (
                  <li key={p}>{p}</li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-2 mt-5">
                {job.tags.map((t) => (
                  <Tag key={t}>{t}</Tag>
                ))}
              </div>
            </div>
          </li>
        ))}
      </ol>

    </Section>
  );
}
