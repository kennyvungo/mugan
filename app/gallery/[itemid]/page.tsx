import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Thumb from '@/components/thumb'

const Page = ({params}: {params:{itemid:string}}) => {
  return (
    <div className="w-screen items-center justify-center flex flex-row">
        <Thumb itemid={params.itemid} />
        <div className='w-1/5 bg-pink-500 min-h-96'>
            Text 
            info about
            
        </div>
    </div>
  )
}

export default Page