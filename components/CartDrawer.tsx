"use client";

import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { Minus, Plus, X } from "lucide-react";
import { useCart } from "./CartProvider";
import { formatPrice } from "@/lib/products";

export default function CartDrawer() {
  const { lines, open, setOpen, setQty, remove, subtotal, count } = useCart();

  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.button
            aria-label="Close bag"
            className="fixed inset-0 z-[60] bg-ink/40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpen(false)}
          />
          <motion.aside
            role="dialog"
            aria-label="Shopping bag"
            className="fixed right-0 top-0 z-[70] flex h-full w-full max-w-md flex-col bg-bone"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 32, stiffness: 300 }}
          >
            <div className="flex items-center justify-between border-b border-ink/15 px-6 py-5">
              <p className="eyebrow">Bag — {count} {count === 1 ? "item" : "items"}</p>
              <button
                onClick={() => setOpen(false)}
                aria-label="Close bag"
                className="focus-ring"
              >
                <X size={20} strokeWidth={1.5} />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto px-6 py-6">
              {lines.length === 0 ? (
                <div className="flex h-full flex-col items-center justify-center gap-3 text-center">
                  <p className="font-display text-sm uppercase tracking-wideplus">
                    Your bag is empty
                  </p>
                  <p className="text-sm text-ink/60">
                    Add a piece from the collection to get started.
                  </p>
                </div>
              ) : (
                <ul className="space-y-6">
                  {lines.map((l) => (
                    <li key={`${l.product.slug}-${l.size}`} className="flex gap-4">
                      <div className="relative h-24 w-20 shrink-0 overflow-hidden bg-[#e7e2d8]">
                        <Image
                          src={l.product.image}
                          alt={l.product.name}
                          fill
                          sizes="80px"
                          className="object-cover"
                        />
                      </div>
                      <div className="flex flex-1 flex-col">
                        <div className="flex items-start justify-between gap-3">
                          <div>
                            <p className="font-display text-xs font-semibold uppercase tracking-wideplus">
                              {l.product.name}
                            </p>
                            <p className="mt-0.5 text-xs text-ink/60">
                              {l.product.color} · Size {l.size}
                            </p>
                          </div>
                          <p className="text-sm font-medium">
                            {formatPrice(l.product.price * l.qty)}
                          </p>
                        </div>
                        <div className="mt-auto flex items-center justify-between pt-3">
                          <div className="flex items-center border border-ink/25">
                            <button
                              className="focus-ring p-1.5"
                              aria-label="Decrease quantity"
                              onClick={() => setQty(l.product.slug, l.size, l.qty - 1)}
                            >
                              <Minus size={13} />
                            </button>
                            <span className="w-8 text-center text-sm">{l.qty}</span>
                            <button
                              className="focus-ring p-1.5"
                              aria-label="Increase quantity"
                              onClick={() => setQty(l.product.slug, l.size, l.qty + 1)}
                            >
                              <Plus size={13} />
                            </button>
                          </div>
                          <button
                            className="focus-ring text-xs uppercase tracking-wideplus text-ink/50 hover:text-ink"
                            onClick={() => remove(l.product.slug, l.size)}
                          >
                            Remove
                          </button>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              )}
            </div>

            {lines.length > 0 && (
              <div className="border-t border-ink/15 px-6 py-5">
                <div className="flex items-center justify-between">
                  <p className="eyebrow">Subtotal</p>
                  <p className="font-display text-lg font-semibold">
                    {formatPrice(subtotal)}
                  </p>
                </div>
                <p className="mt-1 text-xs text-ink/50">
                  Shipping and taxes calculated at checkout.
                </p>
                <button className="focus-ring mt-4 w-full bg-ink py-3.5 font-display text-sm font-semibold uppercase tracking-wideplus text-bone transition-opacity hover:opacity-90">
                  Checkout
                </button>
              </div>
            )}
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}
