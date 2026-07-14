"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { newArrivals, formatPrice } from "@/lib/products";
import Reveal from "./Reveal";

const ease = [0.22, 1, 0.36, 1] as const;

/**
 * TC Series — new arrivals lineup.
 * Renders the 7 TC pieces in a wide horizontal editorial rail on desktop,
 * a scroll-snap carousel on mobile.
 */
export default function TCLineup() {
  if (newArrivals.length === 0) return null;

  return (
    <section className="border-y border-ink/15 bg-fog/40">
      <div className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-28">
        <Reveal>
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="eyebrow">New arrivals — TC Series</p>
              <h2 className="mt-3 font-display text-3xl font-semibold uppercase leading-[1.05] tracking-tight md:text-5xl">
                The house monogram,
                <br />
                quietly stated.
              </h2>
            </div>
            <p className="max-w-sm text-sm leading-relaxed text-ink/65">
              Seven pieces built around one crest — the interlocking TC.
              Tonal embroidery, heavyweight cottons, the same $20–$60
              ceiling as everything else we make.
            </p>
          </div>
        </Reveal>

        {/* Rail */}
        <div className="mt-12">
          <div className="scrollbar-hide -mx-5 flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 pb-4 md:mx-0 md:grid md:snap-none md:grid-cols-4 md:gap-6 md:overflow-visible md:px-0 lg:grid-cols-7">
            {newArrivals.map((p, i) => (
              <motion.div
                key={p.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.7, delay: i * 0.06, ease }}
                className="w-[70vw] shrink-0 snap-start sm:w-[45vw] md:w-auto"
              >
                <Link
                  href={`/shop/${p.slug}`}
                  className="focus-ring group block"
                >
                  <div className="relative aspect-[4/5] overflow-hidden bg-[#e7e2d8]">
                    <Image
                      src={p.image}
                      alt={`${p.name} in ${p.color}`}
                      fill
                      sizes="(max-width: 768px) 70vw, (max-width: 1024px) 25vw, 14vw"
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                    <span className="absolute left-3 top-3 bg-ink px-2 py-0.5 font-display text-[10px] font-semibold uppercase tracking-wideplus text-bone">
                      New
                    </span>
                  </div>
                  <div className="mt-3 flex items-baseline justify-between gap-2">
                    <p className="font-display text-[11px] font-semibold uppercase tracking-wideplus">
                      {p.name}
                    </p>
                    <p className="font-display text-xs font-semibold shrink-0">
                      {formatPrice(p.price)}
                    </p>
                  </div>
                  <p className="mt-0.5 text-xs text-ink/55">{p.color}</p>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>

        <Reveal delay={0.2}>
          <div className="mt-12 flex justify-center">
            <Link
              href="/shop?c=TC%20Series"
              className="focus-ring group inline-flex items-center gap-3 border border-ink bg-transparent px-8 py-4 font-display text-sm font-semibold uppercase tracking-wideplus transition-colors hover:bg-ink hover:text-bone"
            >
              Shop TC Series
              <ArrowRight
                size={16}
                className="transition-transform group-hover:translate-x-1"
              />
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
