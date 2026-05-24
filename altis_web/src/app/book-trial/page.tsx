import type { Metadata } from "next";
import { CheckCircle, MessageCircle } from "lucide-react";
import { submitTrialBooking } from "@/app/actions";
import { BookTrialStatus } from "@/components/form-status";
import { SafeFillImage } from "@/components/ui/safe-fill-image";

export const metadata: Metadata = {
  title: "احجز تجربتك | Altis",
  description: "احجز حصة تجريبية مجانية في ألتيس — ملاكمة ولياقة منظمة لتحول حقيقي.",
};

const ageCategories = [
  "7–14 سنة (أطفال)",
  "14–18 سنة (مراهقون)",
  "18–29 سنة (بالغون شباب)",
  "30+ سنة (بالغون)",
];

const goals = [
  "لياقة بدنية عامة",
  "ملاكمة وتقنيات",
  "كارديو وتخسيس",
  "قوة وتكييف",
  "انضباط والتزام",
  "تدريب شخصي",
];

const preferredTimes = ["صباحاً", "مساءً", "مرن"];

export default function BookTrialPage({
  searchParams,
}: {
  searchParams: Promise<{ success?: string; error?: string }>;
}) {
  return (
    <div className="pt-16">
      <section className="py-20 lg:py-28 relative overflow-hidden">
        <SafeFillImage
          src="/images/trial-booking.webp"
          alt="بيئة ألتيس المتميزة — احجز تجربتك"
          fallbackLabel="احجز تجربتك"
          className="object-cover object-center opacity-15"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-midnight/85" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-12">
              <span className="inline-block text-crimson text-sm font-semibold tracking-widest uppercase mb-4">
                ابدأ الآن
              </span>
              <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-ivory">
                احجز تجربتك
              </h1>
              <p className="mt-3 text-base text-steel leading-relaxed">
                جرّب حصة تدريب كاملة مجاناً. املأ النموذج وسنتواصل معك خلال 24 ساعة.
              </p>
            </div>

            <form className="space-y-6" action={submitTrialBooking}>
              <div className="rounded-xl border border-border bg-surface p-6 space-y-5">
                <div>
                  <label htmlFor="fullName" className="block text-xs font-medium text-ivory mb-1">
                    الاسم الكامل *
                  </label>
                  <input
                    id="fullName"
                    name="fullName"
                    type="text"
                    required
                    className="w-full h-10 px-3 rounded-md border border-border bg-midnight text-ivory text-sm placeholder:text-steel/50 focus:border-crimson focus:outline-none transition-colors"
                    placeholder="اسمك الكامل"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-xs font-medium text-ivory mb-1">
                    رقم الهاتف *
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    required
                    className="w-full h-10 px-3 rounded-md border border-border bg-midnight text-ivory text-sm placeholder:text-steel/50 focus:border-crimson focus:outline-none transition-colors"
                    placeholder="05XX XX XX XX"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-xs font-medium text-ivory mb-1">
                    البريد الإلكتروني (اختياري)
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    className="w-full h-10 px-3 rounded-md border border-border bg-midnight text-ivory text-sm placeholder:text-steel/50 focus:border-crimson focus:outline-none transition-colors"
                    placeholder="email@example.com"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-ivory mb-2">
                    الفئة العمرية *
                  </label>
                  <div className="grid grid-cols-2 gap-2">
                    {ageCategories.map((cat) => (
                      <label
                        key={cat}
                        className="flex items-center gap-2 rounded-md border border-border bg-midnight p-3 cursor-pointer hover:border-border-light transition-colors"
                      >
                        <input
                          type="radio"
                          name="ageCategory"
                          value={cat}
                          required
                          className="accent-crimson"
                        />
                        <span className="text-xs text-ivory">{cat}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium text-ivory mb-2">
                    هدفك من التدريب *
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                    {goals.map((goal) => (
                      <label
                        key={goal}
                        className="flex items-center gap-2 rounded-md border border-border bg-midnight p-3 cursor-pointer hover:border-border-light transition-colors"
                      >
                        <input
                          type="radio"
                          name="goal"
                          value={goal}
                          required
                          className="accent-crimson"
                        />
                        <span className="text-xs text-ivory">{goal}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium text-ivory mb-2">
                    الوقت المفضل
                  </label>
                  <div className="flex gap-2">
                    {preferredTimes.map((time) => (
                      <label
                        key={time}
                        className="flex items-center gap-2 rounded-md border border-border bg-midnight p-3 cursor-pointer hover:border-border-light transition-colors"
                      >
                        <input
                          type="radio"
                          name="preferredTime"
                          value={time}
                          className="accent-crimson"
                        />
                        <span className="text-xs text-ivory">{time}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-xs font-medium text-ivory mb-1">
                    رسالة (اختياري)
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={3}
                    className="w-full px-3 py-2 rounded-md border border-border bg-midnight text-ivory text-sm placeholder:text-steel/50 focus:border-crimson focus:outline-none transition-colors resize-none"
                    placeholder="أي معلومات إضافية تريد مشاركتها..."
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full h-12 rounded-md bg-crimson text-ivory text-base font-semibold hover:bg-crimson-hover transition-colors"
              >
                احجز تجربتك الآن
              </button>
            </form>

            <BookTrialStatus />

            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex items-start gap-3 rounded-lg border border-border bg-surface p-4">
                <CheckCircle className="h-5 w-5 text-crimson shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm font-medium text-ivory">تأكيد سريع</p>
                  <p className="text-xs text-steel mt-0.5">
                    سنتواصل معك خلال 24 ساعة لتأكيد الموعد.
                  </p>
                </div>
              </div>
              <a
                href="https://wa.me/213XXXXXXXXX"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-3 rounded-lg border border-border bg-surface p-4 hover:border-border-light transition-colors"
              >
                <MessageCircle className="h-5 w-5 text-crimson shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm font-medium text-ivory">واتساب</p>
                  <p className="text-xs text-steel mt-0.5">
                    تفضل التحدث مباشرة؟ راسلنا على واتساب.
                  </p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
