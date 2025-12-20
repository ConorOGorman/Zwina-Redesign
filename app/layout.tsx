import type { Metadata } from "next";
import { Manrope, Playfair_Display } from "next/font/google";
import "@/styles/globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { SmoothScroll } from "@/components/layout/SmoothScroll";

const manrope = Manrope({ 
  subsets: ["latin"],
  variable: '--font-sans',
});

const playfair = Playfair_Display({ 
  subsets: ["latin"],
  variable: '--font-serif',
});

export const metadata: Metadata = {
  title: "Zwina Foundation",
  description: "Empowering Communities & Inspiring Generations",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${manrope.variable} ${playfair.variable} font-sans bg-background text-foreground`}>
        <SmoothScroll>
          <Header />
          <main className="min-h-screen">{children}</main>
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}
