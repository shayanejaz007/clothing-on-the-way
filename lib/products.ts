export type Product = {
  slug: string;
  sku: string;
  name: string;
  price: number;
  color: string;
  category: "Tees" | "Shorts" | "Headwear";
  image: string;
  description: string;
  details: string[];
  sizes: string[];
};

export const products: Product[] = [
  {
    slug: "embossed-tee-charcoal",
    sku: "COTW-001",
    name: "Embossed Hanger Tee",
    price: 38,
    color: "Washed Charcoal",
    category: "Tees",
    image: "/images/tee-charcoal.jpg",
    description:
      "A heavyweight cotton tee with the hanger mark raised in tonal high-density puff print. Cut relaxed through the body, garment-washed for a broken-in hand feel from the first wear.",
    details: [
      "240 GSM heavyweight cotton jersey",
      "Tonal high-density puff print at chest",
      "Garment-washed for softness and depth of color",
      "Relaxed fit, drop shoulder",
      "Pre-shrunk, ribbed collar",
    ],
    sizes: ["S", "M", "L", "XL", "XXL"],
  },
  {
    slug: "embossed-tee-bone",
    sku: "COTW-002",
    name: "Back-Print Embossed Tee",
    price: 38,
    color: "Bone",
    category: "Tees",
    image: "/images/tee-cream.jpg",
    description:
      "Our oversized silhouette in undyed bone, with the full hanger mark embossed across the back. Quiet from the front, unmistakable from behind.",
    details: [
      "240 GSM heavyweight cotton jersey",
      "Oversized back emboss, tonal chest hit",
      "Boxy, oversized fit",
      "Double-needle hems",
      "Pre-shrunk, ribbed collar",
    ],
    sizes: ["S", "M", "L", "XL", "XXL"],
  },
  {
    slug: "fleece-shorts-black",
    sku: "COTW-003",
    name: "Embossed Fleece Shorts",
    price: 44,
    color: "Black",
    category: "Shorts",
    image: "/images/shorts-black.jpg",
    description:
      "Midweight loopback fleece shorts with a debossed wordmark at the side seam and the woven hanger patch at the hem. Elasticated waist with flat drawcords.",
    details: [
      "400 GSM loopback cotton fleece",
      "Debossed side-seam wordmark",
      "Woven hanger patch at left hem",
      "Side seam pockets, back pocket",
      "Elastic waist with flat drawcord",
    ],
    sizes: ["S", "M", "L", "XL"],
  },
  {
    slug: "chino-shorts-khaki",
    sku: "COTW-004",
    name: "Patch Chino Shorts",
    price: 46,
    color: "Khaki",
    category: "Shorts",
    image: "/images/shorts-khaki.jpg",
    description:
      "A clean chino short in washed khaki twill, finished with the woven hanger patch at the hem. Tailored enough for the city, easy enough for anywhere after.",
    details: [
      "Midweight cotton twill, enzyme washed",
      "Woven hanger patch at left hem",
      "Slant front pockets, welt back pockets",
      "Zip fly with horn-effect button",
      "9\" inseam, regular fit",
    ],
    sizes: ["28", "30", "32", "34", "36"],
  },
  {
    slug: "cap-black",
    sku: "COTW-005",
    name: "Embroidered Six-Panel Cap",
    price: 28,
    color: "Black",
    category: "Headwear",
    image: "/images/cap-black.jpg",
    description:
      "An unstructured six-panel cap in brushed cotton twill with the full hanger mark embroidered in bone thread. Low profile, curved brim, adjustable strap.",
    details: [
      "Brushed cotton twill",
      "Bone-thread flat embroidery",
      "Unstructured low-profile crown",
      "Curved brim, adjustable back strap",
      "One size",
    ],
    sizes: ["OS"],
  },
];

export const getProduct = (slug: string) =>
  products.find((p) => p.slug === slug);

export const formatPrice = (n: number) => `$${n.toFixed(0)}`;
