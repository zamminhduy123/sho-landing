"use client";

import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import { combos } from "@/data/combos";
import { siteConfig } from "@/data/site";

export default function ComboPricingSection() {
  return (
    <section id="combo" className="py-24 bg-background relative">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Combo linh hoạt
            <br />
            cho mọi lịch hẹn
          </h2>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-6 max-w-6xl mx-auto">
          {combos.map((plan, i) => (
            <motion.div
              key={plan.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`relative rounded-2xl p-5 md:p-8 backdrop-blur-xl ${
                plan.popular
                  ? "bg-card border-2 border-primary/50 shadow-[0_0_30px_rgba(200,50,100,0.2)] z-10 transform md:-translate-y-4"
                  : "bg-card/40 border border-white/10 hover:border-white/20"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3 md:-top-4 left-1/2 -translate-x-1/2">
                  <span className="bg-primary text-white text-[10px] md:text-xs font-bold uppercase tracking-wider py-0.5 md:py-1 px-3 md:px-4 rounded-full shadow-[0_0_10px_rgba(200,50,100,0.5)]">
                    Popular
                  </span>
                </div>
              )}
              <h3 className="text-base md:text-xl font-medium text-foreground/80 mb-1 md:mb-2 leading-tight">
                {plan.title}
              </h3>
              <div className="mb-2 md:mb-4">
                <span className="text-2xl md:text-4xl font-bold text-white">
                  {plan.price}
                </span>
                <span className="text-xs md:text-sm text-muted-foreground ml-1">
                  {plan.unit}
                </span>
              </div>
              <p className="text-[12px] md:text-sm text-muted-foreground mb-4 md:mb-8 md:h-10 leading-snug">
                {plan.desc}
              </p>
              <Button
                variant={plan.popular ? "default" : "outline"}
                asChild
                className={`w-full rounded-full h-9 md:h-11 text-xs md:text-sm ${
                  plan.popular
                    ? "bg-primary hover:bg-primary/90"
                    : "bg-transparent border-white/20"
                }`}
              >
                <a
                  href={siteConfig.social.messenger}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Hỏi giá ngay
                </a>
              </Button>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-10">
          <p className="text-xs text-muted-foreground/60 max-w-lg mx-auto">
            * Giá đổi theo loại phòng, khung giờ, cuối tuần và ngày lễ. Nhắn
            SHO để kiểm tra phòng trống và giá chính xác.
          </p>
        </div>
      </div>
    </section>
  );
}
