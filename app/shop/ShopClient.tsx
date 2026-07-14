"use client";

import { useMemo, useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import ProductCard from "@/components/ProductCard";
import { products } from "@/lib/products";

const categories = ["All", "TC Series", "Tees", "Hoodies", "Crewnecks", "Trousers", "Shorts", "Headwear"] as const;

export default function ShopClient() {
  const params = useSearchParams();
  const initial = (params.get("c") as (typeof categories)[number]) ?? "All";
  const [cat, setCat] = useState<(typeof categories)[number]>(
    categories.includes(initial as any) ? initial : "All"
  );

  const list = useMemo(
    () => (cat === "All"
        ? products
        : cat === "TC Series"
        ? products.filter((p) => p.collection === "TC Series")
        : products.filter((p) => p.category === cat)),
    [cat]
  );

  return (
    <div className="mx-auto max-w-7xl px-5 pb-24 pt-28 md:px-8 md:pt-36">
      <div className="rail pt-5">
        <p className="eyebrow">Collection 001</p>
        <h1 className="mt-3 font-display text-4xl font-semibold uppercase tracking-tight md:text-5xl">
          All pieces
        </h1>
      </div>

      <div
        role="tablist"
        aria-label="Filter by category"
        className="mt-8 flex flex-wrap gap-2"
      >
        {categories.map((c) => (
          <button
            key={c}
            role="tab"
            aria-selected={cat === c}
            onClick={() => setCat(c)}
            className={`focus-ring border px-4 py-2 font-display text-xs font-medium uppercase tracking-wideplus transition-colors ${
              cat === c
                ? "border-ink bg-ink text-bone"
                : "border-ink/25 hover:border-ink"
            }`}
          >
            {c}
          </button>
        ))}
      </div>

      <p className="mt-6 text-sm text-ink/50">
        {list.length} {list.length === 1 ? "piece" : "pieces"} — everything $20 to $60
      </p>

      <div className="mt-8 grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
        {list.map((p, i) => (
          <ProductCard key={p.slug} product={p} index={i} />
        ))}
      </div>
    </div>
  );
}
