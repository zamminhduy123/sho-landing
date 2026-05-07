export interface Room {
  id: string;
  name: string;
  img: string;
  price: string;
  features: string[];
  featured?: boolean;
  description: string;
  capacity: string;
}

export const rooms: Room[] = [
  {
    id: "cinema",
    name: "Cinema Room",
    img: "/images/hero-bg.png",
    price: "99k",
    features: ["Netflix/YouTube", "Màn hình lớn", "Ghế nằm", "Ánh đèn riêng"],
    description: "Trải nghiệm điện ảnh đỉnh cao với màn hình lớn, âm thanh vòm và ghế nằm êm ái.",
    capacity: "2–4 người",
  },
  {
    id: "ps5",
    name: "PS5 Room",
    img: "/images/ps5-room.png",
    price: "99k",
    features: ["Tay cầm PS5", "Màn 4K OLED", "Game bắn súng"],
    description: "Chiến game cùng nhau với PS5 và màn hình 4K OLED siêu sắc nét.",
    capacity: "2 người",
  },
  {
    id: "pc-couple",
    name: "PC Couple Room",
    img: "/images/gaming-couple.png",
    price: "99k",
    features: ["2 PC gaming setup", "Ghế gaming"],
    description: "Hai PC gaming setup riêng biệt, cùng nhau chinh chiến hoặc chơi game co-op.",
    capacity: "2 người",
  },
  {
    id: "lovetech",
    name: "LoveTech Room",
    img: "/images/chill-rest.png",
    price: "129k",
    features: ["Kết hợp cinema", "Game / PC couple", "Full tiện nghi"],
    featured: true,
    description: "Phòng cao cấp nhất – kết hợp cinema + gaming + karaoke. Trải nghiệm tất-cả-trong-một.",
    capacity: "2–4 người",
  },
  {
    id: "kara-mini",
    name: "Kara Mini Room",
    img: "/images/kara-mini.png",
    price: "99k",
    features: ["Micro, echo", "Màn hình lyrics", "Full bộ âm thanh"],
    description: "Hát karaoke mini trong không gian riêng tư, không lo phiền hàng xóm.",
    capacity: "2–6 người",
  },
];
