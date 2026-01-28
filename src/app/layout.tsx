import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter, Roboto } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "Guides",
  description: "Guides",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="theme-red-blue">
      <head>
        <meta name="apple-mobile-web-app-title" content="Guides" />
      </head>
      <body
        className={`
          ${geistSans.variable}
          ${geistMono.variable}
          ${roboto.variable}
          ${inter.variable}
          antialiased
        `}
      >
        {children}
      </body>
    </html>
  );
}
