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
    price: "Từ 99k",
    unit: "/giờ",
    desc: "Xem phim/hẹn hò ngắn.",
    popular: false,
  },
  {
    id: "4h",
    title: "Combo 4h",
    price: "349k",
    unit: "",
    desc: "Xem phim / chơi game / tán gẫu.",
    popular: true,
  },
  {
    id: "8h",
    title: "Combo 8h",
    price: "599k",
    unit: "",
    desc: "Chả đổ mồ hôi, chill cả ngày/đêm.",
    popular: false,
  },
  {
    id: "night",
    title: "Combo đêm",
    price: "899k",
    unit: "",
    desc: "Qua đêm / full night stay.",
    popular: false,
  },
];
