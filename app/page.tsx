import Hero from "@/components/home/Hero";
import ValueProp from "@/components/home/ValueProp";
import Capabilities from "@/components/home/Capabilities";
import ServicesOverview from "@/components/home/ServicesOverview";
import WhyAyora from "@/components/home/WhyAyora";
import CaseStudiesStrip from "@/components/home/CaseStudiesStrip";
import TechEcosystem from "@/components/home/TechEcosystem";
import EngagementProcess from "@/components/home/EngagementProcess";
import HomeCTA from "@/components/home/HomeCTA";

export default function Home() {
  return (
    <>
      <Hero />
      <ValueProp />
      <Capabilities />
      <ServicesOverview />
      <WhyAyora />
      <CaseStudiesStrip />
      <TechEcosystem />
      <EngagementProcess />
      <HomeCTA />
    </>
  );
}
