"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, Truck, RotateCcw } from "lucide-react";
import { formatPrice, products, type Product } from "@/lib/products";
import SizeSelector from "@/components/SizeSelector";
import ProductCard from "@/components/ProductCard";
import { useCart } from "@/components/CartProvider";

export default function ProductDetail({ product }: { product: Product }) {
  const { add } = useCart();
  const [size, setSize] = useState<string | null>(
    product.sizes.length === 1 ? product.sizes[0] : null
  );
  const [warn, setWarn] = useState(false);

  const related = products
    .filter((p) => p.slug !== product.slug)
    .slice(0, 3);

  const handleAdd = () => {
    if (!size) {
      setWarn(true);
      return;
    }
    setWarn(false);
    add(product, size);
  };

  return (
    <div className="mx-auto max-w-7xl px-5 pb-24 pt-24 md:px-8 md:pt-28">
      <Link
        href="/shop"
        className="focus-ring inline-flex items-center gap-2 eyebrow hover:text-ink"
      >
        <ArrowLeft size={14} /> All pieces
      </Link>

      <div className="mt-6 grid gap-10 md:grid-cols-2 lg:gap-16">
        <motion.div
          initial={{ opacity: 0, scale: 1.02 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="relative aspect-[4/5] overflow-hidden bg-[#e7e2d8]"
        >
          <Image
            src={product.image}
            alt={`${product.name} in ${product.color}`}
            fill
            priority
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="rail pt-5">
            <p className="eyebrow">{product.sku} — {product.category}</p>
            <h1 className="mt-3 font-display text-3xl font-semibold uppercase tracking-tight md:text-4xl">
              {product.name}
            </h1>
            <p className="mt-1 text-ink/60">{product.color}</p>
            <p className="mt-4 font-display text-2xl font-semibold">
              {formatPrice(product.price)}
            </p>
          </div>

          <p className="mt-6 leading-relaxed text-ink/75">{product.description}</p>

          <div className="mt-8">
            <div className="flex items-baseline justify-between">
              <p className="eyebrow">Size</p>
              {warn && (
                <p className="text-xs text-ink" role="alert">
                  Choose a size to continue
                </p>
              )}
            </div>
            <div className="mt-3">
              <SizeSelector
                sizes={product.sizes}
                value={size}
                onChange={(s) => {
                  setSize(s);
                  setWarn(false);
                }}
              />
            </div>
          </div>

          <button
            onClick={handleAdd}
            className="focus-ring mt-8 w-full bg-ink py-4 font-display text-sm font-semibold uppercase tracking-wideplus text-bone transition-opacity hover:opacity-90"
          >
            Add to bag — {formatPrice(product.price)}
          </button>

          <div className="mt-6 flex flex-col gap-2 text-sm text-ink/60">
            <p className="flex items-center gap-2">
              <Truck size={15} strokeWidth={1.5} /> Free shipping over $75
            </p>
            <p className="flex items-center gap-2">
              <RotateCcw size={15} strokeWidth={1.5} /> 30-day returns, no questions
            </p>
          </div>

          <div className="rail mt-10 pt-5">
            <p className="eyebrow">Details</p>
            <ul className="mt-3 space-y-2 text-sm text-ink/70">
              {product.details.map((d) => (
                <li key={d} className="flex gap-3">
                  <span aria-hidden className="mt-[9px] h-px w-4 shrink-0 bg-ink/40" />
                  {d}
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>

      <section className="mt-24">
        <div className="rail pt-5">
          <p className="eyebrow">Complete the look</p>
        </div>
        <div className="mt-8 grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
          {related.map((p, i) => (
            <ProductCard key={p.slug} product={p} index={i} />
          ))}
        </div>
      </section>
    </div>
  );
}
