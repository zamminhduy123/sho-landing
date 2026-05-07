import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/data/site";
import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  imageSize?: number;
  textClassName?: string;
  taglineClassName?: string;
  priority?: boolean;
}

export default function Logo({
  className,
  imageSize = 48,
  textClassName,
  taglineClassName,
  priority = true,
}: LogoProps) {
  return (
    <Link href="/" className={cn("flex items-center gap-4 group", className)}>
      <Image
        src="/logo.webp"
        alt={`${siteConfig.name} Logo`}
        width={imageSize}
        height={imageSize}
        priority={priority}
        className="shrink-0"
      />
      <div className="flex flex-col">
        <span
          className={cn(
            "text-xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent uppercase tracking-wider group-hover:opacity-90 transition-opacity",
            textClassName
          )}
        >
          {siteConfig.name}
        </span>
        <span
          className={cn(
            "text-[10px] text-muted-foreground uppercase tracking-widest",
            taglineClassName
          )}
        >
          {siteConfig.tagline}
        </span>
      </div>
    </Link>
  );
}
