import { type ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

interface CardProps {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
  href?: string;
}

/**
 * Kartica sa mekim senkom i hover lift efektom.
 * Ako je prosleđen `href`, cela kartica postaje link.
 */
export default function Card({ children, className = '', onClick, href }: CardProps) {
  const baseClasses =
    'bg-white rounded-xl shadow-sm overflow-hidden';

  const content = (
    <motion.div
      className={`${baseClasses} ${className}`}
      whileHover={{
        y: -4,
        boxShadow: '0 12px 32px rgba(44, 74, 62, 0.10), 0 2px 8px rgba(196, 162, 101, 0.08)',
      }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      onClick={onClick}
    >
      {children}
    </motion.div>
  );

  if (href) {
    return (
      <Link to={href} className="block no-underline">
        {content}
      </Link>
    );
  }

  return content;
}
