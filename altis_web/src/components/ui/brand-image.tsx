"use client";

import Image from "next/image";
import { cn } from "@/lib/utils";

interface BrandImageProps {
  src: string;
  alt: string;
  width: number;
  height: number;
  priority?: boolean;
  className?: string;
  fallbackLabel?: string;
}

export function BrandImage({
  src,
  alt,
  width,
  height,
  priority = false,
  className,
  fallbackLabel,
}: BrandImageProps) {
  return (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      priority={priority}
      className={cn("object-cover", className)}
      onError={(e) => {
        const target = e.currentTarget;
        target.style.display = "none";
        const fallback = target.nextElementSibling as HTMLElement | null;
        if (fallback) fallback.style.display = "flex";
      }}
    />
  );
}

interface ImageFallbackProps {
  label: string;
  className?: string;
}

export function ImageFallback({ label, className }: ImageFallbackProps) {
  return (
    <div
      className={cn(
        "absolute inset-0 flex flex-col items-center justify-center bg-surface border border-border",
        className
      )}
    >
      <div className="h-12 w-12 rounded-full bg-surface-light border border-border flex items-center justify-center mb-3">
        <span className="text-crimson text-lg font-bold">A</span>
      </div>
      <p className="text-xs text-steel text-center px-4">{label}</p>
    </div>
  );
}

interface ImageSlotProps {
  src: string;
  alt: string;
  width: number;
  height: number;
  label: string;
  priority?: boolean;
  className?: string;
  containerClassName?: string;
}

export function ImageSlot({
  src,
  alt,
  width,
  height,
  label,
  priority = false,
  className,
  containerClassName,
}: ImageSlotProps) {
  return (
    <div className={cn("relative overflow-hidden", containerClassName)}>
      <BrandImage
        src={src}
        alt={alt}
        width={width}
        height={height}
        priority={priority}
        className={className}
      />
      <ImageFallback label={label} className={className} />
    </div>
  );
}
