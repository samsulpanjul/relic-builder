import type { Metadata } from "next";
import { Chivo, Didact_Gothic, Heebo } from "next/font/google";
import "./globals.css";
import Providers from "../../providers/providers";
import MenuNavbar from "@/src/components/navbar/menu.navbar";

const heebo = Heebo({
  variable: "--font-heebo",
  subsets: ["latin"],
  display: "swap",
});

const didactGothic = Didact_Gothic({
  variable: "--font-didact",
  subsets: ["latin"],
  display: "swap",
  weight: ["400"],
});

const chivo = Chivo({
  variable: "--font-chivo",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Relic Builder",
  description: "Relic builder cihuyy",
  icons: {
    icon: "/1001.webp",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${heebo.variable} ${didactGothic.variable} ${chivo.variable} h-full antialiased`}
    >
      <body className="bg-[url(/bg.png)] bg-fixed bg-cover bg-center">
        <Providers>
          <MenuNavbar />
          {children}
        </Providers>
      </body>
    </html>
  );
}
