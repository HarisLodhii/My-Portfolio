import { useEffect, useRef, useState } from 'react';
import { Moon, Sun, Menu, X } from 'lucide-react';
import { useTheme } from '@/hooks/useTheme';

const NAVBAR_HEIGHT = 80;

const navLinks = [
  { label: 'About', id: 'about' },
  { label: 'Skills', id: 'skills' },
  { label: 'Portfolio', id: 'portfolio' },
  { label: 'Impact', id: 'metrics' },
  { label: 'Vision', id: 'vision' },
  { label: 'Contact', id: 'contact' },
];

const SECTION_IDS = ['about', 'skills', 'portfolio', 'metrics', 'vision', 'contact'];

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('about');
  const isManualScrolling = useRef(false);

  useEffect(() => {
    const handleScroll = () => {
      if (isManualScrolling.current) return;

      const scrollPosition = window.scrollY + 100;

      for (const sectionId of SECTION_IDS) {
        const element = document.getElementById(sectionId);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    const onScroll = () => {
      setScrolled(window.scrollY > 20);
      handleScroll();
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent, sectionId: string) => {
    e.preventDefault();
    setActiveSection(sectionId);
    setMobileOpen(false);

    const element = document.getElementById(sectionId);
    if (element) {
      const yOffset = -NAVBAR_HEIGHT;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;

      isManualScrolling.current = true;
      window.scrollTo({ top: y, behavior: 'smooth' });

      window.setTimeout(() => {
        isManualScrolling.current = false;
      }, 800);
    }
  };

  const activeClass = (id: string) =>
    activeSection === id
      ? 'text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-3 py-1.5 rounded-full font-medium'
      : 'text-slate-600 dark:text-slate-300 hover:text-slate-navy dark:hover:text-white px-3 py-1.5 rounded-full font-medium border border-transparent transition-colors';

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'glass shadow-lg shadow-slate-900/5'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-5 sm:px-8 h-20 flex items-center justify-between">
        <a
          href="#hero"
          onClick={(e) => {
            e.preventDefault();
            isManualScrolling.current = true;
            window.scrollTo({ top: 0, behavior: 'smooth' });
            setTimeout(() => { isManualScrolling.current = false; }, 800);
          }}
          className="flex items-center gap-2 group"
        >
          <span className="text-xl font-display font-extrabold tracking-tight text-slate-navy dark:text-white">
            Haris<span className="text-brand-blue">.</span>
          </span>
          <span className="hidden sm:inline text-xs font-medium text-slate-500 dark:text-slate-400 group-hover:text-brand-blue transition-colors">
            Front-End Dev
          </span>
        </a>

        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              onClick={(e) => handleNavClick(e, link.id)}
              className={activeClass(link.id)}
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="p-2.5 rounded-lg text-slate-600 dark:text-slate-300 hover:bg-brand-blue/10 hover:text-brand-blue dark:hover:text-brand-blueLight transition-colors"
          >
            {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          <a
            href="#contact"
            onClick={(e) => handleNavClick(e, 'contact')}
            className="hidden sm:inline-flex items-center px-4 py-2 text-sm font-semibold text-white bg-brand-blue hover:bg-brand-blueDark rounded-lg transition-colors shadow-md shadow-brand-blue/20"
          >
            Get in Touch
          </a>
          <button
            onClick={() => setMobileOpen((o) => !o)}
            className="md:hidden p-2.5 rounded-lg text-slate-600 dark:text-slate-300 hover:bg-brand-blue/10 transition-colors"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {mobileOpen && (
        <div className="md:hidden glass border-t border-slate-200/60 dark:border-slate-700/40">
          <div className="px-5 py-4 flex flex-col gap-1">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={(e) => handleNavClick(e, link.id)}
                className={activeClass(link.id)}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, 'contact')}
              className="mt-2 px-4 py-3 text-sm font-semibold text-white bg-brand-blue hover:bg-brand-blueDark rounded-lg text-center transition-colors"
            >
              Get in Touch
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
