import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import 'boxicons/css/boxicons.min.css';

export default function Navbar () {
  const [isDark, setIsDark] = useState(() => {
    const stored = localStorage.getItem('theme');
    return stored ? stored === 'dark' : true;
  });

  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const root = document.documentElement;
    if (isDark) {
      root.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      root.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDark]);

  return (
    <header className="relative">
      <nav className="flex items-center justify-between p-2.5 md:p-5">

        <h1 className="font-extrabold text-[20px] tracking-(-0.05em] leading-(1.10em) text-(--color-primary)">ADEWOLE_ODUTAYO</h1>

        {/* Desktop links */}
        <div className="hidden md:block">
          <ul className="flex items-center gap-6">
            <li><Link to="/" className="text-(--color-sec-text) hover:text-(--color-primary) transition-colors duration-200">About</Link></li>
            <li><Link to="/skills" className="text-(--color-sec-text) hover:text-(--color-primary) transition-colors duration-200">Skills</Link></li>
            <li><Link to="/projects" className="text-(--color-sec-text) hover:text-(--color-primary) transition-colors duration-200">Work</Link></li>
            <li><Link to="/contact" className="text-(--color-sec-text) hover:text-(--color-primary) transition-colors duration-200">Contact</Link></li>
          </ul>
        </div>

        {/* Right side controls */}
        <div className="flex items-center gap-4">

          {/* Theme toggle */}
          <button onClick={() => setIsDark(!isDark)} className="cursor-pointer">
            <i
              key={isDark ? 'moon' : 'sun'}
              className={`${isDark ? "bx bx-moon" : "bx bx-sun"} text-(--color-sec-text) animate-spin-once`}
            />
          </button>

          {/* Hamburger — mobile only */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="cursor-pointer md:hidden"
          >
            <i
              key={menuOpen ? 'close' : 'open'}
              className={`${menuOpen ? "bx bx-x" : "bx bx-menu"} text-(--color-sec-text) animate-spin-once`}
            />
          </button>

        </div>

      </nav>

      {/* Mobile sidebar */}
      <div
        className={`fixed top-0 left-0 w-full bg-(--color-sec-bg) z-50 flex flex-col px-8 py-10 gap-10 transition-transform duration-300 ease-in-out ${
        menuOpen ? 'translate-y-0' : '-translate-y-full'
        }`}
      >
        {/* Close button */}
        <div className="flex justify-end">
          <button onClick={() => setMenuOpen(false)} className="cursor-pointer">
            <i
              key={menuOpen ? 'sb-close' : 'sb-open'}
              className="bx bx-x text-[20px] text-(--color-sec-text) animate-spin-once"
            />
          </button>
        </div>

        {/* Sidebar links */}
        <ul className="flex flex-col gap-8">
          <li>
            <Link
              to="/"
              onClick={() => setMenuOpen(false)}
              className="text-(--color-sec-text) hover:text-(--color-primary) text-[18px] font-medium transition-colors duration-200"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="/skills"
              onClick={() => setMenuOpen(false)}
              className="text-(--color-sec-text) hover:text-(--color-primary) text-[18px] font-medium transition-colors duration-200"
            >
              Skills
            </Link>
          </li>
          <li>
            <Link
              to="/projects"
              onClick={() => setMenuOpen(false)}
              className="text-(--color-sec-text) hover:text-(--color-primary) text-[18px] font-medium transition-colors duration-200"
            >
              Work
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              onClick={() => setMenuOpen(false)}
              className="text-(--color-sec-text) hover:text-(--color-primary) text-[18px] font-medium transition-colors duration-200"
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>

      {/* Overlay */}
      {menuOpen && (
        <div
          onClick={() => setMenuOpen(false)}
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
        />
      )}

    </header>
  )
}