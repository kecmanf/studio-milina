import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function WhatsAppButton() {
  const [showTooltip, setShowTooltip] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  // Prikaži tooltip posle 3 sekunde
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowTooltip(true);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  // Sakrij tooltip posle 8 sekundi
  useEffect(() => {
    if (showTooltip && !dismissed) {
      const timer = setTimeout(() => {
        setShowTooltip(false);
      }, 8000);
      return () => clearTimeout(timer);
    }
  }, [showTooltip, dismissed]);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-end gap-3">
      {/* Chat tooltip */}
      <AnimatePresence>
        {showTooltip && !dismissed && (
          <motion.div
            initial={{ opacity: 0, x: 20, scale: 0.8 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: 20, scale: 0.8 }}
            transition={{ type: 'spring' as const, stiffness: 300, damping: 25 }}
            className="relative bg-white rounded-2xl rounded-br-sm shadow-xl p-4 max-w-[220px]"
          >
            <button
              onClick={() => setDismissed(true)}
              className="absolute -top-2 -right-2 w-6 h-6 bg-charcoal/80 text-white rounded-full text-xs flex items-center justify-center hover:bg-charcoal transition-colors"
              aria-label="Zatvori"
            >
              ×
            </button>
            <p className="text-charcoal text-sm font-medium mb-1">Zdravo! 👋</p>
            <p className="text-charcoal-light text-xs leading-relaxed">
              Imate pitanje ili želite da zakažete termin? Pišite nam na WhatsApp!
            </p>
          </motion.div>
        )}
      </AnimatePresence>

      {/* WhatsApp dugme */}
      <motion.a
        href="https://wa.me/381668060301"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Kontaktirajte nas putem WhatsApp-a"
        className="relative flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-shadow hover:shadow-xl"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1, type: 'spring' as const, stiffness: 260, damping: 20 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setDismissed(true)}
      >
        <span className="absolute h-full w-full animate-ping rounded-full bg-[#25D366] opacity-20" />

        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 32 32"
          fill="currentColor"
          className="relative h-7 w-7"
        >
          <path d="M16.004 2.667A13.26 13.26 0 0 0 2.67 15.89a13.16 13.16 0 0 0 1.795 6.634L2.667 29.333l7.026-1.843A13.27 13.27 0 0 0 16.004 29.333 13.334 13.334 0 1 0 16.004 2.667Zm0 24.32a10.93 10.93 0 0 1-5.573-1.52l-.399-.237-4.14 1.086 1.103-4.033-.26-.415a10.88 10.88 0 0 1-1.67-5.809 10.994 10.994 0 1 1 10.94 10.928Zm6.015-8.213c-.33-.165-1.95-.963-2.253-1.073-.302-.11-.522-.165-.742.165-.22.33-.853 1.073-1.046 1.293-.193.22-.386.247-.716.083-.33-.165-1.392-.513-2.652-1.636-.98-.874-1.642-1.953-1.835-2.283-.193-.33-.02-.508.145-.672.149-.147.33-.385.495-.578.165-.193.22-.33.33-.55.11-.22.055-.413-.028-.578-.083-.165-.742-1.787-1.017-2.447-.268-.643-.54-.556-.742-.566l-.632-.011c-.22 0-.578.083-.88.413-.303.33-1.155 1.128-1.155 2.75 0 1.622 1.183 3.19 1.348 3.41.165.22 2.328 3.554 5.64 4.984.788.34 1.403.543 1.882.695.791.251 1.51.216 2.079.131.634-.094 1.951-.798 2.226-1.568.275-.77.275-1.43.193-1.568-.083-.138-.302-.22-.632-.385Z" />
        </svg>
      </motion.a>
    </div>
  );
}
