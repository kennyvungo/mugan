import React from 'react'
import { create } from 'zustand'
import Image from 'next/image'
import Link from 'next/link'

interface imageState{
    featured : String,
    changeFeatured: (newImage:String) => void
}
const useStore = create<imageState>()((set) => ({
        featured: "",
        changeFeatured: (newImage) => set(() =>({featured:newImage})),
}))
const Thumb = ({itemid}:{itemid:String}) => {
  return (
    <div className="text-green-500 text-6xl mt-custom min-h-96 w-2/5 bg-slate-500">
      how many images GALLERY ITEM
      {itemid}
      <Image
        src={`/gallery/${itemid}.jpg`}
        width={400}
        height={400}
        alt={"primary image"}
      ></Image>
      <Image
        src={`/gallery/${itemid}.1.jpg`}
        width={200}
        height={200}
        alt={""}
      ></Image>
      <Image
        src={`/gallery/${itemid}.2.jpg`}
        width={200}
        height={200}
        alt={""}
      ></Image>
      {itemid !== "1" ? (
        <Link href={`/gallery/${String(Number(itemid) - 1)}`}>
          Previous item
        </Link>
      ) : null}
      {}
      {itemid !== "36" ? (
        <Link href={`/gallery/${String(Number(itemid) + 1)}`}>Next item</Link>
      ) : null}
    </div>
  );
}

export default Thumb