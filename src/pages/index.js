import Image from "next/image";
import Hero from "./hero";
import Skills from "./skills";
import Experiance from "./experiance";
import Contact from "./contact";

export default function Home() {
  return (
    <>
    <Hero />
    <Skills />
    <Experiance />
    <Contact />
    </>
  );
}
