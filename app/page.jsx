import AboutUs from "@/components/aboutus/AboutUs";
import Hero from "@/components/HeroSection/Hero";
import Services from "@/components/services/Services";

export default function Home() {
  return (
    <main className="">
      <Hero />
      <Services/>
      <AboutUs/>
    </main>
  );
}
