import { CtaButton } from "@/components/ui/cta-button";
import { AnimateSection } from "@/components/ui/motion";

export function FinalCtaSection() {
  return (
    <section className="py-20 lg:py-28 bg-crimson relative overflow-hidden">
      {/* Diagonal accent */}
      <div className="absolute -top-[50%] -left-[20%] w-[80%] h-[300%] origin-top-left rotate-12 bg-white/5 pointer-events-none" aria-hidden="true" />
      {/* Grain texture */}
      <div className="absolute inset-0 opacity-[0.06] mix-blend-overlay pointer-events-none" aria-hidden="true"
        style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`, backgroundSize: "128px 128px" }}
      />
      <AnimateSection className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
        {/* Decorative line */}
        <div className="mx-auto mb-6 h-[2px] w-12 bg-ivory/30" aria-hidden="true" />
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-ivory">
          ابدأ ارتقاءك
        </h2>
        <p className="mt-4 text-base sm:text-lg text-ivory/80 max-w-md mx-auto leading-relaxed">
          جرّب التدريب المنظم في بيئة متميزة. احجز تجربتك الآن.
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <CtaButton href="/book-trial" variant="secondary" size="lg">
            احجز تجربتك
          </CtaButton>
          <CtaButton href="/contact" variant="outline" size="lg" className="border-ivory/30 text-ivory hover:bg-ivory/10">
            تواصل معنا
          </CtaButton>
        </div>
      </AnimateSection>
    </section>
  );
}
