import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer, slideInLeft, slideInRight, viewportConfig } from '../hooks/useScrollReveal';
import { getLocalBusinessSchema, getBreadcrumbSchema, jsonLdScript } from '../utils/seo';
import Breadcrumb from '../components/ui/Breadcrumb';
import SectionHeading from '../components/ui/SectionHeading';
import { asset } from '../utils/assets';

const milestones = [
  { year: '[GODINA]', title: 'Završen Fakultet sporta i fizičkog vaspitanja (DIF)', desc: 'Diploma iz oblasti fizičke kulture' },
  { year: '[GODINA]', title: 'Specijalizacija za masažne tehnike', desc: 'Sertifikati za relaks, terapeutsku i sportsku masažu' },
  { year: '[GODINA]', title: 'Osnivanje Studio Milina', desc: 'Otvaranje profesionalnog studija za masažu u Nišu' },
  { year: '[GODINA]', title: 'Master studije', desc: 'Nastavak akademskog usavršavanja' },
  { year: '[GODINA]', title: 'Proširenje usluga', desc: 'Uvođenje maderoterapije, limfne drenaže i hot stone masaže' },
];

const certificates = [
  '[SERTIFIKAT 1]',
  '[SERTIFIKAT 2]',
  '[SERTIFIKAT 3]',
  '[SERTIFIKAT 4]',
  '[SERTIFIKAT 5]',
  '[SERTIFIKAT 6]',
  '[SERTIFIKAT 7]',
  '[SERTIFIKAT 8]',
];

