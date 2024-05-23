import React from 'react'
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"

export interface task{
    posted: string, // Represents the posting number, can be a string or number
    title: string, // Title of the task
    subtitle: string, // Subtitle or description of the task
    proposals: number, // Number of proposals received for the task
    Price: number // Price of the task
  };
  

export default function Work({data}:{data:task}) {
  return (
   
  <Sheet>
  <SheetTrigger className='w-[100%]'>
    <div className="my-[1rem] hover:cursor-pointer md:my-[2rem]  w-[95%] mx-[2.5%] ">
      <div className="lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l overflow-hidden">
      </div>
      <div className="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
        <div className="mb-8">
          <p className="text-sm text-gray-600 flex items-center">
            Posted {data.posted} Hour ago
          </p>
          <div className="text-gray-900 font-bold text-xl  mb-2">
            <h1 className=' text-left'>{data.title}</h1> {/* Adjusted to align left */}
          </div>
          <p className="text-gray-700 text-base text-left">{data.subtitle}</p> {/* Adjusted to align left */}
        </div>
        <div className="flex items-center">
          <div className="text-[1rem]">
            <p className="text-gray-900 mb-[0.5rem] leading-none">Price: {data.Price}$</p>
            <p className="text-gray-600">{data.proposals} Proposals</p>
          </div>
        </div>
      </div>
    </div>
  </SheetTrigger>

  <SheetContent className="w-[400px] sm:w-[540px] md:max-w-[100vw] md:min-w-[70vw]">
    <SheetHeader>
      <SheetTitle>Are you absolutely sure?</SheetTitle>
      <SheetDescription>
        This action cannot be undone. This will permanently delete your account
        and remove your data from our servers.
      </SheetDescription>
    </SheetHeader>
  </SheetContent>
</Sheet>

  )
}



  

