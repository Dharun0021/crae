"use client";

export default function Footer() {
  return (
    <footer className="bg-black py-8 sm:py-10 px-4 text-gray-400">
      <div className="max-w-7xl mx-auto space-y-3 sm:space-y-0">
        {/* Top Row: Contact + Follow with Center Text */}
        <div className="flex sm:flex-row justify-between items-start sm:items-center text-start sm:text-left gap-4 sm:gap-0 relative">
          {/* Contact */}
          <div className="space-y-1 sm:w-1/3">
            <h3 className="text-white text-xl sm:text-6xl font-semibold">contact</h3>
            <p className="text-sm sm:text-base">hello@crae.in</p>
            <p className="text-sm sm:text-base">+91 81240 06335</p>
          </div>

          {/* Center: Copyright */}
          <div className="hidden sm:block sm:absolute sm:left-1/2 sm:transform sm:-translate-x-1/2 pt-16">
            <p className="text-gray-400">2025 by CRAE</p>
          </div>

          {/* Follow */}
          <div className="space-y-1 sm:w-1/3 text-right">
            <h3 className="text-white text-xl sm:text-4xl font-semibold">follow us</h3>
            <p className="text-sm sm:text-base">
              <a
                href="https://www.instagram.com/_craeofficial?igsh=MWtrcWFtb2cyam85dQ=="
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white"
              >
                Instagram
              </a>
            </p>
            <p className="text-sm sm:text-base">
              <a
                href="https://www.linkedin.com/company/craedesign"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white"
              >
                LinkedIn
              </a>
            </p>
          </div>
        </div>

        {/* Mobile Copyright */}
        <div className="sm:hidden text-center py-3 border-t border-gray-700">
          <p className="text-gray-400 text-xs">2025 by CRAE</p>
        </div>
      </div>
    </footer>
  );
}
