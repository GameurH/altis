import { Check } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { CtaButton } from "@/components/ui/cta-button";
import { cn } from "@/lib/utils";
import { AnimateStagger, AnimateItem } from "@/components/ui/motion";
import { SafeFillImage } from "@/components/ui/safe-fill-image";

const tiers = [
  {
    name: "أساسي",
    price: "حسب البرنامج",
    features: ["حصص جماعية", "جدول مرن", "دعم المدرب"],
    highlight: false,
  },
  {
    name: "ستاندرد",
    price: "حسب البرنامج",
    features: ["كل مزايا الأساسي", "متابعة أسبوعية", "نصائح يومية", "تقييم دوري"],
    highlight: true,
  },
  {
    name: "بريميوم",
    price: "حسب البرنامج",
    features: ["كل مزايا ستاندرد", "تدريب شخصي", "متابعة فردية معمقة", "أولوية في الحجز"],
    highlight: false,
  },
];

export function MembershipSnapshotSection() {
  return (
    <section className="py-20 lg:py-28 bg-surface relative overflow-hidden">
      <SafeFillImage
        src="/images/memberships.webp"
        alt="بيئة ألتيس — العضويات"
        fallbackLabel="العضويات"
        className="object-cover object-center opacity-10"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-surface/90" />
      {/* Grain texture */}
      <div className="absolute inset-0 opacity-[0.03] mix-blend-overlay pointer-events-none" aria-hidden="true"
        style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`, backgroundSize: "128px 128px" }}
      />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="العضويات"
          subtitle="اختر العضوية المناسبة لأهدافك ومستوى التزامك."
        />
        <AnimateStagger className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6">
          {tiers.map((tier) => (
            <AnimateItem
              key={tier.name}
              className={cn(
                "rounded-xl border p-6 flex flex-col transition-all duration-300",
                tier.highlight
                  ? "border-crimson bg-midnight shadow-[0_0_50px_-12px_rgba(166,30,45,0.2)] scale-[1.02]"
                  : "border-border bg-midnight hover:border-border-light"
              )}
            >
              {tier.highlight && (
                <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-crimson mb-3">
                  <span className="h-1.5 w-1.5 rounded-full bg-crimson animate-pulse" aria-hidden="true" />
                  الأكثر اختياراً
                </span>
              )}
              <h3 className="text-lg font-bold text-ivory">{tier.name}</h3>
              <p className="mt-1 text-sm text-steel">{tier.price}</p>
              <ul className="mt-6 space-y-3 flex-1">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2 text-sm text-ivory">
                    <Check className="h-4 w-4 text-crimson shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
              <div className="mt-6">
                <CtaButton
                  href="/book-trial"
                  variant={tier.highlight ? "primary" : "secondary"}
                  className="w-full"
                >
                  احجز تجربتك
                </CtaButton>
              </div>
            </AnimateItem>
          ))}
        </AnimateStagger>
      </div>
    </section>
  );
}
