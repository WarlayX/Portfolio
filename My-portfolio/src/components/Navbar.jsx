import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import 'boxicons/css/boxicons.min.css';

export default function Navbar () {
  const [isDark, setIsDark] = useState(() => {
    const stored = localStorage.getItem('theme');
    return stored ? stored === 'dark' : true;
  });

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
    <header>
      <nav className="flex items-center justify-between px-7.5 py-6">

        <h1 className="font-extrabold text-[24px] text-(--color-primary)">ADEWOLE_ODUTAYO</h1>

        <div>
          <ul className="flex items-center gap-6">
            <li><Link to="/">About</Link></li>
            <li><Link to="/skills">Skills</Link></li>
            <li><Link to="/projects">Work</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>

        <div>
          <button onClick={() => setIsDark(!isDark)} className="cursor-pointer"> 
            <i 
              key={isDark ? 'moon' : 'sun'}
              className={`${isDark ? "bx bx-moon" : "bx bx-sun"} animate-spin-once`}    
            />
          </button>
        </div>

      </nav>
    </header>
  )
}