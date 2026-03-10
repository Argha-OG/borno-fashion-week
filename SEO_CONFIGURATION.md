# Borneo Fashion Week - SEO Configuration & Documentation

## Overview

Complete SEO implementation for Borneo Fashion Week website including metadata, structured data, sitemap, and robots.txt.

---

## 1. METADATA SETUP

### Root Layout (src/app/layout.js)

**File Path:** `src/app/layout.js`

**Includes:**

- Title template for consistent branding
- Comprehensive meta description
- Primary keywords list
- Author and creator information
- Format detection rules
- Favicon and apple-touch-icon configuration
- Open Graph metadata (Facebook/Pinterest)
- Twitter Card metadata (X/Twitter)
- Robots meta tags for search engine crawling
- Google Bot specific directives

**Key Features:**

- Dynamic title templating: `%s | Borneo Fashion Week`
- Image preview support (1200x630px)
- Video preview support
- Maximum snippet, image, and video preview settings

### Page-Specific Layouts

#### Contact Page (src/app/contact/layout.js)

- **Title:** Contact Us | Borneo Fashion Week
- **Keywords:** contact, inquiries, designer application, sponsorship
- **URL:** /contact
- **Purpose:** Lead capture and inquiry management

#### Media Gallery (src/app/media/layout.js)

- **Title:** Media Gallery & Coverage | Borneo Fashion Week
- **Keywords:** gallery, videos, press coverage, highlights
- **URL:** /media
- **Purpose:** Showcase past events and press

#### Designers (src/app/designers/layout.js)

- **Title:** Featured Designers | Borneo Fashion Week
- **Keywords:** designers, ASEAN, emerging talent
- **URL:** /designers
- **Purpose:** Designer portfolio and showcase

#### About (src/app/about/layout.js)

- **Title:** About Us | Borneo Fashion Week
- **Keywords:** mission, vision, heritage, OneMediaGroup
- **URL:** /about
- **Purpose:** Brand storytelling and credibility

---

## 2. STRUCTURED DATA (Schema.org JSON-LD)

### Implementation Files

**Component:** `src/components/StructuredData.jsx`
**Schemas:** `src/lib/seo-schemas.js` (alternative reference)

### Schemas Available

#### Organization Schema

```json
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Borneo Fashion Week",
  "url": "https://borneofashionweek.com",
  "logo": "https://borneofashionweek.com/bfw-logo.svg",
  "sameAs": ["Instagram", "Facebook"],
  "contactPoint": {
    "telephone": "+60177777772",
    "email": "sharawiasaad@gmail.com"
  }
}
```

**Use Case:** Helps Google understand your organization

#### Event Schema

```json
{
  "@context": "https://schema.org",
  "@type": "Event",
  "name": "Borneo Fashion Week 2026",
  "eventStatus": "EventScheduled",
  "eventAttendanceMode": "OfflineEventAttendanceMode",
  "location": "Borneo, Malaysia"
}
```

**Use Case:** Enables rich snippets in search results

#### Breadcrumb Schema

**Use Case:** Enables breadcrumb navigation in search results

#### FAQ Schema

**Use Case:** Displays Q&A directly in search results

---

## 3. ROBOTS.TXT

**File Path:** `public/robots.txt`

**Features:**

- Allows all robots by default
- Disallows API routes and system files
- User-agent specific rules for:
  - Google (Googlebot)
  - Bing (Bingbot)
  - Blocks problematic bots (AhrefsBot, SemrushBot, etc.)
- Sitemap location declaration

**Key Rules:**

```
Disallow: /api/
Disallow: /*.json
Disallow: /.next/
Disallow: *?tab=*
Sitemap: https://borneofashionweek.com/sitemap.xml
```

---

## 4. SITEMAP

**File Path:** `src/app/sitemap.js` (Dynamic Next.js Route)

**Included Routes:**

- `/` (Home) - Priority 1.0, Weekly
- `/about` - Priority 0.8, Monthly
- `/media` - Priority 0.8, Weekly
- `/designers` - Priority 0.8, Weekly
- `/contact` - Priority 0.7, Monthly

**Format:** XML Sitemap Protocol
**Auto-generated:** Accessed at `/sitemap.xml`

---

## 5. OPEN GRAPH & SOCIAL SHARING

### Metadata Included:

- **og:title** - Page title for social previews
- **og:description** - Brief description
- **og:image** - Social sharing image (1200x630)
- **og:url** - Canonical URL
- **og:type** - Content type (website/article)
- **og:locale** - Language (en_US)

### Twitter Card Metadata:

- **twitter:card** - Card type (summary/summary_large_image)
- **twitter:title** - Tweet preview title
- **twitter:description** - Tweet preview text
- **twitter:image** - Share image
- **twitter:creator** - Creator handle (@borneofashionweek26)

