import { Clock } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { CtaButton } from "@/components/ui/cta-button";
import { AnimateStagger, AnimateItem } from "@/components/ui/motion";
import { SafeFillImage } from "@/components/ui/safe-fill-image";

const schedule = [
  { day: "الأحد", sessions: ["ملاكمة – 08:00", "كارديو – 10:00", "أطفال – 16:00"] },
  { day: "الاثنين", sessions: ["تكييف – 08:00", "ملاكمة – 18:00"] },
  { day: "الثلاثاء", sessions: ["ملاكمة – 08:00", "كارديو – 10:00", "مراهقون – 17:00"] },
  { day: "الأربعاء", sessions: ["تكييف – 08:00", "ملاكمة – 18:00"] },
  { day: "الخميس", sessions: ["ملاكمة – 08:00", "كارديو – 10:00", "أطفال – 16:00"] },
  { day: "الجمعة", sessions: ["ملاكمة مفتوحة – 10:00"] },
  { day: "السبت", sessions: ["تدريب شخصي – حسب الحجز"] },
];

export function SchedulePreviewSection() {
  return (
    <section className="py-20 lg:py-28 relative overflow-hidden">
      <SafeFillImage
        src="/images/schedule.webp"
        alt="بيئة ألتيس — الجدول الأسبوعي"
        fallbackLabel="الجدول الأسبوعي"
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
          title="الجدول الأسبوعي"
          subtitle="حصص منظمة تناسب جدولك وأهدافك."
        />
        <AnimateStagger className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {schedule.map((day) => (
            <AnimateItem
              key={day.day}
              className="rounded-lg border border-border bg-surface/80 backdrop-blur-sm p-4 hover:border-crimson/20 transition-colors duration-300"
            >
              <h3 className="text-sm font-bold text-ivory mb-3 flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-crimson" aria-hidden="true" />
                {day.day}
              </h3>
              <ul className="space-y-2">
                {day.sessions.map((session) => (
                  <li
                    key={session}
                    className="flex items-center gap-2 text-xs text-steel"
                  >
                    <Clock className="h-3 w-3 text-crimson shrink-0" />
                    {session}
                  </li>
                ))}
              </ul>
            </AnimateItem>
          ))}
        </AnimateStagger>
        <div className="mt-10 text-center">
          <CtaButton href="/schedule" variant="outline">
            الجدول الكامل
          </CtaButton>
        </div>
      </div>
    </section>
  );
}
