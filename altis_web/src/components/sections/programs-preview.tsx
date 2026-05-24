import { SectionHeading } from "@/components/ui/section-heading";
import { ProgramCard } from "@/components/ui/program-card";
import { CtaButton } from "@/components/ui/cta-button";
import { AnimateSection, AnimateStagger, AnimateItem } from "@/components/ui/motion";

const programs = [
  {
    title: "ملاكمة ولياقة",
    description: "تدريب ملاكمة احترافي مع لياقة بدنية عالية في بيئة متميزة ومنظمة.",
    audience: "البالغون",
    href: "/programs#boxing",
    imageSrc: "/images/program-boxing.webp",
    imageAlt: "بيئة تدريب الملاكمة واللياقة — A07",
  },
  {
    title: "كارديو وتكييف",
    description: "تحمل قوي وتكييف بدني مركز لرفع مستوى الطاقة والقوة اليومية.",
    audience: "البالغون",
    href: "/programs#cardio",
    imageSrc: "/images/program-cardio.webp",
    imageAlt: "تدريب الكارديو والتكييف — A08",
  },
  {
    title: "تدريب شخصي",
    description: "متابعة فردية مع مدرب مختص لتحقيق أهدافك بأسرع وقت وأعلى جودة.",
    audience: "الجميع",
    href: "/programs#personal",
    imageSrc: "/images/program-personal.webp",
    imageAlt: "مساحة التدريب الشخصي — A09",
  },
  {
    title: "أداء البالغين",
    description: "برنامج متكامل للطاقة والثقة والانضباط في تدريب جاد ومنظم.",
    audience: "18–29 سنة",
    href: "/programs#adults",
    imageSrc: "/images/program-adults.webp",
    imageAlt: "برنامج أداء البالغين — A10",
  },
  {
    title: "برامج المراهقين",
    description: "تحدي وبناء ثقة وانتماء في بيئة تدريبية منظمة وملهمة.",
    audience: "14–18 سنة",
    href: "/programs#teens",
    imageSrc: "/images/program-teens.webp",
    imageAlt: "برامج المراهقين — A11",
  },
  {
    title: "برامج الأطفال",
    description: "انضباط وتأطير وبناء ثقة في بيئة آمنة ومهيكلة يثق بها الأهالي.",
    audience: "7–14 سنة",
    href: "/programs#kids",
    imageSrc: "/images/program-kids.webp",
    imageAlt: "برامج الأطفال — A12",
  },
];

export function ProgramsPreviewSection() {
  return (
    <section className="py-20 lg:py-28 bg-surface">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="البرامج"
          subtitle="اختر المسار المناسب لأهدافك ومرحلتك."
        />
        <AnimateStagger className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {programs.map((program) => (
            <AnimateItem key={program.href}>
              <ProgramCard imageSrc={program.imageSrc} imageAlt={program.imageAlt} title={program.title} description={program.description} audience={program.audience} href={program.href} />
            </AnimateItem>
          ))}
        </AnimateStagger>
        <div className="mt-10 text-center">
          <CtaButton href="/programs" variant="outline">
            جميع البرامج
          </CtaButton>
        </div>
      </div>
    </section>
  );
}
