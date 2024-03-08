'use client'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { Item } from '@/app/globals'
interface ThumbProps{
  itemid: string;
  numThumbs: number;
  item:Item
}

const Thumb = ({itemid,numThumbs,item}:ThumbProps) => {
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
    <>
      <div className="mt-custom min-h-96 h-full w-full flex flex-col sm:hidden">
        <div className="flex flex-row">
          <div className="flex flex-col h-96 mr-5 w-1/3 items-end sm:w-1/4">
            {numThumbs > 1 ? (
              <Image
                className={`${
                  focused == 0
                    ? "filter grayscale brightness-75 mb-5"
                    : "mb-5 hover:brightness-75 cursor-pointer"
                }`}
                src={`https://dnm89pmv3oqa8.cloudfront.net/${itemid}.jpg`}
                width={150}
                height={150}
                alt={"primary image"}
                onClick={() => handleChangeImage(itemid, 0)}
              ></Image>
            ) : (
              <Image
                className="invisible mb-5"
                src={`https://dnm89pmv3oqa8.cloudfront.net/${itemid}.jpg`}
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
                    ? "filter grayscale brightness-75 mb-5"
                    : "mb-5 hover:brightness-75 cursor-pointer"
                }`}
                src={`https://dnm89pmv3oqa8.cloudfront.net/${thumb1}.jpg`}
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
                    ? "filter grayscale brightness-75 mb-5"
                    : "mb-5 hover:brightness-75 cursor-pointer"
                }`}
                src={`https://dnm89pmv3oqa8.cloudfront.net/${thumb2}.jpg`}
                width={150}
                height={150}
                alt={""}
                onClick={() => handleChangeImage(thumb2, 2)}
              ></Image>
            ) : null}
            {/* {numThumbs > 3 ? (
              <Image
                className={`${
                  focused == 3
                    ? "filter grayscale brightness-75 mb-5"
                    : "mb-5 hover:brightness-75 cursor-pointer"
                }`}
                src={`https://dnm89pmv3oqa8.cloudfront.net/${thumb3}.jpg`}
                width={150}
                height={150}
                alt={""}
                onClick={() => handleChangeImage(thumb3, 3)}
              ></Image>
            ) : null} */}
          </div>
          <div className="w-3/5 mr-5 sm:w-4/5">
            <Image
              src={`https://dnm89pmv3oqa8.cloudfront.net/${featured}.jpg`}
              width={900}
              height={900}
              alt={"primary image"}
            ></Image>
            <div className="text-2l flex flex-row justify-between mt-5">
              <Link
                href={`/gallery/${String(Number(itemid) - 1)}`}
                className={itemid !== "1" ? "hover:text-gray-400" : "invisible"}
              >
                previous
              </Link>
              {itemid !== "36" ? (
                <Link
                  href={`/gallery/${String(Number(itemid) + 1)}`}
                  className="hover:text-gray-500"
                >
                  next
                </Link>
              ) : null}
            </div>
          </div>
          <div className="w-1/3 flex flex-col h-4/5 text-2l sm:text-xs sm:w-2/5 justify-start">
            <div className="h-1/5 flex flex-col justify-start md:mt-10">
              <div>clay body: {item.material}</div>
              <div>glazes: {item.glaze}</div>
              <div>{item.method}</div>
              <div className="italic mt-10">{item.year}</div>
            </div>
          </div>
        </div>
      </div>
      {/* mobile layout */}
      <div className="md:hidden w-4/5 mt-custom">
        <Image
          src={`https://dnm89pmv3oqa8.cloudfront.net/${featured}.jpg`}
          width={400}
          height={400}
          alt={"primary image"}
        ></Image>
        <div className="flex flex-row mt-3 justify-start">
          {numThumbs > 1 ? (
            <Image
              className={`${
                focused == 0
                  ? "filter grayscale brightness-75 mb-5 mr-3"
                  : "mb-5 mr-3 hover:brightness-75 cursor-pointer"
              }`}
              src={`https://dnm89pmv3oqa8.cloudfront.net/${itemid}.jpg`}
              width={75}
              height={75}
              alt={"primary image"}
              onClick={() => handleChangeImage(itemid, 0)}
            ></Image>
          ) : (
            <Image
              className="invisible mb-5"
              src={`https://dnm89pmv3oqa8.cloudfront.net/${itemid}.jpg`}
              width={75}
              height={75}
              alt={"primary image"}
              onClick={() => handleChangeImage(itemid, 0)}
            ></Image>
          )}
          {numThumbs > 1 ? (
            <Image
              className={`${
                focused == 1
                  ? "filter grayscale brightness-75 mb-5 mr-3"
                  : "mb-5 mr-3 hover:brightness-75 cursor-pointer"
              }`}
              src={`https://dnm89pmv3oqa8.cloudfront.net/${thumb1}.jpg`}
              width={75}
              height={75}
              alt={""}
              onClick={() => handleChangeImage(thumb1, 1)}
            ></Image>
          ) : null}
          {numThumbs > 2 ? (
            <Image
              className={`mb-5 mr-3${
                focused == 2
                  ? "filter grayscale brightness-75"
                  : "hover:brightness-75 cursor-pointer"
              }`}
              src={`https://dnm89pmv3oqa8.cloudfront.net/${thumb2}.jpg`}
              width={75}
              height={75}
              alt={""}
              onClick={() => handleChangeImage(thumb2, 2)}
            ></Image>
          ) : null}
          {numThumbs > 3 ? (
            <Image
              className={`${
                focused == 3
                  ? "filter grayscale brightness-75 mb-5"
                  : "mb-5 hover:brightness-75 cursor-pointer"
              }`}
              src={`https://dnm89pmv3oqa8.cloudfront.net/${thumb3}.jpg`}
              width={150}
              height={150}
              alt={""}
              onClick={() => handleChangeImage(thumb3, 3)}
            ></Image>
          ) : null}
        </div>
        <div className="flex flex-col justify-center items-center text-xs">
          <div>clay body: {item.material}</div>
          <div>glazes: {item.glaze}</div>
          <div>{item.method}</div>
          <div className="italic mt-10">{item.year}</div>
        </div>
        <div className="flex flex-row justify-between mt-10">
          <Link
            href={`/gallery/${String(Number(itemid) - 1)}`}
            className={itemid !== "1" ? "hover:text-gray-400" : "invisible"}
          >
            previous
          </Link>
          {itemid !== "36" ? (
            <Link
              href={`/gallery/${String(Number(itemid) + 1)}`}
              className="hover:text-gray-500"
            >
              next
            </Link>
          ) : null}
        </div>
      </div>
    </>
  );
}

export default Thumb