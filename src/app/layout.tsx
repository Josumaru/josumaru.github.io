import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import openGraph from "@/assets/opengraph/opengraph.png"

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

const interRegular = localFont({
  src: "./fonts/InterRegular.ttf",
  variable: "--font-inter",
  weight: "400 900",
})

export const metadata: Metadata = {
  title: "Josumaru",
  description: "Hello, my name is Joko Supriyanto, I am a software developer, I also develop backends and study how artificial intelligence and machine learning are applied in applications to support integrated digital facilities.",
  openGraph: {
    images: {
      url: openGraph.src,
      width: 1200,
      height: 630,
    }
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${interRegular.variable} antialiased dark:bg-black`}
      >
        <ThemeProvider enableSystem={false} defaultTheme="light" attribute="class">{children}</ThemeProvider>
      </body>
    </html>
  );
}
