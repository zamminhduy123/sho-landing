import { cn } from "@/lib/utils";

interface GoogleMapProps {
  className?: string;
}

export default function GoogleMap({ className }: GoogleMapProps) {
  return (
    <div className={cn("relative w-full h-full", className)}>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d922.2072808535817!2d106.6828214087135!3d10.83300412071384!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x317529fa4e2b1d6b%3A0x6f9ad5adb8764a05!2zU2hvIEhvdGVsIC0gTG92ZXRlY2ggNDAvMTUgTMSQVCBHw7IgVuG6pXA!5e0!3m2!1svi!2s!4v1778143604281!5m2!1svi!2s"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="w-full h-full"
      />
      <div className="absolute inset-0 bg-black/10 pointer-events-none" />
    </div>
  );
}
