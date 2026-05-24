import { HeroSection } from "@/components/sections/hero";
import { ValueStripSection } from "@/components/sections/value-strip";
import { WhyAltisSection } from "@/components/sections/why-altis";
import { ProgramsPreviewSection } from "@/components/sections/programs-preview";
import { OutcomesSection } from "@/components/sections/outcomes";
import { CoachesSection } from "@/components/sections/coaches";
import { SchedulePreviewSection } from "@/components/sections/schedule-preview";
import { SocialProofSection } from "@/components/sections/social-proof";
import { GallerySection } from "@/components/sections/gallery";
import { MembershipSnapshotSection } from "@/components/sections/membership-snapshot";
import { FaqPreviewSection } from "@/components/sections/faq-preview";
import { FinalCtaSection } from "@/components/sections/final-cta";

export default function Home() {
  return (
    <div className="pt-16">
      <HeroSection />
      <ValueStripSection />
      <WhyAltisSection />
      <ProgramsPreviewSection />
      <OutcomesSection />
      <CoachesSection />
      <SchedulePreviewSection />
      <SocialProofSection />
      <GallerySection />
      <MembershipSnapshotSection />
      <FaqPreviewSection />
      <FinalCtaSection />
    </div>
  );
}
