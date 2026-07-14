"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useRef } from "react";

const ease = [0.22, 1, 0.36, 1] as const;

export default function Hero() {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const imgY = useTransform(scrollYProgress, [0, 1], ["0%", reduce ? "0%" : "12%"]);

  return (
    <section ref={ref} className="relative min-h-svh overflow-hidden pt-16">
      <div className="mx-auto grid max-w-7xl gap-8 px-5 pb-16 pt-8 md:grid-cols-12 md:px-8 md:pt-14 lg:gap-12">
        {/* Left: headline hanging from the rail */}
        <div className="flex flex-col justify-between md:col-span-6 lg:col-span-5">
          <div>
            <motion.div
              className="rail origin-left"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 1, ease }}
            />
            <motion.p
              className="eyebrow mt-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              SS26 — First delivery
            </motion.p>

            <h1 className="mt-6 font-display font-semibold uppercase leading-[0.95]">
              {["Elevated", "essentials for", "wherever life", "takes you."].map(
                (line, i) => (
                  <span key={line} className="block overflow-hidden">
                    <motion.span
                      className="block text-[clamp(2.2rem,6vw,4.2rem)] tracking-tight"
                      initial={{ y: reduce ? 0 : "110%" }}
                      animate={{ y: 0 }}
                      transition={{ delay: 0.15 + i * 0.09, duration: 0.9, ease }}
                    >
                      {line}
                    </motion.span>
                  </span>
                )
              )}
            </h1>

            <motion.p
              className="mt-6 max-w-sm text-[15px] leading-relaxed text-ink/70"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.8, ease }}
            >
              Premium streetwear built on heavyweight fabric, tonal embossing,
              and honest prices. Every piece from $20 to $60 — nothing more,
              nothing hidden.
            </motion.p>
          </div>

          <motion.div
            className="mt-10 flex items-center gap-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9, duration: 0.8 }}
          >
            <Link
              href="/shop"
              className="focus-ring group flex items-center gap-3 bg-ink px-6 py-3.5 font-display text-sm font-semibold uppercase tracking-wideplus text-bone"
            >
              Shop the drop
              <ArrowRight
                size={16}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>
            <Link
              href="/about"
              className="focus-ring eyebrow underline-offset-4 hover:underline"
            >
              The brand
            </Link>
          </motion.div>
        </div>

        {/* Right: campaign flat-lay */}
        <motion.div
          className="relative md:col-span-6 lg:col-span-7"
          initial={{ opacity: 0, scale: reduce ? 1 : 1.03 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease }}
        >
          <div className="relative aspect-[3/4] overflow-hidden bg-[#e7e2d8] md:aspect-auto md:h-full md:min-h-[70svh]">
            <motion.div style={{ y: imgY }} className="absolute inset-0">
              <Image
                src="/images/collection-flatlay.jpg"
                alt="The first Clothing on the Way collection — embossed tees, fleece and chino shorts, and an embroidered cap"
                fill
                priority
                sizes="(max-width: 768px) 100vw, 58vw"
                className="object-cover object-top"
              />
            </motion.div>
          </div>
          <p className="eyebrow mt-3 text-right">Collection 001 — five pieces</p>
        </motion.div>
      </div>
    </section>
  );
}
