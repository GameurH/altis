"use client";

import { useState } from "react";
import NextImage from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "/", label: "الرئيسية" },
  { href: "/about", label: "عن ألتيس" },
  { href: "/programs", label: "البرامج" },
  { href: "/schedule", label: "الجدول" },
  { href: "/memberships", label: "العضويات" },
  { href: "/faq", label: "الأسئلة الشائعة" },
  { href: "/contact", label: "تواصل معنا" },
];

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed top-0 right-0 left-0 z-50 bg-midnight/80 backdrop-blur-md border-b border-border">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" aria-label="Altis Boxing & Fitness" className="inline-flex items-center shrink-0">
            <NextImage
              src="/images/altislogo.png"
              alt="Altis Boxing & Fitness"
              width={160}
              height={48}
              priority
              className="h-10 w-auto"
            />
          </Link>

          <nav className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-steel hover:text-ivory transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <Link
              href="/book-trial"
              className="hidden sm:inline-flex items-center justify-center h-9 px-5 rounded-md bg-crimson text-ivory text-sm font-medium hover:bg-crimson-hover transition-colors"
            >
              احجز تجربتك
            </Link>

            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden inline-flex items-center justify-center h-10 w-10 rounded-md text-ivory hover:bg-surface transition-colors"
              aria-label={mobileOpen ? "إغلاق القائمة" : "فتح القائمة"}
            >
              {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </div>

      <div
        className={cn(
          "md:hidden overflow-hidden transition-all duration-300 border-b border-border",
          mobileOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0 border-b-0"
        )}
      >
        <nav className="px-4 py-4 space-y-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="block py-2 text-sm text-steel hover:text-ivory transition-colors"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/book-trial"
            onClick={() => setMobileOpen(false)}
            className="block mt-3 text-center h-10 leading-10 rounded-md bg-crimson text-ivory text-sm font-medium hover:bg-crimson-hover transition-colors"
          >
            احجز تجربتك
          </Link>
        </nav>
      </div>
    </header>
  );
}
