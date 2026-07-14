"use client";

export default function SizeSelector({
  sizes,
  value,
  onChange,
}: {
  sizes: string[];
  value: string | null;
  onChange: (s: string) => void;
}) {
  return (
    <div role="radiogroup" aria-label="Select size" className="flex flex-wrap gap-2">
      {sizes.map((s) => (
        <button
          key={s}
          role="radio"
          aria-checked={value === s}
          onClick={() => onChange(s)}
          className={`focus-ring min-w-[3rem] border px-3 py-2 text-sm transition-colors ${
            value === s
              ? "border-ink bg-ink text-bone"
              : "border-ink/25 hover:border-ink"
          }`}
        >
          {s}
        </button>
      ))}
    </div>
  );
}
