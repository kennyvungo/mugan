import React from 'react'
import { Item } from '@/app/globals';
const Info = ({item}:{item:Item}) => {
  return (
    <div className="w-1/5 mt-custom items-start flex flex-col h-3/5 text-2l">
      <div className='h-2/5 flex flex-col justify-between'>
        <div>Clay Body: {item.material}</div>
        <div>Glazes: {item.glaze}</div>
        <div>{item.method}</div>
      </div>
      <div className='h-1/5 flex flex-col justify-start mt-16'>
        <div>{item.year}</div>
      </div>
    </div>
  );
}

export default Info