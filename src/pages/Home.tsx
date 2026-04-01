import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { fadeInUp, fadeIn, staggerContainer, slideInLeft, slideInRight, viewportConfig } from '../hooks/useScrollReveal';
import { testimonials } from '../data/testimonials';
import { getLocalBusinessSchema, getWebsiteSchema, getOrganizationSchema, jsonLdScript } from '../utils/seo';
import SectionHeading from '../components/ui/SectionHeading';
import { asset } from '../utils/assets';

const featuredServices = [
  { name: 'Relaks masaža', slug: 'relaks-masaza-celog-tela', icon: '✦', desc: 'Potpuno opuštanje tela i uma' },
  { name: 'Terapeutska masaža', slug: 'terapeutska-masaza-celog-tela', icon: '✦', desc: 'Otklanjanje bolova i tegoba' },
  { name: 'Sportska masaža', slug: 'sportska-masaza-celog-tela', icon: '✦', desc: 'Oporavak i bolje performanse' },
  { name: 'Deep tissue', slug: 'deep-tissue-masaza', icon: '✦', desc: 'Dubinski rad na mišićima' },
  { name: 'Anti celulit', slug: 'anti-celulit-masaza', icon: '✦', desc: 'Oblikovanje i tonizacija' },
  { name: 'Hot stone', slug: 'hot-stone-masaza', icon: '✦', desc: 'Luksuzni tretman toplim kamenjem' },
];

const uspItems = [
  { title: 'Diplomirana terapetkinja (DIF)', desc: 'Fakultetsko obrazovanje iz oblasti sporta i fizičkog vaspitanja', icon: '🎓' },
  { title: 'Individualni pristup', desc: 'Svaki tretman je prilagođen vašim potrebama i ciljevima', icon: '🤝' },
  { title: 'Sertifikovane tehnike', desc: 'Brojni sertifikati za različite masažne tehnike', icon: '📜' },
  { title: 'Prijatan ambijent', desc: 'Opuštajuća atmosfera u centru Niša', icon: '🌿' },
];

