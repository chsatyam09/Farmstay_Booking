# Aravali Farm / FarmStay – Website Documentation

This document explains the **Aravali Farm** (FarmStay) website from scratch to end: technologies used, project structure, how and where things work, and how to run or extend the project.

**Support / Case ID:** 4-2290000040346

---

## 1. Overview

- **What it is:** A marketing and booking-oriented website for luxury farmhouses in **Gurgaon** and **Noida** (Delhi NCR).
- **Purpose:** Showcase properties (pool, bonfire, parties, weddings, weekend stays), drive inquiries, and support SEO for terms like “farmhouse for party in Gurgaon”, “farmhouse with pool”, etc.
- **Deployment:** Built as a **static export** (HTML/CSS/JS) so it can be hosted on any static host (e.g. Netlify, Vercel, or plain web server) without a Node server.

---

## 2. Technology Stack

| Technology | Version / Usage | Where & How |
|------------|-----------------|-------------|
| **Next.js** | 14.0.0 | App Router (`app/`). Handles routing, layouts, metadata, and static export. |
| **React** | 18.x | UI components and client interactivity. |
| **TypeScript** | 5.x | All `.ts` / `.tsx` files; type safety across app and data. |
| **Tailwind CSS** | 4.x | Utility classes in `tailwind.config.js`; used alongside custom CSS. |
| **PostCSS** | 8.x | Used with `autoprefixer` (see `postcss.config.js`) for CSS processing. |
| **ESLint** | 8.x | Linting with `eslint-config-next`. |
| **Local font** | — | Custom font loaded via `next/font/local` in `app/layout.tsx` (`customfont.ttf`). |
| **Google Fonts** | — | Playfair Display, Poppins, Montserrat linked in `layout.tsx` for footer/UI. |

**Build output:**  
- **Development:** `npm run dev` → dev server with hot reload.  
- **Production:** `npm run build` → static export to `out/`; script then moves it to `dist/` (`next build && rm -rf dist && mv out dist`).

**Config files:**  
- `next.config.js` – `output: 'export'` in production, image domains for Unsplash/placeholder.  
- `tailwind.config.js` – content paths, custom font names, custom color (e.g. brown-sugar).  
- `tsconfig.json` – path alias `@/*` → project root.  
- `postcss.config.js` – PostCSS plugins (autoprefixer).

---

## 3. Project Structure (High Level)

```
FarmStay_New/
├── app/                    # Next.js App Router
│   ├── layout.tsx          # Root layout: HTML, metadata, fonts, analytics, JSON-LD
│   ├── page.tsx            # Home: renders HomePage from home/index
│   ├── globals.css         # Global styles, Tailwind, custom classes
│   ├── home/               # Home page composition
│   │   ├── index.tsx       # HomePage: Navigation, GurgaonHome, ScrollToTop
│   │   ├── GurgaonHome.tsx # Slideshow → PropertyGallery → ClientReview → Footer
│   │   └── NoidaHome.tsx   # Alternate home (Slideshow, MomentsSection, ClientReview, Footer)
│   ├── Gallery/
│   │   ├── layout.tsx      # Gallery-specific metadata
│   │   └── page.tsx        # Gallery page: hero, PropertyGallery, filters, Footer
│   ├── contact/
│   │   └── page.tsx        # Contact page: form, success modal, property links
│   ├── amenities/
│   │   ├── layout.tsx      # Amenities metadata
│   │   └── page.tsx        # Amenities listing page
│   ├── farmhouse-for-party-in-gurgaon/
│   │   ├── layout.tsx      # Party page metadata (SEO)
│   │   └── page.tsx        # “Farmhouse for party in Gurgaon” landing page
│   ├── property/
│   │   └── [id]/
│   │       └── page.tsx    # Dynamic property detail page (id = 1–7)
│   ├── components/         # Reusable UI components
│   │   ├── Navigation.tsx
│   │   ├── Navigationforgallery.tsx
│   │   ├── Footer.tsx
│   │   ├── Slideshow.tsx
│   │   ├── PropertyGallery.tsx
│   │   ├── PropertyDetails.tsx
│   │   ├── PropertyPhotos.tsx
│   │   ├── ImageModal.tsx
│   │   ├── ClientReview.tsx
│   │   ├── ContactForm.tsx
│   │   ├── HorizontalContactCard.tsx
│   │   ├── ContentSections.tsx
│   │   ├── MomentsSection.tsx
│   │   ├── OurProperties.tsx
│   │   ├── ScrollToTopButton.tsx
│   │   ├── Themes.tsx
│   │   └── *.css          # Component-level CSS (e.g. Slideshow.css, Navigation.css)
│   └── data/
│       └── properties.ts  # List of properties (id, title, location, price, bedrooms, etc.)
├── public/                 # Static assets
│   ├── Images/             # Property images, logos, hero images
│   │   ├── Aravali Farm Images/
│   │   └── FarmStay/       # Gurgaon farm, Noida farm images
│   ├── fonts/
│   │   └── customfont.ttf
│   └── favicon, etc.
├── next.config.js
├── tailwind.config.js
├── postcss.config.js
├── tsconfig.json
├── package.json
└── README.md
```

