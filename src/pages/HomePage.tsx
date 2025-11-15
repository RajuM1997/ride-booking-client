import HeroSection from "@/components/homePage/HeroSection";
import HowItWorkSection from "@/components/homePage/HowItWorkSection";
import OurOfferSection from "@/components/homePage/OurOfferSection";
import OurServiceService from "@/components/homePage/OurServiceSection";
import { TestimonialSection } from "@/components/homePage/TestimonialSection";

export default function HomePage() {
  return (
    <section>
      <HeroSection />
      <div className="container mx-auto">
        <HowItWorkSection />
        <OurServiceService />
        <OurOfferSection />
        <TestimonialSection />
      </div>
    </section>
  );
}
