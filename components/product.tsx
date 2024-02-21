import React from 'react'
import Image from 'next/image'
import Link from 'next/link';
const Product = ({prodNum}:{prodNum:any}) => {
  return (
    <figure className="my-auto overflow-hidden">
      <span className="relative block transition duration-300 transform origin-center hover:scale-105">
        <Link href={`/gallery/${prodNum}`}>
        <Image
          width={300}
          height={300}
          className="relative block object-contain object-center w-full h-full"
          loading="lazy"
          alt="logo"
          src={`/gallery/${prodNum}.jpg`}
          ></Image>
          </Link>
      </span>
    </figure>
  );
}

export default Product