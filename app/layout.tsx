import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "../components/header";
import Home from "./page";
import Modal from "@/components/modal";
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
        <div className="flex flex-col h-screen items-center text-[#3B3B3B]">
          <Suspense>
            <Modal />
          </Suspense>
          <Header />
          {children}
        </div>
      </body>
    </html>
  );
}
