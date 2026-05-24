import type { Metadata } from "next";
import { Cairo } from "next/font/google";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import "./globals.css";

const cairo = Cairo({
  variable: "--font-cairo",
  subsets: ["arabic", "latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Altis | Premium Boxing & Fitness",
  description:
    "Altis is a premium boxing and fitness experience built around discipline, transformation, and structured progress. Book your trial today.",
  openGraph: {
    title: "Altis | Premium Boxing & Fitness",
    description:
      "Structured boxing and fitness for real transformation. Discipline. Progress. Community.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ar"
      dir="rtl"
      className={`${cairo.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-midnight text-ivory font-[family-name:var(--font-cairo)]">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
