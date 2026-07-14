# Clothing on the Way — Official Site

Luxury streetwear e-commerce site. Next.js 14 (App Router) + TypeScript +
Tailwind CSS + Framer Motion + Lucide React.

## Run it

```bash
npm install
npm run dev        # http://localhost:3000
npm run build && npm start   # production
```

Deploys to Vercel with zero config (`vercel` or GitHub auto-deploy).

## Structure

- `app/` — pages: home, `/shop` (filterable), `/shop/[slug]` (product detail,
  statically generated), `/about`, 404
- `components/` — Navbar, Hero, Marquee, ProductCard, SizeSelector,
  CartProvider + CartDrawer, CampaignMedia, Reveal, Footer
- `lib/products.ts` — product catalog ($20–$60). Add products here; product
  pages are generated automatically.
- `public/images/` — official logo (dark + light variants with true
  transparency, extracted untouched from your file) and product crops from
  your flat-lay
- `public/media/` — drop `campaign.mp4` (Higgsfield) here for the cinematic
  campaign section; falls back to a still automatically

## Brand system

- Palette: bone `#EFEBE3`, fog `#DDD8CE`, khaki `#B9A683`, charcoal
  `#4A4643`, ink `#141312` — pulled directly from the garments
- Type: Archivo (display, uppercase tracked) + Instrument Sans (body)
- Signature: the "rail" — hairlines that content hangs from, echoing the
  hanger mark — plus the "ON THE WAY ↗" marquee referencing the arrow in
  the wordmark
- Accessibility: semantic HTML, focus rings, reduced-motion respected,
  responsive to mobile
