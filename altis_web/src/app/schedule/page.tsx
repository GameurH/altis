import type { Metadata } from "next";
import { Clock } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { CtaButton } from "@/components/ui/cta-button";

export const metadata: Metadata = {
  title: "الجدول | Altis",
  description: "جدول الحصص الأسبوعي في ألتيس — ملاكمة، كارديو، تكييف، برامج أطفال ومراهقين.",
};

const fullSchedule = [
  { day: "الأحد", sessions: [
    { time: "08:00", name: "ملاكمة ولياقة", type: "بالغون" },
    { time: "10:00", name: "كارديو وتكييف", type: "بالغون" },
    { time: "16:00", name: "برامج الأطفال", type: "أطفال" },
    { time: "17:30", name: "برامج المراهقين", type: "مراهقون" },
  ]},
  { day: "الاثنين", sessions: [
    { time: "08:00", name: "تكييف وأداء", type: "بالغون" },
    { time: "18:00", name: "ملاكمة ولياقة", type: "بالغون" },
  ]},
  { day: "الثلاثاء", sessions: [
    { time: "08:00", name: "ملاكمة ولياقة", type: "بالغون" },
    { time: "10:00", name: "كارديو وتكييف", type: "بالغون" },
    { time: "17:00", name: "برامج المراهقين", type: "مراهقون" },
  ]},
  { day: "الأربعاء", sessions: [
    { time: "08:00", name: "تكييف وأداء", type: "بالغون" },
    { time: "18:00", name: "ملاكمة ولياقة", type: "بالغون" },
  ]},
  { day: "الخميس", sessions: [
    { time: "08:00", name: "ملاكمة ولياقة", type: "بالغون" },
    { time: "10:00", name: "كارديو وتكييف", type: "بالغون" },
    { time: "16:00", name: "برامج الأطفال", type: "أطفال" },
  ]},
  { day: "الجمعة", sessions: [
    { time: "10:00", name: "ملاكمة مفتوحة", type: "بالغون" },
  ]},
  { day: "السبت", sessions: [
    { time: "حسب الحجز", name: "تدريب شخصي", type: "خاص" },
  ]},
];

const typeColors: Record<string, string> = {
  بالغون: "text-crimson",
  أطفال: "text-bronze",
  مراهقون: "text-ivory",
  خاص: "text-steel",
};

export default function SchedulePage() {
  return (
    <div className="pt-16">
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="الجدول الأسبوعي"
            subtitle="حصص منظمة تناسب جدولك. اختر الوقت والبرنامج المناسب."
          />

          <div className="mt-12 space-y-4">
            {fullSchedule.map((day) => (
              <div
                key={day.day}
                className="rounded-xl border border-border bg-surface p-4 sm:p-6"
              >
                <h3 className="text-base font-semibold text-ivory mb-4">
                  {day.day}
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                  {day.sessions.map((session) => (
                    <div
                      key={`${day.day}-${session.time}`}
                      className="rounded-lg border border-border bg-midnight p-3"
                    >
                      <div className="flex items-center gap-2 mb-1">
                        <Clock className="h-3 w-3 text-crimson" />
                        <span className="text-xs text-steel">{session.time}</span>
                      </div>
                      <p className="text-sm font-medium text-ivory">{session.name}</p>
                      <span className={`text-xs ${typeColors[session.type] ?? "text-steel"}`}>
                        {session.type}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <CtaButton href="/book-trial" variant="primary" size="lg">
              احجز تجربتك
            </CtaButton>
          </div>
        </div>
      </section>
    </div>
  );
}
