export interface SchemaOrgData {
  [key: string]: unknown;
}

// LocalBusiness schema - koristi se na svim stranicama
export function getLocalBusinessSchema(): SchemaOrgData {
  return {
    '@context': 'https://schema.org',
    '@type': 'HealthAndBeautyBusiness',
    name: 'Studio Milina',
    description: 'Profesionalni studio za masažu u Nišu. Relaks, terapeutska, sportska, anti celulit masaža i drugi tretmani. Diplomirana terapetkinja sa DIF-a.',
    url: 'https://milinamasaza.com',
    telephone: '+381668060301',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Zmaja od Noćaja 15',
      addressLocality: 'Niš',
      addressRegion: 'Nišavski okrug',
      postalCode: '18000',
      addressCountry: 'RS',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 43.3209,
      longitude: 21.8958,
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '09:00',
        closes: '21:00',
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: 'Saturday',
        opens: '10:00',
        closes: '18:00',
      },
    ],
    priceRange: '$$',
    image: 'https://milinamasaza.com/og-image.jpg',
    logo: 'https://milinamasaza.com/favicon.svg',
    sameAs: ['https://www.instagram.com/studio.milina/'],
    areaServed: [
      { '@type': 'City', name: 'Niš' },
      { '@type': 'City', name: 'Niška Banja' },
      { '@type': 'Country', name: 'Srbija' },
    ],
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '5.0',
      reviewCount: '23',
      bestRating: '5',
      worstRating: '1',
    },
  };
}

export function getOrganizationSchema(): SchemaOrgData {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Studio Milina',
    url: 'https://milinamasaza.com',
    logo: 'https://milinamasaza.com/favicon.svg',
    sameAs: ['https://www.instagram.com/studio.milina/'],
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+381668060301',
      contactType: 'customer service',
      availableLanguage: 'Serbian',
    },
  };
}

export function getWebsiteSchema(): SchemaOrgData {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Studio Milina',
    url: 'https://milinamasaza.com',
    potentialAction: {
      '@type': 'SearchAction',
      target: 'https://milinamasaza.com/usluge?q={search_term_string}',
      'query-input': 'required name=search_term_string',
    },
  };
}

export function getServiceSchema(service: {
  name: string;
  description: string;
  duration: string;
  price: string;
  slug: string;
}): SchemaOrgData {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: service.name,
    description: service.description,
    provider: {
      '@type': 'HealthAndBeautyBusiness',
      name: 'Studio Milina',
      url: 'https://milinamasaza.com',
    },
    areaServed: {
      '@type': 'City',
      name: 'Niš',
    },
    url: `https://milinamasaza.com/usluge/${service.slug}`,
    offers: {
      '@type': 'Offer',
      price: service.price,
      priceCurrency: 'RSD',
      availability: 'https://schema.org/InStock',
    },
  };
}

export function getFAQSchema(items: { question: string; answer: string }[]): SchemaOrgData {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map(item => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  };
}

export function getBlogPostSchema(post: {
  title: string;
  excerpt: string;
  date: string;
  slug: string;
  imageAlt: string;
}): SchemaOrgData {
  return {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    author: {
      '@type': 'Person',
      name: 'Mila Đorđević',
      jobTitle: 'Diplomirana terapetkinja',
    },
    publisher: {
      '@type': 'Organization',
      name: 'Studio Milina',
      url: 'https://milinamasaza.com',
    },
    url: `https://milinamasaza.com/blog/${post.slug}`,
    image: `https://milinamasaza.com/blog/${post.slug}.jpg`,
  };
}

export function getBreadcrumbSchema(items: { name: string; url: string }[]): SchemaOrgData {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

// Helper za renderovanje JSON-LD skripte
export function jsonLdScript(data: SchemaOrgData): string {
  return JSON.stringify(data);
}