export default function Home() {
  return (
    <>
      <Helmet>
        <title>Studio Milina | Profesionalna masaža Niš</title>
        <meta name="description" content="Studio Milina u Nišu nudi profesionalnu relaks, terapeutsku, sportsku i anti celulit masažu. Diplomirana terapetkinja sa DIF-a. Zakažite termin: +381 66 80 60 301" />
        <meta property="og:title" content="Studio Milina | Profesionalna masaža Niš" />
        <meta property="og:description" content="Studio Milina u Nišu nudi profesionalnu relaks, terapeutsku, sportsku i anti celulit masažu. Diplomirana terapetkinja sa DIF-a." />
        <meta property="og:url" content="https://milinamasaza.com" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://milinamasaza.com/og-image.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Studio Milina | Profesionalna masaža Niš" />
        <meta name="twitter:description" content="Profesionalna masaža u Nišu. Relaks, terapeutska, sportska i anti celulit masaža." />
        <link rel="canonical" href="https://milinamasaza.com" />
        <meta name="keywords" content="masaža Niš, profesionalna masaža Niš, studio za masažu Niš, relaks masaža Niš, terapeutska masaža Niš" />
        <script type="application/ld+json">{jsonLdScript(getLocalBusinessSchema())}</script>
        <script type="application/ld+json">{jsonLdScript(getWebsiteSchema())}</script>
        <script type="application/ld+json">{jsonLdScript(getOrganizationSchema())}</script>
      </Helmet>

      {/* Hero sekcija */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-charcoal">
          <img
            src={asset("/images/mila-u-studiju.png")}
            alt="Studio Milina — profesionalna masaža u Nišu"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-charcoal/70 via-charcoal/50 to-charcoal/80" />
        </div>

        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="inline-block mb-6 px-6 py-2 border border-gold/50 rounded-full"
          >
            <span className="text-gold text-sm tracking-widest uppercase font-sans">
              Diplomirana terapetkinja | DIF Niš
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="font-serif text-5xl md:text-7xl lg:text-8xl text-white mb-6 leading-tight"
          >
            Studio Milina
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-cream/80 text-xl md:text-2xl mb-10 font-light"
          >
            Profesionalna masaža u Nišu
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link
              to="/kontakt"
              className="inline-block px-8 py-4 bg-gold text-white font-semibold rounded-lg hover:bg-gold-light transition-colors duration-300 text-lg"
            >
              Zakažite termin
            </Link>
            <Link
              to="/usluge"
              className="inline-block px-8 py-4 border-2 border-white/30 text-white font-semibold rounded-lg hover:bg-white/10 transition-colors duration-300 text-lg"
            >
              Pogledajte usluge
            </Link>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1.5 h-1.5 bg-white/60 rounded-full mt-2"
            />
          </div>
        </motion.div>
      </section>

      {/* Kratko o studiju */}
      <section className="py-20 md:py-28 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
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
              <span className="text-gold text-sm tracking-widest uppercase font-semibold">O nama</span>
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-charcoal mt-3 mb-6">
                Dobrodošli u Studio Milina
              </h2>
              <div className="w-16 h-0.5 bg-gold mb-6" />
              <p className="text-charcoal-light text-lg leading-relaxed mb-4">
                Studio Milina je profesionalni studio za masažu u srcu Niša, osnovan sa vizijom pružanja
                tretmana najvišeg kvaliteta. Iza svakog tretmana stoji Mila Đorđević — diplomirana
                terapetkinja sa Fakulteta sporta i fizičkog vaspitanja, koja kombinuje akademsko znanje sa
                praktičnim iskustvom i brojnim sertifikatima.
              </p>
              <p className="text-charcoal-light text-lg leading-relaxed mb-8">
                Naš pristup je individualan — svaki tretman prilagođavamo vašim specifičnim potrebama,
                jer verujemo da ne postoje dva ista tela niti dva ista problema.
              </p>
              <Link
                to="/o-nama"
                className="inline-flex items-center text-gold font-semibold hover:text-gold-light transition-colors group"
              >
                Saznajte više o nama
                <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Izdvojene usluge */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Naši tretmani"
            subtitle="Izaberite tretman koji vam najviše odgovara"
          />

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12"
          >
            {featuredServices.map((service) => (
              <motion.div key={service.slug} variants={fadeInUp}>
                <Link
                  to={`/usluge/${service.slug}`}
                  className="block p-8 bg-cream rounded-xl hover:shadow-lg transition-all duration-300 group"
                >
                  <span className="text-gold text-2xl">{service.icon}</span>
                  <h3 className="font-serif text-xl text-charcoal mt-4 mb-2 group-hover:text-forest transition-colors">
                    {service.name}
                  </h3>
                  <p className="text-charcoal-light text-sm">{service.desc}</p>
                </Link>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            className="text-center mt-12"
          >
            <Link
              to="/usluge"
              className="inline-block px-8 py-3 bg-forest text-white rounded-lg hover:bg-forest-light transition-colors duration-300 font-semibold"
            >
              Sve usluge
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Zašto Studio Milina (USP) */}
      <section className="py-20 md:py-28 bg-forest text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Zašto Studio Milina"
            subtitle="Ono što nas izdvaja"
            light
          />

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-12"
          >
            {uspItems.map((item) => (
              <motion.div key={item.title} variants={fadeInUp} className="text-center">
                <span className="text-4xl mb-4 block">{item.icon}</span>
                <h3 className="font-serif text-xl mb-3">{item.title}</h3>
                <p className="text-cream/70 text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Proces zakazivanja */}
      <section className="py-20 md:py-28 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Kako zakazati termin"
            subtitle="Jednostavan proces u tri koraka"
          />

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            className="grid md:grid-cols-3 gap-8 mt-12"
          >
            {[
              { step: '01', title: 'Pozovite nas', desc: 'Kontaktirajte nas telefonom ili putem WhatsApp-a' },
              { step: '02', title: 'Dogovorimo termin', desc: 'Zajedno biramo vreme koje vam najviše odgovara' },
              { step: '03', title: 'Uživajte u tretmanu', desc: 'Prepustite se rukama profesionalne terapetkinje' },
            ].map((item, i) => (
              <motion.div key={item.step} variants={fadeInUp} className="text-center">
                <div className="w-16 h-16 mx-auto bg-gold text-white rounded-full flex items-center justify-center font-serif text-xl font-bold mb-6">
                  {item.step}
                </div>
                <h3 className="font-serif text-2xl text-charcoal mb-3">{item.title}</h3>
                <p className="text-charcoal-light">{item.desc}</p>
                {i < 2 && (
                  <div className="hidden md:block mt-6">
                    <svg className="w-8 h-8 mx-auto text-gold/30" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                )}
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            className="flex flex-col sm:flex-row gap-4 justify-center mt-12"
          >
            <a
              href="tel:+381668060301"
              className="inline-flex items-center justify-center px-8 py-3 bg-gold text-white rounded-lg hover:bg-gold-light transition-colors duration-300 font-semibold"
            >
              <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              +381 66 80 60 301
            </a>
            <a
              href="https://wa.me/381668060301"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-3 bg-[#25D366] text-white rounded-lg hover:bg-[#20BD5A] transition-colors duration-300 font-semibold"
            >
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              WhatsApp
            </a>
          </motion.div>
        </div>
      </section>

      {/* Google recenzije */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Utisci klijenata"
            subtitle="Šta kažu naši zadovoljni klijenti"
          />

          {/* Google rating badge */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            className="flex items-center justify-center gap-3 mt-8 mb-12"
          >
            <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none">
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4"/>
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
            </svg>
            <div>
              <div className="flex items-center gap-1">
                <span className="text-2xl font-bold text-charcoal">5.0</span>
                <div className="flex gap-0.5">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-[#FBBC05]" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
              <p className="text-charcoal-light text-sm">23 recenzije na Google-u</p>
            </div>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {testimonials.slice(0, 6).map((t) => (
              <motion.div
                key={t.id}
                variants={fadeInUp}
                className="bg-cream p-6 rounded-xl"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex gap-0.5">
                    {Array.from({ length: t.rating }).map((_, i) => (
                      <svg key={i} className="w-4 h-4 text-[#FBBC05]" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <svg className="w-5 h-5 opacity-40" viewBox="0 0 24 24">
                    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4"/>
                    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                  </svg>
                </div>
                <p className="text-charcoal-light text-sm leading-relaxed mb-4">
                  „{t.text}"
                </p>
                <p className="font-semibold text-charcoal text-sm">{t.name}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA sekcija pre footera */}
      <section className="py-20 md:py-28 bg-charcoal text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
          >
            <h2 className="font-serif text-3xl md:text-5xl mb-6">Zakažite svoj termin danas</h2>
            <p className="text-cream/70 text-lg mb-10 max-w-2xl mx-auto">
              Poklonite svom telu odmor koji zaslužuje. Kontaktirajte nas i zakažite tretman u Studio Milina u Nišu.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+381668060301"
                className="inline-block px-8 py-4 bg-gold text-white rounded-lg hover:bg-gold-light transition-colors duration-300 font-semibold text-lg"
              >
                +381 66 80 60 301
              </a>
              <a
                href="https://wa.me/381668060301"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-8 py-4 bg-[#25D366] text-white rounded-lg hover:bg-[#20BD5A] transition-colors duration-300 font-semibold text-lg"
              >
                WhatsApp
              </a>
              <Link
                to="/kontakt"
                className="inline-block px-8 py-4 border-2 border-white/30 text-white rounded-lg hover:bg-white/10 transition-colors duration-300 font-semibold text-lg"
              >
                Kontakt forma
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
