import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { Section, cardClass } from "@/components/section";
import { articles, profile } from "@/data/portfolio";

export default function Articles() {
  return (
    <Section
      id="articles"
      title="Articles"
      subtitle="Things I have learned and written about along the way."
    >
      <div className="grid gap-8 md:grid-cols-2 max-w-4xl mx-auto">
        {articles.map((a) => (
          <a
            key={a.href}
            href={a.href}
            target="_blank"
            rel="noopener noreferrer"
            className={`${cardClass} group overflow-hidden flex flex-col transition-transform duration-300 hover:-translate-y-1 hover:border-cyan-400`}
          >
            <div className="relative h-48 w-full bg-[#1A0B2E]">
              <Image
                src={a.image}
                alt={a.title}
                fill
                sizes="(min-width: 768px) 400px, 100vw"
                className="object-cover"
              />
            </div>
            <div className="p-6 flex flex-col flex-1">
              <h3 className="text-xl font-semibold">{a.title}</h3>
              <p className="text-sm text-gray-300 mt-3 flex-1">{a.summary}</p>
              <span className="mt-5 inline-flex items-center gap-1 text-cyan-400 group-hover:underline">
                Read on Medium <ArrowUpRight size={16} />
              </span>
            </div>
          </a>
        ))}
      </div>
      <p className="text-center mt-10 text-sm text-gray-400">
        More on{" "}
        <a
          href={profile.medium}
          target="_blank"
          rel="noopener noreferrer"
          className="text-cyan-400 hover:underline"
        >
          Medium
        </a>
      </p>
    </Section>
  );
}
