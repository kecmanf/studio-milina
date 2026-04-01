import { Helmet } from 'react-helmet-async';
import { Link, useParams, Navigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { fadeInUp, fadeIn, viewportConfig } from '../hooks/useScrollReveal';
import { getBlogPostBySlug, blogPosts } from '../data/blogPosts';
import { getBlogPostSchema, getBreadcrumbSchema, getLocalBusinessSchema, jsonLdScript } from '../utils/seo';
import Breadcrumb from '../components/ui/Breadcrumb';
import { asset } from '../utils/assets';

const blogImages: Record<string, string> = {
  'zasto-redovna-masaza': '/images/mila-u-studiju.png',
  'relaks-vs-terapeutska-masaza': '/images/masaza-ledja.jpg',
  'sportska-masaza-oporavak': '/images/masaza-stopala.png',
  'anti-celulit-masaza-maderoterapija': '/images/ambijent-studija.jpg',
  'masaza-u-trudnoci': '/images/mila-djordjevic.png',
  'priprema-za-prvu-masazu': '/images/masaza-ledja.jpg',
  'masaza-kod-bolova-u-ledjima': '/images/masaza-ledja.jpg',
  'hot-stone-masaza-sve-sto-treba-da-znate': '/images/ambijent-studija.jpg',
  'masaza-lica-za-zdravu-kozu': '/images/mila-djordjevic.png',
  'benefiti-limfne-drenaze': '/images/mila-u-studiju.png',
  'aromaterapija-lekovita-moc-etarskih-ulja': '/images/ambijent-studija.jpg',
};

export default function BlogPost() {
  const { slug } = useParams<{ slug: string }>();
  const post = slug ? getBlogPostBySlug(slug) : undefined;

  if (!post) {
    return <Navigate to="/404" replace />;
  }

  const otherPosts = blogPosts.filter(p => p.slug !== post.slug).slice(0, 3);

  const handleShare = (platform: string) => {
    const url = `https://milinamasaza.com/blog/${post.slug}`;
    if (platform === 'facebook') {
      window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`, '_blank');
    } else if (platform === 'copy') {
      navigator.clipboard.writeText(url);
      alert('Link je kopiran!');
    }
  };

  return (
    <>
      <Helmet>
        <title>{post.metaTitle}</title>
        <meta name="description" content={post.metaDescription} />
        <meta property="og:title" content={post.metaTitle} />
        <meta property="og:description" content={post.metaDescription} />
        <meta property="og:url" content={`https://milinamasaza.com/blog/${post.slug}`} />
        <meta property="og:type" content="article" />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="canonical" href={`https://milinamasaza.com/blog/${post.slug}`} />
        <script type="application/ld+json">{jsonLdScript(getBlogPostSchema(post))}</script>
        <script type="application/ld+json">{jsonLdScript(getLocalBusinessSchema())}</script>
        <script type="application/ld+json">{jsonLdScript(getBreadcrumbSchema([
          { name: 'Početna', url: 'https://milinamasaza.com' },
          { name: 'Blog', url: 'https://milinamasaza.com/blog' },
          { name: post.title, url: `https://milinamasaza.com/blog/${post.slug}` },
        ]))}</script>
      </Helmet>

      {/* Hero */}
      <section className="pt-32 pb-16 bg-forest text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb items={[
            { label: 'Početna', href: '/' },
            { label: 'Blog', href: '/blog' },
            { label: post.title },
          ]} />
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mt-6"
          >
            <span className="text-gold text-sm tracking-widest uppercase font-semibold">{post.category}</span>
            <h1 className="font-serif text-3xl md:text-5xl mt-3 mb-4 leading-tight">{post.title}</h1>
            <div className="flex items-center gap-4 text-cream/70 text-sm">
              <span>{post.date}</span>
              <span>•</span>
              <span>Autor: {post.author}</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Sadržaj */}
      <section className="py-16 bg-cream">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            className="mb-10"
          >
            <img
              src={asset(blogImages[post.slug] || '/images/mila-u-studiju.png')}
              alt={post.imageAlt}
              className="w-full h-64 md:h-96 object-cover rounded-xl"
              loading="lazy"
            />
          </motion.div>

          <motion.article
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            className="bg-white rounded-xl p-8 md:p-12 shadow-sm"
          >
            {post.content.map((section, i) => {
              if (section.type === 'h2') {
                return (
                  <h2 key={i} className="font-serif text-2xl md:text-3xl text-charcoal mt-8 mb-4 first:mt-0">
                    {section.text}
                  </h2>
                );
              }
              if (section.type === 'h3') {
                return (
                  <h3 key={i} className="font-serif text-xl md:text-2xl text-charcoal mt-6 mb-3">
                    {section.text}
                  </h3>
                );
              }
              return (
                <p key={i} className="text-charcoal-light text-lg leading-relaxed mb-4">
                  {section.text}
                </p>
              );
            })}

            {/* CTA */}
            <div className="mt-12 p-8 bg-cream rounded-xl text-center">
              <h3 className="font-serif text-2xl text-charcoal mb-3">Zainteresovani?</h3>
              <p className="text-charcoal-light mb-6">Zakažite termin u Studio Milina i osetite blagodeti profesionalne masaže.</p>
              <Link
                to="/kontakt"
                className="inline-block px-8 py-3 bg-gold text-white rounded-lg hover:bg-gold-light transition-colors font-semibold"
              >
                Zakažite termin
              </Link>
            </div>

            {/* Share */}
            <div className="mt-8 pt-8 border-t border-cream flex items-center gap-4">
              <span className="text-charcoal-light text-sm">Podelite:</span>
              <button
                onClick={() => handleShare('facebook')}
                className="w-10 h-10 bg-cream rounded-lg flex items-center justify-center hover:bg-cream-dark transition-colors"
                aria-label="Podelite na Facebook-u"
              >
                <svg className="w-5 h-5 text-charcoal-light" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </button>
              <a
                href={`https://www.instagram.com/studio.milina/`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-cream rounded-lg flex items-center justify-center hover:bg-cream-dark transition-colors"
                aria-label="Posetite nas na Instagram-u"
              >
                <svg className="w-5 h-5 text-charcoal-light" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                </svg>
              </a>
              <button
                onClick={() => handleShare('copy')}
                className="w-10 h-10 bg-cream rounded-lg flex items-center justify-center hover:bg-cream-dark transition-colors"
                aria-label="Kopirajte link"
              >
                <svg className="w-5 h-5 text-charcoal-light" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                </svg>
              </button>
            </div>
          </motion.article>

          {/* Drugi postovi */}
          {otherPosts.length > 0 && (
            <div className="mt-16">
              <h2 className="font-serif text-2xl md:text-3xl text-charcoal mb-8">Pročitajte još</h2>
              <div className="grid sm:grid-cols-3 gap-6">
                {otherPosts.map((p) => (
                  <Link
                    key={p.slug}
                    to={`/blog/${p.slug}`}
                    className="block bg-white rounded-xl overflow-hidden hover:shadow-lg transition-all duration-300 group"
                  >
                    <div className="bg-cream-dark">
                      <img
                        src={asset(blogImages[p.slug] || '/images/mila-u-studiju.png')}
                        alt={p.imageAlt}
                        className="w-full h-auto max-h-40 object-contain mx-auto"
                        loading="lazy"
                      />
                    </div>
                    <div className="p-4">
                      <span className="text-xs text-gold">{p.date}</span>
                      <h3 className="font-serif text-base text-charcoal mt-1 group-hover:text-forest transition-colors line-clamp-2">
                        {p.title}
                      </h3>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
