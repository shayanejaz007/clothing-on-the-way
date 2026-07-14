"use client";

import { useState } from "react";
import Reveal from "./Reveal";

/**
 * Campaign lookbook — Higgsfield-generated editorial stills.
 * Drop the generated images at:
 *   /public/images/lifestyle-1.jpg  (charcoal tee + khaki shorts, concrete wall)
 *   /public/images/lifestyle-2.jpg  (bone back-print tee, golden hour street)
 * Images that are missing hide themselves, so the section never breaks.
 */
const shots = [
  {
    src: "/images/lifestyle-1.jpg",
    alt: "Model in the charcoal embossed tee and khaki chino shorts against a concrete wall",
    caption: "Embossed Hanger Tee — Washed Charcoal",
  },
  {
    src: "/images/lifestyle-2.jpg",
    alt: "Model seen from behind in the bone back-print tee at golden hour",
    caption: "Back-Print Embossed Tee — Bone",
  },
];

export default function Lookbook() {
  const [failed, setFailed] = useState<Record<string, boolean>>({});
  const visible = shots.filter((s) => !failed[s.src]);
  if (visible.length === 0) return null;

  return (
    <section className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-28">
      <Reveal>
        <div className="rail pt-5">
          <p className="eyebrow">Lookbook — SS26</p>
          <h2 className="mt-3 font-display text-3xl font-semibold uppercase tracking-tight md:text-4xl">
            Worn, not staged
          </h2>
        </div>
      </Reveal>
      <div className={`mt-10 grid gap-6 ${visible.length > 1 ? "md:grid-cols-2" : ""}`}>
        {visible.map((s, i) => (
          <Reveal key={s.src} delay={i * 0.12}>
            <figure>
              <div className="relative aspect-[4/5] overflow-hidden bg-[#e7e2d8]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={s.src}
                  alt={s.alt}
                  className="h-full w-full object-cover"
                  loading="lazy"
                  onError={() => setFailed((f) => ({ ...f, [s.src]: true }))}
                />
              </div>
              <figcaption className="eyebrow mt-3">{s.caption}</figcaption>
            </figure>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
