import { SectionHeading } from "@/components/ui/section-heading";
import { CtaButton } from "@/components/ui/cta-button";
import { AnimateStagger, AnimateItem } from "@/components/ui/motion";
import { SafeFillImage } from "@/components/ui/safe-fill-image";

const faqItems = [
  {
    q: "هل أنا بحاجة لخبرة سابقة في الملاكمة؟",
    a: "لا. برامجنا مصممة لكل المستويات، من المبتدئين تماماً إلى المتقدمين.",
  },
  {
    q: "ما هي الفئة العمرية المناسبة؟",
    a: "لدينا برامج مخصصة للأطفال (7-14)، المراهقين (14-18)، والبالغين (18+).",
  },
  {
    q: "كيف أحجز تجربة مجانية؟",
    a: "اضغط على 'احجز تجربتك' واملأ النموذج — سنتواصل معك خلال 24 ساعة.",
  },
  {
    q: "ماذا أحضر معي للتدريب؟",
    a: "فقط ملابس رياضية مريحة وماء. القفازات والمعدات متوفرة في النادي.",
  },
];

export function FaqPreviewSection() {
  return (
    <section className="py-20 lg:py-28 relative overflow-hidden">
      <SafeFillImage
        src="/images/faq-support.webp"
        alt="بيئة ألتيس — الأسئلة الشائعة"
        fallbackLabel="أسئلة شائعة"
        className="object-cover object-center opacity-10"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-midnight/90" />
      {/* Grain texture */}
      <div className="absolute inset-0 opacity-[0.03] mix-blend-overlay pointer-events-none" aria-hidden="true"
        style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`, backgroundSize: "128px 128px" }}
      />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="أسئلة شائعة"
          subtitle="إجابات سريعة على أكثر الأسئلة تكراراً."
        />
        <AnimateStagger className="mt-12 max-w-3xl mx-auto space-y-4">
          {faqItems.map((item, i) => (
            <AnimateItem key={i}>
              <details className="group rounded-lg border border-border bg-surface/80 backdrop-blur-sm hover:border-crimson/20 transition-colors duration-300">
                <summary className="flex items-center justify-between cursor-pointer p-4 text-sm font-semibold text-ivory hover:text-crimson transition-colors">
                  {item.q}
                  <span className="mr-4 text-crimson/60 group-open:rotate-180 transition-transform duration-300">
                    ▾
                  </span>
                </summary>
                <div className="px-4 pb-4 border-t border-border/50 mt-0 pt-3">
                  <p className="text-sm text-steel leading-relaxed">
                    {item.a}
                  </p>
                </div>
              </details>
            </AnimateItem>
          ))}
        </AnimateStagger>
        <div className="mt-10 text-center">
          <CtaButton href="/faq" variant="outline">
            جميع الأسئلة الشائعة
          </CtaButton>
        </div>
      </div>
    </section>
  );
}
