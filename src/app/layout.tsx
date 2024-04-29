import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Footer } from "@/components/Footer/Footer";
import CarProvider from "context/DataContext";
import { Header } from "@/components/Header/Header";
import "react-toastify/dist/ReactToastify.css";
import { MainLogo } from "svgs/TabLogo";

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
        <body className={inter.className}>
          <Header />
          {children}
          <Footer />
        </body>
      </html>
    </CarProvider>
  );
};
export default RootLayout;
