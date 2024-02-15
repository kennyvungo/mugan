import React from 'react'
import Image from 'next/image'
const Card = ({image}:{image:any}) => {
  return (
    <>
    <div className='mb-8'>
        <Image src={image} alt="panel"></Image>
    </div>
    </>
  )
}

export default Card