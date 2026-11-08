import { ExternalLink, Globe, Monitor, Smartphone, Star, CheckCircle2 } from "lucide-react";
import { Section, Tag } from "@/components/section";
import Reveal from "@/components/reveal";
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
      <div className="flex items-center gap-3 mb-8">
        <span className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-purple-500 to-cyan-400 text-[#0b0314] shadow-[0_0_18px_rgba(168,85,247,0.6)]">
          <Star size={18} fill="currentColor" />
        </span>
        <h3 className="text-2xl font-bold">Highlights</h3>
        <span className="h-px flex-1 bg-gradient-to-r from-purple-500/60 to-transparent" />
      </div>
      <div className="grid gap-6 lg:grid-cols-3 mb-16">
        {featured.map((p, i) => (
          <Reveal key={p.name} delay={i * 140} className="h-full">
            <article className="exp-card group relative h-full rounded-2xl p-px bg-gradient-to-br from-purple-500/60 via-[#693B93]/40 to-cyan-400/60 shadow-xl transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_20px_50px_-15px_rgba(168,85,247,0.65)]">
              <div className="relative flex h-full flex-col overflow-hidden rounded-[15px] bg-gradient-to-br from-[#130428] via-[#2a0e52] to-[#190634] p-6">
                <span className="pointer-events-none absolute -top-1 right-3 select-none text-7xl font-black text-white/[0.04] transition-colors group-hover:text-purple-400/10">
                  0{i + 1}
                </span>
                <span className="sheen pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-[120%] group-hover:animate-[sheen_1s_ease-out]" />

                <div className="relative flex items-start justify-between gap-3">
                  <div>
                    <span
                      className={`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-0.5 text-[11px] font-medium ${
                        p.href
                          ? "border-cyan-400/40 bg-cyan-400/10 text-cyan-300"
                          : "border-purple-400/40 bg-purple-500/10 text-purple-300"
                      }`}
                    >
                      {p.href && <span className="h-1.5 w-1.5 rounded-full bg-cyan-400 animate-pulse" />}
                      {p.href ? "Live" : "Academic"}
                    </span>
                    <h4 className="mt-3 text-xl font-semibold">{p.name}</h4>
                    <p className="text-sm text-purple-300">{p.subtitle}</p>
                  </div>
                  {p.href && (
                    <a
                      href={p.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Visit ${p.name}`}
                      className="shrink-0 flex h-9 w-9 items-center justify-center rounded-full border border-purple-400/40 text-gray-300 transition-all hover:border-cyan-400 hover:bg-cyan-400/10 hover:text-cyan-400 hover:rotate-12"
                    >
                      <ExternalLink size={16} />
                    </a>
                  )}
                </div>

                <ul className="relative mt-5 space-y-2.5 text-sm text-gray-300 flex-1">
                  {p.points.map((pt) => (
                    <li key={pt} className="flex gap-2.5 leading-relaxed">
                      <CheckCircle2
                        size={16}
                        className="mt-0.5 shrink-0 text-purple-400 transition-colors group-hover:text-cyan-400"
                      />
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>

                <div className="relative flex flex-wrap gap-2 mt-6">
                  {p.tags.map((t) => (
                    <Tag key={t}>{t}</Tag>
                  ))}
                </div>
              </div>
            </article>
          </Reveal>
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
