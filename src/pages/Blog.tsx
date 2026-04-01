import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer, viewportConfig } from '../hooks/useScrollReveal';
import { blogPosts } from '../data/blogPosts';
import { getLocalBusinessSchema, getBreadcrumbSchema, jsonLdScript } from '../utils/seo';
import Breadcrumb from '../components/ui/Breadcrumb';
import { asset } from '../utils/assets';

const blogImages: Record<string, string> = {
  'zasto-redovna-masaza': '/images/mila-u-studiju.png',
  'relaks-vs-terapeutska-masaza': '/images/masaza-ledja.jpg',
  'sportska-masaza-oporavak': '/images/masaza-stopala.png',
  'anti-celulit-masaza-maderoterapija': '/images/ambijent-studija.jpg',
  'masaza-u-trudnoci': '/images/mila-djordjevic.png',
  'priprema-za-prvu-masazu': '/images/masaza-ledja.jpg',
};

export default function Blog() {
  return (
    <>
      <Helmet>
        <title>Blog o masaži i zdravlju | Studio Milina Niš</title>
        <meta name="description" content="Stručni saveti o masaži, zdravlju i wellnessu od diplomirane terapetkinje u Nišu." />
        <meta property="og:title" content="Blog o masaži i zdravlju | Studio Milina Niš" />
        <meta property="og:description" content="Stručni saveti o masaži, zdravlju i wellnessu." />
        <meta property="og:url" content="https://milinamasaza.com/blog" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://milinamasaza.com/images/mila-u-studiju.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="canonical" href="https://milinamasaza.com/blog" />
        <script type="application/ld+json">{jsonLdScript(getLocalBusinessSchema())}</script>
        <script type="application/ld+json">{jsonLdScript(getBreadcrumbSchema([
          { name: 'Početna', url: 'https://milinamasaza.com' },
          { name: 'Blog', url: 'https://milinamasaza.com/blog' },
        ]))}</script>
      </Helmet>

      {/* Hero */}
      <section className="pt-32 pb-16 bg-forest text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb items={[
            { label: 'Početna', href: '/' },
            { label: 'Blog' },
          ]} />
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="font-serif text-4xl md:text-6xl mt-6 mb-4"
          >
            Blog
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-cream/70 text-lg"
          >
            Stručni saveti o masaži, zdravlju i wellnessu
          </motion.p>
        </div>
      </section>

      {/* Blog lista */}
      <section className="py-20 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {blogPosts.map((post) => (
              <motion.article key={post.slug} variants={fadeInUp}>
                <Link
                  to={`/blog/${post.slug}`}
                  className="block bg-white rounded-xl overflow-hidden hover:shadow-lg transition-all duration-300 group h-full"
                >
                  <div className="bg-cream-dark">
                    <img
                      src={asset(blogImages[post.slug] || '/images/mila-u-studiju.png')}
                      alt={post.imageAlt}
                      className="w-full h-auto max-h-64 object-contain mx-auto"
                      loading="lazy"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-xs text-gold font-semibold uppercase tracking-wider">{post.category}</span>
                      <span className="text-xs text-charcoal-light">{post.date}</span>
                    </div>
                    <h2 className="font-serif text-xl text-charcoal mb-3 group-hover:text-forest transition-colors line-clamp-2">
                      {post.title}
                    </h2>
                    <p className="text-charcoal-light text-sm line-clamp-3">{post.excerpt}</p>
                    <span className="inline-block mt-4 text-gold text-sm font-semibold group-hover:text-gold-light transition-colors">
                      Pročitajte više →
                    </span>
                  </div>
                </Link>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </section>
    </>
  );
}
