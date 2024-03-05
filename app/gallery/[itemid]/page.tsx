import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Thumb from '@/components/thumb'
import { allItems } from '@/app/globals'

const Page = ({params}: {params:{itemid:string}}) => {
  const item = allItems[Number(params.itemid) - 1]
  return (
    <div className="w-screen items-center justify-center flex flex-row">
        <Thumb itemid={params.itemid} numThumbs={Number(item.numThumbs)} />
        <div className='w-1/5 bg-pink-500 min-h-96 flex flex-col justify-around items-center'>
          <div>
            {item.material}
          </div>
          <div>
            {item.descrip}
          </div>
          <div>
            {item.glaze}
          </div>
        </div>
    </div>
  )
}

export default Page