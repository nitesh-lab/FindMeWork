import SkillSet from '@/components/Common/SkillSet'
import Image from 'next/image'
import React from 'react'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu"
import { MessageCircle, Text } from 'lucide-react'
import SearchBar from '@/components/Common/SearchBar'
  

export default function WorkProfileList() {
  return (
   <>
   <p className='text-center  md:text-[3rem] font-bold my-[2rem]'>We had HandPicked Some Talented FreeLancers for You.</p>

<div className='my-[1rem] md:my-[3rem]'>
<SearchBar />
</div>
<div className='flex md:flex-row  gap-[1rem] flex-col md:flex-wrap'>
<div className="w-[95%] border-[1px] border-gray-300  mx-[2.5%] md:mx-[0.5%] md:w-[30%] bg-white p-2   sm:p-4 h-auto sm:h-64 rounded-2xl shadow-lg flex flex-col sm:flex-row gap-5 select-none">
    <div
    className="h-52 sm:h-full sm:w-72 rounded-xl bg-gray-100 bg-center bg-cover">
        <Image src={"/Images/Logo.png"} className='h-[100%] w-[100%]' width={48} height={48} alt='nope'></Image>
    </div>

    <div className="flex sm:flex-1 flex-col gap-2 p-1">
        <h1 className="text-lg sm:text-xl font-semibold  text-gray-600">
            Nitesh Semwal
        </h1>
        <p className="text-gray-500 text-sm sm:text-base line-clamp-3">
            Passionate Web Developer
        </p>
        <div className="flex gap-4 mt-auto">
        
        
        <DropdownMenu >
  <DropdownMenuTrigger className='flex items-center gap-1 sm:text-lg border
             border-gray-300 px-3 py-1 rounded-full hover:bg-gray-50
              transition-colors focus:bg-gray-100 focus:outline-none
               focus-visible:border-gray-500'>
           Skills  
  </DropdownMenuTrigger>
  <DropdownMenuContent side="top">
    <DropdownMenuItem>React</DropdownMenuItem>
    <DropdownMenuItem>Redux</DropdownMenuItem>
    <DropdownMenuItem>TypeScript</DropdownMenuItem>
  </DropdownMenuContent>
</DropdownMenu>

        
        
         <button
            className='flex items-center gap-1 sm:text-lg border border-gray-300 px-3 py-1 rounded-full hover:bg-gray-50 transition-colors focus:bg-gray-100 focus:outline-none focus-visible:border-gray-500'
        >
            $20/hr
        </button>

        
         <button
            className='ml-auto flex items-center gap-1 sm:text-lg border border-gray-300 px-3 py-1 rounded-full hover:bg-gray-50 transition-colors focus:bg-gray-100 focus:outline-none focus-visible:border-gray-500'
        >
            <span><MessageCircle/></span>
        </button>
        </div>
    </div>
</div>



</div>
   </>
  )
}
