import type { Metadata } from "next";
import { Check } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { CtaButton } from "@/components/ui/cta-button";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "العضويات | Altis",
  description: "عضويات ألتيس — اختر الباقة المناسبة لأهدافك ومستوى التزامك.",
};

const tiers = [
  {
    name: "تجربة",
    price: "مجاني",
    period: "حصة واحدة",
    features: [
      "حصة تجريبية كاملة",
      "تعريف بالبرامج",
      "نصيحة من المدرب",
    ],
    highlight: false,
    cta: "احجز تجربتك",
  },
  {
    name: "أساسي",
    price: "حسب البرنامج",
    period: "شهرياً",
    features: [
      "حصص جماعية",
      "جدول مرن",
      "دعم المدرب الأساسي",
      "وصول للمعدات",
    ],
    highlight: false,
    cta: "احجز تجربتك",
  },
  {
    name: "ستاندرد",
    price: "حسب البرنامج",
    period: "شهرياً",
    features: [
      "كل مزايا الأساسي",
      "متابعة أسبوعية",
      "نصائح يومية",
      "تقييم دوري",
      "أولوية في الحصص المحدودة",
    ],
    highlight: true,
    cta: "احجز تجربتك",
  },
  {
    name: "بريميوم",
    price: "حسب البرنامج",
    period: "شهرياً",
    features: [
      "كل مزايا ستاندرد",
      "حصص تدريب شخصي",
      "متابعة فردية معمقة",
      "أولوية في الحجز",
      "خطة مخصصة بالكامل",
    ],
    highlight: false,
    cta: "احجز تجربتك",
  },
];

export default function MembershipsPage() {
  return (
    <div className="pt-16">
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="العضويات"
            subtitle="اختر العضوية المناسبة لأهدافك ومستوى التزامك. كل العضويات تتضمن تجربة مجانية."
          />
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {tiers.map((tier) => (
              <div
                key={tier.name}
                className={cn(
                  "rounded-xl border p-6 flex flex-col",
                  tier.highlight
                    ? "border-crimson bg-midnight"
                    : "border-border bg-surface"
                )}
              >
                {tier.highlight && (
                  <span className="inline-block text-xs font-semibold text-crimson mb-3">
                    الأكثر اختياراً
                  </span>
                )}
                <h3 className="text-lg font-bold text-ivory">{tier.name}</h3>
                <p className="mt-1 text-sm text-ivory font-medium">{tier.price}</p>
                <p className="text-xs text-steel">{tier.period}</p>
                <ul className="mt-6 space-y-3 flex-1">
                  {tier.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm text-steel">
                      <Check className="h-4 w-4 text-crimson shrink-0 mt-0.5" />
                      {f}
                    </li>
                  ))}
                </ul>
                <div className="mt-6">
                  <CtaButton
                    href="/book-trial"
                    variant={tier.highlight ? "primary" : "secondary"}
                    className="w-full"
                  >
                    {tier.cta}
                  </CtaButton>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 max-w-2xl mx-auto text-center">
            <p className="text-sm text-steel leading-relaxed">
              الأسعار تختلف حسب البرنامج وشدة الالتزام. أفضل طريقة لمعرفة العرض المناسب
              هي حجز تجربة مجانية والتحدث مع المدرب.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
