import React from 'react'
import { FaPlay } from "react-icons/fa";
import { IoMdInformationCircleOutline } from "react-icons/io";


export const TitleBackground = ({title, overview}) => {
  return (
    <div className='absolute top-1/2 left-10 text-white'>
        <div className = "w-[40em]">
            <div className='flex items-center'>
        <img src="../public/Netflix-logo-on-transparent-background-PNG.png" className='ml-2 mb-1' width={45} alt="" srcset="" />
        <span className='text-3xl ml-2 tracking-widest'>SPECIAL</span>
        </div>
        <h1 className='text-5xl text-white mb-4'>{title}</h1>
        <p>{overview}</p>
        <div className='flex mt-4'>
        <button className='bg-white text-black px-6 py-2 rounded-md flex items-center'><FaPlay size={20}/> <span className='ml-2'> Play</span></button>
        <button className='ml-2 bg-gray-800 text-white opacity-50 px-6 py-2 rounded-md flex items-center'><IoMdInformationCircleOutline size={25}/>
            <span className='ml-2'>More Info</span></button>
        </div>
        </div>
    </div>
  )
}
