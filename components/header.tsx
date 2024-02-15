"use client";
import React from "react";
import Image from "next/image";
import logo from "../public/logo.png";
import Link from "next/link";
import { CiInstagram } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa6";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();
  return (
    <div className="flex flex-row items-center bg-white h-1/6 text-black font-sans w-screen bg-opacity-75">
      <div className="flex flex-row  w-1/5 justify-center">
        <div className={pathname == "/" ? "underline mr-10" : "mr-10"}>
          <Link href="/">HOME</Link>
        </div>
        <div className={pathname == "/portfolio" ? "underline" : ""}>
          <Link href="/portfolio">PORTFOLIO</Link>
        </div>
      </div>
      <div className="w-3/5 flex flex-row justify-center ">
        <Link href="/">
          <Image src={logo} alt="logo" width="64" height="64" />
        </Link>
      </div>
      <div className="flex flex-row w-1/5">
        <span className="w-2/4"> </span>
        <Link
          href="https://www.instagram.com/by_unumcornu/"
          className="flex flex-row justify-center text-2xl w-2/4"
        >
          <FaInstagram />
        </Link>
      </div>
    </div>
  );
}
