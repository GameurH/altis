import Link from "next/link";
import NextImage from "next/image";
import { MapPin, Phone, Mail } from "lucide-react";

const footerLinks = {
  programs: [
    { href: "/programs#boxing", label: "ملاكمة ولياقة" },
    { href: "/programs#cardio", label: "كارديو وتكييف" },
    { href: "/programs#personal", label: "تدريب شخصي" },
    { href: "/programs#adults", label: "برامج البالغين" },
    { href: "/programs#teens", label: "برامج المراهقين" },
    { href: "/programs#kids", label: "برامج الأطفال" },
  ],
  company: [
    { href: "/about", label: "عن ألتيس" },
    { href: "/schedule", label: "الجدول" },
    { href: "/memberships", label: "العضويات" },
    { href: "/faq", label: "الأسئلة الشائعة" },
    { href: "/contact", label: "تواصل معنا" },
  ],
};

export function Footer() {
  return (
    <footer className="bg-midnight border-t border-border">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <Link href="/" aria-label="Altis Boxing & Fitness" className="inline-flex items-center shrink-0">
              <NextImage
                src="/images/altislogo.png"
                alt="Altis Boxing & Fitness"
                width={180}
                height={54}
                className="h-12 w-auto"
              />
            </Link>
            <p className="mt-3 text-sm text-steel leading-relaxed">
              تجربة ملاكمة ولياقة متميزة مبنية على الانضباط والتحول والتقدم المنظم.
            </p>
            <Link
              href="/book-trial"
              className="inline-flex items-center justify-center mt-5 h-10 px-6 rounded-md bg-crimson text-ivory text-sm font-medium hover:bg-crimson-hover transition-colors"
            >
              احجز تجربتك
            </Link>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-ivory mb-4">البرامج</h3>
            <ul className="space-y-2">
              {footerLinks.programs.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-steel hover:text-ivory transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-ivory mb-4">الشركة</h3>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-steel hover:text-ivory transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-ivory mb-4">تواصل معنا</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-sm text-steel">
                <MapPin className="h-4 w-4 mt-0.5 shrink-0" />
                <span>الجزائر العاصمة، الجزائر</span>
              </li>
              <li className="flex items-center gap-2 text-sm text-steel">
                <Phone className="h-4 w-4 shrink-0" />
                <span>+213 XX XX XX XX</span>
              </li>
              <li className="flex items-center gap-2 text-sm text-steel">
                <Mail className="h-4 w-4 shrink-0" />
                <span>contact@altis.dz</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-steel">
            &copy; {new Date().getFullYear()} Altis. جميع الحقوق محفوظة.
          </p>
          <div className="flex items-center gap-4 text-xs text-steel">
            <Link href="/privacy" className="hover:text-ivory transition-colors">
              سياسة الخصوصية
            </Link>
            <Link href="/terms" className="hover:text-ivory transition-colors">
              الشروط والأحكام
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
