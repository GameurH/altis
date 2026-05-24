import type { Metadata } from "next";
import { Target, Shield, Users, TrendingUp } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { CtaButton } from "@/components/ui/cta-button";
import { SafeFillImage } from "@/components/ui/safe-fill-image";

export const metadata: Metadata = {
  title: "عن ألتيس | Altis",
  description: "تعرف على قصة ألتيس وفلسفتنا في التدريب المنظم والتحول الحقيقي.",
};

const values = [
  {
    icon: Target,
    title: "الانضباط",
    desc: "تدريب بهيكل واضح، لا ضجيج عشوائي. كل حصة لها هدف وكل أسبوع له خطة.",
  },
  {
    icon: TrendingUp,
    title: "التحول",
    desc: "تقدم حقيقي مبنٍ على الاستمرارية، لا حماس مؤقت يزول.",
  },
  {
    icon: Users,
    title: "المجتمع",
    desc: "بيئة تدريب إيجابية محفزة — لست وحدك في رحلة التغيير.",
  },
  {
    icon: Shield,
    title: "الارتقاء",
    desc: "تجربة تدريب متميزة ترفع مستوى أدائك وتقوي انضباطك.",
  },
];

const notAltis = [
  "لسنا نادياً عادياً بحصص عشوائية",
  "لسنا صالة ألعاب رخيصة بصور ستوك",
  "لسنا بيئة عدوانية أو مخيفة للمبتدئين",
  "لسنا اشتراكاً مجهولاً بدون متابعة",
];

export default function AboutPage() {
  return (
    <div className="pt-16">
      <section className="py-20 lg:py-28 relative overflow-hidden">
        <SafeFillImage
          src="/images/about-hero.webp"
          alt="بيئة ألتيس المتميزة — مساحة تدريب احترافية"
          fallbackLabel="عن ألتيس"
          className="object-cover object-center opacity-20"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-midnight/80" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="عن ألتيس"
            subtitle="قصة علامة مبنية على الانضباط والتحول والتقدم المنظم."
          />

          <div className="mt-16 max-w-3xl mx-auto space-y-6">
            <p className="text-base text-steel leading-relaxed">
              ألتيس ليست مجرد نادٍ للملاكمة واللياقة. نحن تجربة تدريب متميزة مبنية حول
              الانضباط والتحول والارتقاء. نؤمن أن التقدم الحقيقي يحتاج هيكلاً واضحاً
              ومتابعة منتظمة وبيئة محفزة.
            </p>
            <p className="text-base text-steel leading-relaxed">
              من البالغين الذين يبحثون عن طاقة وانضباط، إلى الأهالي الذين يريدون
              بيئة آمنة ومنظمة لأبنائهم — ألتيس صُممت لتكون المسار الصحيح لكل من
              يريد التدريب بجدية وهدف.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-surface">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading title="قيمنا" />
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {values.map((v) => (
              <div
                key={v.title}
                className="rounded-xl border border-border bg-midnight p-6"
              >
                <v.icon className="h-6 w-6 text-crimson mb-4" />
                <h3 className="text-lg font-semibold text-ivory">{v.title}</h3>
                <p className="mt-2 text-sm text-steel leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading title="ما نحن لسنا" />
          <div className="mt-12 max-w-2xl mx-auto space-y-4">
            {notAltis.map((item) => (
              <div
                key={item}
                className="flex items-center gap-3 rounded-lg border border-border bg-surface p-4"
              >
                <span className="text-crimson text-lg">✕</span>
                <span className="text-sm text-steel">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-crimson">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-ivory">تدرب مع ألتيس</h2>
          <p className="mt-3 text-ivory/80">
            جرّب التدريب المنظم في بيئة متميزة.
          </p>
          <div className="mt-8">
            <CtaButton href="/book-trial" variant="secondary" size="lg">
              احجز تجربتك
            </CtaButton>
          </div>
        </div>
      </section>
    </div>
  );
}
