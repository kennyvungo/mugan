import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Thumb from '@/components/thumb'
import { allItems } from '@/app/globals'
import Info from '@/components/info'

const Page = ({params}: {params:{itemid:string}}) => {
  const item = allItems[Number(params.itemid) - 1]
  return (
    <div className='w-screen flex flex-row justify-center h-screen bg-orange-400'>
      <div className="w-4/5 flex flex-row bg-blue-400 justify-center">
          <Thumb itemid={params.itemid} numThumbs={Number(item.numThumbs)} />
          <Info itemid={params.itemid} />
      </div>
    </div>
  )
}

export default Page