import React from 'react'
import Product from '@/components/product';
const Works = () => {
  return (
    <>
    <span className='h-custom'></span>
    <div className="h-screen w-screen items-center justify-center flex flex-col">
      <div className="grid w-2/4 flex-wrap items-start grid-cols-1 lg:grid-cols-3 md:grid-cols-2 portfolio gap-8 pb-28 overflow-auto">
        <Product/>
        <Product/>
        <Product/>
        <Product/>
        <Product/>
        <Product/>
        <Product/>
        <Product/>
        <Product/>
        <Product/>
        <Product/>
        <Product/>
        <Product/>
        <Product/>
        <Product/>
      </div>
    </div>
    </>
  );
}

export default Works