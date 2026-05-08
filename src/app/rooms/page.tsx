import type { Metadata } from "next";
import { Check, MessageCircle, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ComboPricingSection from "@/components/sections/ComboPricingSection";
import BookingFlowSection from "@/components/sections/BookingFlowSection";
import CTABannerSection from "@/components/sections/CTABannerSection";
import { rooms } from "@/data/rooms";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "Danh sách phòng & Bảng giá",
  description:
    "Khám phá các loại phòng riêng tư tại SHO Cinema Gò Vấp: Cinema Room, PS5 Room, PC Couple Room, LoveTech Room và Kara Mini Room. Giá từ 99k/h.",
  alternates: { canonical: "/rooms" },
};

export default function RoomsPage() {
  return (
    <>
      {/* Page Header */}
      <section className="relative pt-32 pb-0 bg-background">
        <div className="absolute top-0 right-0 w-1/2 h-[500px] bg-secondary/10 blur-[150px] rounded-full pointer-events-none" />
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <Badge
            variant="outline"
            className="mb-4 bg-white/5 border-secondary/30 text-secondary py-1.5 px-4 text-xs uppercase tracking-wide"
          >
            Phòng riêng tư
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold mb-4 text-center sm:text-left">
            Chọn phòng theo{" "}
            <span className="bg-gradient-to-r from-secondary to-primary bg-clip-text text-transparent">
              mood của bạn
            </span>
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl text-center sm:text-left">
            5 loại phòng riêng tư độc đáo — từ cinema lãng mạn đến gaming sôi
            động. Tất cả đều kèm đồ ăn, nước uống và không gian 100% riêng tư.
          </p>
        </div>
      </section>

      {/* Rooms Tabs */}
      <section className="py-6 sm:py-12 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <Tabs defaultValue="all">
            <TabsList className="mb-10 bg-card/40 border border-white/10 p-1 rounded-full w-fit">
              <TabsTrigger value="all" className="rounded-full px-6">
                Tất cả phòng
              </TabsTrigger>
              <TabsTrigger value="cinema" className="rounded-full px-6">
                Cinema
              </TabsTrigger>
              <TabsTrigger value="gaming" className="rounded-full px-6">
                Gaming
              </TabsTrigger>
            </TabsList>

            <TabsContent value="all">
              <RoomGrid rooms={rooms} />
            </TabsContent>
            <TabsContent value="cinema">
              <RoomGrid
                rooms={rooms.filter(
                  (r) => r.id === "cinema" || r.id === "lovetech"
                )}
              />
            </TabsContent>
            <TabsContent value="gaming">
              <RoomGrid
                rooms={rooms.filter(
                  (r) =>
                    r.id === "ps5" ||
                    r.id === "pc-couple" ||
                    r.id === "kara-mini"
                )}
              />
            </TabsContent>
          </Tabs>
        </div>
      </section>

      <ComboPricingSection />
      <BookingFlowSection />
      <CTABannerSection />
    </>
  );
}

function RoomGrid({ rooms: roomList }: { rooms: typeof rooms }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {roomList.map((room) => (
        <div
          key={room.id}
          className={`bg-background rounded-3xl overflow-hidden border ${
            room.featured
              ? "border-primary shadow-[0_0_20px_rgba(200,50,100,0.15)]"
              : "border-white/10 hover:border-white/20"
          } flex flex-col transition-all group`}
        >
          {/* Image */}
          <div className="aspect-[4/3] relative overflow-hidden">
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
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
          </div>

          {/* Content */}
          <div className="p-6 flex-1 flex flex-col relative z-20 -mt-10">
            <div className="flex justify-between items-end mb-3">
              <h2 className="text-xl font-bold">{room.name}</h2>
              <div className="text-right">
                <span className="text-xs text-muted-foreground block">Từ</span>
                <span className="text-lg font-bold text-primary">
                  {room.price}/h
                </span>
              </div>
            </div>

            <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
              {room.description}
            </p>

            <div className="flex items-center gap-2 mb-4 text-xs text-muted-foreground">
              <Users size={14} className="text-secondary" />
              <span>{room.capacity}</span>
            </div>

            <ul className="space-y-2 mb-6 flex-1">
              {room.features.map((f, j) => (
                <li
                  key={j}
                  className="flex items-center text-sm text-muted-foreground"
                >
                  <Check size={14} className="text-secondary mr-2 shrink-0" />{" "}
                  {f}
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
                <MessageCircle size={16} className="mr-2" />
                Đặt phòng ngay
              </a>
            </Button>
          </div>
        </div>
      ))}
    </div>
  );
}
