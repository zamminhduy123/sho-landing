"use client";

import { MapPin, Phone, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/data/site";

const bookingSteps = [
  {
    step: 1,
    title: "Chọn hạng phòng",
    desc: "Xem danh sách và chọn phòng phù hợp với nhu cầu",
  },
  {
    step: 2,
    title: "Kiểm tra phòng",
    desc: "Nhắn SHO để kiểm tra tình trạng phòng trống",
  },
  {
    step: 3,
    title: "Đến & Tận hưởng",
    desc: "Đến nhận phòng và tận hưởng không gian riêng tư",
  },
];

export default function BookingFlowSection() {
  return (
    <section className="py-24 bg-card/30 relative">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold">Đặt phòng chỉ 3 bước</h2>
        </div>

        <div className="flex flex-col md:flex-row gap-8 relative max-w-5xl mx-auto mb-16">
          <div className="hidden md:block absolute top-12 left-[15%] right-[15%] h-[2px] bg-gradient-to-r from-primary via-secondary to-accent z-0" />

          {bookingSteps.map((step, i) => (
            <div
              key={i}
              className="flex-1 flex flex-col items-center text-center relative z-10"
            >
              <div className="w-24 h-24 rounded-full bg-background border-4 border-card flex items-center justify-center text-3xl font-bold text-white shadow-[0_0_20px_rgba(255,255,255,0.1)] mb-6">
                <span className="bg-gradient-to-br from-primary to-accent bg-clip-text text-transparent">
                  {step.step}
                </span>
              </div>
              <h3 className="text-xl font-bold mb-3">{step.title}</h3>
              <p className="text-muted-foreground text-sm max-w-[250px]">
                {step.desc}
              </p>
            </div>
          ))}
        </div>

        <div className="flex flex-wrap justify-center gap-4 max-w-3xl mx-auto">
          <Button
            asChild
            className="bg-[#0084FF] hover:bg-[#0084FF]/90 text-white rounded-full px-6 py-6"
          >
            <a href={siteConfig.social.messenger} target="_blank" rel="noopener noreferrer">
              <MessageCircle className="mr-2" size={20} /> Nhắn Messenger
            </a>
          </Button>
          <Button
            asChild
            className="bg-[#0068FF] hover:bg-[#0068FF]/90 text-white rounded-full px-6 py-6"
          >
            <a href={siteConfig.social.zalo} target="_blank" rel="noopener noreferrer">
              <MessageCircle className="mr-2" size={20} /> Nhắn Zalo
            </a>
          </Button>
          <Button
            asChild
            className="bg-[#00B14F] hover:bg-[#00B14F]/90 text-white rounded-full px-6 py-6"
          >
            <a href={`tel:${siteConfig.phoneRaw}`}>
              <Phone className="mr-2" size={20} /> Gọi ngay
            </a>
          </Button>
          <Button
            variant="outline"
            asChild
            className="bg-white/5 border-white/10 text-white rounded-full px-6 py-6 hover:bg-white/10"
          >
            <a
              href={`https://maps.google.com/?q=${encodeURIComponent(siteConfig.address)}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <MapPin className="mr-2" size={20} /> Chỉ đường
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
