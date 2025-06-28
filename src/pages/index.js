import Image from "next/image";
import Hero from "./hero";
import Skills from "./skills";
import Experiance from "./experiance";
import Contact from "./contact";
import Articles from "./articles";

export default function Home() {
  return (
    <>
    <Hero />
    <Skills />
    <Experiance />
    <Articles />
    <Contact />
    </>
  );
}
