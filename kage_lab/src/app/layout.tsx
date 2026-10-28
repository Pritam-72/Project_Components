import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import LabNavbar from "@/components/navigation/LabNavbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const viewport: Viewport = {
  themeColor: "#0a0a0a",
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export const metadata: Metadata = {
  title: {
    default: "Kage Lab | Interactive Creative Web Experiments",
    template: "%s | Kage Lab",
  },
  description: "A curated collection of WebGL shaders, tactile physics simulations, smooth drawing canvases, and creative UI interactions built with Next.js, Motion, and Three.js.",
  keywords: [
    "Creative Development",
    "Next.js",
    "React 19",
    "Three.js",
    "React Three Fiber",
    "Shaders",
    "GLSL",
    "Framer Motion",
    "Tailwind CSS",
  ],
  authors: [{ name: "Preetimohan Pratihari", url: "https://github.com/Pritam-72" }],
  creator: "Preetimohan Pratihari",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://github.com/Pritam-72/Project_Components",
    title: "Kage Lab | Creative Web Experiments",
    description: "Interactive 3D smoke shaders, vintage postal desks, trace canvas, and mechanical window animations.",
    siteName: "Kage Lab",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kage Lab | Interactive Creative Web Experiments",
    description: "Interactive 3D smoke shaders, vintage postal desks, trace canvas, and mechanical window animations.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased bg-neutral-950 text-neutral-100 min-h-screen`}
      >
        <LabNavbar />
        {children}
      </body>
    </html>
  );
}
