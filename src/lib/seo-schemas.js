// Structured data schemas for SEO
// This file generates Schema.org structured data for various pages

export const generateOrganizationSchema = () => ({
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Borneo Fashion Week",
  url: "https://borneofashionweek.com",
  logo: "https://borneofashionweek.com/bfw-logo.svg",
  description:
    "A leading regional fashion platform connecting ASEAN designers to the global market. Celebrating the heritage and innovation of Borneo fashion.",
  foundingDate: "2019",
  sameAs: [
    "https://www.instagram.com/borneofashionweek26/",
    "https://www.facebook.com/BFW2019",
  ],
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+60177777772",
    contactType: "Customer Service",
    email: "sharawiasaad@gmail.com",
  },
  address: {
    "@type": "PostalAddress",
    addressCountry: "MY",
    addressRegion: "Sarawak",
    streetAddress: "OneMediaGroup, Borneo",
  },
});

export const generateEventSchema = () => ({
  "@context": "https://schema.org",
  "@type": "Event",
  name: "Borneo Fashion Week 2026",
  description:
    "A leading regional fashion platform connecting ASEAN designers to the global stage. Bringing Borneo to the world.",
  url: "https://borneofashionweek.com",
  image: "https://borneofashionweek.com/fwb.png",
  startDate: "2026",
  endDate: "2026",
  eventStatus: "EventScheduled",
  eventAttendanceMode: "OfflineEventAttendanceMode",
  location: {
    "@type": "Place",
    name: "Borneo, Malaysia",
    address: {
      "@type": "PostalAddress",
      addressCountry: "MY",
      addressRegion: "Sarawak",
    },
  },
  organizer: {
    "@type": "Organization",
    name: "OneMediaGroup",
    url: "https://borneofashionweek.com",
  },
});

export const generateBreadcrumbSchema = (breadcrumbs) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: breadcrumbs.map((crumb, index) => ({
    "@type": "ListItem",
    position: index + 1,
    name: crumb.name,
    item: crumb.url,
  })),
});

export const generateFAQSchema = (faqs) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
});

export const generatePersonSchema = (designer) => ({
  "@context": "https://schema.org",
  "@type": "Person",
  name: designer.name,
  image: designer.image,
  jobTitle: "Fashion Designer",
  description: designer.bio,
  url: designer.url,
  nationality: {
    "@type": "Country",
    name: designer.country,
  },
});

export const generateWebPageSchema = (page) => ({
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: page.title,
  description: page.description,
  url: page.url,
  image: {
    "@type": "ImageObject",
    url: page.imageUrl,
    width: 1200,
    height: 630,
  },
  datePublished: page.datePublished,
  dateModified: page.dateModified,
  author: {
    "@type": "Organization",
    name: "OneMediaGroup",
  },
});
