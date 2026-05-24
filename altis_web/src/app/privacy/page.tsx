import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "سياسة الخصوصية | Altis",
  description: "سياسة الخصوصية لموقع ألتيس — كيف نحمي بياناتك ونحترم خصوصيتك.",
};

export default function PrivacyPage() {
  return (
    <div className="pt-16">
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-ivory">سياسة الخصوصية</h1>
          <p className="mt-2 text-sm text-steel">آخر تحديث: أبريل 2026</p>

          <div className="mt-10 space-y-8 text-sm text-steel leading-relaxed">
            <div>
              <h2 className="text-base font-semibold text-ivory mb-2">1. المعلومات التي نجمعها</h2>
              <p>نجمع المعلومات التي تقدمها طواعية عند ملء نماذج الموقع، مثل: الاسم الكامل، رقم الهاتف، البريد الإلكتروني، الفئة العمرية، هدف التدريب، والرسائل. لا نجمع بيانات حساسة مثل بيانات الدفع عبر الموقع.</p>
            </div>

            <div>
              <h2 className="text-base font-semibold text-ivory mb-2">2. كيف نستخدم المعلومات</h2>
              <p>نستخدم بياناتك فقط للتواصل معك بخصوص حجز التجربة أو الاستفسار، ولتحسين خدماتنا. لا نبيع أو نشارك بياناتك مع أطراف ثالثة لأغراض تسويقية.</p>
            </div>

            <div>
              <h2 className="text-base font-semibold text-ivory mb-2">3. تخزين البيانات</h2>
              <p>يتم تخزين بياناتك بشكل آمن على خوادم Supabase المحمية. نحتفظ ببياناتك طالما كان ذلك ضرورياً لتقديم خدماتنا أو وفقاً لما يقتضيه القانون.</p>
            </div>

            <div>
              <h2 className="text-base font-semibold text-ivory mb-2">4. حقوقك</h2>
              <p>لك الحق في طلب الوصول إلى بياناتك، تصحيحها، أو حذفها في أي وقت. يمكنك التواصل معنا عبر صفحة التواصل لممارسة أي من هذه الحقوق.</p>
            </div>

            <div>
              <h2 className="text-base font-semibold text-ivory mb-2">5. ملفات تعريف الارتباط</h2>
              <p>نستخدم ملفات تعريف الارتباط الأساسية لضمان عمل الموقع بشكل صحيح. لا نستخدم ملفات تعريف ارتباط تتبع من أطراف ثالثة.</p>
            </div>

            <div>
              <h2 className="text-base font-semibold text-ivory mb-2">6. التعديلات</h2>
              <p>قد نحدّث هذه السياسة من وقت لآخر. سنقوم بنشر أي تغييرات جوهرية على هذه الصفحة مع تحديث تاريخ آخر تعديل.</p>
            </div>

            <div>
              <h2 className="text-base font-semibold text-ivory mb-2">7. التواصل</h2>
              <p>لأي استفسار حول سياسة الخصوصية، تواصل معنا عبر <a href="/contact" className="text-crimson hover:underline">صفحة التواصل</a> أو راسلنا على contact@altis.dz.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
