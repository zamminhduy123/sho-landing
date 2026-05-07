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

        <div className="flex overflow-x-auto pb-8 -mx-4 px-4 md:grid md:grid-cols-4 md:overflow-visible md:pb-0 md:mx-0 md:px-0 gap-6 snap-x snap-mandatory hide-scrollbar">
          {menuItems.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="min-w-[260px] md:min-w-0 snap-center bg-card/40 border border-white/10 rounded-3xl p-6 flex flex-col h-full hover:bg-card/60 transition-colors"
            >
              <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center mb-6">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold mb-2">{item.title}</h3>
              <p className="text-muted-foreground text-sm flex-1">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
