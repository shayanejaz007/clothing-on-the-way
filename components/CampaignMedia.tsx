"use client";

import Image from "next/image";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

/**
 * Full-bleed campaign section.
 * Drop Higgsfield-generated video into /public/media/campaign.mp4
 * (with an optional poster at /public/media/campaign-poster.jpg)
 * and it will play here automatically; until then the embossed
 * detail still is used as the cinematic frame.
 */
export default function CampaignMedia() {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-8%", reduce ? "-8%" : "8%"]);

  return (
    <section ref={ref} className="relative overflow-hidden bg-ink">
      <div className="relative h-[80svh]">
        <motion.div style={{ y }} className="absolute inset-[-10%]">
          <video
            className="absolute inset-0 hidden h-full w-full object-cover [&:not([data-failed])]:block"
            autoPlay
            muted
            loop
            playsInline
            poster="/images/detail-emboss.jpg"
            onError={(e) => e.currentTarget.setAttribute("data-failed", "true")}
          >
            <source src="/media/campaign.mp4" type="video/mp4" />
          </video>
          <Image
            src="/images/detail-emboss.jpg"
            alt="Close detail of the tonal embossed hanger mark"
            fill
            sizes="100vw"
            className="object-cover opacity-90"
          />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/20 to-ink/40" />

        <div className="absolute inset-x-0 bottom-0 mx-auto max-w-7xl px-5 pb-14 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="eyebrow !text-bone/60">Campaign — worn in motion</p>
            <h2 className="mt-3 max-w-2xl font-display text-3xl font-semibold uppercase leading-tight tracking-tight text-bone md:text-5xl">
              Made to move. Priced to live in.
            </h2>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
