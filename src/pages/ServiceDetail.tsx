import { Helmet } from 'react-helmet-async';
import { Link, useParams, Navigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { fadeInUp, fadeIn, viewportConfig } from '../hooks/useScrollReveal';
import { getServiceBySlug, getRelatedServices } from '../data/services';
import { getServiceSchema, getBreadcrumbSchema, getLocalBusinessSchema, getFAQSchema, jsonLdScript } from '../utils/seo';
import Breadcrumb from '../components/ui/Breadcrumb';
import Accordion from '../components/ui/Accordion';

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

export default function ServiceDetail() {
  const { slug } = useParams<{ slug: string }>();
  const service = slug ? getServiceBySlug(slug) : undefined;

  if (!service) {
    return <Navigate to="/404" replace />;
  }

  const related = getRelatedServices(service);

  return (
    <>
      <Helmet>
        <title>{service.metaTitle}</title>
        <meta name="description" content={service.metaDescription} />
        <meta property="og:title" content={service.metaTitle} />
        <meta property="og:description" content={service.metaDescription} />
        <meta property="og:url" content={`https://milinamasaza.com/usluge/${service.slug}`} />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://milinamasaza.com/images/mila-u-studiju.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="canonical" href={`https://milinamasaza.com/usluge/${service.slug}`} />
        <script type="application/ld+json">{jsonLdScript(getServiceSchema({ ...service, description: service.shortDescription }))}</script>
        {service.faq && service.faq.length > 0 && (
          <script type="application/ld+json">{jsonLdScript(getFAQSchema(service.faq))}</script>
        )}
        <script type="application/ld+json">{jsonLdScript(getLocalBusinessSchema())}</script>
        <script type="application/ld+json">{jsonLdScript(getBreadcrumbSchema([
          { name: 'Početna', url: 'https://milinamasaza.com' },
          { name: 'Usluge', url: 'https://milinamasaza.com/usluge' },
          { name: service.name, url: `https://milinamasaza.com/usluge/${service.slug}` },
        ]))}</script>
      </Helmet>

      {/* Hero */}
      <section className="pt-32 pb-16 bg-forest text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb items={[
            { label: 'Početna', href: '/' },
            { label: 'Usluge', href: '/usluge' },
            { label: service.name },
          ]} />
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="font-serif text-4xl md:text-5xl lg:text-6xl mt-6 mb-4"
          >
            {service.name}
          </motion.h1>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex gap-6 text-cream/70"
          >
            <span>Trajanje: {service.duration}</span>
            <span>Cena: {service.price}</span>
          </motion.div>
        </div>
      </section>

      {/* Sadržaj */}
      <section className="py-16 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Glavni sadržaj */}
            <div className="lg:col-span-2">
              <motion.div
                variants={fadeIn}
                initial="hidden"
                whileInView="visible"
                viewport={viewportConfig}
                className="mb-10"
              >
                <img
                  src={serviceImages[service.slug] || '/images/mila-u-studiju.png'}
                  alt={service.imageAlt}
                  className="w-full h-64 md:h-96 object-cover rounded-xl mb-10"
                  loading="lazy"
                />
              </motion.div>

              <motion.div
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={viewportConfig}
                className="prose max-w-none"
              >
                {service.fullDescription.map((paragraph, i) => (
                  <p key={i} className="text-charcoal-light text-lg leading-relaxed mb-6">
                    {paragraph}
                  </p>
                ))}
              </motion.div>

              {/* Benefiti */}
              <motion.div
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={viewportConfig}
                className="mt-12"
              >
                <h2 className="font-serif text-2xl md:text-3xl text-charcoal mb-6">Dobrobiti tretmana</h2>
                <div className="grid sm:grid-cols-2 gap-3">
                  {service.benefits.map((benefit, i) => (
                    <div key={i} className="flex items-start gap-3 bg-white p-4 rounded-lg">
                      <svg className="w-5 h-5 text-gold shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span className="text-charcoal-light">{benefit}</span>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Za koga se preporučuje */}
              <motion.div
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={viewportConfig}
                className="mt-12"
              >
                <h2 className="font-serif text-2xl md:text-3xl text-charcoal mb-6">Za koga se preporučuje</h2>
                <ul className="space-y-3">
                  {service.recommendedFor.map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-charcoal-light">
                      <span className="w-2 h-2 bg-gold rounded-full shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>

              {/* Kontraindikacije */}
              {service.contraindications && service.contraindications.length > 0 && (
                <motion.div
                  variants={fadeInUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={viewportConfig}
                  className="mt-12"
                >
                  <h2 className="font-serif text-2xl md:text-3xl text-charcoal mb-6">Kontraindikacije</h2>
                  <div className="bg-red-50 border border-red-100 rounded-xl p-6">
                    <ul className="space-y-2">
                      {service.contraindications.map((item, i) => (
                        <li key={i} className="flex items-center gap-3 text-red-700 text-sm">
                          <svg className="w-4 h-4 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                          </svg>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              )}

              {/* FAQ za tretman */}
              {service.faq && service.faq.length > 0 && (
                <motion.div
                  variants={fadeInUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={viewportConfig}
                  className="mt-12"
                >
                  <h2 className="font-serif text-2xl md:text-3xl text-charcoal mb-6">
                    Često postavljana pitanja o tretmanu
                  </h2>
                  <Accordion items={service.faq} />
                </motion.div>
              )}
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-28 space-y-6">
                {/* CTA kartica */}
                <div className="bg-white rounded-xl p-8 shadow-sm">
                  <h3 className="font-serif text-2xl text-charcoal mb-2">{service.name}</h3>
                  <div className="flex items-center gap-4 text-sm text-charcoal-light mb-6">
                    <span>{service.duration}</span>
                    <span className="text-gold font-semibold text-lg">{service.price}</span>
                  </div>
                  <Link
                    to={`/kontakt?tretman=${encodeURIComponent(service.name)}`}
                    className="block w-full text-center px-6 py-3 bg-gold text-white rounded-lg hover:bg-gold-light transition-colors duration-300 font-semibold mb-3"
                  >
                    Zakažite ovaj tretman
                  </Link>
                  <a
                    href="tel:+381668060301"
                    className="block w-full text-center px-6 py-3 border-2 border-forest text-forest rounded-lg hover:bg-forest hover:text-white transition-colors duration-300 font-semibold"
                  >
                    Pozovite nas
                  </a>
                </div>

                {/* Srodne usluge */}
                {related.length > 0 && (
                  <div className="bg-white rounded-xl p-6 shadow-sm">
                    <h3 className="font-serif text-lg text-charcoal mb-4">Slični tretmani</h3>
                    <div className="space-y-3">
                      {related.map((r) => (
                        <Link
                          key={r.slug}
                          to={`/usluge/${r.slug}`}
                          className="block p-3 bg-cream rounded-lg hover:bg-cream-dark transition-colors text-sm group"
                        >
                          <span className="text-charcoal group-hover:text-forest font-medium transition-colors">{r.name}</span>
                          <span className="block text-charcoal-light text-xs mt-1">{r.duration} · {r.price}</span>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
