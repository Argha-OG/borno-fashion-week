"use client";

import { useEffect } from "react";

export function StructuredData({ schema }) {
  useEffect(() => {
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.innerHTML = JSON.stringify(schema);
    document.head.appendChild(script);
    return () => {
      document.head.removeChild(script);
    };
  }, [schema]);

  return null;
}

// Export common schema generators
export const generateOrganizationSchema = () => ({
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Borneo Fashion Week",
  url: "https://borneofashionweek.com",
  logo: "https://borneofashionweek.com/bfw-logo.svg",
  description:
    "A leading regional fashion platform connecting ASEAN designers to the global market.",
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
    "A leading regional fashion platform connecting ASEAN designers to the global stage.",
  url: "https://borneofashionweek.com",
  image: "https://borneofashionweek.com/fwb.png",
  startDate: "2026-01-01",
  endDate: "2026-12-31",
  eventStatus: "EventScheduled",
  eventAttendanceMode: "OfflineEventAttendanceMode",
  location: {
    "@type": "Place",
    name: "Borneo, Malaysia",
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
