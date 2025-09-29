import About from "./components/About";
import Services from "./components/Services";
import HeroCarousel from "./components/herocomoponent/HeroCarousel";
import { BusinessSection } from "./components/landingpage/BusinessSection";
import HowWeWork from "./components/landingpage/HomeWork";
import FinalCTA from "./components/landingpage/FinalCta";
import TabsSection from "./components/TabsSection";

export const metadata = {
  title: "StreamixWorld | Digital Marketing & Video Production",
  description:
    "StreamixWorld helps brands, influencers, and creators grow through influencer marketing, promotional campaigns, and professional video production services.",
  keywords: [
    "StreamixWorld",
    "digital marketing",
    "influencer marketing",
    "video production",
    "Telugu short films",
    "brand promotion",
    "line production",
  ],
  openGraph: {
    title: "StreamixWorld | Digital Marketing & Video Production",
    description:
      "Build powerful brand stories with StreamixWorld. From influencer collaborations to full-scale video production, we deliver measurable results.",
    url: "https://www.streamixworld.com",
    siteName: "StreamixWorld",
    images: [
      {
        url: "https://www.streamixworld.com/og-home.jpg",
        width: 1200,
        height: 630,
        alt: "StreamixWorld Digital Marketing & Video Production",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function Home() {
  return (
    <div className="font-sans min-h-screen">
      <main className="flex flex-col items-center sm:items-start">
        <HeroCarousel />
        <TabsSection/>
        <About />
        <Services />
        {/* <BusinessSection /> */}
        <HowWeWork />
        <FinalCTA />
      </main>
    </div>
  );
}
