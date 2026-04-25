import Hero from "../../src/components/Home/Hero";
import About from "../../src/components/Home/About";
import Skill from "../../src/components/Home/Skill";
import Projects from "../../src/components/Home/Projects";

export default function Home() {
  return (
    <div>
      <Hero />
      <About />
      <Skill />
      <Projects />
    </div>
  )
}