import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Footer from "@/components/footer/footer";
import Navigation from "@/components/navbar/navigation";
import openGraph from "@/assets/opengraph/opengraph.png";
import { ThemeProvider } from "@/components/common/theme-provider";
import AdScript from "@/components/ad/ad-script";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Josumaru",
  description:
    "Hello, my name is Joko Supriyanto, I am a software developer, I also develop backends and study how artificial intelligence and machine learning are applied in applications to support integrated digital facilities.",
  openGraph: {
    images: {
      url: openGraph.src,
      width: 1200,
      height: 630,
    },
  },
  keywords: [
    "Josumaru",
    "Joko Supriyanto",
    "Joko",
    "Supriyanto",
    "Overlogic Ums",
    "Overlogic Universe",
    "Overlogic ID",
    "Top Global Hack The Box",
    "Programmer Kotlin",
  ],
  authors: [
    {
      name: "Joko Supriyanto",
      url: "https://josumaru.my.id",
    },
    {
      name: "Overlogic ID",
      url: "https://github.com/overlogic-universe",
    },
    {
      name: "Josumaru",
      url: "https://github.com/Josumaru",
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
        <meta
          name="google-adsense-account"
          content={process.env.NEXT_PUBLIC_AD_CLIENT}
        />

        <AdScript adClient={process.env.NEXT_PUBLIC_AD_CLIENT} />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          enableSystem={true}
          defaultTheme="dark"
          attribute="class"
        >
          <Navigation />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
