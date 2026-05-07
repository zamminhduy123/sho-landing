import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import MobileCTABar from "@/components/layout/MobileCTABar";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} – Phòng riêng xem phim, PS5 & PC Couple tại Gò Vấp`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    "phòng cinema riêng",
    "thuê phòng PS5",
    "PC couple Gò Vấp",
    "karaoke mini",
    "SHO Cinema",
    "phòng đôi TP.HCM",
    "LoveTech Gò Vấp",
  ],
  authors: [{ name: "SHO Cinema" }],
  creator: "SHO Cinema",
  openGraph: {
    type: "website",
    locale: "vi_VN",
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: `${siteConfig.name} – Phòng riêng xem phim, PS5 & PC Couple`,
    description: siteConfig.description,
    images: [
      {
        url: siteConfig.openGraph.image,
        width: 1200,
        height: 630,
        alt: "SHO Cinema Gò Vấp – Phòng riêng xem phim",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} – Phòng riêng xem phim, PS5 & PC Couple`,
    description: siteConfig.description,
    images: [siteConfig.openGraph.image],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi" className="dark">
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
        <MobileCTABar />
      </body>
    </html>
  );
}
