"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

function CountUp({ target, duration = 1500, className }: { target: number; duration?: number; className?: string }) {
  const [value, setValue] = useState(0);
  const hasAnimated = useRef(false);
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const startAnimation = () => {
      if (hasAnimated.current) return;
      hasAnimated.current = true;

      const start = performance.now();
      const animate = (now: number) => {
        const progress = Math.min((now - start) / duration, 1);
        const current = Math.floor(progress * target);
        setValue(current);
        if (progress < 1) requestAnimationFrame(animate);
      };
      requestAnimationFrame(animate);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            startAnimation();
          }
        });
      },
      { threshold: 0.4 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [duration, target]);

  return <div ref={containerRef} className={className}>{value}</div>;
}

export default function AboutTab() {
  return (
    <div className="tab-content py-10 space-y-10 px-4 mb-30">
      {/* First Description */}
      <div className="text-gray-200 text-center space-y-2 max-w-5xl mx-auto">
        <p className="sm:text-lg md:text-xl lg:text-2xl">
          Our talented in-house design team collaborates seamlessly to deliver outstanding results. By combining diverse
          expertise, we ensure precision and creativity in every project. We pride ourselves on blending vision with
          execution.
        </p>
      </div>

      {/* Team Section */}
      <div className="space-y-12 max-w-6xl mx-auto">
        {/* Member 1 */}
        <div className="flex flex-col md:flex-row items-center md:items-center gap-8 text-white">
          <Image src="/assets/img-1.png" alt="Founder" width={621} height={621} />
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-semibold">Suwetha</h3>
            <p className="text-gray-400">founder</p>
          </div>
        </div>

        {/* Member 2 */}
        <div className="flex flex-col md:flex-row items-center md:items-center gap-8 text-white">
          <Image src="/assets/img-2.png" alt="CEO" width={621} height={621} />
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-semibold">Suryanarayanan</h3>
            <p className="text-gray-400">Co Founder</p>
          </div>
        </div>

        {/* Member 3 */}
        <div className="flex flex-col md:flex-row items-center md:items-center gap-8 text-white">
          <Image src="/assets/img-3.png" alt="Post Production" width={621} height={621} />
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-semibold">jerush jaislin</h3>
            <p className="text-gray-400">post production</p>
          </div>
        </div>
      </div>

      {/* Our Story */}
      <div className="text-gray-300 mx-auto space-y-4 max-w-7xl">
        <h2 className="text-3xl font-semibold text-white">our story</h2>
        <p className="text-base sm:text-lg md:text-xl lg:text-2xl">
          We believe good design and powerful storytelling can bring a brand's essence and personality to life.
        </p>
        <p className="text-base sm:text-lg md:text-xl lg:text-2xl">
          From conception to project completion, listening is our top priority to ensure we deliver the best possible
          results for our clients.
        </p>
        <p className="text-base sm:text-lg md:text-xl lg:text-2xl">
          Our approach combines design inspiration from the art world with market research and analysis to provide a
          truly unique visual identity for our clients.
        </p>
      </div>

      <div className="flex justify-between flex-wrap mx-auto lg:text-6xl text-2xl font-bold max-w-7xl py-3">
        <span className="mx-2">innovate.</span>
        <span className="mx-2">create.</span>
        <span className="mx-2">captivate.</span>
      </div>

      <div className="relative mt-16 sm:mt-20">
        {/* Decorative background image anchored to the bottom behind video and stats */}
        <div
          aria-hidden
          className="pointer-events-none absolute left-1/2 -translate-x-1/2 w-screen h-40 sm:h-56 lg:h-[300px] bg-no-repeat z-0"
          style={{
            bottom: "-80px",
            backgroundImage: "url('/assets/v882-kul-52 1.png')",
            backgroundPosition: 'right bottom',
            backgroundSize: 'auto 70%'
          }}
        />

        <div className="w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] flex justify-center items-center z-10 overflow-hidden mt-10 sm:mt-14">
          {/* Top gradient shadow - smooth fade from high to low */}
          <div 
            className="pointer-events-none absolute inset-x-0 top-0 h-32 sm:h-48 lg:h-64 z-10"
            style={{
              background: "linear-gradient(to bottom, rgba(0,0,0,0.95) 0%, rgba(0,0,0,0.85) 20%, rgba(0,0,0,0.6) 40%, rgba(0,0,0,0.3) 60%, rgba(0,0,0,0.1) 80%, transparent 100%)"
            }}
          />

          <video
            src="/video.mp4"
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-auto object-cover rounded-lg shadow-lg"
            poster="/assets/about-1.png"
          />

          {/* Bottom gradient shadow - smooth fade from high to low */}
          <div 
            className="pointer-events-none absolute inset-x-0 bottom-0 h-32 sm:h-48 lg:h-64 z-10"
            style={{
              background: "linear-gradient(to top, rgba(0,0,0,0.95) 0%, rgba(0,0,0,0.85) 20%, rgba(0,0,0,0.6) 40%, rgba(0,0,0,0.3) 60%, rgba(0,0,0,0.1) 80%, transparent 100%)"
            }}
          />
        </div>

        {/* Stats - counts animate on view */}
        <div className="max-w-7xl w-full py-12 sm:py-16 relative z-10">
          <div className="grid grid-cols-2 text-white justify-items-start gap-x-8 sm:gap-x-12 lg:gap-x-16">
            <div className="flex flex-col items-start lg:ml-[70px]">
              <div className="flex items-baseline text-4xl sm:text-5xl lg:text-6xl font-semibold font-poppins">
                <CountUp target={15} className="tracking-wider mr-2 tabular-nums" />
                <span>+</span>
              </div>
              <span className="text-gray-300 italic mt-3 text-lg sm:text-xl lg:text-2xl">clients</span>
            </div>

            <div className="flex flex-col lg:ml-[-420px]">
              <div className="flex items-baseline text-4xl sm:text-5xl lg:text-6xl font-semibold font-poppins">
                <CountUp target={35} className="tracking-wider mr-2 tabular-nums" />
                <span>+</span>
              </div>
              <span className="text-gray-300 italic mt-3 text-lg sm:text-xl lg:text-2xl">projects</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
