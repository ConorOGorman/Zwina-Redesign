import type { Metadata } from "next";
import { Manrope, Playfair_Display } from "next/font/google";
import "@/styles/globals.css";
import Script from "next/script";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { SmoothScroll } from "@/components/layout/SmoothScroll";
import { CartProvider } from "@/components/shop/CartProvider";
import { getLocale } from "@/lib/i18n/server";
import { LocaleProvider } from "@/components/i18n/LocaleProvider";
import { InitialSplash } from "@/components/layout/InitialSplash";
import { getInitialSplashInlineScript } from "@/components/layout/initialSplashConfig";

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
  const locale = getLocale();

  return (
    <html lang={locale} className="zwina-splash--pending" suppressHydrationWarning>
      <body className={`${manrope.variable} ${playfair.variable} font-sans bg-background text-foreground`}>
        <Script id="zwina-initial-splash" strategy="beforeInteractive">
          {getInitialSplashInlineScript()}
        </Script>
        <InitialSplash />
        <SmoothScroll>
          <LocaleProvider initialLocale={locale}>
            <CartProvider>
              <Header />
              <main className="min-h-screen">{children}</main>
              <Footer />
            </CartProvider>
          </LocaleProvider>
        </SmoothScroll>
      </body>
    </html>
  );
}
