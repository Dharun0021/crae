"use client";

import Image from "next/image";
import Link from "next/link";

export default function BlogPage() {
  const handleHomeClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    if (typeof window !== "undefined") {
      // Force hard navigation to home page to ensure proper reload
      window.location.href = "/";
    }
  };

  const handleBackClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    if (typeof window !== "undefined") {
      window.history.back();
    }
  };

  return (
    <div className="bg-white min-h-screen flex flex-col">
      {/* Back Button - Top Left */}
      <div className="absolute top-6 left-4 sm:left-6 md:left-8 z-10">
        <Link 
          href="/#blog" 
          onClick={handleBackClick}
          className="text-black hover:text-gray-700 inline-flex items-center gap-1.5 text-base font-medium transition-colors duration-200"
        >
          <span className="text-xl leading-none">&larr;</span>
          <span>back</span>
        </Link>
      </div>

      {/* Header */}
      <header className="w-full py-6 flex justify-center relative">
        <Link href="/" onClick={handleHomeClick}>
          <Image src="/logoblack.png" alt="Logo" width={100} height={100} className="w-30 h-auto object-contain" />
        </Link>
      </header>

      {/* Title and Date Section */}
      <div className="w-full flex justify-center px-4 pt-8">
        <div className="w-full max-w-6xl">
          {/* Title - First */}
          <h1 className="text-lg sm:text-xl md:text-2xl font-bold text-black mb-2">Minimalism vs. Maximalism: <br />Which Design Style Fits Your Brand?</h1>
          
          {/* Date - Below Title */}
          <p className="text-gray-500 text-xs mb-8">Posted on 1 September 2025</p>
        </div>
      </div>

      {/* Full Width Main Image with side padding */}
      <div className="w-full mb-8 px-4 sm:px-6 md:px-8 lg:px-12">
        <Image
          src="/assets/blog-1.jpg"
          alt="Minimalism vs Maximalism"
          width={1920}
          height={600}
          className="w-full h-auto max-h-[500px] object-cover"
        />
      </div>

      {/* Blog Content */}
      <main className="flex-1 flex flex-col items-center px-4 pb-16">
        <div className="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Article */}
          <div className="w-full lg:col-span-2">

            {/* Article Content */}
            <article className="bg-white text-black w-full">

          <p>
            In design, two powerful philosophies shape brand perception: <b>Minimalism and Maximalism</b>. The first
            whispers with elegance, the second shouts personality. This isn't about right or wrong, it's about
            authenticity.
          </p>

          <h2 className="text-xl font-semibold mt-8 mb-2">The Power of Minimalism</h2>
          <p>
            Minimalism is all about clarity, clean visuals, white space, intentional design. It feels luxurious,
            communicates clearly, and adapts beautifully to digital.
          </p>

          <h3 className="text-lg font-bold mt-6 mb-2">Case Study: Apple</h3>
          <p>
            Apple's design philosophy is the gold standard of minimalism. From its packaging to its website, Apple
            builds on the mantra: <i>less is more</i>.
            <br />
            The sleek product shots, bold whitespace, and simple typography don't just show off technology, they elevate
            it to a lifestyle.
          </p>
          <p>
            <b>Why it works:</b> Because Apple's customers value sophistication and innovation, minimalism aligns
            perfectly with its brand promise.
          </p>

          <h3 className="text-lg font-bold mt-6 mb-2">Case Study: Muji</h3>
          <p>
            Even without a logo, Muji's minimalist aesthetic communicates quality and simplicity.
            <br />
            MUJI, the Japanese retail giant, has built an entire empire around "no-brand quality goods." From packaging
            to store design, everything is stripped to its essence, neutral colors, unbranded packaging, and functional
            forms.
          </p>
          <ul className="list-disc pl-6 mb-2">
            <li>MUJI appeals to consumers who reject flashy logos and want authenticity.</li>
            <li>The minimalist approach communicates honesty, utility, and sustainability.</li>
            <li>
              Its design philosophy directly reflects its name - "Mujirushi Ryohin," which means "no-brand, quality
              goods."
            </li>
          </ul>
          <p>
            MUJI proves that minimalism is not just a design choice but a brand identity that resonates deeply with
            modern conscious consumers.
          </p>
          <br />

          <Image
            src="/assets/Blog 1/image-2.png"
            alt="Minimalism vs Maximalism"
            width={800}
            height={600}
            className="w-full h-auto max-h-[460px] object-cover rounded-lg shadow-lg mb-6"
          />
          <br />

          <h2 className="text-xl font-semibold mt-10 mb-2">The Boldness of Maximalism</h2>
          <p>
            Maximalism layers colors, textures, and patterns to command attention. It creates emotional impact and brand
            personality.
          </p>

          <h3 className="text-lg font-bold mt-6 mb-2">Case Study: Gucci</h3>
          <p>
            Under Alessandro Michele, Gucci embraced flamboyant patterns, retro florals, and nostalgic maximalism.
            <br />
            Gucci leans heavily into maximalist branding, especially in campaigns and store design. It embraces vibrant
            prints, clashing colors, and eccentric visuals that celebrate individuality.
          </p>
          <p>
            <b>Why it works:</b> Gucci appeals to a fashion-forward audience that values uniqueness and statement-making
            style. Maximalism makes the brand feel extravagant and culturally bold.
          </p>

          <blockquote className="border-l-4 border-gray-300 pl-4 italic text-gray-700 my-4">
            "Gucci used 23% fewer neutrals… and 95% more extravagant designs."
          </blockquote>

          <Image
            src="/assets/Blog 1/image-3.png"
            alt="Minimalism vs Maximalism"
            width={800}
            height={600}
            className="w-full h-auto max-h-[460px] object-cover rounded-lg shadow-lg mb-6"
          />

          <blockquote className="border-l-4 border-gray-300 pl-4 italic text-gray-700 my-4">
            Hotel Les Dukes Gares by Luke Edward Hall
          </blockquote>

          <h2 className="text-xl font-semibold mt-10 mb-2">Which to Choose?</h2>
          <p>Consider your audience, your values, and your industry.</p>

          <p>
            Minimalism = Clarity
            <br />
            Maximalism = Personality
          </p>

          <p>Sometimes, a smart blend can win the best of both worlds.</p>

          <p>
            <b>Minimalism whispers</b>.<br />
            <b>Maximalism shouts</b>.<br />
            <b>The best choice?</b>
            <br />
            The one that's intentional and true because design is storytelling with purpose.
          </p>
            </article>
          </div>

          {/* Right Sidebar with two cards - sticks together without overlap */}
          <aside className="hidden lg:flex flex-col gap-8 self-start sticky top-6">
            <div className="bg-white p-3 shadow-sm">
              <div className="w-[320px]">
                <Image
                  src="/assets/blog-2.jpg"
                  alt="The Psychology of Color"
                  width={320}
                  height={200}
                  className="w-[320px] h-[200px] object-cover rounded-md"
                />
              </div>
              <div className="mt-2">
                <p className="text-gray-500 text-xs">The Psychology of Color in Branding</p>
                <p className="text-gray-400 text-xs">How Colors Shape Customer Decisions</p>
              </div>
            </div>
            <div className="bg-white p-3 shadow-sm">
              <div className="w-[320px]">
                <Image
                  src="/assets/blog-1.jpg"
                  alt="Minimalism vs Maximalism"
                  width={320}
                  height={200}
                  className="w-[320px] h-[200px] object-cover rounded-md"
                />
              </div>
              <div className="mt-2">
                <p className="text-gray-500 text-xs">Minimalism vs. Maximalism</p>
                <p className="text-gray-400 text-xs">Which Design Style Fits Your Brand?</p>
              </div>
            </div>
          </aside>
        </div>
      </main>

      {/* Call To Action */}
      <section className="bg-white px-4 py-16">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black">Ready to Get Started?</h2>
          <p className="text-sm sm:text-base text-gray-600">Schedule a meet with our team</p>
          <button
            type="button"
            onClick={() => {
              if (typeof window !== "undefined") {
                window.location.href = "/#consultation";
              }
            }}
            className="inline-flex items-center justify-center cursor-pointer"
            aria-label="Let's Talk"
          >
            <Image
              src="/assets/Group%2037%20(1).svg"
              alt="Let's Talk"
              width={807}
              height={85}
              className="w-[280px] sm:w-[500px] max-w-4xl h-auto"
              priority
            />
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white pt-10 py-5 px-4 mt-10">
        <div className="max-w-7xl mx-auto space-y-6 sm:space-y-0">
          <div className="flex sm:flex-row justify-between items-start sm:items-center text-start sm:text-left gap-6 sm:gap-0 relative">
            <div className="space-y-2 sm:w-1/3">
              <h3 className="text-black text-2xl sm:text-6xl font-semibold">contact</h3>
              <p className="cursor-pointer text-gray-500 hover:text-black">hello@crae.in</p>
              <p className="cursor-pointer text-gray-500 hover:text-black">+91 81240 06335</p>
            </div>
            <div className="sm:absolute sm:left-1/2 sm:transform sm:-translate-x-1/2 pt-16">
              <p className="text-gray-800">2025 by CRAE</p>
            </div>
            <div className="space-y-2 sm:w-1/3 text-right">
              <h3 className="text-black text-2xl sm:text-4xl font-semibold">follow us</h3>
              <p>
                <a
                  href="https://www.instagram.com/_craeofficial?igsh=MWtrcWFtb2cyam85dQ=="
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cursor-pointer text-gray-500 hover:text-black"
                >
                  Instagram
                </a>
              </p>
              <p>
                <a
                  href="https://www.linkedin.com/company/craedesign"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cursor-pointer text-gray-500 hover:text-black"
                >
                  LinkedIn
                </a>
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
