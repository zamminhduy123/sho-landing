import Link from "next/link";
import { MapPin, Phone } from "lucide-react";
import { siteConfig } from "@/data/site";
import Logo from "@/components/ui/custom/Logo";

function FacebookIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

function InstagramIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

const footerLinks = {
  khamppha: [
    { href: "/rooms", label: "Danh sách phòng" },
    { href: "/rooms#combo", label: "Bảng giá & Combo" },
    { href: "/gallery", label: "Thư viện ảnh" },
    { href: "/contact", label: "Liên hệ & Đặt phòng" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-background border-t border-white/10 pt-16 pb-24 md:pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <Logo className="mb-6" />
            <p className="text-muted-foreground text-sm max-w-sm leading-relaxed mb-6">
              {siteConfig.description}
            </p>
            <div className="flex gap-4">
              <a
                href={siteConfig.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-primary hover:text-white transition-colors"
                aria-label="Facebook"
              >
                <FacebookIcon size={18} />
              </a>
              <a
                href={siteConfig.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-primary hover:text-white transition-colors"
                aria-label="Instagram"
              >
                <InstagramIcon size={18} />
              </a>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-white mb-6">Liên hệ</h4>
            <ul className="space-y-4 text-sm text-muted-foreground">
              <li className="flex items-start">
                <MapPin size={16} className="mr-3 text-primary shrink-0 mt-0.5" />
                {siteConfig.address}
              </li>
              <li className="flex items-center">
                <Phone size={16} className="mr-3 text-secondary shrink-0" />
                <a
                  href={`tel:${siteConfig.phoneRaw}`}
                  className="hover:text-primary transition-colors"
                >
                  {siteConfig.phone}
                </a>
              </li>
            </ul>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-bold text-white mb-6">Khám phá</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              {footerLinks.khamppha.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-muted-foreground/60 text-center md:text-left">
          <p>© {new Date().getFullYear()} {siteConfig.name}. Nội dung demo có thể được thay thế.</p>
          <p>Thiết kế tinh tế tại TP.HCM.</p>
        </div>
      </div>
    </footer>
  );
}
