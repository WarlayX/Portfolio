import 'boxicons/css/boxicons.min.css';

const specializations = [
  "Logo Design",
  "Branding",
  "Flyers",
  "Marketing & Advertising",
  "Business Cards",
  "Social Media Designs",
  "Stickers & Labels",
  "Printing",
];

export default function DesignsAbout() {
  return (
    <section id="about" className="pt-5 py-16">
      <div className="max-w-350 mx-auto px-2.5 md:px-8">

        <div className="flex flex-col gap-10 sm:flex-row sm:items-start">

          {/* Left — Heading */}
          <div className="sm:w-[25%] flex items-center gap-2 sm:self-start" data-aos="fade-right" data-aos-duration="800">
            <i className="fa-regular fa-user text-(--color-primary) text-[20px] sm:text-[30px] animate-sides-twice" />
            <h2 className="text-[20px] sm:text-[30px] font-bold text-(--color-primary) tracking-tight">
              ABOUT
            </h2>
          </div>

          {/* Right — Text + Specializations */}
          <div className="sm:w-[75%] flex flex-col gap-8">

            <p className="text-[13px] sm:text-[15px] lg:text-[18px] text-(--color-sec-text) leading-relaxed" data-aos="fade-left" data-aos-duration="800">
              My name is Adewole Odutayo, and I'm a graphic designer who enjoys turning ideas into creative and meaningful visuals. I specialize in logo design, branding, flyers, banners, and other marketing materials that help businesses present themselves with confidence. I love combining creativity with thoughtful design to create work that is clean, engaging, and effective. Whether I'm building a brand identity or designing promotional materials, my goal is to create visuals that connect with people and leave a lasting impression.
            </p>

            <div data-aos="fade-up" data-aos-duration="800">
              <h3 className="text-[15px] sm:text-[18px] font-bold text-(--color-pri-text) mb-4">
                Specializations
              </h3>
              <ul className="grid grid-cols-2 gap-3">
                {specializations.map((item, index) => (
                  <li key={index} className="flex items-center gap-2 text-[13px] sm:text-[14px] text-(--color-sec-text)">
                    <i className="bx bx-check-circle text-(--color-primary) text-[16px]" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}