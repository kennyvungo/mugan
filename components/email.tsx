'use client';
import { useForm } from 'react-hook-form';
import { sendEmail } from '@/app/globals';
import { useState } from 'react';
import Link from 'next/link';
export type FormData = {
  name: string;
  email: string;
  message: string;
};
const Email = () => {
const [showForm,setshowForm] = useState(true)
  const { register, handleSubmit,reset,formState } = useForm<FormData>();
  const{isSubmitting} = formState
  function onSubmit(data: FormData) {
        sendEmail(data);
        reset()
        setshowForm(false)
  }
  return (
    <>
    {showForm ?
        <form className="w-1/2 sm:w-4/5" data-cy="email-form" onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-5">
        <label
        className="mb-3 block text-base font-medium text-black"
        >
        NAME
        </label>
        <input
        type="text"
        placeholder="Full Name"
        className="w-full rounded-md border border-gray-300 bg-white py-3 px-6 text-base font-medium text-gray-700 outline-none focus:border-red-700 focus:shadow-md"
        data-cy="name-input"
        {...register("name", { required: true })}
        />
        </div>
        <div className="mb-5">
        <label
        className="mb-3 block text-base font-medium text-black"
        >
        EMAIL ADDRESS
        </label>
        <input
        type="email"
        placeholder="example@gmail.com"
        data-cy="email-input"
        className="w-full rounded-md border border-gray-300 bg-white py-3 px-6 text-base font-medium text-gray-700 outline-none focus:border-red-700 focus:shadow-md"
        {...register("email", { required: true })}
        />
        </div>
        <div className="mb-5">
        <label
        className="mb-3 block text-base font-medium text-black"
        >
        MESSAGE
        </label>
        <textarea
        rows={4}
        placeholder="Type your message"
        data-cy="message-input"
        className="w-full resize-none rounded-md border border-gray-300 bg-white py-3 px-6 text-base font-medium text-gray-700 outline-none focus:border-red-700 focus:shadow-md"
        {...register("message", { required: true })}
        ></textarea>
        </div>
        <div>
        <button className="hover:bg-gray-600 rounded-lg py-1 pt-2 px-4 text-white bg-[#3B3B3B] font-semibold outline-none" data-cy="submit-button">
            SUBMIT
        </button>
        </div>
        </form>
        : <div className='h-3/5 justify-around text-l flex flex-col items-center font-sans'>
            <div className='justify-center flex flex-col items-center' data-cy="thanks-alert">
                <div className='mb-4'>
                THANK YOU! 
                </div>
                we will reach out as soon as we can
            </div>
            <Link href="/" className='hover:text-gray-500'>BACK TO HOME</Link>
        </div>
    }
    </>
        );
    };
    
    export default Email;