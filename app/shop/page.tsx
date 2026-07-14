import type { Metadata } from "next";
import ShopClient from "./ShopClient";

export const metadata: Metadata = {
  title: "Shop — Clothing on the Way",
  description: "Collection 001. Embossed tees, fleece and chino shorts, embroidered headwear. Everything $20–$60.",
};

export default function ShopPage() {
  return <ShopClient />;
}
