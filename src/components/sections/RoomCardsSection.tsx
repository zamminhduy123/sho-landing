"use client";

import { motion } from "motion/react";
import Link from "next/link";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { rooms } from "@/data/rooms";
import { siteConfig } from "@/data/site";

interface RoomCardsSectionProps {
  preview?: boolean; // Show only first 3 rooms for homepage
}

export default function RoomCardsSection({ preview = false }: RoomCardsSectionProps) {
  const displayRooms = preview ? rooms.slice(0, 3) : rooms;

  return (
    <section id="phong" className="py-24 bg-card/30 relative">
      <div className="absolute bottom-0 left-0 w-1/3 h-[400px] bg-secondary/10 blur-[150px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-12">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Chọn phòng theo{" "}
            <span className="bg-gradient-to-r from-secondary to-primary bg-clip-text text-transparent">
              mood của bạn
            </span>
          </h2>
        </div>

        <div className="flex overflow-x-auto pb-8 -mx-4 px-4 md:grid md:grid-cols-2 lg:grid-cols-3 md:overflow-visible md:pb-0 md:mx-0 md:px-0 gap-6 snap-x snap-mandatory hide-scrollbar">
          {displayRooms.map((room, i) => (
            <motion.div
              key={room.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`min-w-[300px] md:min-w-0 snap-center bg-background rounded-3xl overflow-hidden border ${
                room.featured
                  ? "border-primary shadow-[0_0_20px_rgba(200,50,100,0.15)]"
                  : "border-white/10 hover:border-white/20"
              } flex flex-col h-full transition-all`}
            >
              <div className="aspect-[16/9] relative w-full overflow-hidden shrink-0">
                {room.featured && (
                  <div className="absolute top-4 right-4 z-20">
                    <Badge className="bg-primary text-white border-0">
                      Premium
                    </Badge>
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent z-10" />
                <img
                  src={room.img}
                  alt={room.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-5 flex-1 flex flex-col relative z-20 -mt-6">
                <div className="flex justify-between items-end mb-4">
                  <h3 className="text-xl font-bold">{room.name}</h3>
                  <div className="text-right">
                    <span className="text-xs text-muted-foreground block">Từ</span>
                    <span className="text-lg font-bold text-primary">
                      {room.price}/h
                    </span>
                  </div>
                </div>
                <ul className="space-y-1 mb-4 flex-1">
                  {room.features.map((f, j) => (
                    <li
                      key={j}
                      className="flex items-center text-sm text-muted-foreground"
                    >
                      <Check size={14} className="text-secondary mr-2" /> {f}
                    </li>
                  ))}
                </ul>
                <Button
                  asChild
                  className={`w-full rounded-full ${
                    room.featured
                      ? "bg-primary hover:bg-primary/90"
                      : "bg-white/10 hover:bg-white/20 text-white"
                  }`}
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
            </motion.div>
          ))}
        </div>

        {preview && (
          <div className="text-center mt-12">
            <Button
              variant="outline"
              asChild
              className="rounded-full px-8 border-white/20 bg-white/5 hover:bg-white/10"
            >
              <Link href="/rooms">Xem tất cả phòng →</Link>
            </Button>
          </div>
        )}
      </div>
    </section>
  );
}
