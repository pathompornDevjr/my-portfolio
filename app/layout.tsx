import type { Metadata } from "next";
import { Noto_Sans_Thai } from "next/font/google";
import "./globals.css";
import Navbar from "@/layouts/nav";
import Footer from "@/layouts/footer";

const notoThai = Noto_Sans_Thai({
  weight: ["400", "800"],
  subsets: ["thai"],
});

export const metadata: Metadata = {
  title: "Pondfolio",
  description: "my portfolio website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${notoThai.className} antialiased`}>
        <div className="w-full flex flex-col">
          <Navbar />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
