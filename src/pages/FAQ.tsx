import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { fadeInUp, viewportConfig } from '../hooks/useScrollReveal';
import { faqItems } from '../data/faq';
import { getFAQSchema, getLocalBusinessSchema, getBreadcrumbSchema, jsonLdScript } from '../utils/seo';
import Breadcrumb from '../components/ui/Breadcrumb';
import Accordion from '../components/ui/Accordion';

export default function FAQ() {
  return (
    <>
      <Helmet>
        <title>Najčešća pitanja o masaži | Studio Milina Niš</title>
        <meta name="description" content="Odgovori na najčešća pitanja o masaži, zakazivanju, cenama i tretmanima u Studio Milina u Nišu." />
        <meta property="og:title" content="Najčešća pitanja o masaži | Studio Milina Niš" />
        <meta property="og:description" content="Odgovori na najčešća pitanja o masaži u Studio Milina." />
        <meta property="og:url" content="https://milinamasaza.com/najcesca-pitanja" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://milinamasaza.com/images/mila-u-studiju.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="canonical" href="https://milinamasaza.com/najcesca-pitanja" />
        <script type="application/ld+json">{jsonLdScript(getFAQSchema(faqItems))}</script>
        <script type="application/ld+json">{jsonLdScript(getLocalBusinessSchema())}</script>
        <script type="application/ld+json">{jsonLdScript(getBreadcrumbSchema([
          { name: 'Početna', url: 'https://milinamasaza.com' },
          { name: 'Najčešća pitanja', url: 'https://milinamasaza.com/najcesca-pitanja' },
        ]))}</script>
      </Helmet>

      {/* Hero */}
      <section className="pt-32 pb-16 bg-forest text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb items={[
            { label: 'Početna', href: '/' },
            { label: 'Najčešća pitanja' },
          ]} />
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="font-serif text-4xl md:text-6xl mt-6 mb-4"
          >
            Najčešća pitanja
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-cream/70 text-lg"
          >
            Odgovori na pitanja koja najčešće dobijamo
          </motion.p>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-cream">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
          >
            <Accordion items={faqItems} initialOpen={0} />
          </motion.div>

          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            className="mt-12 text-center"
          >
            <p className="text-charcoal-light mb-4">Niste pronašli odgovor na vaše pitanje?</p>
            <a
              href="tel:+381668060301"
              className="inline-block px-8 py-3 bg-gold text-white rounded-lg hover:bg-gold-light transition-colors font-semibold"
            >
              Pozovite nas: +381 66 80 60 301
            </a>
          </motion.div>
        </div>
      </section>
    </>
  );
}
