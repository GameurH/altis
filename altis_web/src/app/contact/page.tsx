import type { Metadata } from "next";
import { MapPin, Phone, Mail, Clock, MessageCircle } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { CtaButton } from "@/components/ui/cta-button";
import { submitContactInquiry } from "@/app/actions";
import { ContactStatus } from "@/components/form-status";
import { SafeFillImage } from "@/components/ui/safe-fill-image";

export const metadata: Metadata = {
  title: "تواصل معنا | Altis",
  description: "تواصل مع ألتيس — الموقع، أوقات العمل، الهاتف، البريد الإلكتروني، وواتساب.",
};

const contactInfo = [
  {
    icon: MapPin,
    label: "العنوان",
    value: "الجزائر العاصمة، الجزائر",
    href: undefined,
  },
  {
    icon: Phone,
    label: "الهاتف",
    value: "+213 XX XX XX XX",
    href: "tel:+213699872687",
  },
  {
    icon: Mail,
    label: "البريد الإلكتروني",
    value: "contact@altis.dz",
    href: "mailto:contact@altis.dz",
  },
  {
    icon: MessageCircle,
    label: "واتساب",
    value: "راسلنا على واتساب",
    href: "https://wa.me/213699872687",
  },
  {
    icon: Clock,
    label: "أوقات العمل",
    value: "يومياً 07:00 – 21:00 | الجمعة 07:00 – 12:00",
    href: undefined,
  },
];

export default function ContactPage() {
  return (
    <div className="pt-16">
      <section className="py-20 lg:py-28 relative overflow-hidden">
        <SafeFillImage
          src="/images/contact-ambiance.webp"
          alt="بيئة ألتيس — مدخل المساحة المتميزة"
          fallbackLabel="تواصل معنا"
          className="object-cover object-center opacity-15"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-midnight/85" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="تواصل معنا"
            subtitle="نسعد بمساعدتك. تواصل معنا بأي طريقة تناسبك."
          />

          <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-6">
              {contactInfo.map((item) => (
                <div key={item.label} className="flex items-start gap-4">
                  <div className="h-10 w-10 rounded-lg bg-surface border border-border flex items-center justify-center shrink-0">
                    <item.icon className="h-5 w-5 text-crimson" />
                  </div>
                  <div>
                    <p className="text-xs text-steel">{item.label}</p>
                    {item.href ? (
                      <a
                        href={item.href}
                        target={item.href.startsWith("http") ? "_blank" : undefined}
                        rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                        className="text-sm text-ivory hover:text-crimson transition-colors"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-sm text-ivory">{item.value}</p>
                    )}
                  </div>
                </div>
              ))}

              <div className="pt-6">
                <CtaButton href="/book-trial" variant="primary" size="lg">
                  احجز تجربتك
                </CtaButton>
              </div>
            </div>

            <div className="rounded-xl border border-border bg-surface p-6">
              <h3 className="text-base font-semibold text-ivory mb-4">استفسار سريع</h3>
              <form className="space-y-4" action={submitContactInquiry}>
                <div>
                  <label htmlFor="name" className="block text-xs text-steel mb-1">
                    الاسم الكامل
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    className="w-full h-10 px-3 rounded-md border border-border bg-midnight text-ivory text-sm placeholder:text-steel/50 focus:border-crimson focus:outline-none transition-colors"
                    placeholder="اسمك"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-xs text-steel mb-1">
                    الهاتف
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
                  <label htmlFor="message" className="block text-xs text-steel mb-1">
                    الرسالة
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    className="w-full px-3 py-2 rounded-md border border-border bg-midnight text-ivory text-sm placeholder:text-steel/50 focus:border-crimson focus:outline-none transition-colors resize-none"
                    placeholder="كيف يمكننا مساعدتك؟"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full h-10 rounded-md bg-crimson text-ivory text-sm font-medium hover:bg-crimson-hover transition-colors"
                >
                  إرسال
                </button>
              </form>
              <ContactStatus />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
