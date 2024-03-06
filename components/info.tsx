import React from 'react'
import { Item } from '@/app/globals';
const Info = ({item}:{item:Item}) => {
  return (
    <div className="w-1/4 mt-custom flex flex-col h-full text-2l justify-start">
      <div className='h-1/5 flex flex-col justify-start mt-10'>
        <div>clay body: {item.material}</div>
        <div>glazes: {item.glaze}</div>
        <div>{item.method}</div>
      </div>
      <div className='h-1/5 flex flex-col justify-start'>
        <div className='italic'>{item.year}</div>
      </div>
    </div>
  );
}

export default Info