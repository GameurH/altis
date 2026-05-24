import Link from "next/link";
import { cn } from "@/lib/utils";
import { ArrowLeft } from "lucide-react";
import { SafeFillImage } from "@/components/ui/safe-fill-image";

interface ProgramCardProps {
  title: string;
  description: string;
  audience: string;
  href: string;
  imageSrc?: string;
  imageAlt?: string;
  className?: string;
}

export function ProgramCard({
  title,
  description,
  audience,
  href,
  imageSrc,
  imageAlt,
  className,
}: ProgramCardProps) {
  return (
    <Link
      href={href}
      className={cn(
        "group block rounded-xl border border-border bg-surface overflow-hidden",
        "hover:border-crimson/30 hover:shadow-[0_0_40px_-12px_rgba(166,30,45,0.15)]",
        "transition-all duration-300",
        className
      )}
    >
      {imageSrc && (
        <div className="relative aspect-4/3 overflow-hidden">
          <SafeFillImage
            src={imageSrc}
            alt={imageAlt ?? title}
            fallbackLabel={title}
            className="group-hover:scale-110 transition-transform duration-700 ease-out"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
          {/* Bottom gradient fade into card body */}
          <div className="absolute inset-x-0 bottom-0 h-1/3 bg-linear-to-t from-surface to-transparent pointer-events-none" />
          {/* Audience badge — overlaid on image */}
          <span className="absolute top-3 inset-s-3 inline-flex items-center gap-1.5 rounded-md bg-midnight/70 backdrop-blur-sm border border-border/50 px-2.5 py-1 text-[11px] font-semibold tracking-wide text-crimson uppercase">
            {audience}
          </span>
        </div>
      )}
      <div className="p-6">
        {!imageSrc && (
          <span className="inline-block text-xs font-medium text-crimson mb-3">
            {audience}
          </span>
        )}
        <h3 className="text-lg font-bold text-ivory group-hover:text-crimson transition-colors duration-300">
          {title}
        </h3>
        <p className="mt-2 text-sm text-steel leading-relaxed">{description}</p>
        <span className="inline-flex items-center gap-1.5 mt-4 text-xs font-semibold text-ivory/60 group-hover:text-crimson transition-colors duration-300">
          اكتشف المزيد
          <ArrowLeft className="h-3 w-3 transition-transform duration-300 group-hover:-translate-x-1" />
        </span>
      </div>
    </Link>
  );
}
