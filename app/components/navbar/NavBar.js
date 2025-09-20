"use client";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

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
          <Link href="/about">About Us</Link>
          <div className="relative group">
            <button className="flex items-center gap-1">
              Services <span className="text-xs">▼</span>
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
          </div>
          <Link href="/influencers">For Influencers</Link>
          <Link href="/brands">For Brands</Link>
          <Link href="/contact">Contact Us</Link>
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
          <Link href="/about" onClick={() => setMenuOpen(false)}>About Us</Link>
          <Link href="/services" onClick={() => setMenuOpen(false)}>Services</Link>
          <Link href="/influencers" onClick={() => setMenuOpen(false)}>For Influencers</Link>
          <Link href="/brands" onClick={() => setMenuOpen(false)}>For Brands</Link>
          <Link href="/contact" onClick={() => setMenuOpen(false)}>Contact Us</Link>
        </nav>
      )}
    </header>
  );
}
