import 'boxicons/css/boxicons.min.css';

export default function Contact() {
  const socials = [
    { icon: "bx bx-envelope", 
      label: "Gmail", 
      href: "mailto:adewoleodutayo@gmail.com" 
    },
    { icon: "bx bxl-linkedin-square",
      label: "LinkedIn", 
      href: "https://www.linkedin.com/in/adewole-odutayo-999ab4308" 
    },
    { icon: "bx bxl-github", 
      label: "GitHub", 
      href: "https://github.com/WarlayX" 
    },
    { icon: "fa-brands fa-x-twitter", 
      label: "Twitter", 
      href: "https://x.com/Warlay_X?t=2qckFuDsWqVO9M0Y0GjXsA&s=09" 
    },
    { icon: "bx bxl-whatsapp",
      label: "WhatsApp", 
      href: "https://wa.me/+2348029822140" 
    },
  ];

  return (
    <section id='contact'>
      <div className="h-120 flex flex-col items-center justify-center self-start sm:h-90">
        <div className="text-center">
          <h3 className="text-[50px] font-light leading-15 xl:font-extralight">
            Together, We can create something{" "}
            <span className="text-(--color-primary)">awesome.</span>
          </h3>
        </div>

        <div className="flex justify-center gap-6 mt-8">
          {socials.map((social, index) => (
            <a key={index} href={social.href} target="_blank" rel="noopener noreferrer" className="group flex flex-col items-center gap-1">
              <i className={`${social.icon} text-[30px] text-(--color-sec-text) group-hover:text-(--color-primary) transition-colors duration-300`} />
              <span className="text-[13px] font-bold text-(--color-primary) opacity-0 -translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                {social.label}
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}