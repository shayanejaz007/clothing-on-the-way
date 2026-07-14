import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto flex min-h-svh max-w-7xl flex-col items-center justify-center px-5 text-center">
      <p className="eyebrow">404</p>
      <h1 className="mt-4 font-display text-4xl font-semibold uppercase tracking-tight">
        This piece is not here
      </h1>
      <p className="mt-3 text-ink/60">
        The page you are looking for moved on. The collection did not.
      </p>
      <Link
        href="/shop"
        className="focus-ring mt-8 bg-ink px-6 py-3.5 font-display text-sm font-semibold uppercase tracking-wideplus text-bone"
      >
        Back to the shop
      </Link>
    </div>
  );
}
