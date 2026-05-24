import { Target, Dumbbell, Users, Sparkles } from "lucide-react";
import { AnimateStagger, AnimateItem } from "@/components/ui/motion";

const points = [
  { icon: Target, label: "تدريب منظم", desc: "مدربون محترفون وهياكل تدريب واضحة" },
  { icon: Sparkles, label: "بيئة متميزة", desc: "مساحة عصرية ونظيفة ومحفزة" },
  { icon: Dumbbell, label: "برامج لكل هدف", desc: "ملاكمة، كارديو، تكييف، تدريب شخصي" },
  { icon: Users, label: "مجتمع داعم", desc: "بيئة إيجابية تحفز على الاستمرارية" },
];

export function ValueStripSection() {
  return (
    <section className="relative border-y border-border bg-surface overflow-hidden">
      {/* Crimson top accent */}
      <div className="absolute top-0 inset-x-0 h-px bg-crimson/30" aria-hidden="true" />
      {/* Grain texture */}
      <div className="absolute inset-0 opacity-[0.03] mix-blend-overlay pointer-events-none" aria-hidden="true"
        style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`, backgroundSize: "128px 128px" }}
      />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
        <AnimateStagger className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {points.map((point) => (
            <AnimateItem key={point.label} className="flex items-start gap-3">
              <div className="h-8 w-8 rounded-md bg-crimson/10 border border-crimson/20 flex items-center justify-center shrink-0">
                <point.icon className="h-4 w-4 text-crimson" />
              </div>
              <div>
                <p className="text-sm font-bold text-ivory">{point.label}</p>
                <p className="text-xs text-steel mt-0.5">{point.desc}</p>
              </div>
            </AnimateItem>
          ))}
        </AnimateStagger>
      </div>
    </section>
  );
}
