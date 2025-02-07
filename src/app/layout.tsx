import type { Metadata } from "next"
import { Orbitron, Poppins } from "next/font/google"
import "./globals.css"
import { SearchProvider } from "./context/SearchContext"
import { CartProvider } from "./context/CartContext"
import { WishlistProvider } from "./context/WishlistContext"


import Script from "next/script"
import Header from "./components/Header"
import Footer from "./components/Footer"

const orbitron = Orbitron({
  subsets: ["latin"],
  variable: "--font-orbitron",
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Media Mart Store",
  description: "Media Mart  Project",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://app.snipcart.com" />
        <link rel="preconnect" href="https://cdn.snipcart.com" />
        <link
          rel="stylesheet"
          href="https://cdn.snipcart.com/themes/v3.2.0/default/snipcart.css"
        />
      </head>
      <body className={`${orbitron.variable} ${poppins.variable} font-poppins antialiased`}>
        <SearchProvider>
          <CartProvider>
            <WishlistProvider>
              <Header/>
              {children}
              <Footer/>
            </WishlistProvider>
          </CartProvider>
        </SearchProvider>
        <Script
          src="https://cdn.snipcart.com/themes/v3.2.0/default/snipcart.js"
          strategy="afterInteractive"
        />
        <div
          hidden
          id="snipcart"
          data-api-key="NDMyNjY3ZjMtYjYxYy00NTEzLWFhZGMtYmUyZGQ2Yjg3MTk2NjM4NzE2NDkyNjg1MjU4OTc4"
        ></div>
      </body>
    </html>
  );
}