---

## 4. Routing & Pages

All routes are under the **App Router** (`app/`). File-based routing:

| URL | File | Description |
|-----|------|-------------|
| `/` | `app/page.tsx` → `app/home/index.tsx` + `GurgaonHome.tsx` | Home: hero slideshow, property cards, reviews, footer |
| `/Gallery` | `app/Gallery/page.tsx` | Gallery page with hero, property grid, optional filters |
| `/contact` | `app/contact/page.tsx` | Contact form, success modal, links to properties |
| `/amenities` | `app/amenities/page.tsx` | Amenities (pool, BBQ, etc.) with hero and grid |
| `/farmhouse-for-party-in-gurgaon` | `app/farmhouse-for-party-in-gurgaon/page.tsx` | SEO landing page for “farmhouse for party in Gurgaon” |
| `/property/1` … `/property/7` | `app/property/[id]/page.tsx` | Dynamic property detail page |

**Static params:**  
`app/property/[id]/page.tsx` uses `generateStaticParams()` to pre-render IDs `'1'`–`'7'`, so build produces `/property/1/index.html`, etc.

**Layouts:**  
- `app/layout.tsx`: wraps all pages (HTML, metadata, fonts, analytics, JSON-LD).  
- `app/Gallery/layout.tsx`, `app/amenities/layout.tsx`, `app/farmhouse-for-party-in-gurgaon/layout.tsx`: page-specific metadata only (no shared UI wrapper beyond root).

---

## 5. Data Layer

### 5.1 Property list (listing pages)

- **File:** `app/data/properties.ts`
- **Exports:** `Property` interface and `properties` array.
- **Used by:**  
  - `app/components/PropertyGallery.tsx` – home and Gallery page property grid.  
  - `app/contact/page.tsx` – e.g. for linking or showing property options.
- **Fields:** `id`, `title`, `location`, `price`, `bedrooms`, `bathrooms`, `image` (single image path).

### 5.2 Property detail data (detail page)

- **Where:** Inside `app/components/PropertyDetails.tsx`.
- **Structure:** A large object `propertyData: { [key: string]: Property }` keyed by id (`'1'`, `'2'`, …).
- **Fields per property:** `id`, `title`, `location`, `price`, `bedrooms`, `bathrooms`, `images[]`, `description`, `amenities[]`, `faqs[]`.
- **Usage:** `PropertyDetails` receives `propertyId` from the page and looks up `propertyData[propertyId]` to render hero, gallery, amenities, FAQs, and CTAs.
- **Note:** Listing data (`properties.ts`) and detail data (in `PropertyDetails.tsx`) are kept in sync manually (same IDs, titles, etc.).

### 5.3 Property ID conventions

Property codes follow this naming (use when adding new properties or in titles):

**Owned Properties → OP-###**

- OP-001  
- OP-002  
- OP-003  

**Rented Properties → RP-###**

- RP-001  
- RP-002  

**Commission Properties → CP-###**

- CP-001  
- CP-002  

---

## 6. Key Components – Where & How

| Component | Location | Purpose |
|-----------|----------|--------|
| **Navigation** | `app/components/Navigation.tsx` | Main nav: logo, Farmhouse (→ Gallery), Call us (→ contact). Scroll-based background (transparent → white). Mobile menu. Used on home, contact, amenities, party page. |
| **Navigationforgallery** | `app/components/Navigationforgallery.tsx` | Gallery-specific nav. Used on `app/Gallery/page.tsx`. |
| **Slideshow** | `app/components/Slideshow.tsx` | Full-viewport hero; auto-rotating slides (images from `public/Images/Aravali Farm Images/`). Overlay with title/CTA. Uses `Slideshow.css`. |
| **PropertyGallery** | `app/components/PropertyGallery.tsx` | Grid of property cards from `properties.ts`. Click → `router.push(/property/{id})`. Used on home and Gallery page. |
| **PropertyDetails** | `app/components/PropertyDetails.tsx` | Full property page: hero image, image grid, description, amenities, FAQs, contact CTAs. Uses internal `propertyData` and `ImageModal`. |
| **PropertyPhotos** | `app/components/PropertyPhotos.tsx` | Photo grid/gallery sub-component (used where property images are shown in a grid). |
| **ImageModal** | `app/components/ImageModal.tsx` | Lightbox for property images (prev/next, close). Used inside `PropertyDetails`. |
| **ClientReview** | `app/components/ClientReview.tsx` | Testimonials/reviews section. Used on home (`GurgaonHome`) and in Noida home. |
| **Footer** | `app/components/Footer.tsx` | Site footer: brand, links, contact. Used on home, Gallery, contact, amenities, party page, property page. |
| **ScrollToTopButton** | `app/components/ScrollToTopButton.tsx` | Floating “scroll to top” button; visibility based on scroll position. Used on all main pages. |
| **ContactForm** | `app/components/ContactForm.tsx` | Reusable contact form (likely used on contact page or in modals). |
| **HorizontalContactCard** | `app/components/HorizontalContactCard.tsx` | Horizontal CTA/contact card. |
| **ContentSections** | `app/components/ContentSections.tsx` | SEO/content blocks (e.g. “About our luxury farmhouse”, amenities copy). |
| **MomentsSection** | `app/components/MomentsSection.tsx` | “Moments” or highlights section; used in `NoidaHome.tsx`. |
| **OurProperties** | `app/components/OurProperties.tsx` | Additional “our properties” section (e.g. for landing pages). |
| **Themes** | `app/components/Themes.tsx` | Themed content (e.g. by occasion). Uses router. |

