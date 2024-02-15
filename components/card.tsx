import React from 'react'
import Image from 'next/image'
const Card = ({image}:{image:any}) => {
  return (
    <>
    <div className='h-96 my-8'>
        <Image src={image} alt="panel"></Image>
    </div>
    <div className='h-12'>
    </div>
    </>
  )
}

export default Card