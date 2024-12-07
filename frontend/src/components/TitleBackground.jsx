import React from 'react'
import { FaPlay } from "react-icons/fa";
import { IoMdInformationCircleOutline } from "react-icons/io";


export const TitleBackground = ({title, overview}) => {
  return (
    <div className='absolute top-1/2 left-10 z-50 text-white title-background'>
        <div className = "p-4">
            <div className='flex items-center'>
        <div classname = "main">
        <img src="../public/Netflix-logo-on-transparent-background-PNG.png" className='ml-2 mb-1 w-[2em]' alt="" srcset="" />
        </div>
        <span className='text-3xl ml-2 tracking-widest special'>SPECIAL</span>
        </div>
        <h1 className='text-5xl text-white mb-4 title'>{title}</h1>
        <p className= 'overview'>{overview}</p>
        <div className='flex mt-4'>
        <button className='bg-white text-black px-6 py-2 rounded-md flex items-center play'><FaPlay/> <span className='ml-2'> Play</span></button>
        <button className='ml-2 bg-gray-800 text-white opacity-50 px-6 py-2 rounded-md flex items-center play'><IoMdInformationCircleOutline/>
            <span className='ml-2'>More Info</span></button>
        </div>
        </div>
    </div>
  )
}
