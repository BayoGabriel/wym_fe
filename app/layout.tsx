import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { App_Providers } from "@/app/providers";
import Scroll_To_Top from "@/components/layout_components/scroll_to_top";
import AOSInit from "@/components/layout_components/AOSInit";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Wynmet",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <App_Providers>
          <Scroll_To_Top />
          <AOSInit />
          {children}
        </App_Providers>
      </body>
    </html>
  );
}
