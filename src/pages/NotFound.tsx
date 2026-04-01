import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function NotFound() {
  return (
    <>
      <Helmet>
        <title>404 — Stranica nije pronađena | Studio Milina</title>
        <meta name="robots" content="noindex" />
      </Helmet>

      <section className="min-h-screen flex items-center justify-center bg-cream px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-lg"
        >
          <span className="font-serif text-8xl md:text-9xl text-gold/30 block mb-4">404</span>
          <h1 className="font-serif text-3xl md:text-4xl text-charcoal mb-4">
            Stranica nije pronađena
          </h1>
          <p className="text-charcoal-light text-lg mb-8">
            Izgleda da stranica koju tražite ne postoji ili je premeštena.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/"
              className="inline-block px-8 py-3 bg-gold text-white rounded-lg hover:bg-gold-light transition-colors font-semibold"
            >
              Nazad na početnu
            </Link>
            <Link
              to="/kontakt"
              className="inline-block px-8 py-3 border-2 border-forest text-forest rounded-lg hover:bg-forest hover:text-white transition-colors font-semibold"
            >
              Kontaktirajte nas
            </Link>
          </div>
        </motion.div>
      </section>
    </>
  );
}
