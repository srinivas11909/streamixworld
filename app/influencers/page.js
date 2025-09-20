import HeroCarousel from "../components/herocomoponent/HeroCarousel"
import AboutStreamix from "../components/aboutstreamix/AboutStreamix"

export default function Influencer(){
    return (
         <div className="font-sans min-h-screen">
            <main className="flex flex-col items-center sm:items-start">
                <HeroCarousel />
                <AboutStreamix />
            </main>
      </div>
    )
}