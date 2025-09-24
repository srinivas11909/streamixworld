import About from "./components/About";
import Services from "./components/Services";
import HeroCarousel from "./components/herocomoponent/HeroCarousel";
import { BusinessSection } from "./components/landingpage/BusinessSection";
import HowWeWork from "./components/landingpage/HomeWork";
import FinalCTA from "./components/landingpage/FinalCta";

export default function Home() {
  return (
    <div className="font-sans min-h-screen">
      <main className="flex flex-col items-center sm:items-start">
        <HeroCarousel />
        <About />
        <Services />
        <BusinessSection />
        <HowWeWork />
        <FinalCTA />
      </main>
    </div>
  );
}
