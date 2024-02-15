import React from 'react'
import Image from 'next/image'
const Card = ({image}:{image:any}) => {
  return (
    <>
    <div className='mb-vh-bottom'>
        <Image src={image} alt="panel"></Image>
    </div>
    </>
  )
}

export default Card