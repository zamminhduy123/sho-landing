"use client";

import { motion } from "motion/react";
import {
  Sparkles,
  Film,
  Gamepad2,
  Monitor,
  Mic2,
  Coffee,
  Clock,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { siteConfig } from "@/data/site";

const heroFeatures = [
  { icon: <Film size={20} />, label: "Cinema riêng" },
  { icon: <Gamepad2 size={20} />, label: "PS5" },
  { icon: <Monitor size={20} />, label: "PC Couple" },
  { icon: <Mic2 size={20} />, label: "Kara mini" },
  { icon: <Coffee size={20} />, label: "Food 24/7" },
  { icon: <Clock size={20} />, label: "Combo theo giờ" },
];

export default function HeroSection() {
  return (
    <section className="relative min-h-[100dvh] flex items-center pt-20 pb-24 md:pb-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/60 to-background z-10" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/80 to-transparent z-10" />
        <img
          src="/images/hero-bg.png"
          alt="Phòng cinema riêng tư tại SHO Cinema Gò Vấp"
          className="w-full h-full object-cover object-center scale-105"
        />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 md:px-6 relative z-20">
        <div className="flex items-center justify-between">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <Badge
              variant="outline"
              className="mb-6 bg-white/5 border-primary/30 text-primary backdrop-blur-md py-1.5 px-4 text-xs font-medium tracking-wide uppercase"
            >
              <Sparkles size={12} className="mr-2 inline" /> Gò Vấp, TP.HCM
            </Badge>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-[1.1] mb-6 bg-gradient-to-br from-white to-white/60 bg-clip-text text-transparent">
              Phòng riêng xem phim, <br />
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(200,50,100,0.4)]">
                PS5 &amp; PC Couple
              </span>
              <br />
              cho mọi buổi hẹn
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl font-light leading-relaxed">
              Không gian riêng tư để xem phim, chơi game, karaoke mini và tận hưởng
              những giây phút thư giãn tuyệt vời tại Gò Vấp.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                asChild
                className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-8 py-6 text-base font-semibold neon-glow-pink"
              >
                <a
                  href={siteConfig.social.messenger}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Đặt phòng ngay
                </a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                asChild
                className="rounded-full px-8 py-6 text-base font-semibold border-white/20 bg-white/5 hover:bg-white/10 backdrop-blur-md"
              >
                <a href="/rooms">Xem phòng</a>
              </Button>
            </div>
          </motion.div>

          {/* Hero Features - Desktop Only */}
          <div className="hidden xl:flex flex-col gap-4 absolute right-12 top-1/2 -translate-y-1/2 z-30">
            {heroFeatures.map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{
                  delay: 0.5 + i * 0.1,
                  duration: 0.5,
                  ease: "easeOut",
                }}
                whileHover={{ scale: 1.05, x: -5 }}
                className="flex items-center gap-4 bg-background/40 backdrop-blur-md border border-white/10 rounded-2xl p-4 min-w-[240px] shadow-[0_0_20px_rgba(0,0,0,0.3)] group transition-all hover:border-primary/50 hover:bg-background/60"
              >
                <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all shadow-[0_0_15px_rgba(200,50,100,0.1)]">
                  {feature.icon}
                </div>
                <span className="font-medium text-base text-white/90 group-hover:text-white transition-colors">
                  {feature.label}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
