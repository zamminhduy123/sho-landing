export interface GalleryImage {
  src: string;
  alt: string;
  span?: "col-2" | "row-2" | "both";
}

export const galleryImages: GalleryImage[] = [
  { src: "/images/hero-bg.png", alt: "Cinema room SHO", span: "both" },
  { src: "/images/gallery-1.png", alt: "PS5 gaming room" },
  { src: "/images/food-tray.png", alt: "Đồ ăn tại phòng" },
  { src: "/images/gallery-2.png", alt: "Không gian chill" },
  { src: "/images/gallery-3.png", alt: "Phòng gaming" },
  { src: "/images/gaming-couple.png", alt: "PC couple setup" },
  { src: "/images/kara-mini.png", alt: "Karaoke mini room" },
  { src: "/images/movie-date.png", alt: "Movie date room" },
  { src: "/images/chill-rest.png", alt: "Chill & rest room" },
];
