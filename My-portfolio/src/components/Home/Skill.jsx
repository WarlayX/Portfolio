import AdobeIllustrator from "../../assets/images/Adobe_Illustrator.png";
import CorelDraw from "../../assets/images/coreldraw.png";
import Css from "../../assets/images/css.png";
import Git from "../../assets/images/git-logo.png";
import Html from "../../assets/images/html.png";
import JavaScript from "../../assets/images/Javascript.jpg";
import Photoshop from "../../assets/images/Photoshop.png";
import ReactImg from "../../assets/images/React.png";
import Tailwind from "../../assets/images/Tailwind.png";

const skills = [
  { name: "HTML", img: Html },
  { name: "CSS", img: Css },
  { name: "JavaScript", img: JavaScript },
  { name: "ReactJS", img: ReactImg },
  { name: "Tailwind", img: Tailwind },
  { name: "Git", img: Git },
  { name: "Photoshop", img: Photoshop },
  { name: "Adobe Illustrator", img: AdobeIllustrator },
  { name: "CorelDraw", img: CorelDraw },
];

export default function Skill() {
  return (
    <section className="pt-5 py-10 overflow-hidden">
      <div className="max-w-325 mx-auto px-4">

        <h2 className="text-[20px] text-(--color-primary) mb-10 tracking-tight sm:text-[30px] font-bold">
          STACK
        </h2>

        {/* Track wrapper */}
        <div className="relative overflow-hidden">
          <div className="flex gap-8 md:gap-12 animate-scroll w-max">

            {/* twice for loop */}
            {[...skills, ...skills].map((skill, index) => (
              <div
                key={index}
                className="flex flex-col items-center gap-3 min-w-20 md:min-w-25"
              >
                <div className="w-14 h-14 md:w-18 md:h-18 rounded-xl bg-(--color-sec-bg) flex items-center justify-center p-3 ">
                  <img
                    src={skill.img}
                    alt={skill.name}
                    className="w-full h-full object-contain"
                  />
                </div>
                <span className="text-[12px] md:text-[13px] font-medium text-center">
                  {skill.name}
                </span>
              </div>
            ))}

          </div>
        </div>

      </div>
    </section>
  );
}