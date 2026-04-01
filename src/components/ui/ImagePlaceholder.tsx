interface ImagePlaceholderProps {
  text: string;
  aspectRatio?: 'video' | 'square' | 'portrait' | 'wide';
  className?: string;
}

/* Mapiranje aspect ratio vrednosti na Tailwind klase */
const aspectClasses = {
  video: 'aspect-video',     // 16:9
  square: 'aspect-square',   // 1:1
  portrait: 'aspect-[3/4]',  // 3:4
  wide: 'aspect-[21/9]',     // 21:9
} as const;

/**
 * Placeholder za slike dok se ne dodaju prave fotografije.
 * Prikazuje bež pozadinu sa opisnim tekstom.
 */
export default function ImagePlaceholder({
  text,
  aspectRatio = 'video',
  className = '',
}: ImagePlaceholderProps) {
  return (
    /* ZAMENI: Ovde ide prava slika */
    <div
      className={`relative flex items-center justify-center overflow-hidden rounded-xl bg-cream-dark ${aspectClasses[aspectRatio]} ${className}`}
      role="img"
      aria-label={text}
    >
      {/* Dekorativni okvir */}
      <div className="absolute inset-3 rounded-lg border border-gold/20" />

      {/* Opisni tekst za placeholder */}
      <p className="px-6 text-center font-sans text-sm text-charcoal-light/70">
        [{text}]
      </p>
    </div>
  );
}
