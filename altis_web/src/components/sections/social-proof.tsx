import { SectionHeading } from "@/components/ui/section-heading";
import { TestimonialCard } from "@/components/ui/testimonial-card";
import { AnimateStagger, AnimateItem } from "@/components/ui/motion";
import { SafeFillImage } from "@/components/ui/safe-fill-image";

const testimonials = [
  {
    quote: "ألتيس غيّر نظرتي للتدريب. لم أعد أذهب فقط لأتمرن — أصبحت أتدرب بهدف وبانضباط.",
    name: "س.م",
    detail: "عضو منذ 6 أشهر",
  },
  {
    quote: "ابني أصبح أكثر ثقة وانضباطاً بعد دخوله برنامج الأطفال. الأهلية والتنظيم ممتازان.",
    name: "أ.ب",
    detail: "ولي أمر",
  },
  {
    quote: "المتابعة الأسبوعية والخطة الواضحة جعلتاني ألتزم أكثر من أي نادٍ سبق.",
    name: "ك.ر",
    detail: "عضو منذ سنة",
  },
];

export function SocialProofSection() {
  return (
    <section className="py-20 lg:py-28 bg-surface relative overflow-hidden">
      <SafeFillImage
        src="/images/success-stories.webp"
        alt="بيئة ألتيس — قصص النجاح"
        fallbackLabel="قصص النجاح"
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
          title="قصص نجاح"
          subtitle="نتائج حقيقية من أعضاء حقيقيين."
        />
        <AnimateStagger className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <AnimateItem key={t.name}>
              <TestimonialCard {...t} />
            </AnimateItem>
          ))}
        </AnimateStagger>
      </div>
    </section>
  );
}
