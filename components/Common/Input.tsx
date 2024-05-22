"use client"

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Search } from 'lucide-react';

export default function Input() {

    const [showSearchBar,setSearchBar]=useState<boolean>(true)
    const variants = {
        show: {
          opacity: 1,
          x: [50,0],
          transition: {
           
            duration: 0.3,
          },
        },
        hide: {
          opacity: 0,
          x:[0,50],
          transition:{
            
              duration:0.6,
          }
        },
      };
  return (
    <>
    
    <div  className='sm:mr-[2rem] md:mr-[3rem] xl:mr-[5rem]'>
    <motion.input
        variants={variants}
        autoFocus={true}
        animate={showSearchBar?"show":"hide"}
          type="text" 
          className="w-full  border-[1px] border-black rounded-full    bg-white flex  p-2 text-black outline-1"
          placeholder="Search"
        ></motion.input>
        </div>
        <div onClick={()=>setSearchBar((s)=>!s)}  className='mr-[1rem] sm:mr-[2rem] md:mr-[3rem] xl:mr-[5rem]'>
        <Search className='hover:cursor-pointer' />
        </div>
        
    </>
  )
}
