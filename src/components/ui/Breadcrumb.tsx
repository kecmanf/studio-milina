import { Link } from 'react-router-dom';

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

/**
 * Breadcrumb navigacija.
 * Poslednja stavka je trenutna stranica (bez linka).
 */
export default function Breadcrumb({ items }: BreadcrumbProps) {
  return (
    <nav aria-label="Breadcrumb navigacija" className="py-4">
      <ol className="flex flex-wrap items-center gap-1 font-sans text-sm text-charcoal-light">
        {items.map((item, index) => {
          const isLast = index === items.length - 1;

          return (
            <li key={index} className="flex items-center gap-1">
              {/* Separator između stavki */}
              {index > 0 && (
                <span className="mx-1 text-gold/60" aria-hidden="true">
                  /
                </span>
              )}

              {isLast || !item.href ? (
                <span className="text-charcoal font-medium" aria-current={isLast ? 'page' : undefined}>
                  {item.label}
                </span>
              ) : (
                <Link
                  to={item.href}
                  className="text-charcoal-light transition-colors duration-200 hover:text-gold"
                >
                  {item.label}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
