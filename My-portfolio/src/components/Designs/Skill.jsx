import AdobeIllustrator from "../../assets/images/Adobe_Illustrator.png";
import CorelDraw from "../../assets/images/coreldraw.png";
import Photoshop from "../../assets/images/Photoshop.png";
import Canva from "../../assets/images/canva.png";
import Figma from "../../assets/images/figma.png";
import AdobeInDesign from "../../assets/images/adobe_indesign.png";


const skills = [
  { name: "Photoshop", img: Photoshop },
  { name: "Adobe Illustrator", img: AdobeIllustrator },
  { name: "CorelDraw", img: CorelDraw },
  { name: "Canva", img: Canva },
  { name: "Figma", img: Figma },
  { name: "Adobe InDesign", img: AdobeInDesign },
];


export default function Skill() {
  return (
    <section id="skill" className="pt-5 py-10 overflow-hidden">
      <div className="max-w-325 mx-auto px-4">

        <div className="flex items-center gap-2 mb-10">
          <i className="bx bx-code-alt text-(--color-primary) text-[20px] sm:text-[30px] animate-rotate-twice"></i>
          <h2 className="text-[20px] text-(--color-primary) tracking-tight font-bold">
            STACK
          </h2>
        </div>

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