export const SECTION_IDS = [
  "home",
  "skills",
  "experience",
  "education",
  "projects",
  "articles",
  "contact",
];

function scrollToId(id, behavior = "smooth") {
  const el = document.getElementById(id);
  if (!el) return false;
  if (id === "home") window.scrollTo({ top: 0, behavior });
  else el.scrollIntoView({ behavior, block: "start" });
  return true;
}

// Smooth-scroll to a section and show a clean URL (/contact) instead of /#contact.
export function scrollToSection(e, href) {
  const id = href.replace(/^#/, "");
  if (!scrollToId(id)) return;
  e.preventDefault();
  const url = id === "home" ? "/" : `/${id}`;
  // keep Next.js' own history state so back/forward keep working
  window.history.replaceState(window.history.state, "", url);
}

// On first load of /contact etc., jump to the matching section.
export function scrollToPathSection() {
  const id = window.location.pathname.replace(/^\/|\/$/g, "");
  if (SECTION_IDS.includes(id) && id !== "home") {
    requestAnimationFrame(() => scrollToId(id, "auto"));
  }
}
