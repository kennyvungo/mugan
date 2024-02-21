import React from 'react'

const Footer = () => {
  return (
    <div className="flex flex-row w-full items-center font-sans text-[#3B3B3B]">
      <div className="flex flex-row justify-end w-1/5 text-xs ">
        UNUMCORNU 2024
      </div>
      <span className="w-3/5"></span>
      <a
        href="https://www.instagram.com/by_unumcornu"
        className="flex flex-row justify-start items-center h-custom w-1/5 underline text-xs cursor-pointer hover:text-gray-500"
      >
        INSTAGRAM
      </a>
    </div>
  );
}

export default Footer