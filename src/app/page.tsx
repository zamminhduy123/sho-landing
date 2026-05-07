import type { Metadata } from "next";
import HeroSection from "@/components/sections/HeroSection";
import BenefitsStrip from "@/components/sections/BenefitsStrip";
import ExperienceSection from "@/components/sections/ExperienceSection";
import RoomCardsSection from "@/components/sections/RoomCardsSection";
import ComboPricingSection from "@/components/sections/ComboPricingSection";
import GalleryPreviewSection from "@/components/sections/GalleryPreviewSection";
import FoodDrinksSection from "@/components/sections/FoodDrinksSection";
import BookingFlowSection from "@/components/sections/BookingFlowSection";
import LocationSection from "@/components/sections/LocationSection";
import FAQSection from "@/components/sections/FAQSection";
import CTABannerSection from "@/components/sections/CTABannerSection";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: `${siteConfig.name} – Phòng riêng xem phim, PS5 & PC Couple tại Gò Vấp`,
  description: siteConfig.description,
  alternates: {
    canonical: "/",
  },
};

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <BenefitsStrip />
      <ExperienceSection />
      <RoomCardsSection preview />
      <ComboPricingSection />
      <GalleryPreviewSection />
      <FoodDrinksSection />
      <BookingFlowSection />
      <LocationSection />
      <FAQSection />
      <CTABannerSection />
    </>
  );
}
