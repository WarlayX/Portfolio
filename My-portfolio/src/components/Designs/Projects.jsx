import 'boxicons/css/boxicons.min.css';
import Design1 from '../../assets/designs/design1.jpg';
import Design2 from '../../assets/designs/design2.jpg';
import Design3 from '../../assets/designs/design3.jpg';
import Design4 from '../../assets/designs/design4.jpg';
import Design5 from '../../assets/designs/design5.jpg';
import Pre1 from '../../assets/designs/pre1.jpg';
import Pre2 from '../../assets/designs/pre2.jpg';
import Pre3 from '../../assets/designs/pre3.jpg';
import Pre4 from '../../assets/designs/pre4.jpg';
import Pre5 from '../../assets/designs/pre5.jpg';
import Pre6 from '../../assets/designs/pre6.jpg';
import Pre7 from '../../assets/designs/pre7.jpg';
import Pre8 from '../../assets/designs/pre8.jpg';

const designs = [
  { img: Design1, title: "Design 1" },
  { img: Design2, title: "Design 2" },
  { img: Design3, title: "Design 3" },
  { img: Design4, title: "Design 4" },
  { img: Design5, title: "Design 5" },
  { img: Pre1, title: "Presentation 1" },
  { img: Pre2, title: "Presentation 2" },
  { img: Pre3, title: "Presentation 3" },
  { img: Pre4, title: "Presentation 4" },
  { img: Pre5, title: "Presentation 5" },
  { img: Pre6, title: "Presentation 6" },
  { img: Pre7, title: "Presentation 7" },
  { img: Pre8, title: "Presentation 8" },
];

export default function DesignsProjects() {
  return (
    <section id="designs" className="pt-5 py-16">
      <div className="max-w-350 mx-auto px-2.5 md:px-8">

        {/* Heading */}
        <div className="flex items-center gap-2 mb-10">
          <i className="bx bx-grid-alt text-[20px] sm:text-[25px] font-bold text-(--color-primary) animate-bounce-rotate"></i>
          <h2 className="text-[20px] sm:text-[30px] font-bold text-(--color-primary) tracking-tight">
            DESIGNS
          </h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {designs.map((design, index) => (
            <div
              key={index}
              data-aos="fade-up"
              data-aos-duration="800"
              data-aos-delay={index * 100}
              className="overflow-hidden rounded-2xl border border-(--color-ter-bg) hover:shadow-[0_4px_30px_var(--color-primary)] transition-shadow duration-300"
            >
              <img
                src={design.img}
                alt={design.title}
                className="w-full h-87.5 md:h-112.5 object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}