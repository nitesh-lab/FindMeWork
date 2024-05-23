import React from 'react'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu"
import Image from 'next/image'
import { Button } from '../ui/button'
import Input from './Input'
import Link from 'next/link'



export default function NavBar() {
  return (
    <div className=' h-[6rem] mb-[0.5rem] sm:mb-[1rem] sm:h-[5rem] grid grid-rows-1 grid-cols-3 sm:grid-cols-2'>
       
        <div className='
        col-start-1 sm:col-end-2 col-end-3
         k ml-[0.5rem] sm:ml-[1rem] md:ml-[2rem] flex-wrap  
         flex sm:gap-[1rem] gap-[1rem] md:gap-[2rem] items-center'>  {/*Logo,Find Work,Find Talent */}

            <Image src={"/Images/Logo.png"} alt='nope' className='sm:w-[2rem] sm:h-[2rem]  w-[1.5rem] h-[1.5rem] md:w-[3rem] md:h-[3rem]' height={48} width={48}/>

            <DropdownMenu>
  <DropdownMenuTrigger asChild={true}>
    <Button className='p-[0.5rem] sm:p-[1rem] text-[0.7rem] 
     sm:text-[1rem] text-white rounded-lg  bg-orange-500 hover:bg-orange-600 '>Find Work</Button>
  </DropdownMenuTrigger>

  <DropdownMenuContent className='mt-[1rem]   '> 

    <DropdownMenuItem className='text-[0.7rem] sm:text-[1rem] my-[1rem] font-bold   
     text-black'><Link href={"/dashboard/find"}>Find Work for your Skills.</Link></DropdownMenuItem>
    <DropdownMenuSeparator />
    <DropdownMenuItem className='text-[0.7rem] sm:text-[1rem] font-bold my-[1rem]     text-black '>Join FindMeWork Premium</DropdownMenuItem>
  </DropdownMenuContent>
</DropdownMenu>

<DropdownMenu >
  <DropdownMenuTrigger asChild> 
  <Button className='p-[0.5rem] sm:p-[1rem] text-[0.7rem] bg-orange-500 hover:bg-orange-600  sm:text-[1rem] rounded-lg  '>
    
    Find Talent</Button>
  </DropdownMenuTrigger>
  <DropdownMenuContent className='mt-[1rem]  '>
  
    <DropdownMenuItem  className='text-[0.7rem] sm:text-[1rem] text-black font-bold my-[1rem]'>
       
    <Link href={"/dashboard/work"}> Hire a Pro</Link>
        </DropdownMenuItem>
    <DropdownMenuSeparator />
    <DropdownMenuItem className='font-bold my-[1rem]  text-[0.7rem] sm:text-[1rem]  text-black'>Buy Projects</DropdownMenuItem>
  
  </DropdownMenuContent>
</DropdownMenu>

        </div>

        <div className=' flex justify-end items-center'>{/*search bar login signup */}
        <Input/>
        </div>

    </div>
  )
}
