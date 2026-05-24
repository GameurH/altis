import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  align?: "center" | "start";
  className?: string;
}

export function SectionHeading({
  title,
  subtitle,
  align = "center",
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "max-w-2xl",
        align === "center" && "mx-auto text-center",
        className
      )}
    >
      <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-ivory">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-3 text-base sm:text-lg text-steel leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
}
