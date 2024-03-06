import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Thumb from '@/components/thumb'
import { allItems } from '@/app/globals'
import Info from '@/components/info'

const Page = ({params}: {params:{itemid:string}}) => {
  const item = allItems[Number(params.itemid) - 1]
  return (
    <div className='w-screen flex flex-row justify-center h-4/5'>
      <div className="w-2/4 flex flex-row justify-center">
          <Thumb itemid={params.itemid} numThumbs={Number(item.numThumbs)} />
          <Info item={item}/>
      </div>
    </div>
  )
}

export default Page