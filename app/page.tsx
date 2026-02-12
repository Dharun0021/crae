"use client";

import { useEffect } from "react";
import emailjs from "@emailjs/browser";
import { Footer, HeroSection, Tabs } from "@/components/home";

export default function Home() {
  useEffect(() => {
    // Initialize EmailJS
    emailjs.init(process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!);

    if (typeof window !== "undefined") {
      const hash = window.location.hash;
      // Avoid interrupting hash-based navigation for in-page tabs
      if (!hash) {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    }
  }, []);

  return (
    <div className="bg-black w-full">
      <HeroSection />
      <Tabs />
      <Footer />
    </div>
  );
}
