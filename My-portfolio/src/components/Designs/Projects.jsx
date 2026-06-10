import 'boxicons/css/boxicons.min.css';
import Design1 from '../../assets/designs/design1.jpg';
import Design2 from '../../assets/designs/design2.jpg';
import Design3 from '../../assets/designs/design3.jpg';
import Design4 from '../../assets/designs/design4.jpg';
import Design5 from '../../assets/designs/design5.jpg';

const designs = [
  { img: Design1, title: "Design 1" },
  { img: Design2, title: "Design 2" },
  { img: Design3, title: "Design 3" },
  { img: Design4, title: "Design 4" },
  { img: Design5, title: "Design 5" },
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