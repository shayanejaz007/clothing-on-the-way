"use client";

import Image from "next/image";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";

type Props = {
  videoSrc?: string;      // /media/campaign.mp4 by default
  posterSrc?: string;     // /images/detail-emboss.jpg by default
  eyebrow?: string;
  headline?: string;
};

export default function CampaignMedia({
  videoSrc = "/media/campaign.mp4",
  posterSrc = "/images/detail-emboss.jpg",
  eyebrow = "Campaign — worn in motion",
  headline = "Made to move. Priced to live in.",
}: Props) {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const [videoFailed, setVideoFailed] = useState(false);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-8%", reduce ? "-8%" : "8%"]);

  return (
    <section ref={ref} className="relative overflow-hidden bg-ink">
      <div className="relative h-[80svh]">
        <motion.div style={{ y }} className="absolute inset-[-10%]">
          {videoFailed ? (
            <Image
              src={posterSrc}
              alt=""
              fill
              sizes="100vw"
              className="object-cover opacity-90"
              priority
            />
          ) : (
            <video
              className="absolute inset-0 h-full w-full object-cover"
              autoPlay
              muted
              loop
              playsInline
              preload="auto"
              poster={posterSrc}
              onError={() => setVideoFailed(true)}
            >
              <source src={videoSrc} type="video/mp4" />
            </video>
          )}
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/20 to-ink/40" />
        <div className="absolute inset-x-0 bottom-0 mx-auto max-w-7xl px-5 pb-14 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="eyebrow !text-bone/60">{eyebrow}</p>
            <h2 className="mt-3 max-w-2xl font-display text-3xl font-semibold uppercase leading-tight tracking-tight text-bone md:text-5xl">
              {headline}
            </h2>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
