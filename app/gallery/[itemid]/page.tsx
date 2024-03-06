import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Thumb from '@/components/thumb'
import { allItems } from '@/app/globals'
import Info from '@/components/info'

const Page = ({params}: {params:{itemid:string}}) => {
  const item = allItems[Number(params.itemid) - 1]
  return (
    <div className='w-screen flex flex-row justify-center h-screen'>
      <div className="w-4/5 flex flex-row justify-center sm:w-4/5">
          <Thumb itemid={params.itemid} item={item} numThumbs={Number(item.numThumbs)} />
          {/* <Info item={item}/> */}
      </div>
    </div>
  )
}

export default Page