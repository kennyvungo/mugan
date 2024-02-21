import React from 'react'

const Footer = () => {
  return (
    <div className="flex flex-row w-full items-center">
        <div className="flex flex-row justify-end w-1/5 text-xs sm:ml-mobile ">unumcornu 2024</div>
      <span className="w-3/5"></span>
      <a
        href="https://www.instagram.com/by_unumcornu"
        className="flex flex-row justify-start items-center h-custom w-1/5 underline text-xs cursor-pointer hover:text-gray-500"
      >
        Instagram
      </a>
    </div>
  );
}

export default Footer