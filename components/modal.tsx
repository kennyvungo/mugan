"use client";
import { useSearchParams, usePathname } from "next/navigation";
import Link from "next/link";
import { useEffect } from "react";
import { IoMdClose } from "react-icons/io";

function Modal() {
  const searchParams = useSearchParams();
  const modal = searchParams.get("modal");
  const pathname = usePathname();
  useEffect(() => {
    // this will disable the scroll if our back page was scrollable
    if(modal){
        document.body.classList.add("overflow-hidden");
    }
    // when you close the modal, remove this class
    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [modal]);

  return (
    <>
      {modal && (
        <div className="fixed top-0 w-full min-h-full bg-black bg-opacity-50 z-50 backdrop-blur flex justify-center items-center overscroll-hidden font-sans text-2xl">
          <div className="flex flex-col items-center justify-around min-h-96 text-white">
            <Link href={"/"} className="">
              HOME
            </Link>
            <Link href={"/gallery"} className="">
              GALLERY
            </Link>
            <Link href={"/contact"} className="">
              CONTACT
            </Link>
            <Link href="https://www.instagram.com/by_unumcornu" className="">
              INSTAGRAM
            </Link>
            <Link href={pathname} className="">
              <IoMdClose />
            </Link>
          </div>
        </div>
      )}
    </>
  );
}

export default Modal;
