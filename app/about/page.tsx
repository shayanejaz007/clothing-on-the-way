import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import Marquee from "@/components/Marquee";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "About — Clothing on the Way",
  description:
    "Clothing on the Way makes elevated essentials for wherever life takes you. Premium streetwear, honestly priced.",
};

export default function AboutPage() {
  return (
    <>
      <section className="mx-auto max-w-7xl px-5 pb-16 pt-28 md:px-8 md:pt-36">
        <div className="rail pt-5">
          <Reveal>
            <p className="eyebrow">The brand</p>
            <h1 className="mt-4 max-w-4xl font-display text-4xl font-semibold uppercase leading-[1.02] tracking-tight md:text-6xl">
              Always in motion. Never out of reach.
            </h1>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-12 md:grid-cols-2 lg:gap-20">
          <Reveal className="relative aspect-[3/4] overflow-hidden bg-[#e7e2d8]">
            <Image
              src="/images/collection-flatlay.jpg"
              alt="Collection 001 laid flat — tees, shorts, and cap in charcoal, bone, khaki, and black"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover object-top"
            />
          </Reveal>

          <div className="flex flex-col justify-center">
            <Reveal delay={0.1}>
              <p className="text-lg leading-relaxed text-ink/80">
                The hanger in our mark is a promise: your clothes are ready
                before you are. Clothing on the Way was built for people in
                motion — between cities, between jobs, between plans — who
                want to look considered without thinking about it.
              </p>
              <p className="mt-6 leading-relaxed text-ink/70">
                We work in a tight palette of charcoal, bone, khaki, and black
                so every piece pairs with every other piece. We spend on the
                things you can feel — 240&nbsp;GSM jersey, loopback fleece,
                raised tonal branding — and skip the things you can&apos;t:
                wholesale margins, seasonal markups, logo tax.
              </p>
              <p className="mt-6 leading-relaxed text-ink/70">
                That is why nothing we make costs more than $60. Not because
                it is cheap, but because that is what it actually costs to
                make it well.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      <Marquee />

      <section className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-28">
        <div className="grid gap-10 md:grid-cols-3">
          {[
            ["01", "Fewer, better", "One collection at a time. Five pieces done properly beat fifty done fast."],
            ["02", "Felt, not shouted", "Tonal embossing and quiet embroidery. The people who know, know."],
            ["03", "$25 to $60, delivered", "A hard ceiling on price is a design constraint we choose on purpose."],
          ].map(([n, t, d], i) => (
            <Reveal key={t} delay={i * 0.1}>
              <div className="rail pt-5">
                <p className="eyebrow">{n}</p>
                <h2 className="mt-3 font-display text-xl font-semibold uppercase tracking-wideplus">
                  {t}
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-ink/65">{d}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-20 text-center">
          <Link
            href="/shop"
            className="focus-ring group inline-flex items-center gap-3 bg-ink px-8 py-4 font-display text-sm font-semibold uppercase tracking-wideplus text-bone"
          >
            Shop Collection 001
            <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
          </Link>
        </Reveal>
      </section>
    </>
  );
}
