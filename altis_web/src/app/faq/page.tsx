import type { Metadata } from "next";
import { SectionHeading } from "@/components/ui/section-heading";
import { CtaButton } from "@/components/ui/cta-button";

export const metadata: Metadata = {
  title: "الأسئلة الشائعة | Altis",
  description: "إجابات على أكثر الأسئلة تكراراً حول برامج ألتيس والعضويات والتدريب.",
};

const faqCategories = [
  {
    category: "البدء",
    items: [
      {
        q: "هل أنا بحاجة لخبرة سابقة في الملاكمة؟",
        a: "لا. برامجنا مصممة لكل المستويات، من المبتدئين تماماً إلى المتقدمين. المدربون يوجهون كل عضو حسب مستواه.",
      },
      {
        q: "ماذا أحضر معي للتدريب الأول؟",
        a: "فقط ملابس رياضية مريحة وماء. القفازات والمعدات متوفرة في النادي.",
      },
      {
        q: "كيف أحجز تجربة مجانية؟",
        a: "اضغط على 'احجز تجربتك' في أي صفحة واملأ النموذج — سنتواصل معك خلال 24 ساعة لتحديد الموعد.",
      },
    ],
  },
  {
    category: "الفئات العمرية",
    items: [
      {
        q: "ما هي الفئات العمرية المتاحة؟",
        a: "لدينا برامج مخصصة للأطفال (7-14)، المراهقين (14-18)، والبالغين (18+). كل فئة لها مدربون وبرامج مناسبة.",
      },
      {
        q: "هل برامج الأطفال آمنة؟",
        a: "نعم. برامج الأطفال تركز على الحركة والانضباط والثقة في بيئة آمنة ومهيكلة بالكامل. الأهالي يثقون في تنظيمنا.",
      },
    ],
  },
  {
    category: "العضويات",
    items: [
      {
        q: "ما الفرق بين العضويات؟",
        a: "الأساسي يوفر حصصاً جماعية ودعماً أساسياً. الستاندرد يضيف متابعة أسبوعية ونصائح يومية. البريميوم يشمل تدريباً شخصياً ومتابعة معمقة.",
      },
      {
        q: "هل يمكنني تغيير عضويتي لاحقاً؟",
        a: "نعم، يمكنك الترقية أو التعديل في أي وقت. تحدث مع المدرب أو الإدارة.",
      },
    ],
  },
  {
    category: "التشغيل",
    items: [
      {
        q: "ما هي أوقات العمل؟",
        a: "نفتح يومياً من الساعة 07:00 صباحاً حتى 21:00 مساءً. الجمعة حصص صباحية فقط.",
      },
      {
        q: "هل يوجد مواقف سيارات؟",
        a: "نعم، يتوفر موقف سيارات مجاني بالقرب من النادي.",
      },
    ],
  },
];

export default function FaqPage() {
  return (
    <div className="pt-16">
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="الأسئلة الشائعة"
            subtitle="إجابات سريعة على أكثر الأسئلة تكراراً."
          />

          <div className="mt-16 max-w-3xl mx-auto space-y-12">
            {faqCategories.map((cat) => (
              <div key={cat.category}>
                <h3 className="text-sm font-semibold text-crimson uppercase tracking-widest mb-4">
                  {cat.category}
                </h3>
                <div className="space-y-3">
                  {cat.items.map((item, i) => (
                    <details
                      key={i}
                      className="group rounded-lg border border-border bg-surface"
                    >
                      <summary className="flex items-center justify-between cursor-pointer p-4 text-sm font-medium text-ivory hover:text-crimson transition-colors">
                        {item.q}
                        <span className="mr-4 text-steel group-open:rotate-180 transition-transform">
                          ▾
                        </span>
                      </summary>
                      <p className="px-4 pb-4 text-sm text-steel leading-relaxed">
                        {item.a}
                      </p>
                    </details>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <p className="text-sm text-steel mb-4">لم تجد إجابتك؟</p>
            <div className="flex flex-wrap justify-center gap-3">
              <CtaButton href="/contact" variant="secondary">
                تواصل معنا
              </CtaButton>
              <CtaButton href="/book-trial" variant="primary">
                احجز تجربتك
              </CtaButton>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
