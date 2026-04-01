import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
  { name: 'Početna', path: '/' },
  { name: 'Usluge', path: '/usluge' },
  { name: 'Cenovnik', path: '/cenovnik' },
  { name: 'O nama', path: '/o-nama' },
  { name: 'Blog', path: '/blog' },
  { name: 'Najčešća pitanja', path: '/najcesca-pitanja' },
  { name: 'Kontakt', path: '/kontakt' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Zatvori mobilni meni pri promeni rute
  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  // Sprečava scroll dok je mobilni meni otvoren
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  const isActive = (path: string) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  };

  // Na početnoj stranici, tekst je beo dok korisnik ne scrolluje
  const isHome = location.pathname === '/';
  const isTransparent = isHome && !scrolled && !mobileOpen;

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled || mobileOpen
          ? 'bg-[#F5F0EB] shadow-md'
          : 'bg-transparent'
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 lg:px-8">
        {/* Logo */}
        <Link
          to="/"
          className={`font-serif text-2xl font-semibold tracking-wide lg:text-3xl transition-colors duration-300 ${
            isTransparent ? 'text-white' : 'text-[#2D2926]'
          }`}
        >
          Studio Milina
        </Link>

        {/* Desktop navigacija */}
        <ul className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => (
            <li key={link.path}>
              <Link
                to={link.path}
                className={`relative px-3 py-2 text-sm font-medium transition-colors ${
                  isActive(link.path)
                    ? 'text-[#C4A265]'
                    : isTransparent
                      ? 'text-white/90 hover:text-[#C4A265]'
                      : 'text-[#2D2926] hover:text-[#C4A265]'
                }`}
              >
                {link.name}
                {isActive(link.path) && (
                  <motion.span
                    layoutId="nav-underline"
                    className="absolute bottom-0 left-3 right-3 h-0.5 bg-[#C4A265]"
                    transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                  />
                )}
              </Link>
            </li>
          ))}
        </ul>

        {/* Desktop CTA dugme */}
        <Link
          to="/kontakt"
          className="hidden rounded-full bg-[#C4A265] px-6 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#D4B87A] lg:inline-block"
        >
          Zakažite termin
        </Link>

        {/* Hamburger dugme (mobilni) */}
        <button
          type="button"
          onClick={() => setMobileOpen((prev) => !prev)}
          className="relative z-50 flex h-10 w-10 flex-col items-center justify-center gap-1.5 lg:hidden"
          aria-label={mobileOpen ? 'Zatvori meni' : 'Otvori meni'}
          aria-expanded={mobileOpen}
        >
          <motion.span
            animate={mobileOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
            className={`block h-0.5 w-6 transition-colors duration-300 ${isTransparent ? 'bg-white' : 'bg-[#2D2926]'}`}
          />
          <motion.span
            animate={mobileOpen ? { opacity: 0 } : { opacity: 1 }}
            className={`block h-0.5 w-6 transition-colors duration-300 ${isTransparent ? 'bg-white' : 'bg-[#2D2926]'}`}
          />
          <motion.span
            animate={mobileOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
            className={`block h-0.5 w-6 transition-colors duration-300 ${isTransparent ? 'bg-white' : 'bg-[#2D2926]'}`}
          />
        </button>
      </nav>

      {/* Mobilni meni */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'tween', duration: 0.3 }}
            className="fixed inset-0 top-0 z-40 flex flex-col bg-[#F5F0EB] pt-24 lg:hidden"
          >
            <ul className="flex flex-col items-center gap-2 px-6">
              {navLinks.map((link, index) => (
                <motion.li
                  key={link.path}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                  className="w-full text-center"
                >
                  <Link
                    to={link.path}
                    className={`block py-3 font-serif text-xl transition-colors ${
                      isActive(link.path)
                        ? 'text-[#C4A265]'
                        : 'text-[#2D2926] hover:text-[#C4A265]'
                    }`}
                  >
                    {link.name}
                  </Link>
                </motion.li>
              ))}
            </ul>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="mt-8 text-center"
            >
              <Link
                to="/kontakt"
                className="inline-block rounded-full bg-[#C4A265] px-8 py-3 text-lg font-semibold text-white transition-colors hover:bg-[#D4B87A]"
              >
                Zakažite termin
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
