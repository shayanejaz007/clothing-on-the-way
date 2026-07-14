"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export default function Marquee({ dark = false }: { dark?: boolean }) {
  const reduce = useReducedMotion();
  const items = Array.from({ length: 8 });
  return (
    <div
      aria-hidden
      className={`overflow-hidden border-y py-3 ${
        dark ? "border-bone/15 bg-ink text-bone" : "border-ink/15 bg-bone text-ink"
      }`}
    >
      <motion.div
        className="flex w-max items-center gap-10 whitespace-nowrap"
        animate={reduce ? undefined : { x: ["0%", "-50%"] }}
        transition={{ duration: 28, ease: "linear", repeat: Infinity }}
      >
        {[0, 1].map((half) => (
          <div key={half} className="flex items-center gap-10">
            {items.map((_, i) => (
              <span
                key={i}
                className="flex items-center gap-10 font-display text-sm font-medium uppercase tracking-rail"
              >
                On the way
                <ArrowUpRight size={14} strokeWidth={1.5} />
              </span>
            ))}
          </div>
        ))}
      </motion.div>
    </div>
  );
}
