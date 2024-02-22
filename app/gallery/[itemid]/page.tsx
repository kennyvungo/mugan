import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Thumb from '@/components/thumb'

const Page = ({params}: {params:{itemid:string}}) => {
  return (
    <div className='text-green-500 text-6xl mt-custom min-h-96 w-3/5 bg-slate-500' >
        how many images

        GALLERY ITEM
        {params.itemid}
        <Image src={`/gallery/${params.itemid}.jpg`} width={200} height={200} alt={"primary image"}></Image>
        <Image src={`/gallery/${params.itemid}.1.jpg`} width={200} height={200} alt={""}></Image>
        {params.itemid !== "1" ? 
        <Link href={`/gallery/${String(Number(params.itemid) - 1)}`}>
            Previous item
        </Link> : null}
        {}
        {params.itemid !== "36" ?
            <Link href={`/gallery/${String(Number(params.itemid) + 1)}`}>
            Next item
        </Link> : null}
    </div>
  )
}

export default Page