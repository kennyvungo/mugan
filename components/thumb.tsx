'use client'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
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
    <div className="mt-custom min-h-96 h-full w-4/5 flex flex-col mr-5">
      <div className="flex flex-row">
        <div className="flex flex-col h-96 mr-5">
          {numThumbs > 1 ? (
            <Image
              className={`${
                focused == 0
                  ? "filter grayscale brightness-75 mb-5"
                  : "mb-5 hover:brightness-75 cursor-pointer"
              }`}
              src={`/gallery/${itemid}.jpg`}
              width={150}
              height={150}
              alt={"primary image"}
              onClick={() => handleChangeImage(itemid, 0)}
            ></Image>
          ) : (
            <Image
              className="invisible mb-5 mr-5"
              src={`/gallery/${itemid}.jpg`}
              width={150}
              height={150}
              alt={"primary image"}
              onClick={() => handleChangeImage(itemid, 0)}
            ></Image>
          )}
          {numThumbs > 1 ? (
            <Image
              className={`${
                focused == 1
                  ? "filter grayscale brightness-75 mb-5 mr-5"
                  : "mb-5 mr-5 hover:brightness-75 cursor-pointer"
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
                focused == 2
                  ? "filter grayscale brightness-75 mb-5 mr-5"
                  : "mb-5 mr-5 hover:brightness-75 cursor-pointer"
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
                focused == 3
                  ? "filter grayscale brightness-75 mb-5 mr-5"
                  : "mb-5 mr-5 hover:brightness-75 cursor-pointer"
              }`}
              src={`/gallery/${thumb3}.jpg`}
              width={150}
              height={150}
              alt={""}
              onClick={() => handleChangeImage(thumb3, 3)}
            ></Image>
          ) : null}
        </div>
        <div>
          <Image
            src={`/gallery/${featured}.jpg`}
            width={600}
            height={600}
            alt={"primary image"}
          ></Image>
          <div className="text-2l flex flex-row justify-between mt-10">
            <Link
              href={`/gallery/${String(Number(itemid) - 1)}`}
              className={itemid !== "1" ? "hover:text-gray-400" : "invisible"}
            >
              previous item
            </Link>
            {itemid !== "36" ? (
              <Link
                href={`/gallery/${String(Number(itemid) + 1)}`}
                className="hover:text-gray-500"
              >
                next item
              </Link>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Thumb