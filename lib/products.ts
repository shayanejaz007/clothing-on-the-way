export type Product = {
  slug: string;
  sku: string;
  name: string;
  price: number;
  color: string;
  category: "Tees" | "Shorts" | "Headwear" | "Hoodies" | "Crewnecks" | "Trousers";
  image: string;
  description: string;
  details: string[];
  sizes: string[];
  isNew?: boolean;
  collection?: "Original" | "TC Series";
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
  // ── TC Series ── New arrivals
  {
    slug: "tc-monogram-tee-bone",
    sku: "COTW-101",
    name: "TC Monogram Tee",
    price: 42,
    color: "Bone",
    category: "Tees",
    image: "/images/tc/tee-bone.jpg",
    description:
      "The house monogram, quietly stated. Heavyweight cotton jersey with the interlocking TC crest raised in tonal puff at the chest. A staple, not a statement piece.",
    details: [
      "260 GSM heavyweight cotton jersey",
      "Interlocking TC monogram, tonal high-density puff print",
      "Relaxed fit, ribbed collar",
      "Garment-washed for hand feel",
      "Pre-shrunk",
    ],
    sizes: ["S", "M", "L", "XL", "XXL"],
    isNew: true,
    collection: "TC Series",
  },
  {
    slug: "tc-monogram-tee-black",
    sku: "COTW-102",
    name: "TC Monogram Tee",
    price: 42,
    color: "Washed Black",
    category: "Tees",
    image: "/images/tc/tee-black.jpg",
    description:
      "The same TC crest, in reverse tone. Bone-thread embroidery on washed black cotton for a sharper contrast that still reads quiet from across the room.",
    details: [
      "260 GSM heavyweight cotton jersey",
      "Interlocking TC monogram, bone-thread flat embroidery",
      "Relaxed fit, ribbed collar",
      "Garment-washed for depth of color",
      "Pre-shrunk",
    ],
    sizes: ["S", "M", "L", "XL", "XXL"],
    isNew: true,
    collection: "TC Series",
  },
  {
    slug: "tc-hoodie-charcoal",
    sku: "COTW-103",
    name: "TC Monogram Hoodie",
    price: 58,
    color: "Washed Charcoal",
    category: "Hoodies",
    image: "/images/tc/hoodie-charcoal.jpg",
    description:
      "Midweight loopback fleece hoodie with a tonal TC crest at the chest. Cut with a heavier hood and dropped shoulder so it stands up to real weather without losing shape.",
    details: [
      "440 GSM loopback cotton fleece",
      "Tonal TC monogram in high-density puff",
      "Double-lined hood, flat cotton drawcords",
      "Kangaroo pocket, ribbed cuffs and hem",
      "Relaxed fit, drop shoulder",
    ],
    sizes: ["S", "M", "L", "XL"],
    isNew: true,
    collection: "TC Series",
  },
  {
    slug: "tc-crewneck-bone",
    sku: "COTW-104",
    name: "TC Monogram Crewneck",
    price: 52,
    color: "Bone",
    category: "Crewnecks",
    image: "/images/tc/crewneck-bone.jpg",
    description:
      "A crewneck built the old way: heavyweight loopback fleece, ribbed everywhere it needs to be, TC crest embroidered chest-center in a matching cream thread.",
    details: [
      "440 GSM loopback cotton fleece",
      "Bone-on-bone flat embroidered TC monogram",
      "Ribbed collar, cuffs, and hem",
      "Boxy fit, drop shoulder",
      "Pre-shrunk",
    ],
    sizes: ["S", "M", "L", "XL"],
    isNew: true,
    collection: "TC Series",
  },
  {
    slug: "tc-trousers-black",
    sku: "COTW-105",
    name: "TC Wide-Leg Trousers",
    price: 60,
    color: "Black",
    category: "Trousers",
    image: "/images/tc/trousers-black.jpg",
    description:
      "Loose, pleated, wide-leg trousers in soft-hand black cotton twill. Small bone-thread TC monogram at the left hip, invisible until you look for it.",
    details: [
      "Midweight cotton twill, enzyme washed",
      "Pleated front, wide leg",
      "Bone-thread TC monogram at left hip",
      "Slant front pockets, welt back pockets",
      "Zip fly with horn-effect button",
    ],
    sizes: ["28", "30", "32", "34", "36"],
    isNew: true,
    collection: "TC Series",
  },
  {
    slug: "tc-pleated-shorts-bone",
    sku: "COTW-106",
    name: "TC Pleated Shorts",
    price: 46,
    color: "Bone",
    category: "Shorts",
    image: "/images/tc/shorts-bone.jpg",
    description:
      "Tailored pleated shorts in bone cotton with a pressed center crease. The TC monogram sits at the hip in tonal thread — a quiet finishing mark.",
    details: [
      "Midweight cotton twill",
      "Pleated front, center crease",
      "Tonal cream TC monogram at left hip",
      "Slant front pockets, welt back pockets",
      "9\" inseam, tailored fit",
    ],
    sizes: ["28", "30", "32", "34", "36"],
    isNew: true,
    collection: "TC Series",
  },
  {
    slug: "tc-cap-bone",
    sku: "COTW-107",
    name: "TC Six-Panel Cap",
    price: 32,
    color: "Bone",
    category: "Headwear",
    image: "/images/tc/cap-bone.jpg",
    description:
      "An unstructured six-panel cap in brushed bone twill with the TC crest embroidered in matching tonal thread. Low profile, curved brim, adjustable strap.",
    details: [
      "Brushed cotton twill",
      "Tonal cream TC monogram, flat embroidery",
      "Unstructured low-profile crown",
      "Curved brim, adjustable back strap",
      "One size",
    ],
    sizes: ["OS"],
    isNew: true,
    collection: "TC Series",
  },
];


export const getProduct = (slug: string) =>
  products.find((p) => p.slug === slug);

export const newArrivals = products.filter((p) => p.isNew);

export const formatPrice = (n: number) => `$${n.toFixed(0)}`;
