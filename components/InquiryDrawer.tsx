"use client";

import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { X, Truck, Mail } from "lucide-react";
import { useState } from "react";
import { formatPrice, type Product } from "@/lib/products";

const ORDER_EMAIL = "orders@clothingontheway.com"; // change to your real inbox

type Props = {
  product: Product;
  size: string | null;
  open: boolean;
  onClose: () => void;
};

export default function InquiryDrawer({ product, size, open, onClose }: Props) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [qty, setQty] = useState(1);
  const [note, setNote] = useState("");

  const subject = `Order inquiry — ${product.name} (${product.sku})`;
  const body = [
    `Piece: ${product.name} — ${product.color} (${product.sku})`,
    `Size: ${size ?? "-"}`,
    `Quantity: ${qty}`,
    `Price: ${formatPrice(product.price)} each`,
    ``,
    `Name: ${name}`,
    `Phone: ${phone}`,
    `Delivery address: ${address}`,
    note ? `` : null,
    note ? `Note: ${note}` : null,
  ]
    .filter((l) => l !== null)
    .join("\n");

  const mailto = `mailto:${ORDER_EMAIL}?subject=${encodeURIComponent(
    subject
  )}&body=${encodeURIComponent(body)}`;

  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.button
            aria-label="Close inquiry"
            className="fixed inset-0 z-[60] bg-ink/40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />
          <motion.aside
            role="dialog"
            aria-label="Inquire about this piece"
            className="fixed right-0 top-0 z-[70] flex h-full w-full max-w-md flex-col overflow-y-auto bg-bone"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 32, stiffness: 300 }}
          >
            <div className="flex items-center justify-between border-b border-ink/15 px-6 py-5">
              <p className="eyebrow">Inquire to order</p>
              <button onClick={onClose} aria-label="Close" className="focus-ring">
                <X size={20} strokeWidth={1.5} />
              </button>
            </div>

            <div className="flex gap-4 border-b border-ink/10 px-6 py-5">
              <div className="relative h-24 w-20 shrink-0 overflow-hidden bg-[#e7e2d8]">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  sizes="80px"
                  className="object-cover"
                />
              </div>
              <div>
                <p className="font-display text-xs font-semibold uppercase tracking-wideplus">
                  {product.name}
                </p>
                <p className="mt-0.5 text-xs text-ink/60">
                  {product.color}
                  {size ? ` · Size ${size}` : ""}
                </p>
                <p className="mt-1 font-display text-sm font-semibold">
                  {formatPrice(product.price)}
                </p>
              </div>
            </div>

            <div className="flex flex-1 flex-col gap-4 px-6 py-6">
              <p className="flex items-center gap-2 text-sm text-ink/65">
                <Truck size={15} strokeWidth={1.5} />
                Delivery only — we bring it to you.
              </p>

              <label className="block">
                <span className="eyebrow">Your name</span>
                <input
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="focus-ring mt-1.5 w-full border border-ink/25 bg-transparent px-3 py-2.5 text-sm"
                  placeholder="Full name"
                />
              </label>

              <label className="block">
                <span className="eyebrow">Phone</span>
                <input
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="focus-ring mt-1.5 w-full border border-ink/25 bg-transparent px-3 py-2.5 text-sm"
                  placeholder="For delivery coordination"
                  inputMode="tel"
                />
              </label>

              <label className="block">
                <span className="eyebrow">Delivery address</span>
                <textarea
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  rows={2}
                  className="focus-ring mt-1.5 w-full border border-ink/25 bg-transparent px-3 py-2.5 text-sm"
                  placeholder="Street, city, zip"
                />
              </label>

              <label className="block">
                <span className="eyebrow">Quantity</span>
                <div className="mt-1.5 flex w-fit items-center border border-ink/25">
                  <button
                    className="focus-ring px-3 py-2 text-sm"
                    aria-label="Decrease quantity"
                    onClick={() => setQty((q) => Math.max(1, q - 1))}
                  >
                    −
                  </button>
                  <span className="w-10 text-center text-sm">{qty}</span>
                  <button
                    className="focus-ring px-3 py-2 text-sm"
                    aria-label="Increase quantity"
                    onClick={() => setQty((q) => q + 1)}
                  >
                    +
                  </button>
                </div>
              </label>

              <label className="block">
                <span className="eyebrow">Anything else</span>
                <textarea
                  value={note}
                  onChange={(e) => setNote(e.target.value)}
                  rows={2}
                  className="focus-ring mt-1.5 w-full border border-ink/25 bg-transparent px-3 py-2.5 text-sm"
                  placeholder="Preferred delivery time, questions…"
                />
              </label>
            </div>

            <div className="border-t border-ink/15 px-6 py-5">
              <a
                href={mailto}
                className="focus-ring flex w-full items-center justify-center gap-2 bg-ink py-4 font-display text-sm font-semibold uppercase tracking-wideplus text-bone transition-opacity hover:opacity-90"
              >
                <Mail size={16} strokeWidth={1.5} />
                Send inquiry
              </a>
              <p className="mt-2 text-center text-xs text-ink/50">
                Opens your email app with everything pre-filled. We reply
                within 24 hours to confirm delivery.
              </p>
            </div>
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}
