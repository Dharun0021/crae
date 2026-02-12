"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function HeroSection() {
  const [isHomePage, setIsHomePage] = useState(true);

  useEffect(() => {
    const checkHash = () => {
      if (typeof window !== "undefined") {
        const hash = window.location.hash.replace("#", "");
        // Home page: no hash, "portfolio", or empty
        // Other tabs: "about", "blog", "contact"
        setIsHomePage(!hash || hash === "portfolio");
      }
    };

    checkHash();
    window.addEventListener("hashchange", checkHash);
    return () => window.removeEventListener("hashchange", checkHash);
  }, []);

  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* Zooming Background */}
      <div
        className="absolute inset-0 bg-center bg-cover bg-no-repeat animate-bgZoom"
        style={{ backgroundImage: "url('/assets/hero-section.png')" }}
      />
      
      {/* Shadow at bottom of hero section - mobile */}
      <div 
        className="absolute inset-x-0 bottom-0 h-8 sm:h-20 z-10 pointer-events-none"
        style={{
          background: "linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.1) 30%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0.5) 100%)"
        }}
      />
      {/* Enhanced shadow for desktop */}
      <div 
        className="absolute inset-x-0 bottom-0 h-20 z-10 pointer-events-none hidden sm:block"
        style={{
          background: "linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.3) 30%, rgba(0,0,0,0.7) 70%, rgba(0,0,0,0.95) 100%)"
        }}
      />

      {/* Centered Logo (click to go home) */}
      <div className="absolute inset-0 flex items-center justify-center z-10">
        <Link href="/" aria-label="Go to home" onClick={() => {
          if (typeof window !== "undefined") {
            // ensure we land on the portfolio (home) view
            history.replaceState(null, "", "/");
            window.location.hash = "portfolio";
          }
        }}>
          <Image
            src="/assets/logo.png"
            alt="Logo"
            width={384}
            height={384}
            className="w-60 sm:w-96 max-w-full h-auto object-contain cursor-pointer"
          />
        </Link>
      </div>

      {/* Featured works scroll CTA (visible on all pages) */}
      <button
        type="button"
        onClick={() => {
          if (typeof window !== "undefined") {
            // ensure portfolio is shown
            window.location.hash = "portfolio";
            const el = document.getElementById("featured-works");
            if (el) el.scrollIntoView({ behavior: "smooth" });
          }
        }}
        className="hidden sm:flex items-center gap-3 text-white/80 hover:text-white absolute right-6 bottom-6 z-20 cursor-pointer"
      >
        {/* Conditional arrow: down arrow on home, left arrow on other tabs */}
        {isHomePage ? (
          // Down arrow
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-7">
            <path fillRule="evenodd" d="M12 3.75a.75.75 0 01.75.75v12.69l4.72-4.72a.75.75 0 111.06 1.06l-6 6a.75.75 0 01-1.06 0l-6-6a.75.75 0 111.06-1.06l4.72 4.72V4.5a.75.75 0 01.75-.75z" clipRule="evenodd" />
          </svg>
        ) : (
          // Left arrow
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-7">
            <path fillRule="evenodd" d="M11.03 3.97a.75.75 0 010 1.06l-6.22 6.22H21a.75.75 0 010 1.5H4.81l6.22 6.22a.75.75 0 11-1.06 1.06l-7.5-7.5a.75.75 0 010-1.06l7.5-7.5a.75.75 0 011.06 0z" clipRule="evenodd" />
          </svg>
        )}
        
        <span className="text-sm tracking-widest">featured works</span>
      </button>
    </section>
  );
}
