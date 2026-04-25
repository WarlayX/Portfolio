import { useState } from "react";
import Primal from "../../assets/images/Primal-Training.png";
import VatCalculator from "../../assets/images/vat-calculator.png";
import Foodify from "../../assets/images/foodify-network.png";
import Stride from "../../assets/images/stride-shoe-collection.png";
import Neo from "../../assets/images/neo-mobility.png";

const projects = [
  {
    img: Primal,
    title: "Primal Training",
    description: "Train like an athlete with top-tier equipment and expert programming. Whether you're building muscle or breaking PRs, we help you push past limits.",
    link: "https://prima-training.netlify.app/",
    git: "https://github.com/WarlayX/primal-training"
  },
  {
    img: VatCalculator,
    title: "VAT Calculator",
    description: "A Value Added Tax Calculator. This VAT calculator helps to calculate amount payable as value added tax on a vatable good or service.",
    link: "https://vatcalculate.netlify.app/",
    git: "https://github.com/WarlayX/VAT-Calculator"
  },
  {
    img: Foodify,
    title: "Foodify Network",
    description: "Indulge your senses in a symphony of flavors curated by our talented chefs, blending global inspirations with locally sourced ingredients.",
    link: "https://foodify-network.netlify.app/",
    git: "https://github.com/WarlayX/foodify-network"
  },
  {
    img: Stride,
    title: "Stride Shoe Collection",
    description: "A modern, e-commerce page for sneakers. Discover premium-crafted sneakers made for movement, expression and all-day comfort.",
    link: "https://stride-collection.netlify.app/",
    git: "https://github.com/WarlayX/stride-shoe-collection"
  },
  {
    img: Neo,
    title: "Neo Mobility",
    description: "An electric mobility brand website focusing on sustainability and innovation. Neo Mobility is a benchmark in Passenger EVs",
    link: "https://neo-mobility.netlify.app/",
    git: "https://github.com/WarlayX/neo-mobility"
  }
];

export default function Projects() {
  const [showAll, setShowAll] = useState(false);

  const getVisibleProjects = () => {
    if (showAll) return projects;
    if (window.innerWidth >= 1024) return projects.slice(0, 3);
    return projects.slice(0, 2);
  };

  const visibleProjects = getVisibleProjects();

  return (
    <section className="pt-5">
      <div className="max-w-325 mx-auto px-2.5 md:px-8">

        <div className="flex items-center gap-2 mb-10">
          <i className="bx bx-grid-alt text-[20px] sm:text-[30px] font-bold text-(--color-primary)"></i>
          <h2 className="text-[20px] font-bold text-(--color-primary) tracking-tight">
            PROJECTS
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {visibleProjects.map((project, index) => (
            <div key={index} className="flex flex-col rounded-2xl overflow-hidden bg-(--color-sec-bg) border border-(--color-ter-bg) hover:shadow-[0_2px_4px_var(--color-primary)] transition-shadow duration-300">

              <div className="w-full h-50 overflow-hidden">
                <img
                  src={project.img}
                  alt={project.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>

              <div className="flex flex-col gap-3 p-5 flex-1">
                <h3 className="text-[16px] md:text-[18px] font-bold text-(--color-pri-text)">
                  {project.title}
                </h3>

                <p className="text-[13px] md:text-[14px] text-(--color-sec-text) leading-relaxed flex-1">
                  {project.description}
                </p>

                <div className="flex items-center gap-6 mt-2">
                  <div className="flex items-center gap-1.5">
                    <i className="bx bx-link text-[16px] text-(--color-primary)" />
                    <a href={project.link} target="_blank" rel="noopener noreferrer"
                      className="text-[13px] font-medium text-(--color-primary) hover:underline transition-all duration-200">
                      Live
                    </a>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <i className="bx bxl-github text-[16px] text-(--color-sec-text)" />
                    <a href={project.git} target="_blank" rel="noopener noreferrer"
                      className="text-[13px] font-medium text-(--color-sec-text) hover:text-(--color-primary) transition-colors duration-200">
                      Code
                    </a>
                  </div>
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* View more / less button */}
        <div className="flex justify-center mt-10">
          <button
            onClick={() => setShowAll(!showAll)}
            className="flex items-center gap-2 px-6 py-3 rounded-xl text-(--color-primary) text-[14px] font-medium hover:text-(--color-sec-text) transition-all duration-300 cursor-pointer"
          >
            {showAll ? (
              <>
                View Less
                <i className="bx bx-chevron-up text-[18px]" />
              </>
            ) : (
              <>
                View More Projects
                <i className="bx bx-chevron-down text-[18px]" />
              </>
            )}
          </button>
        </div>

      </div>
    </section>
  );
}