**Client components:**  
Most of these use `'use client'` because they need state, `useRouter`, `usePathname`, or browser APIs (scroll, resize). The **property page** itself is a Server Component that receives `params` and passes `propertyId` to the client `PropertyDetails` component.

---

## 6.1 Website details – file-to-section mapping

| File | Section / feature |
|------|-------------------|
| `app/layout.tsx` | Root layout, metadata, **favicon / icons**, JSON-LD, analytics |
| `app/amenities/layout.tsx` | Amenities page **SEO** (title, description, OpenGraph) |
| `app/amenities/page.tsx` | Amenities page content + **SEO** copy |
| `app/components/Navigation.tsx` | Top nav bar, **Top Button** (link to contact / Gallery) |
| `app/components/Slideshow.tsx` | **Hero image** (auto-rotating), **Book Now** CTA, hero **text** |
| `app/components/ScrollToTopButton.tsx` | **Circle button at bottom** (scroll to top) |
| `app/components/OurProperties.tsx` | **Our Properties** section |
| `app/components/PropertyPhotos.tsx` | **Aravālī Portraits** (property photo grid) |
| `app/components/Themes.tsx` | **What we Offer** (themed offers / occasions) |
| `app/components/ClientReview.tsx` | **“What Our Guests Say”** (testimonials) |
| `app/components/Footer.tsx` | **Footer** design and links |
| **New section – Other farm** | |
| `app/Gallery/page.tsx` | **Farm House** page + **Farm House header** |
| `app/components/PropertyGallery.tsx` | **Farm House – all property screen** (property cards grid) |
| `app/components/PropertyDetails.tsx` | **Farm House – details screen** (single property) |
| `app/data/properties.ts` | **Farm house data** (list for gallery & contact) |
| **New section – Contact us** | |
| `app/contact/page.tsx` | **Contact us page**: **Header**; **Send us a Message**; **Frequently Asked Questions**; **Cancellation Policy**; **Find Us Here** |
| `app/components/HorizontalContactCard.tsx` | **Contact us page** header / horizontal contact card |
| **Farmhouse (optional route)** | |
| `app/farmhouse/layout.tsx` | Farmhouse route layout (if used) |
| `app/farmhouse/page.tsx` | Farmhouse listing page (if used; may be replaced by `/farmhouse-for-party-in-gurgaon` in this repo) |

---

## 7. Styling

- **Tailwind:**  
  - Configured in `tailwind.config.js` (content: `pages/**`, `components/**`, `app/**`).  
  - Custom font family and color (e.g. `brown-sugar`) are extended in theme.  
  - Used for utilities across components.

- **Global CSS:**  
  - `app/globals.css`: `@tailwind base/components/utilities`, custom font-face (CustomFont), Peach Brown from CDN, resets, and utility classes (e.g. `.elegant-font`, `.content-overlay`).

- **Component CSS:**  
  - `app/components/Slideshow.css`, `app/components/Navigation.css`, `app/components/Theme.css` – scoped to those components.

- **Inline styles:**  
  - Heavy use of `style={{ ... }}` in many components (e.g. Navigation, Footer, Gallery page, PropertyDetails) for layout, colors, and responsiveness.

- **Path alias:**  
  - Imports use `@/app/...` (e.g. `@/app/components/Navigation`, `@/app/data/properties`) as per `tsconfig.json` paths.

---

## 8. SEO & Metadata

- **Root metadata:**  
  In `app/layout.tsx`: `title`, `description`, `keywords`, `icons`, `openGraph`, `twitter`, `alternates.canonical`. Same layout also injects **JSON-LD** (Schema.org: LodgingBusiness, EventVenue, Hotel, address, geo, amenities, ratings).

