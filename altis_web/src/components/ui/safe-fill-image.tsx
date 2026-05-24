"use client";

import { useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface SafeFillImageProps {
  src: string;
  alt: string;
  priority?: boolean;
  className?: string;
  sizes?: string;
  fallbackLabel?: string;
}

export function SafeFillImage({
  src,
  alt,
  priority = false,
  className,
  sizes,
  fallbackLabel,
}: SafeFillImageProps) {
  const [errored, setErrored] = useState(false);

  if (errored) {
    return (
      <div className={cn("absolute inset-0 overflow-hidden bg-surface", className)}>
        {/* Diagonal lines — boxing ring ropes motif */}
        <svg className="absolute inset-0 w-full h-full opacity-[0.06]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
          <defs>
            <pattern id={`diag-${fallbackLabel}`} patternUnits="userSpaceOnUse" width="60" height="60" patternTransform="rotate(-35)">
              <line x1="0" y1="0" x2="0" y2="60" stroke="#F3EFE7" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill={`url(#diag-${fallbackLabel})`} />
        </svg>
        {/* Grain noise */}
        <div className="absolute inset-0 opacity-[0.03] mix-blend-overlay" aria-hidden="true"
          style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`, backgroundSize: "128px 128px" }}
        />
        {/* ALTIS watermark */}
        <div className="absolute inset-0 flex items-center justify-center" aria-hidden="true">
          <span className="text-[clamp(3rem,10vw,8rem)] font-black tracking-[0.15em] text-ivory/4 select-none leading-none">ALTIS</span>
        </div>
        {/* Crimson accent line */}
        <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-crimson/40" aria-hidden="true" />
        {/* Label */}
        {fallbackLabel && (
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-ivory/20">{fallbackLabel}</span>
          </div>
        )}
      </div>
    );
  }

  return (
    <Image
      src={src}
      alt={alt}
      fill
      priority={priority}
      sizes={sizes}
      className={cn("object-cover", className)}
      onError={() => setErrored(true)}
    />
  );
}
