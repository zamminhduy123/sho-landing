"use client";

import { motion } from "motion/react";

const experiences = [
  {
    img: "/images/movie-date.png",
    title: "Movie Date",
    desc: "Xem phim riêng tư với màn hình lớn / âm thanh vòm.",
  },
  {
    img: "/images/gaming-couple.png",
    title: "Gaming Couple",
    desc: "2 PC gaming setup / hai bạn chơi PS5.",
  },
  {
    img: "/images/kara-mini.png",
    title: "Kara Mini",
    desc: "Mic karaoke mini, hát thoải mái, không lo hàng xóm.",
  },
  {
    img: "/images/chill-rest.png",
    title: "Chill & Rest",
    desc: "Ghế nằm, chăn ấm, chill cùng nhau hoặc combo đêm.",
  },
];

export default function ExperienceSection() {
  return (
    <section className="py-20 bg-background relative">
      <div className="absolute top-0 right-0 w-1/2 h-[500px] bg-primary/10 blur-[150px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="mb-12 text-center max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Một phòng riêng,
            <br />
            <span className="text-primary">nhiều trải nghiệm</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Chỉ với một lần đặt phòng, tận hưởng toàn bộ tiện ích giải trí
            trong không gian của riêng bạn.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {experiences.map((exp, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group relative rounded-3xl overflow-hidden aspect-[3/4] border border-white/10"
            >
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent z-10 opacity-80 group-hover:opacity-60 transition-opacity" />
              <img
                src={exp.img}
                alt={exp.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
                <h3 className="text-2xl font-bold text-white mb-2">
                  {exp.title}
                </h3>
                <p className="text-white/70 text-sm">{exp.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
