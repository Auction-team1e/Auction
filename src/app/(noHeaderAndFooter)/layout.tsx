import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "react-toastify/dist/ReactToastify.css";
import CarProvider from "@/context/DataContext";
import { MainLogo } from "@/svgs/TabLogo";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Luxury Car Auction",
  icons: `/${MainLogo}`,
};

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <CarProvider>
      <html lang="en">
        <body className={inter.className}>{children}</body>
      </html>
    </CarProvider>
  );
};
export default RootLayout;
