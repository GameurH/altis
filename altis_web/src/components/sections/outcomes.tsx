import { Zap, Heart, Target, Dumbbell, TrendingUp } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { AnimateStagger, AnimateItem } from "@/components/ui/motion";

const outcomes = [
  { icon: Zap, label: "طاقة أفضل" },
  { icon: Heart, label: "ثقة أكبر" },
  { icon: Target, label: "انضباط حقيقي" },
  { icon: Dumbbell, label: "قوة وتكييف" },
  { icon: TrendingUp, label: "استمرارية" },
];

export function OutcomesSection() {
  return (
    <section className="py-20 lg:py-28 relative overflow-hidden">
      {/* Grain texture */}
      <div className="absolute inset-0 opacity-[0.03] mix-blend-overlay pointer-events-none" aria-hidden="true"
        style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`, backgroundSize: "128px 128px" }}
      />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="النتائج، لا الحصص"
          subtitle="نبيع التقدم الحقيقي، لا مجرد أوقات تدريب."
        />
        <AnimateStagger className="mt-12 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
          {outcomes.map((item) => (
            <AnimateItem
              key={item.label}
              className="flex flex-col items-center text-center p-6 rounded-xl border border-border bg-surface/60 backdrop-blur-sm hover:border-crimson/20 hover:shadow-[0_0_20px_-8px_rgba(166,30,45,0.1)] transition-all duration-300"
            >
              <div className="h-12 w-12 rounded-xl bg-crimson/10 border border-crimson/20 flex items-center justify-center mb-3">
                <item.icon className="h-6 w-6 text-crimson" />
              </div>
              <span className="text-sm font-bold text-ivory">{item.label}</span>
            </AnimateItem>
          ))}
        </AnimateStagger>
      </div>
    </section>
  );
}
