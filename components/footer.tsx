import React from 'react'

const Footer = () => {
  return (
    <div className="flex flex-row w-3/5 pb-14 items-center sm:ml-mobile sm:w-4/5 sm:pb-10">
      <div className="flex flex-row items-center justify-start w-1/5 text-xs ">
        UNUMCORNU 2024
      </div>
      <span className="w-3/5"></span>
      <a
        href="https://www.instagram.com/by_unumcornu"
        className="flex flex-row justify-end items-center w-1/5 underline text-xs cursor-pointer hover:text-gray-500 sm:mr-mobile"
      >
        INSTAGRAM
      </a>
    </div>
  );
}

export default Footer