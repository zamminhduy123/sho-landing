"use client";

import { MapPin, Phone, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/data/site";

export default function MobileCTABar() {
  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-xl border-t border-white/10 p-3 grid grid-cols-3 gap-2">
      <Button
        asChild
        className="w-full bg-primary hover:bg-primary/90 text-white flex-col h-auto py-2 rounded-xl border-0 shadow-[0_0_15px_rgba(200,50,100,0.3)]"
      >
        <a href={siteConfig.social.messenger} target="_blank" rel="noopener noreferrer">
          <MessageCircle size={18} className="mb-1" />
          <span className="text-[10px] font-bold">Đặt phòng</span>
        </a>
      </Button>
      <Button
        asChild
        className="w-full bg-[#00B14F] hover:bg-[#00B14F]/90 text-white flex-col h-auto py-2 rounded-xl border-0 shadow-[0_0_15px_rgba(0,177,79,0.3)]"
      >
        <a href={`tel:${siteConfig.phoneRaw}`}>
          <Phone size={18} className="mb-1" />
          <span className="text-[10px] font-bold">Gọi ngay</span>
        </a>
      </Button>
      <Button
        variant="outline"
        asChild
        className="w-full bg-white/5 hover:bg-white/10 border-white/10 text-white flex-col h-auto py-2 rounded-xl"
      >
        <a
          href={`https://maps.google.com/?q=${encodeURIComponent(siteConfig.address)}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <MapPin size={18} className="mb-1" />
          <span className="text-[10px] font-bold">Chỉ đường</span>
        </a>
      </Button>
    </div>
  );
}
