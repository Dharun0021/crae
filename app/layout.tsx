import type { Metadata } from "next";
import localFont from "next/font/local";
import { Poppins } from "next/font/google";
import "./globals.css";

const raleway = localFont({
  src: [
    {
      path: "../public/fonts/Raleway-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/Raleway-Bold.ttf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-raleway",
});

const poppins = Poppins({
  weight: ["400", "600", "700"],
  subsets: ["latin"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "CRAE - Creative Design Agency",
  description: "Professional design services including logo design, branding, and creative solutions",
  icons: {
    icon: [
      { url: "/assets/favicon.png", type: "image/png" },
    ],
    apple: [
      { url: "/assets/favicon.png", type: "image/png" },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/assets/favicon.png" type="image/png" />
        <link rel="apple-touch-icon" href="/assets/favicon.png" />
      </head>
      <body
        className={`${raleway.variable} ${poppins.variable} font-raleway antialiased bg-black text-white`}
        suppressHydrationWarning={true}
      >
        {children}
      </body>
    </html>
  );
}