---

## 6. CANONICAL URLS

Every page includes canonical URL to prevent duplicate content:

```javascript
alternates: {
  canonical: 'https://borneofashionweek.com/[page]',
}
```

**Pages:**

- `/` → https://borneofashionweek.com
- `/about` → https://borneofashionweek.com/about
- `/media` → https://borneofashionweek.com/media
- `/designers` → https://borneofashionweek.com/designers
- `/contact` → https://borneofashionweek.com/contact

---

## 7. ROBOTS META TAGS

**Global Settings:**

- `index: true` - Allow indexing
- `follow: true` - Follow links
- `googleBot.follow: true` - Google specific
- `max-snippet: -1` - Unlimited snippet length
- `max-image-preview: large` - Large image previews
- `max-video-preview: -1` - Full video previews

---

## 8. SEO BEST PRACTICES IMPLEMENTED

### ✅ Title Optimization

- Unique titles for each page
- Include primary keyword
- Keep under 60 characters
- Brand name in title

### ✅ Meta Descriptions

- Unique descriptions per page
- 150-160 character length
- Include primary keyword
- Call-to-action oriented

### ✅ Keyword Strategy

**Root Keywords:**

- Borneo Fashion Week
- BFW
- ASEAN Fashion
- Fashion Week 2026
- Emerging Designers

**Page-Specific Keywords:**

- Contact: inquiries, sponsor, designer application
- Media: gallery, videos, highlights, press
- Designers: ASEAN designers, emerging talent, fashion designer
- About: mission, vision, heritage, OneMediaGroup

### ✅ Image SEO

- Descriptive alt text on all images
- Proper file naming
- Compressed file sizes
- Lazy loading on gallery images

### ✅ Internal Linking

- Navigation between pages
- Cross-references in content
- Site structure clarity

### ✅ Mobile Optimization

- Responsive metadata
- Mobile-first design
- Touch-friendly elements

### ✅ Performance

- Next.js optimization
- Image optimization
- Code splitting
- Caching strategies

---

## 9. USAGE GUIDE

### Adding StructuredData to Pages

**Example - Home Page:**

```jsx
import {
  StructuredData,
  generateOrganizationSchema,
  generateEventSchema,
} from "@/components/StructuredData";

export default function Home() {
  return (
    <>
      <StructuredData schema={generateOrganizationSchema()} />
      <StructuredData schema={generateEventSchema()} />
      {/* Page content */}
    </>
  );
}
```

### Creating Custom Schema

```jsx
import { StructuredData } from "@/components/StructuredData";

const customSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Page Title",
  description: "Page description",
  url: "https://borneofashionweek.com/page",
};

<StructuredData schema={customSchema} />;
```

---

## 10. MONITORING & TESTING

### Tools to Use:

1. **Google Search Console** - https://search.google.com/search-console
2. **Google PageSpeed Insights** - https://pagespeed.web.dev
3. **Bing Webmaster Tools** - https://www.bing.com/webmasters
4. **Schema.org Validator** - https://validator.schema.org
5. **Open Graph Preview** - https://ogp.me

### Regular Tasks:

- Monitor search impressions and clicks
- Check indexation status
- Analyze user behavior
- Review mobile usability
- Test social sharing previews
- Validate structured data monthly

---

## 11. FUTURE ENHANCEMENTS

### Recommended Additions:

- [ ] Add breadcrumb navigation with schema
- [ ] Implement FAQ schema on home page
- [ ] Add review/rating schema for designers
- [ ] Create video schema for video content
- [ ] Implement AMP pages for mobile
- [ ] Add hreflang tags for multi-language
- [ ] Create rich results for events
- [ ] Implement local business schema

### Performance Optimizations:

- [ ] Core Web Vitals optimization
- [ ] Image optimization with WebP
- [ ] Dynamic imports for non-critical code
- [ ] Server-side rendering where beneficial
- [ ] CDN integration
- [ ] Analytics implementation

---

## 12. CHECKLIST

- [x] Meta tags configured for all pages
- [x] Robots.txt created
- [x] Sitemap generated
- [x] Open Graph tags added
- [x] Twitter Card tags added
- [x] Canonical URLs set
- [x] Structured data component created
- [x] Organization schema template
- [x] Event schema template
- [x] FAQ schema template
- [x] Breadcrumb schema template
- [ ] Google Search Console verification
- [ ] Analytics implementation
- [ ] Rich results testing
- [ ] Mobile user experience

---

## Contact & Support

For SEO-related questions or updates:

- Email: sharawiasaad@gmail.com
- Phone: +60177777772
- Instagram: @borneofashionweek26

---

**Last Updated:** March 2026
**Version:** 1.0
**Maintained By:** OneMediaGroup
