import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import openGraph from "@/assets/opengraph/opengraph.png";

const geistRegular = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist",
  weight: "400",
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
      <body className={`${geistRegular.variable} antialiased dark:bg-black`}>
        <ThemeProvider
          enableSystem={false}
          defaultTheme="light"
          attribute="class"
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
