import React from 'react'
import { Button } from '../ui/button'
import Image from 'next/image'

export default function Intro() {
  return (
    <>
    <div className='mt-[2rem] grid h-[40vh] sm:h-[70vh] grid-cols-1 sm:grid-cols-2 grid-rows-1'>

    <div className='flex flex-col w-[100%]   col-start-1 col-end-2'>
      {/* title */}
    <div className='ml-[2rem]'>
    <h1 className='font-extrabold text-[2.5rem] sm:text-[3rem] lg:text-[4rem] xl:text-[5rem] text-orange-500 '>
    Find Me
    </h1>
    <h1 className='font-extrabold text-[2.5rem] sm:text-[3rem] lg:text-[4rem] xl:text-[5rem] text-orange-500'>
      Work
    </h1>
    </div> 

    {/* subtitle  */}
    <div className='mt-[1rem]   text-[1rem] md:text-[1.5rem] lg:text-[2rem] text-black ml-[2rem]'>
    <p>Connecting You with Your Next Career Move</p>
    </div>
    <div className='ml-[2rem]  mt-[2rem]'>
      <Button className='p-[0.8rem] sm:p-[1.3rem] lg:p-[1.6rem] rounded-lg text-[1rem] md:text-[1.5rem] bg-orange-500 hover:bg-orange-600'>
      Get Started
      </Button>
    </div>
    </div>

    <div className=' hidden sm:block sm:col-start-2 sm:col-end-3'>
   <Image src={"/Images/Talent.jpg"} height={700} width={700} className='' alt='nope'></Image>
    </div>
    </div>

    </>
  )
}
