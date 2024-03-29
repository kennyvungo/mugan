import React from 'react'
import Product from '@/components/product';
import Footer from '@/components/footer';
const Works = () => {
  let prodNum = 36
  let prods = []
  for(let i = 1; i <= prodNum; i ++){
    prods.push(i)
  }
  return (
    <>
      <span className="h-custom2"></span>
      <div className="h-100 w-screen items-center justify-center flex flex-col">
        <div className="grid w-3/5 mt-custom flex-wrap items-start grid-cols-1 lg:grid-cols-3 md:grid-cols-2 portfolio gap-4 pb-28 overflow-auto">
          {prods.map((prod) => (
            <Product key={prod} prodNum={prod}/>
          ))}
        </div>
        <Footer/>
      </div>
    </>
  );
}

export default Works