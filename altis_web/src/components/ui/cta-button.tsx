import Link from "next/link";
import { cn } from "@/lib/utils";

interface CtaButtonProps {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
  className?: string;
}

export function CtaButton({
  href,
  children,
  variant = "primary",
  size = "md",
  className,
}: CtaButtonProps) {
  return (
    <Link
      href={href}
      className={cn(
        "inline-flex items-center justify-center rounded-md font-medium transition-colors",
        variant === "primary" && "bg-crimson text-ivory hover:bg-crimson-hover",
        variant === "secondary" && "bg-surface text-ivory hover:bg-surface-light border border-border",
        variant === "outline" && "border border-border text-ivory hover:bg-surface",
        size === "sm" && "h-8 px-4 text-xs",
        size === "md" && "h-10 px-5 text-sm",
        size === "lg" && "h-12 px-6 text-base",
        className
      )}
    >
      {children}
    </Link>
  );
}
