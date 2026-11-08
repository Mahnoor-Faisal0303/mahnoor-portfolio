import { useState, useEffect } from "react";
import { Menu, X, Download } from "lucide-react";
import { profile } from "@/data/portfolio";

const links = [
  { href: "#home", label: "Home" },
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experience" },
  { href: "#education", label: "Education" },
  { href: "#projects", label: "Projects" },
  { href: "#articles", label: "Articles" },
  { href: "#contact", label: "Contact" },
];

const linkClass = "hover:text-cyan-400 transition-colors";
const activeClass = "text-cyan-400";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [active, setActive] = useState("#home");
  const close = () => setIsOpen(false);

  useEffect(() => {
    const update = () => {
      const offset = 100; // navbar height + breathing room
      let current = links[0].href;
      for (const l of links) {
        const el = document.getElementById(l.href.slice(1));
        if (el && el.getBoundingClientRect().top <= offset) current = l.href;
      }
      // at the very bottom, highlight the last section
      if (window.innerHeight + window.scrollY >= document.body.scrollHeight - 2) {
        current = links[links.length - 1].href;
      }
      setActive(current);
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
    <>
    <nav className="bg-[#1A0B2E]/95 backdrop-blur text-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <a href="#home" className="text-xl sm:text-2xl font-bold">
            Mahnoor<span className="text-cyan-400">.</span>
          </a>

          <div className="hidden md:flex items-center space-x-6 text-sm font-medium">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className={`${linkClass} ${active === l.href ? activeClass : ""}`}
              >
                {l.label}
              </a>
            ))}
            <a
              href={profile.resume}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md border border-[#693B93] hover:border-cyan-400 hover:text-cyan-400 transition-colors"
            >
              <Download size={14} /> Resume
            </a>
          </div>

          <button
            onClick={() => setIsOpen(true)}
            aria-label="Open menu"
            className="md:hidden hover:cursor-pointer"
          >
            <Menu size={24} />
          </button>
        </div>
      </div>
    </nav>

      <div
        className={`fixed inset-0 z-[60] flex transition-all duration-300 md:hidden ${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="fixed inset-0 bg-black/80" onClick={close} />
        <div
          className={`relative h-full bg-[#0b0314] border-r border-purple-500/20 w-3/4 max-w-xs p-6 shadow-2xl transform transition-transform duration-300 ${
            isOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <button
            onClick={close}
            aria-label="Close menu"
            className="absolute top-4 right-4 hover:cursor-pointer"
          >
            <X size={24} />
          </button>
          <div className="text-2xl font-bold">
            Mahnoor<span className="text-cyan-400">.</span>
          </div>
          <div className="mt-10 space-y-4 text-base font-bold">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={close}
                className={`block ${linkClass} ${active === l.href ? activeClass : ""}`}
              >
                {l.label}
              </a>
            ))}
            <a
              href={profile.resume}
              target="_blank"
              rel="noopener noreferrer"
              className={`block ${linkClass}`}
            >
              Resume
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
