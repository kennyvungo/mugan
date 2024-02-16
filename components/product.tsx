import React from 'react'
import Link from 'next/link'
import logo from '../public/logo.png'
import Image from 'next/image'
import cup from '../public/1.jpg';
const Product = ({prodNum}:{prodNum:any}) => {
  return (
    <figure className="my-auto overflow-hidden">
      <span className="relative block transition duration-300 transform origin-center hover:scale-105">
        <Image
          width={300}
          height={300}
          className="relative block object-contain object-center w-full h-full"
          loading="lazy"
          alt="logo"
          src={`/gallery/${prodNum}.jpg`}
        ></Image>
      </span>
    </figure>
  );
}

export default Product