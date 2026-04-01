import { Link } from 'react-router-dom';

const navLinks = [
  { name: 'Početna', path: '/' },
  { name: 'Usluge', path: '/usluge' },
  { name: 'Cenovnik', path: '/cenovnik' },
  { name: 'O nama', path: '/o-nama' },
  { name: 'Blog', path: '/blog' },
  { name: 'Najčešća pitanja', path: '/najcesca-pitanja' },
  { name: 'Kontakt', path: '/kontakt' },
];

export default function Footer() {
  return (
    <footer className="bg-[#2C4A3E] text-[#F5F0EB]">
      <div className="mx-auto max-w-7xl px-4 py-16 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Kolona 1 — Brend */}
          <div>
            <Link to="/" className="font-serif text-2xl font-semibold tracking-wide text-white">
              Studio Milina
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-[#F5F0EB]/80">
              Profesionalna masaža u Nišu. Diplomirana terapetkinja sa DIF-a,
              posvećena vašem zdravlju i opuštanju.
            </p>

            {/* Instagram ikona */}
            <div className="mt-6">
              <a
                href="https://www.instagram.com/studio.milina/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Studio Milina na Instagramu"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/10 transition-colors hover:bg-[#C4A265]"
              >
                {/* Instagram SVG ikona */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5"
                >
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <circle cx="12" cy="12" r="5" />
                  <circle cx="17.5" cy="6.5" r="1.2" fill="currentColor" stroke="none" />
                </svg>
              </a>
            </div>
          </div>

          {/* Kolona 2 — Navigacija */}
          <div>
            <h3 className="font-serif text-lg font-semibold text-white">Navigacija</h3>
            <ul className="mt-4 space-y-2">
              {navLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-sm text-[#F5F0EB]/80 transition-colors hover:text-[#C4A265]"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Kolona 3 — Kontakt */}
          <div>
            <h3 className="font-serif text-lg font-semibold text-white">Kontakt</h3>
            <ul className="mt-4 space-y-3 text-sm text-[#F5F0EB]/80">
              <li>
                <a
                  href="tel:+381668060301"
                  className="transition-colors hover:text-[#C4A265]"
                >
                  +381 66 80 60 301
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/381668060301?text=Zdravo%2C%20%C5%BEelim%20da%20zaka%C5%BEem%20masa%C5%BEu."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-[#C4A265]"
                >
                  WhatsApp
                </a>
              </li>
              <li>[EMAIL]</li>
              <li>Zmaja od Noćaja 15, Niš</li>
            </ul>
          </div>

          {/* Kolona 4 — Radno vreme */}
          <div>
            <h3 className="font-serif text-lg font-semibold text-white">Radno vreme</h3>
            <ul className="mt-4 space-y-2 text-sm text-[#F5F0EB]/80">
              <li className="flex justify-between">
                <span>Ponedeljak — Petak</span>
                <span>09:00 — 21:00</span>
              </li>
              <li className="flex justify-between">
                <span>Subota</span>
                <span>10:00 — 18:00</span>
              </li>
              <li className="flex justify-between">
                <span>Nedelja</span>
                <span className="text-[#C4A265]">Neradni dan</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Donja linija */}
        <div className="mt-12 border-t border-white/10 pt-8 text-center text-xs text-[#F5F0EB]/60">
          <p>
            &copy; {new Date().getFullYear()} Studio Milina. Sva prava zadržana.
          </p>
          <p className="mt-2">
            Sajt, dizajn i SEO:{' '}
            <a
              href="https://quantex.rs"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#C4A265] underline transition-colors hover:text-[#D4B87A]"
            >
              Quantex.rs
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
