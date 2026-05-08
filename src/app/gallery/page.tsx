import type { Metadata } from "next";
import { Badge } from "@/components/ui/badge";
import GalleryGrid from "@/components/ui/custom/GalleryGrid";
import CTABannerSection from "@/components/sections/CTABannerSection";

export const metadata: Metadata = {
  title: "Thư viện ảnh",
  description:
    "Xem ảnh thực tế không gian SHO Cinema Gò Vấp: phòng cinema riêng, PS5 room, PC couple gaming, karaoke mini và không gian chill & rest.",
  alternates: { canonical: "/gallery" },
};

export default function GalleryPage() {
  return (
    <>
      {/* Page Header */}
      <section className="relative pt-32 pb-0 bg-background">
        <div className="absolute top-0 left-0 w-1/2 h-[400px] bg-accent/10 blur-[150px] rounded-full pointer-events-none" />
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <Badge
            variant="outline"
            className="mb-4 bg-white/5 border-accent/30 text-accent py-1.5 px-4 text-xs uppercase tracking-wide"
          >
            Thư viện ảnh
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Không gian tại{" "}
            <span className="text-accent">SHO Cinema</span>
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl">
            Một cái nhìn thực tế về không gian riêng tư của chúng tôi — nơi mỗi
            buổi hẹn đều trở thành kỷ niệm đáng nhớ.
          </p>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-12 pb-24 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <GalleryGrid />
        </div>
      </section>

      <CTABannerSection />
    </>
  );
}
