import React from 'react'
import Image from 'next/image'
import logo from '../public/logo.png'
import Link from 'next/link'
import { CiInstagram } from "react-icons/ci";

export default function Header(){
  return (
    <div className="flex flex-row items-center bg-white h-24 text-black font-sans">
      <div className="flex flex-row  w-1/5 justify-around">
        <div >
          <Link href="/">HOME</Link>
        </div>
        <div>
          <Link href="/works">WORK</Link>
        </div>
      </div>
      <div className='w-3/5 flex flex-row justify-center '>
        <Link href="/">
          <Image src={logo} alt="logo" width="64" height="64"/>
        </Link>
      </div>
      <div className='w-1/5 justify-center'>
        <Link href="https://www.instagram.com/by_unumcornu/" className='flex flex-row justify-center text-4xl'><CiInstagram/></Link>
      </div>
    </div>
  );
}

