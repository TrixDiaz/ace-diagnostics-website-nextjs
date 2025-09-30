import React from "react";
import { HeroSection } from "@/components/layout/sections/hero";
import SponsorSection from "@/components/layout/sections/sponsors";
import { ServicesSection } from "@/components/layout/sections/services";
import { TeamSection } from "@/components/layout/sections/team";
import { FAQSection } from "@/components/layout/sections/faq";
import { ContactSection } from "@/components/layout/sections/contact";
import { OfferSection } from "@/components/layout/sections/offer";
import { BenefitsSection } from "@/components/layout/sections/benefits";
import { FeaturesSection } from "@/components/layout/sections/features";
import { FooterSection } from "@/components/layout/sections/footer";
import { Navbar } from "@/components/layout/navbar";

export default function Home() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <SponsorSection />
      <FeaturesSection />
      <OfferSection />
      <ServicesSection />
      <TeamSection />
      <BenefitsSection />
      <ContactSection />
      <FAQSection />
      <FooterSection />
    </main>
  );
}
