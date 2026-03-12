import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Playfair_Display } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "mhdsyukri",
  description:
    "Portofolio profesional Syukri. Frontend specialist, full stack developer, dan UI/UX enthusiast berpengalaman 3+ tahun dalam membangun produk digital yang indah dan fungsional.",
  keywords: [
    "portfolio",
    "developer",
    "frontend",
    "Next.js",
    "React",
    "freelance",
  ],
  icons: {
    icon: "/pribadi/logos-bg.png",
    apple: "/pribadi/logos-bg.png",
  },
  openGraph: {
    title: "Syukri-Dev",
    description: "Lihat portofolio dan karya saya",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className="scroll-smooth dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${playfair.variable} antialiased bg-[#0B0B0B] noise-overlay`}
      >
        {children}
      </body>
    </html>
  );
}
