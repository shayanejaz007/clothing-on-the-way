import Image from "next/image";
import Link from "next/link";
import Marquee from "./Marquee";

export default function Footer() {
  return (
    <footer className="bg-ink text-bone">
      <Marquee dark />
      <div className="mx-auto max-w-7xl px-5 py-16 md:px-8">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <Image
              src="/images/logo-light.png"
              alt="Clothing on the Way"
              width={220}
              height={114}
              className="h-14 w-auto"
            />
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-bone/60">
              Elevated essentials for wherever life takes you. Premium
              streetwear, honestly priced.
            </p>
          </div>

          <nav className="md:col-span-3" aria-label="Shop">
            <p className="eyebrow !text-bone/40">Shop</p>
            <ul className="mt-4 space-y-2.5 text-sm">
              <li><Link className="focus-ring hover:text-bone/70" href="/shop">All pieces</Link></li>
              <li><Link className="focus-ring hover:text-bone/70" href="/shop?c=Tees">Tees</Link></li>
              <li><Link className="focus-ring hover:text-bone/70" href="/shop?c=Shorts">Shorts</Link></li>
              <li><Link className="focus-ring hover:text-bone/70" href="/shop?c=Headwear">Headwear</Link></li>
            </ul>
          </nav>

          <nav className="md:col-span-2" aria-label="Company">
            <p className="eyebrow !text-bone/40">Company</p>
            <ul className="mt-4 space-y-2.5 text-sm">
              <li><Link className="focus-ring hover:text-bone/70" href="/about">About</Link></li>
              <li><a className="focus-ring hover:text-bone/70" href="mailto:hello@clothingontheway.com">Contact</a></li>
            </ul>
          </nav>

          <div className="md:col-span-2">
            <p className="eyebrow !text-bone/40">Newsletter</p>
            <p className="mt-4 text-sm text-bone/60">
              First look at every drop.
            </p>
            <div className="mt-3 flex border-b border-bone/30">
              <input
                type="email"
                placeholder="Email address"
                aria-label="Email address"
                className="focus-ring w-full bg-transparent py-2 text-sm placeholder:text-bone/40"
              />
              <button className="focus-ring eyebrow !text-bone/70 hover:!text-bone">
                Join
              </button>
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-col justify-between gap-3 border-t border-bone/15 pt-6 text-xs text-bone/40 md:flex-row">
          <p>© {new Date().getFullYear()} Clothing on the Way. All rights reserved.</p>
          <p>Designed to travel light.</p>
        </div>
      </div>
    </footer>
  );
}
