import React from 'react'
import Image from 'next/image'
const Card = ({imageNum}:{imageNum:any}) => {
  return (
    <>
      <div className="sm:mb-mobile md:mb-vh-bottom pointer-events-none">
        <Image
          src={`/panels/panel${imageNum}.png`}
          alt="panel"
          width={1000}
          height={1000}
        />
      </div>
    </>
  );
}

export default Card