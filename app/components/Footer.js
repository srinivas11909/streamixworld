import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#0b0d17] text-white py-10 mt-16">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
        {/* Logo */}
        <div className="text-xl font-bold tracking-wide">STREAMIXWORLD</div>

        {/* Nav Links (same order as header) */}
        <nav className="flex flex-col md:flex-row gap-4 md:gap-6 text-sm text-gray-300">
          <Link href="/about" className="hover:text-white">About Us</Link>
          <Link href="/services" className="hover:text-white">Services</Link>
          <Link href="/influencers" className="hover:text-white">For Influencers</Link>
          <Link href="/brands" className="hover:text-white">For Brands</Link>
          <Link href="/contact" className="hover:text-white">Contact Us</Link>
        </nav>
      </div>

      {/* Bottom small text */}
      <div className="mt-8 text-center text-xs text-gray-400 border-t border-gray-700 pt-4">
        © {new Date().getFullYear()} StreamixWorld. All rights reserved.
      </div>
    </footer>
  );
}
