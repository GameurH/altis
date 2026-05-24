import { CtaButton } from "@/components/ui/cta-button";
import { SafeFillImage } from "@/components/ui/safe-fill-image";

export function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center bg-midnight overflow-hidden">
      {/* Background image */}
      <SafeFillImage
        src="/images/hero-dark.webp"
        alt="بيئة تدريب ألتيس المتميزة — مساحة ملاكمة ولياقة احترافية"
        priority
        fallbackLabel="ALTIS"
        className="object-cover object-center opacity-40"
        sizes="100vw"
      />

      {/* Multi-layer gradient overlay — cinematic depth */}
      <div className="absolute inset-0 bg-linear-to-l from-midnight via-midnight/80 to-midnight/50" />
      <div className="absolute inset-0 bg-linear-to-t from-midnight via-transparent to-midnight/30" />

      {/* Grain texture overlay */}
      <div className="absolute inset-0 opacity-[0.04] mix-blend-overlay pointer-events-none" aria-hidden="true"
        style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`, backgroundSize: "128px 128px" }}
      />

      {/* Diagonal crimson accent line */}
      <div className="absolute -top-[20%] -left-[10%] w-[60%] h-[200%] origin-top-left rotate-25 bg-crimson/3 pointer-events-none" aria-hidden="true" />

      {/* Content */}
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24 sm:py-32">
        <div className="max-w-3xl">
          {/* Brand mark */}
          <div className="flex items-center gap-3 mb-6">
            <div className="h-[2px] w-8 bg-crimson" aria-hidden="true" />
            <span className="text-crimson text-sm font-semibold tracking-[0.25em] uppercase">
              ALTIS
            </span>
          </div>

          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black tracking-tight text-ivory leading-[1.1]">
            تدرب
            <span className="text-crimson"> أعلى</span>
          </h1>

          <p className="mt-6 text-lg sm:text-xl text-steel/90 leading-relaxed max-w-xl">
            ملاكمة ولياقة منظمة لتحول حقيقي. انضباط. تقدم. مجتمع.
          </p>

          {/* CTA row */}
          <div className="mt-10 flex flex-wrap gap-4">
            <CtaButton href="/book-trial" variant="primary" size="lg">
              احجز تجربتك
            </CtaButton>
            <CtaButton href="/programs" variant="outline" size="lg">
              اكتشف البرامج
            </CtaButton>
          </div>

          {/* Trust micro-strip */}
          <div className="mt-12 flex items-center gap-6 text-xs text-steel/60">
            <span>حصة تجريبية مجانية</span>
            <span className="h-3 w-px bg-border" aria-hidden="true" />
            <span>بدون التزام</span>
            <span className="h-3 w-px bg-border" aria-hidden="true" />
            <span>كل المستويات</span>
          </div>
        </div>
      </div>

      {/* Bottom edge fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-linear-to-t from-midnight to-transparent pointer-events-none" />
    </section>
  );
}
