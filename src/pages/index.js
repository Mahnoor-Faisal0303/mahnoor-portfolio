import { useEffect } from "react";
import { scrollToPathSection } from "@/lib/scroll";
import Hero from "./hero";
import Skills from "./skills";
import Experiance from "./experiance";
import Education from "./education";
import Projects from "./projects";
import Contact from "./contact";
import Articles from "./articles";

export default function Home() {
  useEffect(() => {
    scrollToPathSection();
  }, []);

  return (
    <>
      <Hero />
      <Skills />
      <Experiance />
      <Education />
      <Projects />
      <Articles />
      <Contact />
    </>
  );
}
