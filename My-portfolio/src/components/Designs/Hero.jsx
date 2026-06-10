import 'boxicons/css/boxicons.min.css';
import { useState, useEffect } from "react";
import HeroImg from '../../assets/profilesetup.png';

const phrases = [
  { plain: "GRAPHIC", highlighted: "DESIGNER." },
  { plain: "CREATIVE", highlighted: "THINKER." },
  { plain: "BRAND", highlighted: "BUILDER." },
];

export default function DesignsHero() {
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [displayedPlain, setDisplayedPlain] = useState("");
  const [displayedHighlight, setDisplayedHighlight] = useState("");
  const [phase, setPhase] = useState("plain");

  useEffect(() => {
    const current = phrases[phraseIndex];

    if (phase === "plain") {
      if (displayedPlain.length < current.plain.length) {
        const timeout = setTimeout(() => {
          setDisplayedPlain(current.plain.slice(0, displayedPlain.length + 1));
        }, 80);
        return () => clearTimeout(timeout);
      } else {
        setPhase("highlight");
        return;
      }
    }

    if (phase === "highlight") {
      if (displayedHighlight.length < current.highlighted.length) {
        const timeout = setTimeout(() => {
          setDisplayedHighlight(current.highlighted.slice(0, displayedHighlight.length + 1));
        }, 80);
        return () => clearTimeout(timeout);
      } else {
        setPhase("pause");
        return;
      }
    }

    if (phase === "pause") {
      const timeout = setTimeout(() => setPhase("erase"), 2000);
      return () => clearTimeout(timeout);
    }

    if (phase === "erase") {
      if (displayedHighlight.length > 0) {
        const timeout = setTimeout(() => {
          setDisplayedHighlight(displayedHighlight.slice(0, -1));
        }, 40);
        return () => clearTimeout(timeout);
      } else if (displayedPlain.length > 0) {
        const timeout = setTimeout(() => {
          setDisplayedPlain(displayedPlain.slice(0, -1));
        }, 40);
        return () => clearTimeout(timeout);
      } else {
        setPhraseIndex((prev) => (prev + 1) % phrases.length);
        setPhase("plain");
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [phase, displayedPlain, displayedHighlight, phraseIndex]);

  return (
    <section id="hero" className="pt-5">
      <div className="flex flex-col gap-6 sm:flex-row sm:max-w-325 sm:mx-auto sm:h-110 sm:items-center lg:h-150">

        {/* Left — Image */}
        <div className="sm:w-[30%] sm:self-start" data-aos="zoom-in" data-aos-duration="800">
          <img
            src={HeroImg}
            alt="Adewole Odutayo"
            className="object-cover w-30 h-30 rounded-[10px] sm:w-50 sm:h-50 lg:w-65 lg:h-65 animate-bounce-slow hover:scale-105 hover:rotate-3 transition-all duration-500 cursor-pointer"
          />
        </div>

        {/* Right — Text */}
        <div className="flex flex-col gap-6 p-2.5 sm:w-[70%] sm:gap-10">

          <h1 className="text-[30px] font-bold leading-tight sm:text-[40px] lg:text-[80px]">
            {displayedPlain}{" "}
            <br />
            <span className="text-(--color-primary)">
              {displayedHighlight}
              <span className="animate-pulse">|</span>
            </span>
          </h1>

          <p className="text-[12px] sm:text-[15px] lg:text-[20px] text-(--color-pri-text)">
            I'm a Graphic Designer with experience helping businesses build clean, modern, and professional brand identities and marketing visuals.
          </p>

        </div>

      </div>
    </section>
  );
}