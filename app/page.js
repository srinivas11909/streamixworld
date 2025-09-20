"use client";
import Image from "next/image";
// import Navbar from "./components/navbar/NavBar";
import About from "./components/About";
import Services from "./components/Services";
import HeroCarousel from "./components/herocomoponent/HeroCarousel";

export default function Home() {
  return (
    <div className="font-sans min-h-screen">
      <main className="flex flex-col items-center sm:items-start">
        <HeroCarousel />
        <About />
        <Services />
      </main>
    </div>
  );
}
