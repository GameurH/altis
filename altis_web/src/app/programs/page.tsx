import type { Metadata } from "next";
import { ProgramCard } from "@/components/ui/program-card";
import { SectionHeading } from "@/components/ui/section-heading";
import { CtaButton } from "@/components/ui/cta-button";

export const metadata: Metadata = {
  title: "البرامج | Altis",
  description: "برامج ملاكمة ولياقة منظمة لكل الأعمار والأهداف. اكتشف المسار المناسب لك.",
};

const allPrograms = [
  {
    id: "boxing",
    title: "ملاكمة ولياقة",
    description:
      "تدريب ملاكمة احترافي مع لياقة بدنية عالية. تعلم التقنيات الأساسية والمتقدمة في بيئة متميزة ومنظمة مع مدربين محترفين.",
    audience: "البالغون (18+)",
    href: "/programs#boxing",
    outcomes: ["تحمل عالي", "تقنيات ملاكمة", "لياقة بدنية", "ثقة أكبر"],
    rhythm: "3–5 حصص أسبوعياً",
  },
  {
    id: "cardio",
    title: "كارديو وتكييف",
    description:
      "تحمل قوي وتكييف بدني مركز يجمع بين تمارين الكارديو وتقوية العضلات لرفع مستوى الطاقة والقوة اليومية.",
    audience: "البالغون (18+)",
    href: "/programs#cardio",
    outcomes: ["طاقة أفضل", "تحمل قلبي", "تخسيس", "قوة عامة"],
    rhythm: "3–4 حصص أسبوعياً",
  },
  {
    id: "personal",
    title: "تدريب شخصي",
    description:
      "متابعة فردية مع مدرب مختص تركز على أهدافك الخاصة. خطة مخصصة ومتابعة أسبوعية لتحقيق نتائج بأسرع وقت وأعلى جودة.",
    audience: "الجميع",
    href: "/programs#personal",
    outcomes: ["نتائج أسرع", "متابعة فردية", "خطة مخصصة", "تقدم منظم"],
    rhythm: "حسب الحجز",
  },
  {
    id: "adults",
    title: "أداء البالغين",
    description:
      "برنامج متكامل يجمع الملاكمة والكارديو والتكييف في مسار واضح للطاقة والثقة والانضباط في تدريب جاد ومنظم.",
    audience: "18–29 سنة",
    href: "/programs#adults",
    outcomes: ["طاقة عالية", "ثقة بالنفس", "انضباط", "تحول جسدي"],
    rhythm: "4–5 حصص أسبوعياً",
  },
  {
    id: "teens",
    title: "برامج المراهقين",
    description:
      "تحدي وبناء ثقة وانتماء في بيئة تدريبية منظمة وملهمة. مصمم خصيصاً لاحتياجات المراهقين من الهوية والتحفيز.",
    audience: "14–18 سنة",
    href: "/programs#teens",
    outcomes: ["ثقة أكبر", "تحدي إيجابي", "انتماء", "انضباط"],
    rhythm: "3 حصص أسبوعياً",
  },
  {
    id: "kids",
    title: "برامج الأطفال",
    description:
      "انضباط وتأطير وبناء ثقة في بيئة آمنة ومهيكلة يثق بها الأهالي. تدريب مناسب للأعمار يركز على الحركة والتنظيم.",
    audience: "7–14 سنة",
    href: "/programs#kids",
    outcomes: ["انضباط", "ثقة", "حركة صحية", "أمان"],
    rhythm: "2–3 حصص أسبوعياً",
  },
];

export default function ProgramsPage() {
  return (
    <div className="pt-16">
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="البرامج"
            subtitle="اختر المسار المناسب لأهدافك ومرحلتك العمرية."
          />
          <div className="mt-16 space-y-12">
            {allPrograms.map((program) => (
              <div
                key={program.id}
                id={program.id}
                className="scroll-m-24 rounded-xl border border-border bg-surface p-6 sm:p-8"
              >
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
                  <div className="flex-1">
                    <span className="inline-block text-xs font-medium text-crimson mb-2">
                      {program.audience}
                    </span>
                    <h3 className="text-xl font-bold text-ivory">{program.title}</h3>
                    <p className="mt-3 text-sm text-steel leading-relaxed max-w-xl">
                      {program.description}
                    </p>
                    <div className="mt-4 flex items-center gap-2 text-xs text-steel">
                      <span>الوتيرة:</span>
                      <span className="text-ivory font-medium">{program.rhythm}</span>
                    </div>
                  </div>
                  <div className="shrink-0">
                    <CtaButton href="/book-trial" variant="primary" size="md">
                      احجز تجربتك
                    </CtaButton>
                  </div>
                </div>
                <div className="mt-6 flex flex-wrap gap-2">
                  {program.outcomes.map((outcome) => (
                    <span
                      key={outcome}
                      className="inline-block text-xs px-3 py-1 rounded-full border border-border text-steel"
                    >
                      {outcome}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-crimson">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-ivory">لا تعرف أي برنامج يناسبك؟</h2>
          <p className="mt-3 text-ivory/80">
            تواصل معنا وسنساعدك في اختيار المسار الأنسب.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <CtaButton href="/book-trial" variant="secondary" size="lg">
              احجز تجربتك
            </CtaButton>
            <CtaButton
              href="/contact"
              variant="outline"
              size="lg"
              className="border-ivory/30 text-ivory hover:bg-ivory/10"
            >
              تواصل معنا
            </CtaButton>
          </div>
        </div>
      </section>
    </div>
  );
}
