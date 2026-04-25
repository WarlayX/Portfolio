import Logo from '../assets/Logo.png';

export default function Footer() {
  return (
    <footer className="flex flex-col items-center justify-center gap-6 p-5 border-t ">

      <p className="text-[13px] md:text-[14px] text-(--color-sec-text) tracking-wide text-center">
        writing codes, creating designs. quick study.
      </p>

      <img src={Logo} alt="logo" className="w-10 h-10 object-cover" />

      <p className="text-[12px] text-(--color-sec-text)">
        © {new Date().getFullYear()} Adewole Odutayo. All rights reserved.
      </p>

    </footer>
  );
}