import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer, viewportConfig } from '../hooks/useScrollReveal';
import { serviceCategories } from '../data/services';
import { getLocalBusinessSchema, getBreadcrumbSchema, jsonLdScript } from '../utils/seo';
import Breadcrumb from '../components/ui/Breadcrumb';
export default function Pricing() {
  return (
    <>
      <Helmet>
        <title>Cenovnik masaža | Studio Milina Niš</title>
        <meta name="description" content="Aktuelne cene svih tretmana masaže u Studio Milina u Nišu. Relaks, terapeutska, sportska, anti celulit masaža i drugi tretmani." />
        <meta property="og:title" content="Cenovnik masaža | Studio Milina Niš" />
        <meta property="og:description" content="Aktuelne cene svih tretmana masaže u Studio Milina u Nišu." />
        <meta property="og:url" content="https://milinamasaza.com/cenovnik" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://milinamasaza.com/images/mila-u-studiju.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="canonical" href="https://milinamasaza.com/cenovnik" />
        <script type="application/ld+json">{jsonLdScript(getLocalBusinessSchema())}</script>
        <script type="application/ld+json">{jsonLdScript(getBreadcrumbSchema([
          { name: 'Početna', url: 'https://milinamasaza.com' },
          { name: 'Cenovnik', url: 'https://milinamasaza.com/cenovnik' },
        ]))}</script>
      </Helmet>

      {/* Hero */}
      <section className="pt-32 pb-16 bg-forest text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb items={[
            { label: 'Početna', href: '/' },
            { label: 'Cenovnik' },
          ]} />
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="font-serif text-4xl md:text-6xl mt-6 mb-4"
          >
            Cenovnik
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-cream/70 text-lg"
          >
            Aktuelne cene svih tretmana u Studio Milina
          </motion.p>
        </div>
      </section>

      {/* Cenovnik */}
      <section className="py-20 bg-cream">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {serviceCategories.map((category) => (
            <motion.div
              key={category.slug}
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={viewportConfig}
              className="mb-12 last:mb-0"
            >
              <motion.h2 variants={fadeInUp} className="font-serif text-2xl md:text-3xl text-charcoal mb-6">
                {category.name}
              </motion.h2>

              <div className="bg-white rounded-xl overflow-hidden shadow-sm">
                {category.services.map((service, i) => (
                  <motion.div
                    key={service.slug}
                    variants={fadeInUp}
                    className={`flex items-center justify-between p-5 ${
                      i < category.services.length - 1 ? 'border-b border-cream' : ''
                    } hover:bg-cream/50 transition-colors`}
                  >
                    <div className="flex-1">
                      <Link
                        to={`/usluge/${service.slug}`}
                        className="font-medium text-charcoal hover:text-forest transition-colors"
                      >
                        {service.name}
                      </Link>
                    </div>
                    <div className="flex items-center gap-8 text-sm">
                      <span className="text-charcoal-light whitespace-nowrap">{service.duration}</span>
                      <span className="text-gold font-semibold whitespace-nowrap min-w-[80px] text-right">{service.price}</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}

          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            className="mt-8 p-6 bg-white rounded-xl shadow-sm"
          >
            <p className="text-charcoal-light text-sm">
              * Cene su izražene u dinarima. Za pakete i popuste kontaktirajte nas.
              Cene se mogu promeniti bez prethodne najave.
            </p>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-charcoal text-white text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="font-serif text-3xl md:text-4xl mb-6">Zakažite termin</h2>
          <p className="text-cream/70 mb-8">Pozovite nas ili pošaljite poruku putem WhatsApp-a</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+381668060301"
              className="inline-block px-8 py-3 bg-gold text-white rounded-lg hover:bg-gold-light transition-colors font-semibold"
            >
              +381 66 80 60 301
            </a>
            <a
              href="https://wa.me/381668060301"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-3 bg-[#25D366] text-white rounded-lg hover:bg-[#20BD5A] transition-colors font-semibold"
            >
              WhatsApp
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
