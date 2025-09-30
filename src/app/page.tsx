import React from "react";
import { HeroSection } from "@/components/layout/sections/hero";
import HMOSection from "@/components/layout/sections/hmo";
import { ServicesSection } from "@/components/layout/sections/services";
import { TeamSection } from "@/components/layout/sections/team";
import { FAQSection } from "@/components/layout/sections/faq";
import { ContactSection } from "@/components/layout/sections/contact";
import { LocationSection } from "@/components/layout/sections/location";
import { BenefitsSection } from "@/components/layout/sections/benefits";
import { FeaturesSection } from "@/components/layout/sections/features";
import { FooterSection } from "@/components/layout/sections/footer";
import { Navbar } from "@/components/layout/navbar";
import { MessengerButton } from "@/components/messenger-button";

export default function Home() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <HMOSection />
      <FeaturesSection />
      <ServicesSection />
      <TeamSection />
      <BenefitsSection />
      <LocationSection />
      <ContactSection />
      <FAQSection />
      <FooterSection />
      <MessengerButton />
    </main>
  );
}
