# Luxara Assets Guide

This guide lists every current website section that uses, or can safely support, images, video, product thumbnails, or a 3D canvas. Use these dimensions to keep the site sharp, fast, and visually consistent.

General rules:
- Export images as WebP or optimized JPEG/PNG.
- Keep hero/banner files ideally under 500 KB to 1.2 MB.
- Keep product images under 300 KB each where possible.
- Leave important jewelry/details centered because most components use `object-cover`.
- Dark luxury theme works best with black, charcoal, warm gold, and soft highlight tones.
- Avoid bright white backgrounds unless the image has enough dark negative space for glass overlays.

## Required Current Media

| Component / Section | File / Location | Media Type | Recommended Dimensions | Aspect Ratio | Aesthetic Strictness |
|---|---|---:|---:|---:|---|
| Home Hero background | `src/components/home/Hero.jsx` | Image or short video background | 2560x1440 px | 16:9 | Must be dark, premium, and high contrast. Main subject should sit center/right; left side must have dark negative space for hero text. |
| Home jewelry showcase below hero | `src/components/home/HeroJewelryShowcase.jsx`, public URL `/canvas/hero-jewelry.png` | Lightweight jewellery image showcase | 1600x800 px | 2:1 | Must use transparent or dark-friendly background. Jewelry must be centered and fully visible with `object-contain`; do not bake in bright green or white backgrounds. |
| Hero rotating text overlay | `src/components/home/HeroContentRotator.jsx` | No image required | N/A | N/A | Text-only. If adding media, keep it behind `Hero.jsx`, not inside this component. |
| Promo carousel slides | `src/components/home/PromoCarousel.jsx` | Image or video banner | 2400x1000 px | 12:5 | Must allow dark overlay. Important subject should remain safe in center 70%; edges may crop on mobile. |
| Category cards / bento grid | `src/components/home/Categories.jsx` | Image | 1800x1200 px | 3:2 | Must look elegant under dark gradient. Category subject should be clear even after crop. |
| Best seller product cards | `src/components/home/BestSellers.jsx` | Product image | 1600x2000 px | 4:5 | Product should be centered with clean premium background. Must also crop acceptably to square in modal/search/cart. |
| Shop product card | `src/components/shop/ProductCard.jsx` | Product image | 1600x2000 px | 4:5 | Same product standard. Keep item centered and leave 8-12% padding around jewelry. |
| Gift set card | `src/components/shop/GiftCard.jsx` | Product image | 1600x2000 px | 4:5 | Gift box/set should be centered. Avoid busy props near top-left and top-right because badges appear there. |
| Quick view modal product image | `src/components/QuickView-Premium.jsx` | Product image | 1600x1600 px safe crop from product master | 1:1 | Product master can be 4:5, but main jewelry must fit inside the center square crop. |
| Search result product thumbnail | `src/components/SearchModal-Premium.jsx` | Product thumbnail | 800x800 px | 1:1 | Product must remain recognizable at 80x80 display size. Center subject tightly. |
| Cart sidebar product thumbnail | `src/components/CartSidebar-Premium.jsx` | Product thumbnail | 800x800 px | 1:1 | Product must remain recognizable at 80x80 display size. Avoid white-only background. |
| Instagram / gallery grid | `src/components/home/Gallery.jsx` | Lifestyle images | Large tile: 1600x1600 px. Small tile: 1000x1000 px. Wide tile: 1800x900 px | 1:1 and 2:1 | Must feel editorial/luxury. Dark or warm backgrounds preferred. Avoid clutter. |
| Brand story media block | `src/components/home/BrandStory.jsx` | Image or video thumbnail | 1600x1200 px | 4:3 | Can become video thumbnail. Must have strong center focus because play button sits in the middle. |
| Product spotlight visual | `src/components/home/ProductSpotlight.jsx` | Current CSS visual, optional image/3D replacement | 1600x2000 px | 4:5 | If replaced with image, use abstract premium product macro or signature collection close-up. Dark glass background required. |
| Navbar logo | `src/components/Navbar.jsx`, asset `src/assets/logo.png` | Logo image | 512x512 px | 1:1 | Must be readable inside circular crop at 40x40 px. Transparent or black background preferred. |
| Favicon / app icon | `index.html`, asset `public/logo.png` | Logo icon | 512x512 px plus 192x192 px optional | 1:1 | Must remain legible at browser-tab size. Avoid tiny text if possible. |

## Page Hero Media

