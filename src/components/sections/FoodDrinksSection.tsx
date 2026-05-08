"use client";

import { motion } from "motion/react";
import { Tv, Wine, Sandwich, Coffee } from "lucide-react";

const menuItems = [
  {
    title: "Snack",
    desc: "Gọi từ menu, freeship nội khu",
    icon: <Tv size={20} className="text-primary" />,
  },
  {
    title: "Nước uống",
    desc: "Trà sữa, nước ngọt, cà phê",
    icon: <Wine size={20} className="text-secondary" />,
  },
  {
    title: "Món nóng",
    desc: "Mì tôm, bánh mì nóng, bữa nhẹ",
    icon: <Sandwich size={20} className="text-accent" />,
  },
  {
    title: "Coffee",
    desc: "Cà phê đen, bạc xỉu, latte",
    icon: <Coffee size={20} className="text-chart-4" />,
  },
];

export default function FoodDrinksSection() {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-12 md:max-w-xl">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Ăn uống tại phòng,
            <br />
            chill không gián đoạn
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-6">
          {menuItems.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-card/40 border border-white/10 rounded-2xl p-4 md:p-6 flex flex-col h-full hover:bg-card/60 transition-colors"
            >
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/5 flex items-center justify-center mb-4 md:mb-6">
                {item.icon}
              </div>
              <h3 className="text-lg md:text-xl font-bold mb-1 md:mb-2 leading-tight">{item.title}</h3>
              <p className="text-muted-foreground text-[12px] md:text-sm flex-1 leading-snug">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
