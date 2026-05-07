import { MapPin, Phone, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import GoogleMap from "@/components/ui/custom/GoogleMap";
import { siteConfig } from "@/data/site";

export default function LocationSection() {
  const mapsUrl = `https://maps.google.com/?q=${encodeURIComponent(siteConfig.address)}`;

  return (
    <section id="dia-chi" className="py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              SHO Cinema
              <br />
              <span className="text-primary text-2xl md:text-3xl">
                LoveTech Gò Vấp
              </span>
            </h2>
            <div className="space-y-6 mt-10">
              <div className="flex items-start">
                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center mr-4 shrink-0">
                  <MapPin className="text-primary" />
                </div>
                <div>
                  <h4 className="font-medium text-lg mb-1">Địa chỉ</h4>
                  <p className="text-muted-foreground">{siteConfig.address}</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center mr-4 shrink-0">
                  <Phone className="text-secondary" />
                </div>
                <div>
                  <h4 className="font-medium text-lg mb-1">Hotline</h4>
                  <a
                    href={`tel:${siteConfig.phoneRaw}`}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {siteConfig.phone}
                  </a>
                </div>
              </div>
            </div>
            <Button
              asChild
              className="mt-10 rounded-full px-8 bg-white/10 hover:bg-white/20 text-white border-0"
            >
              <a href={mapsUrl} target="_blank" rel="noopener noreferrer">
                Chỉ đường Google Maps <ChevronRight size={16} className="ml-2" />
              </a>
            </Button>
          </div>

          <div className="relative rounded-3xl overflow-hidden aspect-square md:aspect-[4/3] border border-white/10 group">
            <GoogleMap />
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center pointer-events-none">
              <div className="bg-background/80 backdrop-blur-md px-4 py-2 rounded-full mt-4 border border-white/10 text-sm font-medium whitespace-nowrap">
                SHO Cinema Gò Vấp
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