export default function About() {
  return (
    <>
      <Helmet>
        <title>O nama | Mila Đorđević | Studio Milina Niš</title>
        <meta name="description" content="Upoznajte Milu Đorđević, diplomiranu terapetkinju iz Niša sa DIF diplomom i brojnim sertifikatima za profesionalnu masažu." />
        <meta property="og:title" content="O nama | Mila Đorđević | Studio Milina Niš" />
        <meta property="og:description" content="Upoznajte Milu Đorđević, diplomiranu terapetkinju iz Niša." />
        <meta property="og:url" content="https://milinamasaza.com/o-nama" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://milinamasaza.com/images/mila-djordjevic.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="canonical" href="https://milinamasaza.com/o-nama" />
        <script type="application/ld+json">{jsonLdScript(getLocalBusinessSchema())}</script>
        <script type="application/ld+json">{jsonLdScript(getBreadcrumbSchema([
          { name: 'Početna', url: 'https://milinamasaza.com' },
          { name: 'O nama', url: 'https://milinamasaza.com/o-nama' },
        ]))}</script>
      </Helmet>

      {/* Hero */}
      <section className="pt-32 pb-16 bg-forest text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb items={[
            { label: 'Početna', href: '/' },
            { label: 'O nama' },
          ]} />
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="font-serif text-4xl md:text-6xl mt-6 mb-4"
          >
            O nama
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-cream/70 text-lg"
          >
            Upoznajte Milu Đorđević i Studio Milina
          </motion.p>
        </div>
      </section>

      {/* Biografija */}
      <section className="py-20 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-start">
            <motion.div
              variants={slideInLeft}
              initial="hidden"
              whileInView="visible"
              viewport={viewportConfig}
            >
              <img
                src={asset("/images/mila-djordjevic.png")}
                alt="Mila Đorđević — diplomirana terapetkinja, Studio Milina Niš"
                className="rounded-xl object-cover w-full aspect-[3/4]"
                loading="lazy"
              />
            </motion.div>

            <motion.div
              variants={slideInRight}
              initial="hidden"
              whileInView="visible"
              viewport={viewportConfig}
            >
              <span className="text-gold text-sm tracking-widest uppercase font-semibold">Vaša terapetkinja</span>
              <h2 className="font-serif text-3xl md:text-4xl text-charcoal mt-3 mb-6">Mila Đorđević</h2>
              <div className="w-16 h-0.5 bg-gold mb-6" />

              <p className="text-charcoal-light text-lg leading-relaxed mb-4">
                Mila Đorđević je diplomirana profesionalna maserka iz Niša čija strast prema masaži i
                brizi o telu datira još iz studentskih dana. Završila je Fakultet sporta i fizičkog
                vaspitanja (DIF) u Nišu, gde je stekla sveobuhvatno znanje o anatomiji, fiziologiji
                i kineziologiji ljudskog tela.
              </p>
              <p className="text-charcoal-light text-lg leading-relaxed mb-4">
                Trenutno je na master studijama gde nastavlja da produbljuje svoje akademsko obrazovanje.
                Pored formalnog obrazovanja, Mila poseduje brojne sertifikate i završene obuke za
                različite tehnike masaže, od klasične relaks i terapeutske masaže, preko sportske i
                deep tissue, do specijalizovanih tehnika poput maderoterapije i limfne drenaže.
              </p>
              <p className="text-charcoal-light text-lg leading-relaxed mb-4">
                Njena filozofija rada temelji se na individualnom pristupu svakom klijentu. Mila
                veruje da svako telo ima svoje specifične potrebe i da ne postoji univerzalni
                tretman koji odgovara svima. Zato pre svakog tretmana pažljivo sluša klijente,
                procenjuje njihovo stanje i prilagođava tehniku i intenzitet masaže.
              </p>
              <p className="text-charcoal-light text-lg leading-relaxed">
                Studio Milina je osnovan iz želje da Nišu pruži prostor gde se profesionalnost
                spaja sa toplom i opuštajućom atmosferom. Mila je osmislila studio kao mesto
                gde svaki klijent može da se oseti posebnim i zbrinutim, a svaki tretman
                je iskustvo za pamćenje.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Sertifikati */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading title="Sertifikati i obuke" subtitle="Kontinuirano stručno usavršavanje" />

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-12"
          >
            {certificates.map((cert, i) => (
              <motion.div
                key={i}
                variants={fadeInUp}
                className="bg-cream p-6 rounded-xl text-center"
              >
                <svg className="w-10 h-10 text-gold mx-auto mb-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
                <p className="text-charcoal text-sm font-medium">{cert}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-cream">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading title="Profesionalni put" subtitle="Ključne tačke karijere" />

          <div className="mt-12 relative">
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gold/30 -translate-x-1/2" />

            {milestones.map((m, i) => (
              <motion.div
                key={i}
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={viewportConfig}
                className={`relative flex items-start gap-6 mb-10 last:mb-0 ${
                  i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-gold rounded-full -translate-x-1/2 mt-1.5 z-10" />
                <div className={`ml-12 md:ml-0 md:w-1/2 ${i % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12'}`}>
                  <span className="text-gold font-semibold text-sm">{m.year}</span>
                  <h3 className="font-serif text-xl text-charcoal mt-1">{m.title}</h3>
                  <p className="text-charcoal-light text-sm mt-1">{m.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* O studiju */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading title="Naš studio" subtitle="Prostor dizajniran za vaše opuštanje" />

          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            className="max-w-3xl mx-auto text-center mt-8 mb-12"
          >
            <p className="text-charcoal-light text-lg leading-relaxed">
              Studio Milina se nalazi u centru Niša, u prijatnom i mirnom okruženju koje je idealno
              za opuštanje. Prostor je pažljivo dizajniran sa fokusom na udobnost — od tople rasvete
              i umirujućih tonova, do kvalitetne opreme i ugodne atmosfere. Svaki detalj je osmišljen
              da vaše iskustvo bude potpuno i nezaboravno.
            </p>
          </motion.div>

          {/* Galerija */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            className="grid grid-cols-2 md:grid-cols-3 gap-4"
          >
            {[
              { src: '/images/ambijent-studija.jpg', alt: 'Ambijent Studio Milina Niš — profesionalna masaža' },
              { src: '/images/masaza-ledja.jpg', alt: 'Terapeutska masaža leđa u Studio Milina Niš' },
              { src: '/images/mila-diploma.jpg', alt: 'Mila Đorđević — diploma Fakulteta sporta i fizičkog vaspitanja Niš' },
              { src: '/images/mila-u-studiju.png', alt: 'Mila Đorđević tokom tretmana masaže u Nišu' },
              { src: '/images/masaza-stopala.png', alt: 'Masaža stopala i nogu u Studio Milina Niš' },
              { src: '/images/mila-djordjevic.png', alt: 'Mila Đorđević — sertifikovana maserka Niš' },
            ].map((img, i) => (
              <motion.div key={i} variants={fadeInUp}>
                <img
                  src={asset(img.src)}
                  alt={img.alt}
                  className={`rounded-xl object-cover w-full ${i === 0 || i === 5 ? 'aspect-video' : 'aspect-square'}`}
                  loading="lazy"
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-charcoal text-white text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="font-serif text-3xl md:text-4xl mb-6">Zakažite termin</h2>
          <p className="text-cream/70 mb-8">Prepustite se profesionalnim rukama u Studio Milina</p>
          <Link
            to="/kontakt"
            className="inline-block px-8 py-4 bg-gold text-white rounded-lg hover:bg-gold-light transition-colors font-semibold"
          >
            Kontaktirajte nas
          </Link>
        </div>
      </section>
    </>
  );
}
