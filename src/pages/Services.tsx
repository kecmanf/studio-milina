import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer, viewportConfig } from '../hooks/useScrollReveal';
import { serviceCategories } from '../data/services';
import { getLocalBusinessSchema, jsonLdScript } from '../utils/seo';
import SectionHeading from '../components/ui/SectionHeading';
import Breadcrumb from '../components/ui/Breadcrumb';
import { asset } from '../utils/assets';

const serviceImages: Record<string, string> = {
  'relaks-masaza-celog-tela': '/images/mila-u-studiju.png',
  'relaks-masaza-parcijalna': '/images/masaza-ledja.jpg',
  'aromaterapija-masaza': '/images/ambijent-studija.jpg',
  'terapeutska-masaza-celog-tela': '/images/masaza-ledja.jpg',
  'terapeutska-masaza-parcijalna': '/images/mila-u-studiju.png',
  'masaza-ledja-i-vrata': '/images/masaza-ledja.jpg',
  'deep-tissue-masaza': '/images/masaza-ledja.jpg',
  'sportska-masaza-celog-tela': '/images/masaza-stopala.png',
  'sportska-masaza-parcijalna': '/images/masaza-ledja.jpg',
  'anti-celulit-masaza': '/images/mila-u-studiju.png',
  'maderoterapija': '/images/ambijent-studija.jpg',
  'masaza-trudnica': '/images/mila-u-studiju.png',
  'masaza-lica-i-vrata': '/images/mila-djordjevic.png',
  'masaza-stopala-reflexology': '/images/masaza-stopala.png',
  'hot-stone-masaza': '/images/ambijent-studija.jpg',
  'limfna-drenaza': '/images/mila-u-studiju.png',
};

export default function Services() {
  return (
    <>
      <Helmet>
        <title>Usluge masaže | Studio Milina Niš</title>
        <meta name="description" content="Pogledajte sve vrste masaža u Studio Milina Niš: relaks, terapeutska, sportska, anti celulit, maderoterapija, masaža trudnica i više." />
        <meta property="og:title" content="Usluge masaže | Studio Milina Niš" />
        <meta property="og:description" content="Pogledajte sve vrste masaža u Studio Milina Niš." />
        <meta property="og:url" content="https://milinamasaza.com/usluge" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://milinamasaza.com/images/mila-u-studiju.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="canonical" href="https://milinamasaza.com/usluge" />
        <script type="application/ld+json">{jsonLdScript(getLocalBusinessSchema())}</script>
      </Helmet>

      {/* Hero */}
      <section className="pt-32 pb-16 bg-forest text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb items={[
            { label: 'Početna', href: '/' },
            { label: 'Usluge' },
          ]} />
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="font-serif text-4xl md:text-6xl mt-6 mb-4"
          >
            Naše usluge
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-cream/70 text-lg max-w-2xl"
          >
            Širok spektar profesionalnih masaža prilagođenih vašim potrebama.
            Svaki tretman izvodi diplomirana terapetkinja Mila Đorđević.
          </motion.p>
        </div>
      </section>

      {/* Kategorije usluga */}
      <section className="py-20 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {serviceCategories.map((category) => (
            <div key={category.slug} className="mb-16 last:mb-0">
              <SectionHeading title={category.name} centered={false} />

              <motion.div
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={viewportConfig}
                className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8"
              >
                {category.services.map((service) => (
                  <motion.div key={service.slug} variants={fadeInUp}>
                    <Link
                      to={`/usluge/${service.slug}`}
                      className="block bg-white rounded-xl overflow-hidden hover:shadow-lg transition-all duration-300 group"
                    >
                      <div className="bg-cream-dark">
                        <img
                          src={asset(serviceImages[service.slug] || '/images/mila-u-studiju.png')}
                          alt={service.imageAlt}
                          className="w-full h-auto max-h-56 object-contain mx-auto"
                          loading="lazy"
                        />
                      </div>
                      <div className="p-6">
                        <h3 className="font-serif text-xl text-charcoal mb-2 group-hover:text-forest transition-colors">
                          {service.name}
                        </h3>
                        <p className="text-charcoal-light text-sm mb-4 line-clamp-2">
                          {service.shortDescription}
                        </p>
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-gold font-semibold">{service.duration}</span>
                          <span className="text-charcoal-light">{service.price}</span>
                        </div>
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-charcoal text-white text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="font-serif text-3xl md:text-4xl mb-6">Nije siguran koji tretman vam odgovara?</h2>
          <p className="text-cream/70 mb-8">Kontaktirajte nas i pomoći ćemo vam da izaberete savršen tretman za vaše potrebe.</p>
          <Link
            to="/kontakt"
            className="inline-block px-8 py-4 bg-gold text-white rounded-lg hover:bg-gold-light transition-colors duration-300 font-semibold"
          >
            Kontaktirajte nas
          </Link>
        </div>
      </section>
    </>
  );
}