| Component / Section | File / Location | Media Type | Recommended Dimensions | Aspect Ratio | Aesthetic Strictness |
|---|---|---:|---:|---:|---|
| About hero | `src/components/about/AboutHero.jsx` | Background image or video | 2400x1350 px | 16:9 | Dark luxury background. Text sits bottom-left, so keep that area readable after gradient. |
| About founder note | `src/components/about/FounderNote.jsx` | Portrait/lifestyle image | 1200x1500 px | 4:5 | Portrait or jewelry craft image. Must feel founder/editorial, not stocky or overly bright. |
| Brand legacy hero | `src/components/brand/BrandLegacyHero.jsx` | Background image or video | 2400x1350 px | 16:9 | Must support dark overlay. Story/heritage mood, warm and cinematic. |
| Brand chapter image | `src/components/brand/BrandChapter.jsx` | Story image | 1200x1500 px | 4:5 | Used for both chapter 1 and 2. Must work left or right side. Dark/warm editorial image preferred. |
| Care hero | `src/components/care/CareHero.jsx` | Optional background image/video | 2400x1000 px | 12:5 | Currently text-only. If media is added, keep it subtle, dark, and not behind small text directly. |
| Contact hero | `src/components/contact/ContactHero.jsx` | Optional background image/video | 2400x1000 px | 12:5 | Currently text-only. If media is added, use dark support/customer-care luxury visual. |
| FAQ hero | `src/components/faq/FAQHero.jsx` | Optional background image/video | 2400x1000 px | 12:5 | Currently text-only. If media is added, keep background very low contrast. |
| Track order hero | `src/components/track/TrackHero.jsx` | Optional background image/video | 2400x1000 px | 12:5 | Currently text-only. If media is added, use subtle delivery/package visual, dark tone. |
| Shop hero | `src/components/shop/ShopHero.jsx` | Optional background image/video | 2400x1000 px | 12:5 | Currently gradient-only. If media is added, avoid busy product grids behind heading. |
| New Arrivals hero | `src/pages/NewArrivals.jsx` | Optional background image/video | 2400x1000 px | 12:5 | Currently inline text hero. If media is added, use new collection mood shot with dark negative space. |
| Gift Sets hero | `src/pages/GiftSets.jsx` | Optional background image/video | 2400x1000 px | 12:5 | Currently inline text hero. If media is added, use gift packaging/luxury box visuals. |

## Product Data Images

All products in `src/data/products.js` use a single `image` field. That same image can appear in:
- product cards
- gift cards
- best seller cards
- quick view modal
- search modal
- cart sidebar

Recommended product master:
- Dimensions: 1600x2000 px
- Aspect ratio: 4:5
- Safe center crop: center 1200x1200 px must contain the whole jewelry item
- Background: dark charcoal, black marble, muted beige-gray, or subtle warm gradient
- Avoid: pure white studio backgrounds, bright green props, over-saturated colors, text baked into images

For square-only thumbnails:
- Dimensions: 800x800 px
- Aspect ratio: 1:1
- Use only if the product has a separate thumbnail file

## Video Asset Options

Use video only if it is short, muted, and does not slow the page.

| Section | Recommended Video Size | Format | Duration | Notes |
|---|---:|---|---:|---|
| Home hero | 1920x1080 px | MP4 + WebM | 6-10 sec loop | Must be dark and slow-moving. No audio. |
| Promo carousel | 1920x800 px | MP4 + WebM | 5-8 sec loop | Keep subject centered. Must work under text card/overlay. |
| Brand story media block | 1600x1200 px | MP4 + poster image | 10-20 sec | Can show making/craft process. Use poster at 1600x1200. |
| About / Brand legacy hero | 1920x1080 px | MP4 + WebM | 6-12 sec loop | Cinematic, low motion, dark overlay friendly. |

## Section-by-Section Quick Checklist

Home:
- `Hero.jsx`: 2560x1440 hero background.
- `HeroJewelryShowcase.jsx`: 1600x800 below-hero jewelry image at `/canvas/hero-jewelry.png`.
- `PromoCarousel.jsx`: 2400x1000 slides.
- `Categories.jsx`: 1800x1200 category images.
- `BestSellers.jsx`: 1600x2000 product images.
- `Gallery.jsx`: 1:1 and 2:1 lifestyle grid images.
- `BrandStory.jsx`: 1600x1200 image/video thumbnail.
- `ProductSpotlight.jsx`: optional 1600x2000 image or 3D replacement.

Shop:
- `ShopHero.jsx`: optional 2400x1000 background.
- `ProductCard.jsx`: 1600x2000 product images.
- `GiftCard.jsx`: 1600x2000 gift set images.
- `QuickView-Premium.jsx`: 1600x1600 square-safe product crop.
- `SearchModal-Premium.jsx`: 800x800 thumbnails.
- `CartSidebar-Premium.jsx`: 800x800 thumbnails.

About / Brand:
- `AboutHero.jsx`: 2400x1350 background.
- `FounderNote.jsx`: 1200x1500 portrait/editorial image.
- `BrandLegacyHero.jsx`: 2400x1350 background.
- `BrandChapter.jsx`: 1200x1500 chapter images.

Utility Pages:
- `CareHero.jsx`: optional 2400x1000 background.
- `ContactHero.jsx`: optional 2400x1000 background.
- `FAQHero.jsx`: optional 2400x1000 background.
- `TrackHero.jsx`: optional 2400x1000 background.

Shared:
- `Navbar.jsx`: 512x512 logo.
- `index.html`: 512x512 favicon/app icon.

Legacy / inactive:
- `HeroCanvasVisual.jsx` + `LuxuryCanvas.jsx`: canvas-based hero visual, kept unused for now and not loaded by the active Home hero.
- `HeroJewelryVisual.jsx`: flat HTML image version, kept unused for now and not loaded by the active Home hero.
- `JewelryCanvasSection.jsx`: old standalone 3D section wrapper, kept only for future optional 3D work and not loaded by the active Home page.
