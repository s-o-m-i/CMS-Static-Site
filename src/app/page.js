import Header from "@/components/Header";
import SectionTwo from "@/components/SectionTwo";
import FreeTrial from "@/components/FreeTrial";
import HelpSection from "@/components/HelpSection";
import LandingPage from "@/components/LandingPage";
import PricingSection from "@/components/PricingSection";
import ContactUs from "@/components/ContactUs";
export default function Home() {
  return (
    <>
      <div className="relative bg-hero">
        <div className="absolute bg-[rgba(0,0,0,.5)] w-full h-full"></div>
        <div className="md:container md:mx-auto pt-5">
          <Header />
        </div>
        <LandingPage />
      </div>
      <SectionTwo />
      <FreeTrial />
      <HelpSection />
      <PricingSection />
      <ContactUs/>
    </>
  );
}
