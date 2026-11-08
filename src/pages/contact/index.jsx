import { Mail, Phone, MapPin, ArrowUpRight } from "lucide-react";
import { Section } from "@/components/section";
import { ContactCard } from "@/components/section/contact-card";
import Reveal from "@/components/reveal";
import { profile } from "@/data/portfolio";

const GithubIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-5 h-5">
    <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.1.79-.25.79-.56v-2c-3.2.7-3.88-1.54-3.88-1.54-.52-1.33-1.28-1.68-1.28-1.68-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.03 1.76 2.69 1.25 3.35.96.1-.74.4-1.25.73-1.54-2.55-.29-5.24-1.28-5.24-5.68 0-1.26.45-2.28 1.18-3.09-.12-.29-.51-1.46.11-3.05 0 0 .97-.31 3.17 1.18a11 11 0 015.78 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.81 1.18 1.83 1.18 3.09 0 4.41-2.69 5.38-5.25 5.67.41.36.78 1.06.78 2.14v3.17c0 .31.21.67.8.56A11.5 11.5 0 0023.5 12C23.5 5.65 18.35.5 12 .5z" />
  </svg>
);

const LinkedinIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-5 h-5">
    <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.5 8h4V24h-4V8zm7.5 0h3.8v2.2h.05c.53-.98 1.82-2.2 3.75-2.2 4 0 4.74 2.63 4.74 6.05V24h-4v-8.45c0-2.02-.04-4.62-2.82-4.62s-3.25 2.2-3.25 4.47V24h-4V8z" />
  </svg>
);

const infoItems = [
  { icon: Mail, label: "Email", value: profile.email, href: `mailto:${profile.email}` },
  { icon: Phone, label: "Phone", value: profile.phoneDisplay, href: `tel:${profile.phone}` },
  { icon: MapPin, label: "Location", value: profile.location },
];

const socials = [
  { icon: GithubIcon, label: "GitHub", href: profile.github },
  { icon: LinkedinIcon, label: "LinkedIn", href: profile.linkedin },
];

function InfoRow({ icon: Icon, label, value, href }) {
  const content = (
    <>
      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-purple-400/40 bg-surface text-brand transition-all duration-300 group-hover:border-brand group-hover:shadow-[0_0_18px_rgba(34,211,238,0.5)]">
        <Icon size={18} />
      </span>
      <span className="min-w-0">
        <span className="block text-xs uppercase tracking-wider text-violet-1/70">{label}</span>
        <span className="block truncate text-ink transition-colors group-hover:text-brand-soft">
          {value}
        </span>
      </span>
    </>
  );
  const cls =
    "group flex items-center gap-4 rounded-xl border border-edge/60 bg-surface/60 p-4 transition-all duration-300 hover:-translate-y-0.5 hover:border-purple-400";
  return href ? (
    <a href={href} className={cls}>
      {content}
    </a>
  ) : (
    <div className={cls}>{content}</div>
  );
}

export default function Contact() {
  return (
    <Section
      id="contact"
      title="Contact Me"
      subtitle="Have a project, role or idea in mind? Send me a message and I will get back to you."
      className="relative overflow-hidden"
    >
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute top-1/4 -left-32 h-96 w-96 rounded-full bg-purple-600/20 blur-[120px] animate-glow-pulse" />
        <div className="absolute bottom-0 -right-32 h-96 w-96 rounded-full bg-cyan-500/10 blur-[120px] animate-glow-pulse [animation-delay:3s]" />
      </div>

      <div className="relative z-10 grid items-stretch gap-8 lg:grid-cols-5 max-w-5xl mx-auto">
        <Reveal from="left" className="lg:col-span-2 flex flex-col">
          <h3 className="text-2xl font-bold leading-tight">
            Let&apos;s build something{" "}
            <span className="bg-gradient-to-r from-brand to-purple-500 bg-clip-text text-transparent animate-gradient-x">
              great together
            </span>
          </h3>
          <p className="mt-3 text-ink-muted text-sm leading-relaxed">
            Open to full-time roles, freelance work and interesting collaborations. Reach out
            through the form or any of the channels below.
          </p>

          <div className="mt-6 space-y-3">
            {infoItems.map((item) => (
              <InfoRow key={item.label} {...item} />
            ))}
          </div>

          <div className="mt-6 flex flex-wrap gap-3">
            {socials.map(({ icon: Icon, label, href }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 rounded-full border border-purple-400/40 bg-purple-500/10 px-4 py-2 text-sm text-ink-soft transition-all hover:border-brand hover:bg-brand/10 hover:text-brand-soft hover:shadow-[0_0_20px_rgba(34,211,238,0.3)]"
              >
                <Icon /> {label}
                <ArrowUpRight
                  size={14}
                  className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </a>
            ))}
          </div>
        </Reveal>

        <Reveal from="right" delay={150} className="lg:col-span-3 flex flex-col">
          <ContactCard />
        </Reveal>
      </div>
    </Section>
  );
}
