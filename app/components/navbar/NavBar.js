"use client";
import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname(); 
  console.log(pathname)
  const isActive = (path) => pathname === path ? 'text-[#fbbf24] font-semibold' : '';

  return (
    <header className="sticky top-0 z-50 bg-[#0b0d17] text-white w-full">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
        {/* Logo */}
        <div className="text-xl font-bold tracking-wide">
          <Link href="/" onClick={() => setMenuOpen(false)}>
            STREAMIXWORLD
          </Link>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6 text-sm">
          <Link href="/" className={isActive('/')}>Home</Link>
          <Link href="/about-us" className={isActive('/about-us')}>About Us</Link>
          {/* <div className="relative group">
            <button className="flex items-center gap-1">
              For Business <span className="text-xs">▼</span>
            </button>
            <div className="absolute hidden group-hover:block bg-[#1a1c29] mt-2 rounded shadow-lg p-2 z-20">
              <Link href="/services/restaurants" className="block px-4 py-2 hover:bg-gray-700 rounded">
                Restaurants & Cafés
              </Link>
              <Link href="/services/retail" className="block px-4 py-2 hover:bg-gray-700 rounded">
                Retail & Clothing
              </Link>
              <Link href="/services/local" className="block px-4 py-2 hover:bg-gray-700 rounded">
                Local Services
              </Link>
            </div>
          </div> */}
          <Link href="/business" className={isActive('/business')}>For Business</Link>
          <Link href="/talent" className={isActive('/talent')}>For Talent</Link>
          <Link href="/influencers" className={isActive('/influencers')}>For Influencers</Link>
          <Link href="/brands" className={isActive('/brands')}>For Brands</Link>
          <Link href="/contact-us" className={isActive('/contact-us')}>Contact Us</Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden flex flex-col gap-1"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span className="w-6 h-0.5 bg-white"></span>
          <span className="w-6 h-0.5 bg-white"></span>
          <span className="w-6 h-0.5 bg-white"></span>
        </button>
      </div>

      {/* Mobile Nav */}
      {menuOpen && (
        <nav className="md:hidden flex flex-col bg-[#1a1c29] px-6 py-4 gap-3">
          <Link href="/" onClick={() => setMenuOpen(false)} className={isActive('/')}>Home</Link>
          <Link href="/about-us" onClick={() => setMenuOpen(false)} className={isActive('/about-us')}>About Us</Link>
          
          <Link href="/business" onClick={() => setMenuOpen(false)} className={isActive('/business')}>For Business</Link>
          <Link href="/talent" onClick={() => setMenuOpen(false)} className={isActive('/talent')}>For Talent</Link>
          <Link href="/influencers" onClick={() => setMenuOpen(false)} className={isActive('/influencers')}>For Influencers</Link>
          <Link href="/brands" onClick={() => setMenuOpen(false)} className={isActive('/brands')}>For Brands</Link>
          <Link href="/contact-us" onClick={() => setMenuOpen(false)} className={isActive('/contact-us')}>Contact Us</Link>
        </nav>
      )}
    </header>
  );
}
