import React from 'react'
import Product from '@/components/product';
const Works = () => {
  return (
    <>
      <span className="h-custom"></span>
      <div className="h-screen grid flex-wrap items-start grid-cols-1 lg:grid-cols-3 md:grid-cols-2 portfolio gap-8 pb-28 overflow-auto">
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
      </div>
    </>
  );
}

export default Works