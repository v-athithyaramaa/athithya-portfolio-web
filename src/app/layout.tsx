import type { Metadata } from "next";
import {
  Space_Grotesk,
  JetBrains_Mono,
  Instrument_Serif,
} from "next/font/google";
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
  title: "V Athithya Ramaa | Software Engineer (Physical AI, Systems & Cloud)",
  description:
    "A high-impact systems and full-stack engineer bridging distributed web platforms, automated cloud infrastructure, and autonomous Physical AI.",
  keywords: [
    "Software Engineer",
    "Physical AI",
    "Robotics",
    "ROS 2",
    "BEV Perception",
    "Distributed Systems",
    "Cloud Engineering",
    "Full-Stack Engineer",
    "ICPC",
    "Real-Time Systems",
    "PostGIS",
    "Next.js",
    "Docker",
    "AWS",
  ],
  alternates: {
    canonical: "https://v-athithyaramaa.vercel.app",
  },
  openGraph: {
    title:
      "V Athithya Ramaa | Software Engineer (Physical AI, Systems & Cloud)",
    description:
      "A high-impact systems and full-stack engineer bridging distributed web platforms, automated cloud infrastructure, and autonomous Physical AI.",
    type: "profile",
    url: "https://v-athithyaramaa.vercel.app",
    images: [
      {
        url: "https://v-athithyaramaa.vercel.app/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "V Athithya Ramaa - Software Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "V Athithya Ramaa | Software Engineer (Physical AI, Systems & Cloud)",
    description:
      "A high-impact systems and full-stack engineer bridging distributed web platforms, automated cloud infrastructure, and autonomous Physical AI.",
    images: ["https://v-athithyaramaa.vercel.app/og-image.jpg"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": "https://v-athithyaramaa.vercel.app/#person",
      name: "V Athithya Ramaa",
      alternateName: ["Athithya Ramaa"],
      url: "https://v-athithyaramaa.vercel.app",
      image: "https://v-athithyaramaa.vercel.app/avatar.jpg",
      jobTitle: [
        "Software Engineer",
        "Physical AI & Robotics Researcher",
        "Full-Stack Engineer",
      ],
      worksFor: [
        { "@type": "Organization", name: "MultiCoreWare Inc." },
        { "@type": "Organization", name: "iCliniq" },
      ],
      alumniOf: {
        "@type": "CollegeOrUniversity",
        name: "Kalasalingam Academy of Research and Education (KARE)",
      },
      sameAs: [
        "https://github.com/v-athithyaramaa",
        "https://linkedin.com/in/v-athithyaramaa",
        "https://leetcode.com/v-athithyaramaa",
        "https://scholar.google.com/citations?user=v-athithyaramaa",
        "https://twitter.com/v_athithyaramaa",
      ],
      knowsAbout: [
        "ROS 2",
        "Bird's-Eye-View Perception",
        "Transformers",
        "Distributed Systems",
        "PostGIS",
        "Next.js",
        "Docker",
        "AWS",
      ],
    },
    {
      "@type": "WebSite",
      "@id": "https://v-athithyaramaa.vercel.app/#website",
      url: "https://v-athithyaramaa.vercel.app",
      name: "V Athithya Ramaa Portfolio",
      publisher: { "@id": "https://v-athithyaramaa.vercel.app/#person" },
    },
    {
      "@type": "ProfilePage",
      "@id": "https://v-athithyaramaa.vercel.app/#profilepage",
      url: "https://v-athithyaramaa.vercel.app",
      mainEntity: { "@id": "https://v-athithyaramaa.vercel.app/#person" },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${spaceGrotesk.variable} ${jetbrainsMono.variable} ${instrumentSerif.variable} antialiased selection:bg-accent/30 selection:text-accent relative min-h-screen cursor-none`}
      >
        <NoiseOverlay />
        <CustomCursor />
        <Loader />
        <Navbar />
        <RamaaArrow />
        <CommandPalette />
        <div className="relative z-0">{children}</div>
      </body>
    </html>
  );
}
