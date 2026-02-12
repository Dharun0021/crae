"use client";

import { useEffect, useState } from "react";
import { AboutTab, BlogTab, ConsultationTab, ContactTab, PortfolioTab } from ".";

export default function Tabs() {
  // On home: show portfolio content by default; navbar omits portfolio
  const [activeTab, setActiveTab] = useState<string | null>(null);

  // Visible tabs in navbar (order: about, blog, contact)
  const visibleTabs = [
    { id: "tab3", label: "about", hash: "about" },
    { id: "tab5", label: "blog", hash: "blog" },
    { id: "tab4", label: "contact", hash: "contact" },
  ];

  // Sync active tab with URL hash, supporting hidden consultation via #consultation and portfolio via #portfolio
  useEffect(() => {
    const applyHash = () => {
      const hash = (typeof window !== "undefined" && window.location.hash.replace("#", "")) || "";
      if (hash === "consultation") return setActiveTab("tab2");
      if (hash === "about") return setActiveTab("tab3");
      if (hash === "blog") return setActiveTab("tab5");
      if (hash === "contact") return setActiveTab("tab4");
      if (hash === "portfolio") return setActiveTab("tab1");
      // No hash: stay on home and show portfolio
      return setActiveTab(null);
    };

    applyHash();
    window.addEventListener("hashchange", applyHash);
    // Listen for programmatic request from ContactTab
    const openConsultation = () => setActiveTab("tab2");
    window.addEventListener("open-consultation", openConsultation as EventListener);
    return () => {
      window.removeEventListener("hashchange", applyHash);
      window.removeEventListener("open-consultation", openConsultation as EventListener);
    };
  }, []);

  const renderTabContent = () => {
    if (!activeTab) return <PortfolioTab />;
    switch (activeTab) {
      case "tab1":
        return <PortfolioTab />;
      case "tab2":
        return <ConsultationTab />;
      case "tab3":
        return <AboutTab />;
      case "tab4":
        return <ContactTab />;
      case "tab5":
        return <BlogTab />;
      default:
        return null;
    }
  };

  return (
    <section id="featured-works" className="w-full relative ">
      {/* Dark shadow at top of portfolio section */}
      <div 
        className="absolute inset-x-0 top-0 h-16 z-0 pointer-events-none"
        style={{
          background: "linear-gradient(to bottom, rgba(0,0,0,0.95) 0%, rgba(0,0,0,0.8) 50%, rgba(0,0,0,0.4) 100%)"
        }}
      />
      
      <div className="relative z-10">
        {/* Dark navigation bar background */}
        <div className="w-full bg-black/95 py-2">
          <div className="w-full overflow-x-auto">
            <ul className="flex justify-center flex-wrap lg:gap-x-90 text-sm font-medium">
            {visibleTabs.map((tab) => (
              <li key={tab.id}>
                <button
                  className={`p-3 lg:p-4 w-1/5 min-w-[120px] border-b-2 text-center transition-all cursor-pointer ${
                    activeTab === tab.id
                      ? "text-white border-white drop-shadow-lg shadow-white/50"
                      : "text-gray-400 border-transparent hover:text-white hover:drop-shadow-md"
                  }`}
                  style={{
                    textShadow: activeTab === tab.id 
                      ? "0 2px 8px rgba(255, 255, 255, 0.3), 0 4px 16px rgba(255, 255, 255, 0.2)"
                      : "none"
                  }}
                  onClick={() => {
                    if (typeof window !== "undefined") {
                      window.location.hash = tab.hash;
                    }
                    setActiveTab(tab.id);
                  }}
                >
                  {tab.label}
                </button>
              </li>
            ))}
            </ul>
          </div>
        </div>

        <div className="tab-contents -mt-4">{renderTabContent()}</div>
      </div>
    </section>
  );
}
