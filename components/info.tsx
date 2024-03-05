import React from 'react'

const Info = ({itemid}:{itemid:string}) => {
  return (
    <div className="w-1/5 items-center justify-center flex flex-row bg-pink-500 ">
      <div className="min-h-96 flex flex-col justify-around items-center">
        <div>Clay Body:</div>
        <div>Glazes:</div>
        <div>wheel-thrown</div>
        <div>2023</div>
      </div>
    </div>
  );
}

export default Info