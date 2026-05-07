export interface Combo {
  id: string;
  title: string;
  price: string;
  unit: string;
  desc: string;
  popular?: boolean;
}

export const combos: Combo[] = [
  {
    id: "hourly",
    title: "Giờ lẻ",
    price: "Từ XXk",
    unit: "/giờ",
    desc: "Phòng riêng xem phim/hẹn hò ngắn.",
    popular: false,
  },
  {
    id: "4h",
    title: "Combo 4h",
    price: "XXXk",
    unit: "",
    desc: "Xem phim / chơi game / tán gẫu thoải mái.",
    popular: true,
  },
  {
    id: "8h",
    title: "Combo 8h",
    price: "XXXk",
    unit: "",
    desc: "Tận hưởng không gian riêng tư cả ngày.",
    popular: false,
  },
  {
    id: "night",
    title: "Combo đêm",
    price: "XXXk",
    unit: "",
    desc: "Dành cho khách ở qua đêm.",
    popular: false,
  },
];
