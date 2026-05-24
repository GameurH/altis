import { Dumbbell, Shield, Users, TrendingUp } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { AnimateSection, AnimateStagger, AnimateItem } from "@/components/ui/motion";
import { SafeFillImage } from "@/components/ui/safe-fill-image";

const items = [
  {
    icon: Dumbbell,
    title: "ملاكمة + لياقة",
    desc: "ليس نادياً عادياً — تجربة أداء متكاملة",
  },
  {
    icon: Shield,
    title: "تدريب + انضباط",
    desc: "ليس حضوراً عشوائياً — بنية واضحة وتقدم حقيقي",
  },
  {
    icon: Users,
    title: "مجتمع + تحفيز",
    desc: "ليس اشتراكاً مجهولاً — بيئة داعمة ومحفزة",
  },
  {
    icon: TrendingUp,
    title: "متابعة رقمية قادمة",
    desc: "ليس حصصاً فقط — دعم رقمي مستقبلي للمتابعة",
  },
];

export function WhyAltisSection() {
  return (
    <section className="py-20 lg:py-28 relative overflow-hidden">
      <SafeFillImage
        src="/images/why-altis.webp"
        alt="بيئة ألتيس المتميزة — لماذا ألتيس"
        fallbackLabel="لماذا ألتيس"
        className="object-cover object-center opacity-15"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-midnight/85" />
      {/* Grain texture */}
      <div className="absolute inset-0 opacity-[0.03] mix-blend-overlay pointer-events-none" aria-hidden="true"
        style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`, backgroundSize: "128px 128px" }}
      />
      {/* Diagonal accent */}
      <div className="absolute -bottom-[30%] -right-[10%] w-[50%] h-[200%] origin-bottom-right rotate-12 bg-crimson/3 pointer-events-none" aria-hidden="true" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="لماذا ألتيس؟"
          subtitle="ما يميزنا ليس ما نقدمه فقط، بل كيف نقدمه."
        />
        <AnimateStagger className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((item) => (
            <AnimateItem
              key={item.title}
              className="rounded-xl border border-border bg-surface/80 backdrop-blur-sm p-6 hover:border-crimson/30 hover:shadow-[0_0_30px_-10px_rgba(166,30,45,0.12)] transition-all duration-300"
            >
              <div className="h-10 w-10 rounded-lg bg-crimson/10 border border-crimson/20 flex items-center justify-center mb-4">
                <item.icon className="h-5 w-5 text-crimson" />
              </div>
              <h3 className="text-base font-bold text-ivory">{item.title}</h3>
              <p className="mt-2 text-sm text-steel leading-relaxed">{item.desc}</p>
            </AnimateItem>
          ))}
        </AnimateStagger>
      </div>
    </section>
  );
}
