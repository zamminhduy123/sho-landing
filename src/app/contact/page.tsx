import type { Metadata } from "next";
import { MapPin, Phone, Clock, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import FAQSection from "@/components/sections/FAQSection";
import GoogleMap from "@/components/ui/custom/GoogleMap";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "Liên hệ & Đặt phòng",
  description:
    "Liên hệ SHO Cinema Gò Vấp để đặt phòng cinema riêng, PS5 room hoặc PC couple. Nhắn Messenger, Zalo hoặc gọi hotline 091-787-8791.",
  alternates: { canonical: "/contact" },
};

const contactMethods = [
  {
    icon: <MessageCircle size={28} className="text-[#0084FF]" />,
    label: "Messenger",
    value: "SHO Cinema",
    href: siteConfig.social.messenger,
    btnLabel: "Nhắn Messenger",
    btnClass: "bg-[#0084FF] hover:bg-[#0084FF]/90",
  },
  {
    icon: <MessageCircle size={28} className="text-[#0068FF]" />,
    label: "Zalo",
    value: siteConfig.phone,
    href: siteConfig.social.zalo,
    btnLabel: "Nhắn Zalo",
    btnClass: "bg-[#0068FF] hover:bg-[#0068FF]/90",
  },
  {
    icon: <Phone size={28} className="text-[#00B14F]" />,
    label: "Hotline",
    value: siteConfig.phone,
    href: `tel:${siteConfig.phoneRaw}`,
    btnLabel: "Gọi ngay",
    btnClass: "bg-[#00B14F] hover:bg-[#00B14F]/90",
  },
];

const openHours = [
  { day: "Thứ 2 – Thứ 6", time: "10:00 – 24:00" },
  { day: "Thứ 7 – Chủ nhật", time: "09:00 – 01:00 sáng hôm sau" },
  { day: "Lễ, Tết", time: "Hoạt động bình thường" },
];

export default function ContactPage() {
  return (
    <>
      {/* Page Header */}
      <section className="relative pt-32 pb-0 bg-background">
        <div className="absolute top-0 right-0 w-1/2 h-[400px] bg-primary/10 blur-[150px] rounded-full pointer-events-none" />
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <Badge
            variant="outline"
            className="mb-4 bg-white/5 border-primary/30 text-primary py-1.5 px-4 text-xs uppercase tracking-wide"
          >
            Đặt phòng
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Liên hệ &{" "}
            <span className="text-primary">Đặt phòng ngay</span>
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl">
            Nhắn SHO để kiểm tra phòng trống, hỏi giá và đặt phòng. Phản hồi
            nhanh trong vòng vài phút!
          </p>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {contactMethods.map((method) => (
              <div
                key={method.label}
                className="bg-card/40 border border-white/10 rounded-3xl p-8 flex flex-col items-center text-center hover:border-white/20 transition-all hover:-translate-y-1"
              >
                <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center mb-4">
                  {method.icon}
                </div>
                <h3 className="text-lg font-bold mb-1">{method.label}</h3>
                <p className="text-muted-foreground text-sm mb-6">
                  {method.value}
                </p>
                <Button
                  asChild
                  className={`w-full rounded-full text-white border-0 ${method.btnClass}`}
                >
                  <a
                    href={method.href}
                    target={method.href.startsWith("tel") ? undefined : "_blank"}
                    rel="noopener noreferrer"
                  >
                    {method.btnLabel}
                  </a>
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Separator className="bg-white/5" />

      {/* Location + Hours */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {/* Map & Address */}
            <div>
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <MapPin className="text-primary" size={24} />
                Địa chỉ & Bản đồ
              </h2>
              <div className="rounded-3xl overflow-hidden aspect-[4/3] border border-white/10 mb-6 relative group">
                <GoogleMap />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors pointer-events-none" />
              </div>
              <p className="text-muted-foreground mb-4">{siteConfig.address}</p>
              <Button
                asChild
                variant="outline"
                className="rounded-full border-white/20 bg-white/5 hover:bg-white/10"
              >
                <a
                  href={`https://maps.google.com/?q=${encodeURIComponent(siteConfig.address)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MapPin size={16} className="mr-2" />
                  Chỉ đường Google Maps
                </a>
              </Button>
            </div>

            {/* Hours */}
            <div>
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <Clock className="text-secondary" size={24} />
                Giờ hoạt động
              </h2>
              <div className="space-y-4">
                {openHours.map((hour) => (
                  <div
                    key={hour.day}
                    className="bg-card/40 border border-white/10 rounded-2xl p-5 flex justify-between items-center"
                  >
                    <span className="font-medium text-foreground/80">
                      {hour.day}
                    </span>
                    <span className="text-primary font-bold">{hour.time}</span>
                  </div>
                ))}
              </div>

              <div className="mt-8 bg-primary/10 border border-primary/20 rounded-2xl p-5">
                <p className="text-sm text-foreground/70 leading-relaxed">
                  💡 <strong>Mẹo:</strong> Để đảm bảo có phòng, hãy nhắn tin
                  trước ít nhất 1–2 tiếng, đặc biệt vào cuối tuần và ngày lễ.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <FAQSection />
    </>
  );
}
