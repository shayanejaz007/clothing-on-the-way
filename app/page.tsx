import Image from "next/image";
import Link from "next/link";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import ProductCard from "@/components/ProductCard";
import CampaignMedia from "@/components/CampaignMedia";
import TCLineup from "@/components/TCLineup";
import Reveal from "@/components/Reveal";
import Lookbook from "@/components/Lookbook";
import { products } from "@/lib/products";
import { ArrowRight } from "lucide-react";

export default function HomePage() {
  const featured = products.slice(0, 3);

  return (
    <>
      <Hero />
      <Marquee />

      <TCLineup />

      <CampaignMedia
        videoSrc="/media/tc-campaign.mp4"
        posterSrc="/images/tc/tee-bone.jpg"
        eyebrow="TC Series — Film 001"
        headline="A crest, quietly worn."
      />

      {/* Featured pieces */}
      <section className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-28">
        <Reveal>
          <div className="flex items-end justify-between">
            <div>
              <p className="eyebrow">Collection 001</p>
              <h2 className="mt-3 font-display text-3xl font-semibold uppercase tracking-tight md:text-4xl">
                The first delivery
              </h2>
            </div>
            <Link
              href="/shop"
              className="focus-ring group hidden items-center gap-2 eyebrow hover:text-ink md:flex"
            >
              View all
              <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </Reveal>

        <div className="mt-10 grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((p, i) => (
            <ProductCard key={p.slug} product={p} index={i} />
          ))}
        </div>

        <Link
          href="/shop"
          className="focus-ring mt-12 flex w-full items-center justify-center gap-2 border border-ink py-3.5 font-display text-sm font-semibold uppercase tracking-wideplus md:hidden"
        >
          View all pieces <ArrowRight size={15} />
        </Link>
      </section>

      <CampaignMedia />

      <Lookbook />

      {/* Editorial: craft */}
      <section className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-28">
        <div className="grid items-center gap-10 md:grid-cols-2 lg:gap-16">
          <Reveal className="relative aspect-[4/5] overflow-hidden bg-[#e7e2d8]">
            <Image
              src="/images/tee-cream.jpg"
              alt="Back-print embossed tee in bone with the full hanger mark"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
          </Reveal>
          <div>
            <Reveal delay={0.1}>
              <p className="eyebrow">The craft</p>
              <h2 className="mt-4 font-display text-3xl font-semibold uppercase leading-tight tracking-tight md:text-4xl">
                Tonal by design.
                <br />
                Heavy by default.
              </h2>
              <p className="mt-6 max-w-md leading-relaxed text-ink/70">
                Every mark is raised, not printed flat — high-density puff on
                240&nbsp;GSM jersey, deboss on loopback fleece, bone-thread
                embroidery on brushed twill. The logo is felt before it is
                seen.
              </p>
            </Reveal>
            <Reveal delay={0.2}>
              <ul className="mt-8 space-y-4">
                {[
                  ["Fabric first", "Heavyweight cottons chosen by hand feel, then washed for depth."],
                  ["Quiet branding", "Tone-on-tone embossing. Loud construction, low volume."],
                  ["Honest pricing", "Every piece lands between $20 and $60. That is the whole range."],
                ].map(([t, d]) => (
                  <li key={t} className="rail pt-4">
                    <p className="font-display text-sm font-semibold uppercase tracking-wideplus">
                      {t}
                    </p>
                    <p className="mt-1 text-sm text-ink/60">{d}</p>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="border-t border-ink/15">
        <div className="mx-auto max-w-7xl px-5 py-24 text-center md:px-8">
          <Reveal>
            <p className="eyebrow">Nothing over $60</p>
            <h2 className="mx-auto mt-4 max-w-3xl font-display text-4xl font-semibold uppercase leading-[1.02] tracking-tight md:text-6xl">
              Premium is a standard, not a price tag.
            </h2>
            <Link
              href="/shop"
              className="focus-ring group mt-10 inline-flex items-center gap-3 bg-ink px-8 py-4 font-display text-sm font-semibold uppercase tracking-wideplus text-bone"
            >
              Shop Collection 001
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
