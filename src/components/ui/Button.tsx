import { type ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

/* Varijante dugmeta za različite stilove */
const variantStyles = {
  primary:
    'bg-gold text-white hover:bg-gold-light focus-visible:ring-gold',
  secondary:
    'bg-forest text-white hover:bg-forest-light focus-visible:ring-forest',
  outline:
    'border-2 border-gold text-gold hover:bg-gold hover:text-white focus-visible:ring-gold',
} as const;

const sizeStyles = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-3 text-base',
  lg: 'px-8 py-4 text-lg',
} as const;

interface ButtonProps {
  variant?: keyof typeof variantStyles;
  size?: keyof typeof sizeStyles;
  children: ReactNode;
  href?: string;
  className?: string;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  ariaLabel?: string;
}

/**
 * Višenamensko dugme sa animacijom.
 * Ako je prosleđen `href`, renderuje se kao React Router Link.
 */
export default function Button({
  variant = 'primary',
  size = 'md',
  children,
  href,
  className = '',
  onClick,
  type = 'button',
  ariaLabel,
}: ButtonProps) {
  const baseClasses =
    'inline-flex items-center justify-center font-sans font-semibold rounded-xl transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 cursor-pointer';

  const classes = `${baseClasses} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`;

  /* Animacija pri hoveru i kliku */
  const motionProps = {
    whileHover: { scale: 1.02, boxShadow: '0 4px 20px rgba(196, 162, 101, 0.3)' },
    whileTap: { scale: 0.98 },
    transition: { type: 'spring' as const, stiffness: 400, damping: 17 },
  };

  if (href) {
    return (
      <motion.div {...motionProps} className="inline-block">
        <Link to={href} className={classes} aria-label={ariaLabel}>
          {children}
        </Link>
      </motion.div>
    );
  }

  return (
    <motion.button
      {...motionProps}
      type={type}
      className={classes}
      onClick={onClick}
      aria-label={ariaLabel}
    >
      {children}
    </motion.button>
  );
}
