# Crestova Advisory — Website

Next.js 14 (App Router) + Tailwind + Three.js (React Three Fiber) + Framer Motion + Lenis smooth scroll.

## Run
```bash
npm install
npm run dev      # http://localhost:3000
npm run build && npm start   # production
```

## Pages
Home · About · Services (+17 detail pages) · Industries (+10) · Insights/Blog (+8 articles) · FAQ · Contact

## Edit content
- `lib/data.ts`  — services, industries, FAQs, contact details, process steps
- `lib/posts.ts` — blog articles
- `components/GlobeScene.tsx` — hero 3D globe

## Spline
To use your own Spline scene in the hero, publish it in Spline (Export → Code → Viewer URL, ending in `scene.splinecode`)
and set in `.env.local`:
```
NEXT_PUBLIC_SPLINE_SCENE=https://prod.spline.design/XXXX/scene.splinecode
```
Without it, the built-in Three.js globe is shown.

## Contact form
Opens the visitor's email app with the message pre-filled (mailto). To store submissions, add an API route + email service (Resend / SMTP).
