import { Button } from "@/components/ui/button";
import { siteConfig } from "@/data/site";

export default function CTABannerSection() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src="/images/chill-rest.png"
          alt="Couple Silhouette"
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent" />
        <div className="absolute inset-0 bg-primary/10 mix-blend-color" />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-2xl">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Sẵn sàng cho buổi hẹn
            <br />
            riêng tư tại{" "}
            <span className="text-primary drop-shadow-[0_0_15px_rgba(200,50,100,0.5)]">
              SHO?
            </span>
          </h2>
          <p className="text-lg text-white/80 mb-10 max-w-xl">
            Chọn phòng, nhắn SHO và tận hưởng cinema, PS5, PC Couple, kara mini
            và đồ ăn tại phòng.
          </p>
          <Button
            size="lg"
            asChild
            className="bg-primary hover:bg-primary/90 text-white rounded-full px-10 py-7 text-lg font-bold shadow-[0_0_30px_rgba(200,50,100,0.5)] transition-transform hover:scale-105"
          >
            <a
              href={siteConfig.social.messenger}
              target="_blank"
              rel="noopener noreferrer"
            >
              Đặt phòng ngay
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
