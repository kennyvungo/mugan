'use client'
import React from 'react'
import { create } from 'zustand'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import item from '@/app/gallery/item/item'
interface ThumbProps{
  itemid: string;
  numThumbs: number;
}

const Thumb = ({itemid,numThumbs}:ThumbProps) => {
  const [featured, setFeatured] = useState(itemid);
  const [thumb1, setThumb1] = useState(`${itemid}.1`)
  const [thumb2, setThumb2] = useState(`${itemid}.2`);
  const [thumb3, setThumb3] = useState(`${itemid}.3`);
  const [focused,setFocused] = useState(0)
  const handleChangeImage = (image:string,num:number) => {
    setFeatured(image)
    setFocused(num)
  };

  return (
    <div className="text-green-500 text-6xl mt-custom min-h-60 w-4/5 bg-slate-500 flex flex-col">
      <div className="flex flex-row">
        <div className="flex flex-col justify-center">
          {numThumbs > 1 ? (

            <Image
            className={`${
              focused == 0 ? "filter grayscale brightness-50" : ""
            }`}
            src={`/gallery/${itemid}.jpg`}
            width={150}
            height={150}
            alt={"primary image"}
            onClick={() => handleChangeImage(itemid, 0)}
            ></Image>
            ): null}
          {numThumbs > 1 ? (
            <Image
              className={`${
                focused == 1 ? "filter grayscale brightness-50" : ""
              }`}
              src={`/gallery/${thumb1}.jpg`}
              width={150}
              height={150}
              alt={""}
              onClick={() => handleChangeImage(thumb1, 1)}
            ></Image>
          ) : null}
          {numThumbs > 2 ? (
            <Image
              className={`${
                focused == 2 ? "filter grayscale brightness-50" : ""
              }`}
              src={`/gallery/${thumb2}.jpg`}
              width={150}
              height={150}
              alt={""}
              onClick={() => handleChangeImage(thumb2, 2)}
            ></Image>
          ) : null}
          {numThumbs > 3 ? (
            <Image
              className={`${
                focused == 3 ? "filter grayscale brightness-50" : ""
              }`}
              src={`/gallery/${thumb3}.jpg`}
              width={150}
              height={150}
              alt={""}
              onClick={() => handleChangeImage(thumb3, 3)}
            ></Image>
          ) : null}
        </div>
        <Image
          src={`/gallery/${featured}.jpg`}
          width={600}
          height={600}
          alt={"primary image"}
        ></Image>
      </div>
      {itemid !== "1" ? (
        <Link href={`/gallery/${String(Number(itemid) - 1)}`}>
          Previous item
        </Link>
      ) : null}
      {itemid !== "36" ? (
        <Link href={`/gallery/${String(Number(itemid) + 1)}`}>Next item</Link>
      ) : null}
    </div>
  );
}

export default Thumb