- **Page-specific metadata:**  
  - Each of `app/Gallery/layout.tsx`, `app/amenities/layout.tsx`, and `app/farmhouse-for-party-in-gurgaon/layout.tsx` exports `metadata` (title, description, OpenGraph, canonical) for that route.

- **Analytics:**  
  - Google Analytics (gtag) script in `layout.tsx` with id `G-1NZK6KW20J`.

- **Image alt text:**  
  - Slideshow and property images use descriptive, keyword-rich alt text (documented in `SEO_IMPLEMENTATION_SUMMARY.md`).

---

## 8.1 Contact form backend (Web3Forms)

All contact / inquiry forms submit to **Web3Forms**:

- **Endpoint:** `https://api.web3forms.com/submit`
- **Access key:** `505625ac-de77-4afc-8da0-3ebf5c632d45`

Used in:

- `app/contact/page.tsx` – main contact form (Send us a Message)
- `app/components/ContactForm.tsx` – reusable contact form component
- `app/components/PropertyDetails.tsx` – inquiry form on property detail page

Form data is sent as `FormData` with `access_key` plus the form fields (name, email, phone, message, property, etc.).

---

## 9. Build & Deployment

- **Install:**  
  `npm install`

- **Dev:**  
  `npm run dev`  
  → Serves at `http://localhost:3000` with hot reload. Static export is **not** used in dev.

- **Production build:**  
  `npm run build`  
  - Runs `next build` with `output: 'export'` (in production only).  
  - Output goes to `out/`.  
  - Script then does: `rm -rf dist && mv out dist`.  
  - Final static site is in `dist/` (HTML, JS, CSS, and copied assets from `public/`).

- **Serving the static site:**  
  Any static host can serve the `dist/` folder. For local check: e.g. `npx serve dist` or host `dist` on Netlify/Vercel as a static site.

---

## 10. Assets

- **Images:**  
  - `public/Images/Aravali Farm Images/` – hero slideshow and general Aravali Farm visuals.  
  - `public/Images/FarmStay/` – Gurgaon farm and Noida farm property images (referenced in `properties.ts` and `PropertyDetails` `propertyData`).  
  - Paths in code are like `/Images/...` (served from `public/`).

- **Fonts:**  
  - Local: `public/fonts/customfont.ttf` loaded in `app/layout.tsx` via `next/font/local` and applied to `body`.  
  - Web: Playfair Display, Poppins, Montserrat from Google Fonts in `layout.tsx`; Peach Brown from CDN in `globals.css`.

- **Favicon / icons:**  
  - Set in `layout.tsx` metadata and `<link>` tags (e.g. property image or favicon in `public/`).

---

## 11. User Flows (Summary)

1. **Landing (Home):**  
   Visit `/` → Slideshow → scroll to property grid → click a card → `/property/[id]`.

2. **Property detail:**  
   `/property/[id]` → hero, image grid, description, amenities, FAQs → click image → ImageModal; CTA to contact.

3. **Gallery:**  
   `/Gallery` → hero + same property grid (and any filters on Gallery page) → click card → same property detail flow.

4. **Contact:**  
   `/contact` → form submit → success modal with WhatsApp/phone; page also uses `properties` for context.

5. **SEO landing:**  
   `/farmhouse-for-party-in-gurgaon` → party-focused content and CTAs.  
   `/amenities` → list of amenities with descriptions.

---

## 12. Quick Reference – “Where is…?”

| What | Where |
|------|--------|
| Property list (cards) | `app/data/properties.ts` (data), `app/components/PropertyGallery.tsx` (UI) |
| Property detail content | `app/components/PropertyDetails.tsx` (object `propertyData`) |
| Home page structure | `app/page.tsx` → `app/home/index.tsx` → `app/home/GurgaonHome.tsx` |
| All routes | `app/**/page.tsx` and `app/property/[id]/page.tsx` |
| Global layout & SEO | `app/layout.tsx` |
| Global styles | `app/globals.css`; Tailwind in `tailwind.config.js` |
| Static export config | `next.config.js` (`output: 'export'` in production) |
| Path alias | `tsconfig.json` → `@/*` → project root |
| Contact form submission | Web3Forms: `https://api.web3forms.com/submit`, access_key in contact page, ContactForm, PropertyDetails |
| Property ID codes | OP-### (owned), RP-### (rented), CP-### (commission); see § 5.3 |
| Case ID | 4-2290000040346 |

---

This document, together with `README.md` and `SEO_IMPLEMENTATION_SUMMARY.md`, gives a full picture of the Aravali Farm website from technologies and structure to data, components, and deployment.


-----------------------------------------------------------------------

