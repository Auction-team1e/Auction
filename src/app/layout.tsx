import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import { Footer } from "@/components/Footer/Footer";
import { Stack } from "@mui/material";
import CarProvider from "@/context/DataContext";
import { Header } from "@/components/Header/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Luxury Car Auction",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <CarProvider>
      <html lang="en">
        <body className={inter.className}>
          <Header />
          <Stack>{children}</Stack>
          <Footer />
        </body>
      </html>
    </CarProvider>
  );
}
