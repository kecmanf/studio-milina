import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface AccordionItem {
  question: string;
  answer: string;
}

interface AccordionProps {
  items: AccordionItem[];
  initialOpen?: number; // indeks stavke koja je inicijalno otvorena
}

/**
 * Accordion komponenta za FAQ stranicu.
 * Glatka animacija otvaranja/zatvaranja sa zlatnim akcentom na aktivnoj stavci.
 */
export default function Accordion({ items, initialOpen }: AccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(initialOpen ?? null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="space-y-3">
      {items.map((item, index) => {
        const isOpen = openIndex === index;

        return (
          <div
            key={index}
            className={`rounded-xl border transition-colors duration-300 ${
              isOpen
                ? 'border-gold bg-white shadow-sm'
                : 'border-cream-dark bg-white/60 hover:bg-white'
            }`}
          >
            {/* Zaglavlje pitanja */}
            <button
              onClick={() => toggle(index)}
              className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left cursor-pointer"
              aria-expanded={isOpen}
            >
              <span
                className={`font-serif text-lg md:text-xl transition-colors duration-300 ${
                  isOpen ? 'text-forest' : 'text-charcoal'
                }`}
              >
                {item.question}
              </span>

              {/* Ikonica za otvaranje/zatvaranje */}
              <motion.span
                animate={{ rotate: isOpen ? 45 : 0 }}
                transition={{ duration: 0.25, ease: 'easeInOut' }}
                className={`flex-shrink-0 text-2xl leading-none ${
                  isOpen ? 'text-gold' : 'text-charcoal-light'
                }`}
              >
                +
              </motion.span>
            </button>

            {/* Sadržaj odgovora */}
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: 'easeInOut' }}
                  className="overflow-hidden"
                >
                  <div className="px-6 pb-5">
                    {/* Zlatna dekorativna linija iznad odgovora */}
                    <div className="mb-3 h-[1px] w-12 bg-gold/40" />
                    <p className="font-sans text-base leading-relaxed text-charcoal-light">
                      {item.answer}
                    </p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
