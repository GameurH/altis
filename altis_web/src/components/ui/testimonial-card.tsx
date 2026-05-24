import { cn } from "@/lib/utils";
import { Quote } from "lucide-react";

interface TestimonialCardProps {
  quote: string;
  name: string;
  detail?: string;
  className?: string;
}

export function TestimonialCard({
  quote,
  name,
  detail,
  className,
}: TestimonialCardProps) {
  return (
    <div
      className={cn(
        "rounded-xl border border-border bg-midnight/80 backdrop-blur-sm p-6 hover:border-crimson/20 transition-all duration-300",
        className
      )}
    >
      <div className="h-8 w-8 rounded-md bg-crimson/10 border border-crimson/20 flex items-center justify-center mb-4">
        <Quote className="h-4 w-4 text-crimson" />
      </div>
      <p className="text-sm text-ivory leading-relaxed">{quote}</p>
      <div className="mt-4 pt-4 border-t border-border/50">
        <p className="text-sm font-bold text-ivory">{name}</p>
        {detail && <p className="text-xs text-steel mt-0.5">{detail}</p>}
      </div>
    </div>
  );
}
