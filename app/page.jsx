import AboutCompany from "@/components/aboutCompany/AboutCompany";
import AboutUs from "@/components/aboutus/AboutUs";
import Hero from "@/components/HeroSection/Hero";
import Services from "@/components/services/Services";
import Testimonials from "@/components/testimonials/Testimonials";

export default function Home() {
  return (
    <main className="">
      <Hero />
      <Services/>
      <AboutUs/>
      <AboutCompany/>
      <Testimonials/>
    </main>
  );
}
