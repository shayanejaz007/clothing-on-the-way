"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { formatPrice, type Product } from "@/lib/products";

export default function ProductCard({
  product,
  index = 0,
}: {
  product: Product;
  index?: number;
}) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.7, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
    >
      <Link href={`/shop/${product.slug}`} className="focus-ring group block">
        <div className="relative aspect-[4/5] overflow-hidden bg-[#e7e2d8]">
          <Image
            src={product.image}
            alt={`${product.name} in ${product.color}`}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.04]"
          />
        </div>
        {/* garment tag */}
        <div className="rail mt-4 flex items-baseline justify-between pt-3">
          <div>
            <p className="eyebrow">{product.sku}</p>
            <h3 className="mt-1 font-display text-sm font-semibold uppercase tracking-wideplus">
              {product.name}
            </h3>
            <p className="mt-0.5 text-sm text-ink/60">{product.color}</p>
          </div>
          <p className="font-display text-sm font-semibold">
            {formatPrice(product.price)}
          </p>
        </div>
      </Link>
    </motion.article>
  );
}
