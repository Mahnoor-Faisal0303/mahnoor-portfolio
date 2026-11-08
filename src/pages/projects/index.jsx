import { ExternalLink, Globe, Monitor, Smartphone } from "lucide-react";
import { Section, Tag, cardClass } from "@/components/section";
import { featured, projects } from "@/data/portfolio";

function PlatformBadge({ name }) {
  const Icon = name === "Web" ? Globe : name === "Desktop" ? Monitor : Smartphone;
  return (
    <span className="inline-flex items-center gap-1 text-xs px-2 py-1 rounded-md bg-[#1A0B2E] border border-[#693B93] text-cyan-300">
      <Icon size={12} /> {name}
    </span>
  );
}

export default function Projects() {
  return (
    <Section
      id="projects"
      title="Projects"
      subtitle="Products I have helped design, build and ship across web, iOS and Android."
    >
      <h3 className="text-xl font-semibold mb-6">Highlights</h3>
      <div className="grid gap-6 lg:grid-cols-3 mb-16">
        {featured.map((p) => (
          <article
            key={p.name}
            className={`${cardClass} p-6 flex flex-col transition-transform duration-300 hover:-translate-y-1`}
          >
            <div className="flex items-start justify-between gap-3">
              <div>
                <h4 className="text-xl font-semibold">{p.name}</h4>
                <p className="text-sm text-purple-300">{p.subtitle}</p>
              </div>
              {p.href && (
                <a
                  href={p.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Visit ${p.name}`}
                  className="text-gray-300 hover:text-cyan-400"
                >
                  <ExternalLink size={20} />
                </a>
              )}
            </div>
            <ul className="list-disc pl-5 mt-4 space-y-2 text-sm text-gray-300 flex-1">
              {p.points.map((pt) => (
                <li key={pt}>{pt}</li>
              ))}
            </ul>
            <div className="flex flex-wrap gap-2 mt-5">
              {p.tags.map((t) => (
                <Tag key={t}>{t}</Tag>
              ))}
            </div>
          </article>
        ))}
      </div>

      <h3 className="text-xl font-semibold mb-6">More of my work</h3>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((p) => (
          <div
            key={p.name}
            className="rounded-xl border border-[#693B93] bg-[#1A0B2E] p-5 transition-colors hover:border-cyan-400"
          >
            <h4 className="font-semibold">{p.name}</h4>
            <p className="text-sm text-gray-400 mt-1 mb-4">{p.description}</p>
            <div className="flex flex-wrap gap-2">
              {p.platforms.map((pl) => (
                <PlatformBadge key={pl} name={pl} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
