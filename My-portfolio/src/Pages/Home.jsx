import Hero from "../components/Home/Hero";
import About from "../components/Home/About";
import Skill from "../components/Home/Skill";
import Projects from "../components/Home/Projects";
import Contact from "../components/Home/Contact";

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