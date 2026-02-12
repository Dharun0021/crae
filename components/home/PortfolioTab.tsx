"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

export default function PortfolioTab() {
  const logoSwiperRef = useRef<any>(null);

  // Function to handle video playback and slide advancement
  const playActiveSlideVideo = async () => {
    try {
      // Pause and reset all videos safely
      const videos = document.querySelectorAll("#logoAnimationSwiper video");
      videos.forEach((v: any) => {
        try {
          v.pause();
          v.currentTime = 0;
          v.onended = null;
        } catch (error) {
          // Ignore errors when video is already removed from DOM
          console.warn("Video cleanup error (safe to ignore):", error);
        }
      });

      // Play only active slide video
      if (logoSwiperRef.current) {
        const currentSlide = logoSwiperRef.current.slides[logoSwiperRef.current.activeIndex];
        const video = currentSlide?.querySelector("video");

        if (video) {
          try {
            // Check if video is still in the DOM before playing
            if (video.isConnected) {
              await video.play();
              video.onended = () => {
                setTimeout(() => {
                  if (logoSwiperRef.current && video.isConnected) {
                    logoSwiperRef.current.slideNext();
                  }
                }, 2000);
              };
            }
          } catch (error) {
            // Handle AbortError and other play() errors gracefully
            if (error instanceof Error && error.name === "AbortError") {
              console.log("Video play was interrupted (tab switch) - this is normal");
            } else {
              console.warn("Video play error:", error);
            }
          }
        }
      }
    } catch (error) {
      console.warn("Error in playActiveSlideVideo:", error);
    }
  };

  // Function to initialize swiper and set up event listeners
  const initializeSwiper = (swiper: any) => {
    logoSwiperRef.current = swiper;

    // Set up event listeners after swiper is initialized
    swiper.on("slideChangeTransitionEnd", playActiveSlideVideo);

    // Play the first video immediately
    setTimeout(() => {
      playActiveSlideVideo();
    }, 100);
  };

  // Function to safely cleanup all videos
  const cleanupVideos = () => {
    try {
      const videos = document.querySelectorAll("#logoAnimationSwiper video");
      videos.forEach((v: any) => {
        try {
          v.pause();
          v.currentTime = 0;
          v.onended = null;
        } catch (error) {
          // Ignore errors when video is already removed from DOM
          console.warn("Video cleanup error (safe to ignore):", error);
        }
      });
    } catch (error) {
      console.warn("Error during video cleanup:", error);
    }
  };

  // Cleanup effect to remove event listeners and pause videos
  useEffect(() => {
    // Handle visibility change (tab switching)
    const handleVisibilityChange = () => {
      if (document.hidden) {
        // Tab is hidden, pause all videos
        cleanupVideos();
      } else {
        // Tab is visible again, restart video playback
        setTimeout(() => {
          if (logoSwiperRef.current) {
            playActiveSlideVideo();
          }
        }, 100);
      }
    };

    // Add visibility change listener
    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      // Remove visibility change listener
      document.removeEventListener("visibilitychange", handleVisibilityChange);

      // Cleanup videos first
      cleanupVideos();

      // Remove event listeners
      if (logoSwiperRef.current) {
        try {
          logoSwiperRef.current.off("slideChangeTransitionEnd", playActiveSlideVideo);
        } catch (error) {
          console.warn("Error removing swiper event listeners:", error);
        }
      }
    };
  }, []);

  const logoImages = Array.from({ length: 10 }, (_, i) => i + 1);
  const brandImages = Array.from({ length: 1 }, (_, i) => i + 1);
  const brochureImages = Array.from({ length: 3 }, (_, i) => i + 1);
  const packagingImages = Array.from({ length: 2 }, (_, i) => i + 1);
  const posterImages = Array.from({ length: 3 }, (_, i) => i + 1);
  const stationaryImages = Array.from({ length: 3 }, (_, i) => i + 1);
  const animationVideos = Array.from({ length: 3 }, (_, i) => i + 1);

  return (
    <>
      {/* Logo Design Section */}
      <div className="swiper swiper-container relative">
        {/* Top shadow overlay - only on first image */}
        <div
          className="absolute top-0 w-full h-32 sm:h-48 lg:h-40 z-10 pointer-events-none"
          style={{
            background: "linear-gradient(to bottom, rgba(0,0,0,0.95) 0%, rgba(0,0,0,0.85) 20%, rgba(0,0,0,0.6) 40%, rgba(0,0,0,0.3) 60%, rgba(0,0,0,0.1) 80%, transparent 100%)"
          }}
        />
        
        {/* Text Overlay (Fixed and on top) */}
        <div
          className="absolute bottom-0 w-full p-4 text-white text-start z-10"
          style={{
            background:
              "linear-gradient(to top, rgba(0, 0, 0, 0.85) 0%, rgba(0, 0, 0, 0.6) 30%, rgba(0, 0, 0, 0.3) 60%, rgba(0, 0, 0, 0) 100%)",
          }}
        >
          <h3 className="text-1xl lg:text-3xl md:text-3xl font-bold">LOGO DESIGN</h3>
          <p className="text-1xl lg:text-3xl md:text-3xl">unique brand identity visuals</p>
        </div>

        {/* Swiper Slides (Only Images) */}
        <Swiper
          modules={[Autoplay]}
          loop={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          observer={true}
          observeParents={true}
          key="poster-swiper"
          navigation={false}
          pagination={false}
        >
          {logoImages.map((num) => (
            <SwiperSlide key={num} className="flex items-center justify-center">
              <Image
                src={`/assets/logo-design/${num}.jpg`}
                alt={`Logo ${num}`}
                width={5600}
                height={2800}
                className="w-full h-full object-cover"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Brand Design Section */}
      <div className="swiper swiper-container relative">
        {/* Fixed Text Overlay (Always Visible) */}
        <div
          className="absolute bottom-0 w-full p-4 text-white text-start z-10"
          style={{
            background:
              "linear-gradient(to top, rgba(0, 0, 0, 0.85) 0%, rgba(0, 0, 0, 0.6) 30%, rgba(0, 0, 0, 0.3) 60%, rgba(0, 0, 0, 0) 100%)",
          }}
        >
          <h3 className="text-1xl lg:text-3xl md:text-3xl font-bold">BRAND DESIGN</h3>
          <p className="text-1xl lg:text-3xl md:text-3xl">cohesive visual identity</p>
        </div>

        {/* Swiper Wrapper (Only Images Slide) */}
        <Swiper
          modules={[Autoplay]}
          loop={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          navigation={false}
          pagination={false}
        >
          {brandImages.map((num) => (
            <SwiperSlide key={num} className="flex items-center justify-center">
              <Image
                src={`/assets/brand-design/${num}.jpg`}
                alt={`Brand ${num}`}
                width={5600}
                height={2800}
                className="w-full h-full object-cover"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Brochure Design Section */}
      <div className="swiper swiper-container relative">
        {/* Fixed Text Overlay (Always Visible) */}
        <div
          className="absolute bottom-0 w-full p-4 text-white text-start z-10"
          style={{
            background:
              "linear-gradient(to top, rgba(0, 0, 0, 0.85) 0%, rgba(0, 0, 0, 0.6) 30%, rgba(0, 0, 0, 0.3) 60%, rgba(0, 0, 0, 0) 100%)",
          }}
        >
          <h3 className="text-1xl lg:text-3xl md:text-3xl font-bold">BROCHURE DESIGN</h3>
          <p className="text-1xl lg:text-3xl md:text-3xl">Clear, professional layouts</p>
        </div>

        {/* Swiper Wrapper (Only Images Slide) */}
        <Swiper
          modules={[Autoplay]}
          loop={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          navigation={false}
          pagination={false}
        >
          {brochureImages.map((num) => (
            <SwiperSlide key={num} className="flex items-center justify-center">
              <Image
                src={`/assets/brochure-design/${num}.jpg`}
                alt={`Brochure ${num}`}
                width={5600}
                height={2800}
                className="w-full h-full object-cover"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Packaging Design Section */}
      <div className="swiper swiper-container relative">
        {/* Fixed Text Overlay */}
        <div
          className="absolute bottom-0 w-full p-4 text-white text-start z-10"
          style={{
            background:
              "linear-gradient(to top, rgba(0, 0, 0, 0.85) 0%, rgba(0, 0, 0, 0.6) 30%, rgba(0, 0, 0, 0.3) 60%, rgba(0, 0, 0, 0) 100%)",
          }}
        >
          <h3 className="text-1xl lg:text-3xl md:text-3xl font-bold">PACKAGING DESIGN</h3>
          <p className="text-1xl lg:text-3xl md:text-3xl">Clear, professional layouts</p>
        </div>

        {/* Swiper Slides */}
        <Swiper
          modules={[Autoplay]}
          loop={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          navigation={false}
          pagination={false}
        >
          {packagingImages.map((num) => (
            <SwiperSlide key={num} className="flex items-center justify-center">
              <Image
                src={`/assets/packaging-design/${num}.jpg`}
                alt={`Packaging ${num}`}
                width={5600}
                height={2800}
                className="w-full h-full object-cover"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Poster Design Section */}
      <div className="swiper swiper-container relative">
        {/* Fixed Text Overlay */}
        <div
          className="absolute bottom-0 w-full p-4 text-white text-start z-10"
          style={{
            background:
              "linear-gradient(to top, rgba(0, 0, 0, 0.85) 0%, rgba(0, 0, 0, 0.6) 30%, rgba(0, 0, 0, 0.3) 60%, rgba(0, 0, 0, 0) 100%)",
          }}
        >
          <h3 className="text-1xl lg:text-3xl md:text-3xl font-bold">POSTER DESIGN</h3>
          <p className="text-1xl lg:text-3xl md:text-3xl">bold promotional visuals</p>
        </div>

        {/* Swiper Slides */}
        <Swiper
          modules={[Autoplay]}
          loop={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          navigation={false}
          pagination={false}
        >
          {posterImages.map((num) => (
            <SwiperSlide key={num} className="flex items-center justify-center">
              <Image
                src={`/assets/poster-design/${num}.jpg`}
                alt={`Poster ${num}`}
                width={5600}
                height={2800}
                className="w-full h-full object-cover"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Stationary Design Section */}
      <div className="swiper swiper-container relative">
        {/* Fixed Text Overlay */}
        <div
          className="absolute bottom-0 w-full p-4 text-white text-start z-10"
          style={{
            background:
              "linear-gradient(to top, rgba(0, 0, 0, 0.85) 0%, rgba(0, 0, 0, 0.6) 30%, rgba(0, 0, 0, 0.3) 60%, rgba(0, 0, 0, 0) 100%)",
          }}
        >
          <h3 className="text-1xl lg:text-3xl md:text-3xl font-bold">STATIONARY DESIGN</h3>
          <p className="text-1xl lg:text-3xl md:text-3xl">Consistent, branded office essentials</p>
        </div>

        {/* Swiper Slides */}
        <Swiper
          modules={[Autoplay]}
          loop={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          navigation={false}
          pagination={false}
        >
          {stationaryImages.map((num) => (
            <SwiperSlide key={num} className="flex items-center justify-center">
              <Image
                src={`/assets/stationary-design/${num}.jpg`}
                alt={`Stationary ${num}`}
                width={5600}
                height={2800}
                className="w-full h-full object-cover"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Logo Animation Section */}
      <div className="swiper swiper-container relative" id="logoAnimationSwiper">
        {/* Fixed Text Overlay */}
        <div
          className="absolute bottom-0 w-full p-4 text-white text-start z-10"
          style={{
            background:
              "linear-gradient(to top, rgba(0, 0, 0, 0.85) 0%, rgba(0, 0, 0, 0.6) 30%, rgba(0, 0, 0, 0.3) 60%, rgba(0, 0, 0, 0) 100%)",
          }}
        >
          <h3 className="text-1xl lg:text-3xl md:text-3xl font-bold">Motion Graphics</h3>
          <p className="text-1xl lg:text-3xl md:text-3xl">Engaging, animated branding</p>
        </div>

        {/* Slides with Videos */}
        <Swiper
          modules={[]}
          loop={true}
          autoplay={false}
          navigation={false}
          pagination={false}
          onSwiper={initializeSwiper}
        >
          {animationVideos.map((num) => (
            <SwiperSlide key={num} className="flex items-center justify-center">
              <video className="w-full h-full object-contain" autoPlay muted playsInline>
                <source src={`/assets/logo-animation/video-${num}.mp4`} type="video/mp4" />
              </video>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
}
