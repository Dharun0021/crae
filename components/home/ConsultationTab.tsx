"use client";

import { useEffect, useRef } from "react";

export default function ConsultationTab() {
  const calEmbedLoaded = useRef(false);

  useEffect(() => {
    // Load Cal.com embed when component mounts
    loadCalEmbed();
  }, []);

  const loadCalEmbed = () => {
    // Only load once
    if (calEmbedLoaded.current) return;
    calEmbedLoaded.current = true;

    // Create and inject the official Cal.com embed script
    const script = document.createElement("script");
    script.type = "text/javascript";
    script.innerHTML = `
      (function (C, A, L) { 
        let p = function (a, ar) { 
          a.q.push(ar); 
        }; 
        let d = C.document; 
        C.Cal = C.Cal || function () { 
          let cal = C.Cal; 
          let ar = arguments; 
          if (!cal.loaded) { 
            cal.ns = {}; 
            cal.q = cal.q || []; 
            d.head.appendChild(d.createElement("script")).src = A; 
            cal.loaded = true; 
          } 
          if (ar[0] === L) { 
            const api = function () { 
              p(api, arguments); 
            }; 
            const namespace = ar[1]; 
            api.q = api.q || []; 
            if(typeof namespace === "string"){
              cal.ns[namespace] = cal.ns[namespace] || api;
              p(cal.ns[namespace], ar);
              p(cal, ["initNamespace", namespace]);
            } else p(cal, ar); 
            return;
          } 
          p(cal, ar); 
        }; 
      })(window, "https://app.cal.com/embed/embed.js", "init");
      
      Cal("init", "30min", {origin:"https://app.cal.com"});
      
      Cal.ns["30min"]("inline", {
        elementOrSelector:"#my-cal-inline-30min",
        config: {"layout":"month_view"},
        calLink: "crae-ca/30min",
      });
      
      Cal.ns["30min"]("ui", {"hideEventTypeDetails":false,"layout":"month_view"});
    `;

    document.head.appendChild(script);
  };

  return (
    <div className="tab-content py-10 space-y-10 px-4">
      <div className="max-w-4xl mx-auto text-white">
        {/* Header Section */}
        <div className="text-center space-y-6 mb-12">
          <h1 className="lg:text-5xl md:text-5xl text-3xl">
            <span className="font-bold">BOOK</span>
            <span className="px-4 italic">your consultation</span>
          </h1>
          <h2 className="lg:text-3xl md:text-3xl text-2xl font-semibold">let's discuss your project</h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Schedule a consultation to discuss your design needs and bring your vision to life.
          </p>
        </div>

        {/* Cal.com Embed Container */}
        <div id="cal-embed-container" className="min-h-[600px] mb-12">
          {/* Cal.com Inline Embed */}
          <div style={{ width: "100%", height: "100%", overflow: "scroll" }} id="my-cal-inline-30min"></div>
        </div>

        {/* Back to Home removed as per request */}

        {/* Additional Info */}
        <div className="text-center space-y-4 mt-8 lg:mt-0">
          <p className="text-gray-400">Need to reschedule? No problem - you can modify your booking anytime.</p>
          <div className="flex justify-center space-x-8 text-sm text-gray-500">
            <span>✓ Free consultation</span>
            <span>✓ 30-60 minutes</span>
            <span>✓ Video call</span>
          </div>
        </div>
      </div>
    </div>
  );
}
