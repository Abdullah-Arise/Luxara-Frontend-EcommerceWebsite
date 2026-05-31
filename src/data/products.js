// ============================================
// LUXARA - CENTRALIZED PRODUCTS DATA
// Sab priced product grids yahan se import karein.
// Gallery mein images ka order cover, side, detail hai.
// ============================================

const productImage = (filename) => `/luxara products/${filename}`;
const productGallery = (...filenames) => filenames.map(productImage);

export const ALL_PRODUCTS = [
  {
    id: 1,
    name: "Handcrafted Pookie Bead Bracelet",
    price: 350,
    originalPrice: 550,
    category: "Handmade Bracelets",
    finish: "Handmade",
    tag: "New",
    image: productImage("beads pookie 350.webp"),
    images: productGallery("beads pookie 350.webp"),
    isNew: true,
    inStock: true,
    description: "A playful handmade bead bracelet with a soft, charming character. Lightweight and easy to style every day.",
  },
  {
    id: 2,
    name: "Handcrafted Kitty Charm Bracelet",
    price: 350,
    originalPrice: 550,
    category: "Handmade Bracelets",
    finish: "Handmade",
    tag: "New",
    image: productImage("beads kitty charm 350.webp"),
    images: productGallery("beads kitty charm 350.webp"),
    isNew: true,
    inStock: true,
    description: "A cheerful handmade bead bracelet finished with a sweet kitty charm. A light everyday piece with a personal feel.",
  },
  {
    id: 3,
    name: "Midnight Black Beaded Bracelet",
    price: 450,
    originalPrice: 700,
    category: "Handmade Bracelets",
    finish: "Handmade",
    tag: "Best Seller",
    image: productImage("beads black 450.webp"),
    images: productGallery("beads black 450.webp"),
    isNew: false,
    inStock: true,
    description: "A handcrafted black bead bracelet with a confident, minimal look. Made for effortless everyday styling.",
  },
  {
    id: 4,
    name: "The Signature Gold Cuff",
    price: 950,
    originalPrice: 1300,
    category: "Gold Cuffs",
    finish: "Gold",
    tag: "Best Seller",
    image: productImage("gold cuff 950 1.webp"),
    images: productGallery(
      "gold cuff 950 1.webp",
      "gold cuff 950 2.webp",
      "gold cuff 950 3.webp"
    ),
    isNew: false,
    inStock: true,
    description: "A polished gold stainless steel cuff with a refined open silhouette. Adjustable and designed for everyday wear.",
  },
  {
    id: 5,
    name: "Trending Gold Cuff",
    price: 700,
    originalPrice: 1000,
    category: "Gold Cuffs",
    finish: "Gold",
    tag: "Trending",
    image: productImage("gold cuff trending 700 1.webp"),
    images: productGallery(
      "gold cuff trending 700 1.webp",
      "gold cuff trendinfg 700 2.webp",
      "gold cuff trending 700 3.webp"
    ),
    isNew: true,
    inStock: true,
    description: "A clean gold stainless steel cuff with a modern statement finish. Adjustable, versatile, and easy to pair.",
  },
  {
    id: 6,
    name: "Classic Indian Bangle Cuff",
    price: 800,
    originalPrice: 1150,
    category: "Gold Cuffs",
    finish: "Gold",
    tag: "Classic",
    image: productImage("indian bangle type gold cuff 800 1.webp"),
    images: productGallery(
      "indian bangle type gold cuff 800 1.webp",
      "indian bangle type gold cuff 800 2.webp",
      "indian bangle type gold cuff 800 3.webp"
    ),
    isNew: false,
    inStock: true,
    description: "A classic gold cuff inspired by a traditional bangle silhouette. Stainless steel construction with an elevated finish.",
  },
  {
    id: 7,
    name: "Roman Signature Gold Cuff",
    price: 950,
    originalPrice: 1300,
    category: "Gold Cuffs",
    finish: "Gold",
    tag: "Limited",
    image: productImage("roman design god cuff 950 1.webp"),
    images: productGallery(
      "roman design god cuff 950 1.webp",
      "roman design gold cuff 950 2.webp",
      "roman design gold cuff 950 3.webp"
    ),
    isNew: false,
    inStock: true,
    description: "A distinctive gold stainless steel cuff with a Roman-inspired detail. A polished accent for an elevated look.",
  },
  {
    id: 8,
    name: "Premium Gold Cuff",
    price: 850,
    originalPrice: 1200,
    category: "Gold Cuffs",
    finish: "Gold",
    tag: "Best Seller",
    image: productImage("premieum gold cuff 850 1.webp"),
    images: productGallery(
      "premieum gold cuff 850 1.webp",
      "premieum gold cuff 850 2.webp",
      "premieum god cuff 850 3.webp"
    ),
    isNew: false,
    inStock: true,
    description: "A premium gold stainless steel cuff with a smooth polished finish. Adjustable and made for effortless styling.",
  },
  {
    id: 9,
    name: "Minimal Gold Cuff",
    price: 750,
    originalPrice: 1050,
    category: "Gold Cuffs",
    finish: "Gold",
    tag: "Essential",
    image: productImage("minimilistic gold cuff 750 1.webp"),
    images: productGallery(
      "minimilistic gold cuff 750 1.webp",
      "minimlisitc gold cuff 750 2.webp",
      "minimilistic gold cuff 750 3.webp"
    ),
    isNew: true,
    inStock: true,
    description: "A minimal gold stainless steel cuff designed for an understated finish. Clean, adjustable, and easy to layer.",
  },
  {
    id: 10,
    name: "Leaf Detail Gold Cuff",
    price: 850,
    originalPrice: 1200,
    category: "Gold Cuffs",
    finish: "Gold",
    tag: "New",
    image: productImage("leaf shape gold cuff 850 1.webp"),
    images: productGallery(
      "leaf shape gold cuff 850 1.webp",
      "leaf gold cuff 850 2.webp",
      "leaf shape gold cuff 850 3.webp"
    ),
    isNew: true,
    inStock: true,
    description: "A graceful gold stainless steel cuff finished with a leaf-inspired detail. Adjustable with a polished everyday shine.",
  },
];

export const NEW_ARRIVALS = ALL_PRODUCTS.filter(p => p.isNew);
export const CUFF_COLLECTION = ALL_PRODUCTS.filter(
  p => p.category === "Gold Cuffs" || p.category === "Silver Cuffs"
);
export const BEST_SELLERS = ALL_PRODUCTS.filter(p => p.tag === "Best Seller");
export const PRODUCT_CATEGORIES = [...new Set(ALL_PRODUCTS.map(product => product.category))];
export const PRODUCT_FINISHES = [...new Set(ALL_PRODUCTS.map(product => product.finish))];

export const getProductImages = (product) => {
  const galleryImages = product?.images?.filter(Boolean) ?? [];
  return galleryImages.length > 0 ? galleryImages : [product?.image].filter(Boolean);
};

export const getProductCoverImage = (product) => getProductImages(product)[0] ?? "";
