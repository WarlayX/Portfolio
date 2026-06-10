import DesignsHero from "../components/Designs/Hero";
import DesignsAbout from "../components/Designs/About";
import DesignsSkill from "../components/Designs/Skill";
import DesignsProjects from "../components/Designs/Projects";
import Contact from "../components/Home/Contact";

export default function Designs() {
  return (
    <div>
      <DesignsHero />
      <DesignsAbout />
      <DesignsSkill />
      <DesignsProjects />
      <Contact />
    </div>
  )
}