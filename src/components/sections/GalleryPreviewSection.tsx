"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";

const galleryGrid = [
  { src: "/images/hero-bg.png", alt: "Phòng Cinema", className: "col-span-2 row-span-2" },
  { src: "/images/gallery-1.png", alt: "Phòng Game PS5" },
  { src: "/images/food-tray.png", alt: "Đồ ăn tại phòng" },
  { src: "/images/gallery-2.png", alt: "Không gian thư giãn" },
  { src: "/images/gallery-3.png", alt: "Phòng PC Gaming" },
];

export default function GalleryPreviewSection() {
  return (
    <section id="gallery" className="py-24 bg-card/20 border-y border-white/5">
      <div className="container mx-auto px-4 md:px-6 w-full">
        <div className="flex justify-between items-end mb-10">
          <h2 className="text-3xl md:text-5xl font-bold text-center sm:text-left px-12 sm:px-0">
            Không gian tại <span className="text-accent">Sho Hotel</span>
          </h2>
          <Button
            variant="ghost"
            asChild
            className="hidden md:flex text-primary hover:text-primary hover:bg-primary/10"
          >
            <Link href="/gallery">
              Xem thêm ảnh <ChevronRight size={16} className="ml-1" />
            </Link>
          </Button>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[200px]">
          {galleryGrid.map((img, i) => (
            <div
              key={i}
              className={`rounded-2xl overflow-hidden relative group ${img.className ?? ""}`}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors" />
            </div>
          ))}
        </div>

        <div className="mt-8 text-center md:hidden">
          <Button
            variant="outline"
            asChild
            className="rounded-full w-full border-white/10 bg-white/5"
          >
            <Link href="/gallery">Xem thêm ảnh</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
