import React from 'react'
import { task } from './Work'
import { Separator } from '@/components/ui/separator'
import { Star } from 'lucide-react'
import SkillSet from '@/components/Common/SkillSet'

const skills=["redux","react","typescript"]

export default function ClientInfo({data}:{data:task}) {
  return (
   <>
   <div>
    <ClientWork data={data}/>
    <SkillSet skills={skills}/>
    <ClientHistory/>
    </div>
   </>
  )
}


function ClientWork({data}:{data:task}){
    return (
        <div className=" md:min-h-[300px] mt-[1rem]  p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <a href="#">
            <h5 className=" sm:my-2 text-[2rem] sm:text-[2.3rem] md:text-[3.5rem] font-bold tracking-tight text-gray-900 dark:text-white">{data.title}</h5>
        </a>
        <p className="mt-[4rem]  mb-[4rem]  text-black text-[1.2rem] md:text-[1.5rem]
         dark:text-gray-400">{data.subtitle}.</p>
        <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Apply Now
            <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
            </svg>
        </a>
    </div>
    )
}



function ClientHistory(){

    return <>
   
   <div 
    className="my-[1rem] md:my-[2rem]  w-[95%] mx-[2.5%] ">
      <div className="lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l overflow-hidden">
      </div>
      <div className="border-r border-b border-l  text-black text-[1.5rem] md:text-[2rem] mt-[2rem] mb-[1rem] border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
       <p>Client History</p>
        </div>
      </div>

    <div className='flex flex-col gap-[1rem] '>
    <div 
    className="my-[1rem] hover:cursor-pointer md:my-[2rem]  w-[95%] mx-[2.5%] ">
      <div className="lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l overflow-hidden">
      </div>
      <div className="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
        <div className="mb-[1rem]">
          <div className="text-gray-900 font-bold text-xl  mb-2">
            <h1 className='text-[1rem] sm:text-[1.5rem] text-left'>PowerPoint Work</h1> {/* Adjusted to align left */}
          </div>
          <p className="text-gray-900 text-left ">To FreeLancer:
          <span className='font-bold'>Nitesh Semwal</span></p> {/* Adjusted to align left */}
        </div>
        <div className="flex items-center">
          <div className="text-[1rem]">
           <p className='text-[0.8rem] sm:text-[1rem] text-left'> <span className='text-[1rem] text-left text-black sm:text-[1.3rem]'>Review: </span>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cum suscipit ratione ipsum repellat fugiat deserunt sunt quaerat aliquid fugit voluptas? Ut nihil accusamus nesciunt inventore, neque assumenda hic excepturi autem.</p>
            <div className='flex gap-[0.5rem] items-center'>
                <div>  <p className="text-gray-600 ">{"4.8/5"}</p></div>
                <div> <Star className='inline-block text-yellow-500' /></div>
            </div>
          
          </div>
        </div>
      </div>
    </div>


    </div>
    
    </>
}
