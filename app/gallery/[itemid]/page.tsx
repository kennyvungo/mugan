import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
const Page = ({params}:{params:{itemid:string}}) => {
  return (
    <div className='text-green-500 text-6xl mt-custom min-h-96 w-3/5 bg-slate-500' >
        GALLERY ITEM
        {params.itemid}
        <Image src={`/gallery/${params.itemid}.jpg`} width={300} height={300} alt={"adfadf"}></Image>
        <Link href={`/gallery/${String(Number(params.itemid) - 1)}`}>
            Previous item
        </Link>
        <Link href={`/gallery/${String(Number(params.itemid) + 1)}`}>
            Next item
        </Link>
    </div>
  )
}

export default Page