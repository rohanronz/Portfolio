import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Providers from "@/components/Providers";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const display = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display-base",
});

export const metadata: Metadata = {
  title: {
    default: "Aarav Mehta | Product-Focused Frontend Engineer",
    template: "%s | Aarav Mehta",
  },
  description:
    "Building premium, fast-loading digital products at the intersection of technology and finance.",
  metadataBase: new URL("https://example.com"),
  openGraph: {
    title: "Aarav Mehta | Product-Focused Frontend Engineer",
    description:
      "Modern portfolio showcasing projects, experience, and a product-driven approach to front-end engineering.",
    type: "website",
    url: "https://example.com",
  },
  twitter: {
    card: "summary_large_image",
    title: "Aarav Mehta | Product-Focused Frontend Engineer",
    description:
      "Modern portfolio showcasing projects, experience, and a product-driven approach to front-end engineering.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${display.variable} antialiased text-foreground`}
      >
        <Providers>
          <div className="flex min-h-screen flex-col">
            <Navbar />
            <div className="flex-1">{children}</div>
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  );
}
