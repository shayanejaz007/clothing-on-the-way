"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, Truck, X } from "lucide-react";

const links = [
  { href: "/shop", label: "Shop" },
  { href: "/about", label: "About" },
];

export default function Navbar() {
  const [menu, setMenu] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setMenu(false), [pathname]);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      {/* Delivery-only announcement strip */}
      <div className="flex items-center justify-center gap-2 bg-ink px-4 py-1.5 text-center">
        <Truck size={12} strokeWidth={1.5} className="text-bone/70" />
        <p className="font-display text-[10px] font-medium uppercase tracking-rail text-bone/80">
          Delivery only — inquire to order, we bring it to you
        </p>
      </div>

      <div
        className={`transition-colors duration-500 ${
          scrolled ? "bg-bone/90 backdrop-blur-sm border-b border-ink/10" : ""
        }`}
      >
        <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 md:px-8">
          <div className="flex items-center gap-8">
            <button
              className="focus-ring md:hidden"
              aria-label={menu ? "Close menu" : "Open menu"}
              onClick={() => setMenu((v) => !v)}
            >
              {menu ? <X size={20} /> : <Menu size={20} />}
            </button>
            <div className="hidden items-center gap-8 md:flex">
              {links.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  className="focus-ring eyebrow transition-colors hover:text-ink"
                >
                  {l.label}
                </Link>
              ))}
            </div>
          </div>

          <Link
            href="/"
            aria-label="Clothing on the Way — home"
            className="focus-ring absolute left-1/2 -translate-x-1/2"
          >
            <Image
              src="/images/logo-dark.png"
              alt="Clothing on the Way"
              width={168}
              height={87}
              priority
              className="h-9 w-auto"
            />
          </Link>

          <a
            href="mailto:orders@clothingontheway.com"
            className="focus-ring eyebrow transition-colors hover:text-ink"
          >
            Inquire
          </a>
        </nav>

        <AnimatePresence>
          {menu && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: [0.32, 0.72, 0, 1] }}
              className="overflow-hidden border-b border-ink/10 bg-bone md:hidden"
            >
              <div className="flex flex-col gap-1 px-5 py-4">
                {links.map((l) => (
                  <Link
                    key={l.href}
                    href={l.href}
                    className="focus-ring py-2 font-display text-lg uppercase tracking-wideplus"
                  >
                    {l.label}
                  </Link>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
