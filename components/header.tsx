"use client";
import React from "react";
import Image from "next/image";
import logo from "../public/logo.png";
import Link from "next/link";
import { FaInstagram } from "react-icons/fa6";
import { usePathname } from "next/navigation";
import { VscKebabVertical } from "react-icons/vsc";
import { useState } from "react";
export default function Header() {
  const pathname = usePathname();

  return (
    <div className="flex flex-row fixed items-center bg-white h-custom text-black font-sans w-screen z-10 min-h-24 sm:min-h-10">
      <div className="flex flex-row  w-1/5 min-w-min justify-around sm:hidden">
        <div className={pathname == "/" ? "underline px-2" : "px-2"}>
          <Link href="/">HOME</Link>
        </div>
        <div className={pathname == "/gallery" ? "underline" : ""}>
          <Link href="/gallery">GALLERY</Link>
        </div>
      </div>
      <div className="md:hidden w-1/5 flex flex-row justify-center items-center font-extrabold">
        <Link href="?modal=true">
          <VscKebabVertical style={{ fill: "black" }} />
        </Link>
      </div>
      <div className="w-3/5 flex flex-row justify-center ">
        <Link href="/">
          <Image src={logo} alt="logo" width="64" height="64" />
        </Link>
      </div>
      <div className="flex flex-row w-1/5">
        <span className="w-2/4 sm:w-1/6"> </span>
        <Link
          href="https://www.instagram.com/by_unumcornu/"
          className="flex flex-row justify-center text-2xl w-2/4 sm:text-lg"
        >
          <FaInstagram />
        </Link>
      </div>
    </div>
  );
}
