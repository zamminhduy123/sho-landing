"use client";

import { motion } from "motion/react";
import { Lock, Gamepad2, Clock, Wine } from "lucide-react";

const benefits = [
  {
    icon: <Lock className="text-primary mb-3" size={28} />,
    title: "Riêng tư",
    desc: "Phòng 100% riêng tư, không gian chỉ dành cho bạn",
  },
  {
    icon: <Gamepad2 className="text-secondary mb-3" size={28} />,
    title: "Giải trí đầy đủ",
    desc: "Cinema, Netflix, PS5, PC gaming và karaoke",
  },
  {
    icon: <Clock className="text-accent mb-3" size={28} />,
    title: "Combo linh hoạt",
    desc: "Đặt theo giờ hoặc theo combo cực kỳ tiết kiệm",
  },
  {
    icon: <Wine className="text-chart-4 mb-3" size={28} />,
    title: "Đồ ăn tại phòng",
    desc: "Snack, nước uống, mì ăn liền, cà phê và đồ uống",
  },
];

export default function BenefitsStrip() {
  return (
    <section className="relative z-20 -mt-16 md:-mt-24 mb-20 px-4">
      <div className="container mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-6">
          {benefits.map((benefit, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-card/60 backdrop-blur-xl border border-white/10 rounded-2xl p-4 md:p-6 shadow-xl hover:border-white/20 transition-all hover:-translate-y-1"
            >
              {benefit.icon}
              <h3 className="font-semibold text-foreground mb-1 text-sm md:text-base">
                {benefit.title}
              </h3>
              <p className="text-xs md:text-sm text-muted-foreground line-clamp-2 md:line-clamp-none">
                {benefit.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
