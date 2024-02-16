import React from 'react'
import Link from 'next/link'
import logo from '../public/logo.png'
import Image from 'next/image'
import cup from '../public/1.jpg';
const Product = ({prodNum}:{prodNum:any}) => {
  return (
    <figure className='my-auto'>
        <span className="relative block transition duration-500 ease-in-out transform rounded">
            <Image width={300} height={300} className="relative block object-contain object-center w-full h-full" loading="lazy" alt="logo" src={`/${prodNum}.jpg`}></Image>
        </span>
    </figure>
  )
}

export default Product