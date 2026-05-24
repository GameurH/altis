import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "الشروط والأحكام | Altis",
  description: "شروط وأحكام استخدام موقع ألتيس الإلكتروني وخدماته.",
};

export default function TermsPage() {
  return (
    <div className="pt-16">
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-ivory">الشروط والأحكام</h1>
          <p className="mt-2 text-sm text-steel">آخر تحديث: أبريل 2026</p>

          <div className="mt-10 space-y-8 text-sm text-steel leading-relaxed">
            <div>
              <h2 className="text-base font-semibold text-ivory mb-2">1. القبول</h2>
              <p>باستخدامك لموقع ألتيس الإلكتروني، فإنك توافق على هذه الشروط والأحكام. إذا لم توافق، يرجى عدم استخدام الموقع.</p>
            </div>

            <div>
              <h2 className="text-base font-semibold text-ivory mb-2">2. الغرض من الموقع</h2>
              <p>موقع ألتيس هو موقع معلوماتي وتسويقي يهدف إلى تقديم معلومات حول البرامج والعضويات وتسهيل حجز التجارب والاستفسارات. الموقع ليس منصة حجز كاملة ولا بوابة عضوية رقمية.</p>
            </div>

            <div>
              <h2 className="text-base font-semibold text-ivory mb-2">3. المعلومات والأسعار</h2>
              <p>نسعى لعرض معلومات دقيقة ومحدثة، لكننا لا نضمن أن جميع المعلومات المعروضة خالية من الأخطاء. الأسعار والعروض قابلة للتغيير دون إشعار مسبق. الأسعار النهائية تُؤكد عند التسجيل في النادي.</p>
            </div>

            <div>
              <h2 className="text-base font-semibold text-ivory mb-2">4. حجز التجربة</h2>
              <p>حجز التجربة المجانية لا يُلزمك بالاشتراك. سيتم التواصل معك لتأكيد الموعد. في حال عدم الحضور بدون إلغاء مسبق، نحتفظ بحق إلغاء الحجوزات المستقبلية.</p>
            </div>

            <div>
              <h2 className="text-base font-semibold text-ivory mb-2">5. الملكية الفكرية</h2>
              <p>جميع المحتويات على هذا الموقع — بما في ذلك النصوص، الصور، الشعارات، والتصاميم — هي ملك لألتيس ولا يجوز استخدامها أو نسخها بدون إذن كتابي.</p>
            </div>

            <div>
              <h2 className="text-base font-semibold text-ivory mb-2">6. المسؤولية</h2>
              <p>ألتيس غير مسؤولة عن أي أضرار غير مباشرة ناتجة عن استخدام الموقع. مسؤوليتنا محصورة بالحد الأقصى المسموح به قانونياً.</p>
            </div>

            <div>
              <h2 className="text-base font-semibold text-ivory mb-2">7. التعديلات</h2>
              <p>نحتفظ بحق تعديل هذه الشروط في أي وقت. الاستمرار في استخدام الموقع بعد التعديل يعني قبولك للشروط المحدثة.</p>
            </div>

            <div>
              <h2 className="text-base font-semibold text-ivory mb-2">8. القانون المعمول به</h2>
              <p>تخضع هذه الشروط لقوانين الجمهورية الجزائرية الديمقراطية الشعبية.</p>
            </div>

            <div>
              <h2 className="text-base font-semibold text-ivory mb-2">9. التواصل</h2>
              <p>لأي استفسار حول هذه الشروط، تواصل معنا عبر <a href="/contact" className="text-crimson hover:underline">صفحة التواصل</a> أو راسلنا على contact@altis.dz.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
