import type { Metadata } from "next";
import { Space_Grotesk, JetBrains_Mono, Instrument_Serif } from "next/font/google";
import "./globals.css";
import { Loader } from "@/components/Loader";
import { CommandPalette } from "@/components/CommandPalette";
import Navbar from "@/components/Navbar";
import { RamaaArrow } from "@/components/RamaaArrow";
import { CustomCursor } from "@/components/CustomCursor";
import { NoiseOverlay } from "@/components/NoiseOverlay";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument-serif",
  weight: "400",
  style: "italic",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "V Athithya Ramaa | Portfolio",
  description: "Fullstack Developer & AI-ML Engineer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${spaceGrotesk.variable} ${jetbrainsMono.variable} ${instrumentSerif.variable} antialiased selection:bg-accent/30 selection:text-accent relative min-h-screen cursor-none`}
      >
        <NoiseOverlay />
        <CustomCursor />
        <Loader />
        <Navbar />
        <RamaaArrow />
        <CommandPalette />
        <div className="relative z-0">
          {children}
        </div>
      </body>
    </html>
  );
}
