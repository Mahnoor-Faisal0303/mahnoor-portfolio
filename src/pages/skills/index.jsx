import { Section, cardClass } from "@/components/section";
import { skills } from "@/data/portfolio";

export default function Skills() {
  return (
    <Section
      id="skills"
      title="Skills"
      subtitle="The tools and technologies I use to design, build and ship products."
    >
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {Object.entries(skills).map(([group, items]) => (
          <div
            key={group}
            className={`${cardClass} p-6 transition-transform duration-300 hover:-translate-y-1`}
          >
            <h3 className="text-lg font-semibold text-brand mb-4">{group}</h3>
            <div className="flex flex-wrap gap-2">
              {items.map((item) => (
                <span
                  key={item}
                  className="text-sm px-3 py-1 rounded-full bg-surface border border-edge text-ink-soft"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
