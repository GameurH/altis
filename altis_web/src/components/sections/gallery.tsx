import { SectionHeading } from "@/components/ui/section-heading";
import { SafeFillImage } from "@/components/ui/safe-fill-image";

const galleryItems = [
  { src: "/images/gallery-ring-ropes.webp", label: "حبل الحلبة", alt: "تفاصيل حبل حلبة الملاكمة — A26", span: "sm:col-span-2 sm:row-span-2 aspect-square" },
  { src: "/images/gallery-bag-wall.webp", label: "أكياس التدريب", alt: "جدار أكياس التدريب — A27", span: "aspect-4/5" },
  { src: "/images/gallery-gloves.webp", label: "القفازات", alt: "قفازات وأربطة الملاكمة — A28", span: "aspect-4/5" },
  { src: "/images/gallery-corner.webp", label: "المساحة", alt: "زاوية المساحة المتميزة — A29", span: "aspect-4/5" },
  { src: "/images/gallery-signage.webp", label: "شعار ألتيس", alt: "شعار ألتيس المميز — A30", span: "sm:col-span-2 aspect-video" },
  { src: "/images/gallery-floor-shadow.webp", label: "الأرضية والظل", alt: "تكوين الأرضية والظل — A31", span: "aspect-4/5" },
];

export function GallerySection() {
  return (
    <section className="py-20 lg:py-28 relative overflow-hidden">
      {/* Grain texture */}
      <div className="absolute inset-0 opacity-[0.03] mix-blend-overlay pointer-events-none" aria-hidden="true"
        style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`, backgroundSize: "128px 128px" }}
      />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="المساحة"
          subtitle="بيئة تدريب متميزة مصممة للأداء والانضباط."
        />
        <div className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-3">
          {galleryItems.map((item, i) => (
            <div
              key={i}
              className={`${item.span} rounded-xl border border-border bg-surface overflow-hidden relative group cursor-pointer`}
            >
              <SafeFillImage
                src={item.src}
                alt={item.alt}
                fallbackLabel={item.label}
                className="object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                sizes="(max-width: 640px) 50vw, 25vw"
              />
              {/* Hover overlay with label */}
              <div className="absolute inset-0 bg-midnight/0 group-hover:bg-midnight/50 transition-colors duration-300 flex items-end justify-start p-4">
                <span className="text-sm font-semibold text-ivory opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-y-2 group-hover:translate-y-0">
                  {item.label}
                </span>
              </div>
              {/* Crimson bottom accent on hover */}
              <div className="absolute bottom-0 inset-x-0 h-[2px] bg-crimson scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-center" aria-hidden="true" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
