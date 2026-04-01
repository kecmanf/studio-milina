import { motion } from 'framer-motion';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  light?: boolean; // koristi se na tamnim pozadinama
}

/**
 * Naslov sekcije sa dekorativnom zlatnom linijom.
 * Animacija fade-in pri skrolovanju.
 */
export default function SectionHeading({
  title,
  subtitle,
  centered = true,
  light = false,
}: SectionHeadingProps) {
  const alignment = centered ? 'text-center items-center' : 'text-left items-start';
  const titleColor = light ? 'text-cream' : 'text-charcoal';
  const subtitleColor = light ? 'text-cream/80' : 'text-charcoal-light';

  return (
    <motion.div
      className={`flex flex-col ${alignment} mb-12`}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <h2 className={`font-serif text-3xl md:text-4xl lg:text-5xl font-bold ${titleColor}`}>
        {title}
      </h2>

      {/* Dekorativna zlatna linija */}
      <div className="mt-4 mb-4 flex items-center gap-2">
        <span className="block h-[1px] w-8 bg-gold/50" />
        <span className="block h-[2px] w-12 bg-gold" />
        <span className="block h-[1px] w-8 bg-gold/50" />
      </div>

      {subtitle && (
        <p className={`font-sans text-lg md:text-xl ${subtitleColor} max-w-2xl`}>
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
