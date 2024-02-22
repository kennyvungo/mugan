import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "../components/header";
import Modal from "@/components/modal";
import Footer from "@/components/footer";
import '@fontsource/amiko'
import {Suspense} from 'react';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "unumcornu",
  description: "unumcornu ceramics website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex flex-col h-screen items-center font-sans text-[#3B3B3B]">
          <Suspense>
            <Modal />
          </Suspense>
          <Header />
          <main className="">{children}</main>
        </div>
      </body>
    </html>
  );
}
