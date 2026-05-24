import { Award } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { CtaButton } from "@/components/ui/cta-button";
import { AnimateStagger, AnimateItem } from "@/components/ui/motion";
import { SafeFillImage } from "@/components/ui/safe-fill-image";

const coaches = [
  {
    name: "المدرب أحمد",
    specialty: "ملاكمة ولياقة",
    philosophy: "الانضباط أساس كل تقدم حقيقي.",
  },
  {
    name: "المدرب كريم",
    specialty: "تكييف وأداء",
    philosophy: "الاستمرارية أهم من الشدة.",
  },
  {
    name: "المدربة سارة",
    specialty: "برامج الأطفال والمراهقين",
    philosophy: "الثقة تُبنى بالتشجيع والتنظيم.",
  },
];

export function CoachesSection() {
  return (
    <section className="py-20 lg:py-28 bg-surface relative overflow-hidden">
      <SafeFillImage
        src="/images/coaching-philosophy.webp"
        alt="بيئة ألتيس — فلسفة التدريب"
        fallbackLabel="المدربون"
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
          title="المدربون"
          subtitle="مدربون محترفون يؤمنون بالانضباط والتقدم المنظم."
        />
        <AnimateStagger className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6">
          {coaches.map((coach) => (
            <AnimateItem
              key={coach.name}
              className="rounded-xl border border-border bg-midnight/80 backdrop-blur-sm p-6 hover:border-crimson/30 hover:shadow-[0_0_30px_-10px_rgba(166,30,45,0.12)] transition-all duration-300"
            >
              <div className="h-16 w-16 rounded-xl bg-crimson/10 border border-crimson/20 flex items-center justify-center mb-4">
                <Award className="h-7 w-7 text-crimson" />
              </div>
              <h3 className="text-base font-semibold text-ivory">{coach.name}</h3>
              <p className="text-xs text-crimson mt-1">{coach.specialty}</p>
              <p className="mt-3 text-sm text-steel italic leading-relaxed">
                &ldquo;{coach.philosophy}&rdquo;
              </p>
            </AnimateItem>
          ))}
        </AnimateStagger>
        <div className="mt-10 text-center">
          <CtaButton href="/about" variant="outline">
            تعرف على فريقنا
          </CtaButton>
        </div>
      </div>
    </section>
  );
}
