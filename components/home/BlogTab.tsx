"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function BlogTab() {
  // Shared sizing to keep images and cards identical across sections
  const imageClass = "ml-4 sm:ml-8 lg:ml-16 w-full max-w-[420px] h-[280px] sm:h-[320px] lg:h-[340px] object-cover rounded-lg shadow-md";

  // Must Read posts (can be extended later or fetched)
  const mustReadPosts = [
    {
      id: 1,
      img: "/assets/blog-1.jpg",
      date: "1 September 2025",
      title: "Minimalism vs. Maximalism: Which Design Style Fits Your Brand?",
      href: "/blog",
    },
    {
      id: 2,
      img: "/assets/blog-2.jpg",
      date: "4 September 2025",
      title: "The Psychology of Color in Branding: How Colors Shape Customer Decisions",
      href: "/blog",
    },
    {
      id: 3,
      img: "/assets/blog-1.jpg",
      date: "8 September 2025",
      title: "Design Systems: Consistency at Scale",
      href: "/blog",
    },
    {
      id: 4,
      img: "/assets/blog-2.jpg",
      date: "12 September 2025",
      title: "Motion in Branding: When and How to Use It",
      href: "/blog",
    },
  ];

  const latestPost = mustReadPosts[1] ?? mustReadPosts[0];

  const [visibleCount, setVisibleCount] = useState(3);
  const canLoadMore = visibleCount < mustReadPosts.length;
  return (
    <div className="tab-content py-4 sm:py-6 lg:py-10 space-y-6 sm:space-y-8 lg:space-y-10 px-2 sm:px-4 lg:px-6">
      {/* Latest Blog Section */}
      <div className="flex flex-col mb-12 lg:mb-0 lg:min-h-screen bg-black">
        {/* Latest Heading at Top */}
        <div className="text-left py-4 sm:py-6 px-2 sm:px-4 lg:px-8">
          <span className="text-gray-300 text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tight">Latest</span>
        </div>

        {/* Main Content - Left Aligned */}
        <div className="flex flex-1 items-start justify-start px-2 sm:px-4 lg:px-8 pr-8 sm:pr-12 lg:pr-16">
          <div className="w-full max-w-[420px] relative">
            <div className="flex justify-start">
              <Image src="/assets/blog-2.jpg" alt="Orange on green plate" width={420} height={340} className={imageClass} />
            </div>
            {/* White card at bottom-right like previous design */}
            <div className="absolute -bottom-4 right-2 sm:-bottom-6 sm:right-4 lg:-bottom-8 lg:-right-20">
              <div className="bg-white/95 backdrop-blur rounded-lg shadow-md px-4 sm:px-6 lg:px-8 py-3 sm:py-4 w-full max-w-[360px]">
                <p className="text-gray-600 text-xs mb-1">Posted on 4 September 2025</p>
                <h3 className="text-black font-medium leading-tight mb-2 text-sm sm:text-base">
                  The Psychology of Color in Branding: <br /> How Colors Shape Customer Decisions
                </h3>
                <Link href={latestPost?.href ?? "/blog"} className="text-gray-600 hover:text-black flex items-center text-xs gap-2">
                  Read More <span>&rarr;</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Must Read Section */}
      <div className="flex flex-col items-start mb-12 lg:mb-0 lg:min-h-screen bg-black px-2 sm:px-4 lg:px-8 pr-8 sm:pr-12 lg:pr-16 pt-4 sm:pt-6 lg:pt-8">
        {/* Must Read Heading */}
        <span className="text-gray-300 text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tight mb-6 sm:mb-8 lg:mb-12">
          Must Read
        </span>

        {/* Must Read Cards (max three initially, Load more reveals more) */}
        <div className="flex flex-col gap-12 w-full mt-4 sm:mt-6 lg:mt-8">
          {mustReadPosts.slice(0, visibleCount).map((post) => (
            <div key={post.id} className="w-full flex flex-col lg:flex-row items-start lg:items-end gap-6 lg:gap-10">
              <Image src={post.img} alt={post.title} width={420} height={340} className={imageClass} />
              <div className="text-left text-gray-300 max-w-[400px]">
                <p className="text-gray-400 text-xs mb-2">Posted on {post.date}</p>
                <h3 className="text-white font-medium leading-snug mb-3 text-base sm:text-lg lg:text-xl">{post.title}</h3>
                <Link href={post.href} className="text-gray-300 hover:text-white inline-flex items-center gap-2 text-sm">
                  Read More <span>&rarr;</span>
                </Link>
              </div>
            </div>
          ))}

          {canLoadMore && (
            <div className="w-full flex justify-center">
              <button
                type="button"
                onClick={() => setVisibleCount((c) => Math.min(c + 3, mustReadPosts.length))}
                className="text-gray-300 hover:text-white border border-gray-600 hover:border-white rounded-full px-6 py-2 text-sm"
              >
                Load more
              </button>
            </div>
          )}
        </div>
      </div>

      {/* CTA - Ready to Get Started */}
      <section className="bg-black px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-white text-3xl sm:text-4xl lg:text-6xl font-semibold tracking-tight">
            Ready to Get Started?
          </h2>
          <p className="mt-4 text-gray-400 text-base sm:text-lg">
            Schedule a meet with our team
          </p>
          <div className="mt-8 flex justify-center cursor-pointer">
            <button
              type="button"
              className="bg-transparent cursor-pointer inline-flex items-center justify-center"
              aria-label="Let's Talk"
              onClick={() => {
                if (typeof window !== "undefined") {
                  // Tell Tabs to show Consultation inline without navigation
                  window.dispatchEvent(new Event("open-consultation"));
                }
              }}
            >
              <Image
                src="/Group%2037.svg"
                alt="Let's Talk"
                width={807}
                height={85}
                className="w-[280px] sm:w-[500px] max-w-4xl h-auto"
                priority
              />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
