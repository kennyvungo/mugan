import React from 'react'

const Events = () => {
  return (
    <div className="mt-custom h-screen w-screen flex flex-col justify-center items-center ">
      <div className="h-full text-2xl flex flex-col w-3/5 justify-start items-center">
        <div className="flex flex-col items-center mb-6">
          UPCOMING EVENTS
          <div className="text-base italic mt-2 ">TO BE ANNOUNCED</div>
        </div>
        <div className="flex flex-col justify-center items-center">
          PREVIOUS EVENTS
          <div className="italic text-base mt-2">ART AND FOOD FESTIVAL — 12/02/2023</div>
        <div className='italic text-base mb-4'>STONESTOWN GALLERIA, SAN FRANCISCO</div>
          <div className="italic text-base mt-2">QUEER ART FAIRE — 11/12/2023</div>
          <div className='italic text-base mb-4'>
            LAKESIDE LANDING, SAN FRANCISCO
          </div>
        </div>
      </div>
    </div>
  );
}

export default Events