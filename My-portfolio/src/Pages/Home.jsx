import Hero from "../../src/components/Home/Hero";
import About from "../../src/components/Home/About";
import Skill from "../../src/components/Home/Skill";
import Projects from "../../src/components/Home/Projects";
import Contact from "../../src/components/Home/Contact";

export default function Home() {
  return (
    <div>
      <Hero />
      <About />
      <Skill />
      <Projects />
      <Contact />
    </div>
  )
}