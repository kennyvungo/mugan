import React from 'react'
import Link from 'next/link'
import logo from '../public/logo.png'
import Image from 'next/image'
const Product = () => {
  return (
    <figure className='bg-slate-500 my-auto'>
        <Link href="/">
        <span className="relative block transition duration-500 ease-in-out transform rounded hover:scale-105">
            <Image width={280} className="relative block object-contain object-center w-full h-full" loading="eager" alt="logo" src={logo}></Image>
        </span>
        </Link>
    </figure>
  )
}

export default Product