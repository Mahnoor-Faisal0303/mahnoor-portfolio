import Image from "next/image";
import { ArrowUpRight, BookOpen } from "lucide-react";
import { Section } from "@/components/section";
import Reveal from "@/components/reveal";
import { articles, profile } from "@/data/portfolio";

export default function Articles() {
  return (
    <Section
      id="articles"
      title="Articles"
      subtitle="Things I have learned and written about along the way."
      className="relative overflow-hidden"
    >
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute top-1/4 -right-32 h-96 w-96 rounded-full bg-purple-600/20 blur-[120px] animate-glow-pulse" />
        <div className="absolute bottom-0 -left-32 h-96 w-96 rounded-full bg-cyan-500/10 blur-[120px] animate-glow-pulse [animation-delay:3s]" />
      </div>

      <div className="relative z-10 grid gap-8 md:grid-cols-2 max-w-4xl mx-auto">
        {articles.map((a, i) => (
          <Reveal key={a.href} delay={i * 150} from={i % 2 === 0 ? "left" : "right"} className="h-full">
            <a
              href={a.href}
              target="_blank"
              rel="noopener noreferrer"
              className="exp-card group relative block h-full rounded-2xl p-px bg-gradient-to-br from-purple-500/60 via-edge/40 to-brand/60 shadow-xl transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_20px_50px_-15px_rgba(168,85,247,0.65)]"
            >
              <div className="flex h-full flex-col overflow-hidden rounded-[15px] bg-gradient-to-br from-card-a via-card-b to-card-c">
                <div className="relative h-48 w-full overflow-hidden bg-surface">
                  <Image
                    src={a.image}
                    alt={a.title}
                    fill
                    sizes="(min-width: 768px) 400px, 100vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card-c via-card-c/20 to-transparent" />
                  <span className="absolute top-3 left-3 inline-flex items-center gap-1.5 rounded-full border border-white/20 bg-black/40 px-2.5 py-1 text-[11px] font-medium text-white backdrop-blur">
                    <BookOpen size={12} className="text-brand-soft" /> Medium
                  </span>
                  <span className="sheen pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-transparent via-violet-3/20 dark:via-white/15 to-transparent -translate-x-[120%] group-hover:animate-[sheen_1s_ease-out]" />
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="text-xl font-semibold leading-snug transition-colors group-hover:text-brand-soft">
                    {a.title}
                  </h3>
                  <p className="text-sm text-ink-soft mt-3 flex-1 leading-relaxed">{a.summary}</p>
                  <span className="mt-5 inline-flex items-center gap-1.5 self-start text-brand font-medium">
                    <span className="relative">
                      Read on Medium
                      <span className="absolute -bottom-0.5 left-0 h-px w-0 bg-brand transition-all duration-300 group-hover:w-full" />
                    </span>
                    <ArrowUpRight
                      size={16}
                      className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                    />
                  </span>
                </div>
              </div>
            </a>
          </Reveal>
        ))}
      </div>

      <Reveal delay={300} className="relative z-10 mt-12 flex justify-center">
        <a
          href={profile.medium}
          target="_blank"
          rel="noopener noreferrer"
          className="group inline-flex items-center gap-2 rounded-full border border-purple-400/40 bg-purple-500/10 px-6 py-2.5 text-sm text-ink-soft transition-all hover:border-brand hover:bg-brand/10 hover:text-brand-soft hover:shadow-[0_0_24px_rgba(34,211,238,0.3)]"
        >
          More on Medium
          <ArrowUpRight
            size={16}
            className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          />
        </a>
      </Reveal>
    </Section>
  );
}
