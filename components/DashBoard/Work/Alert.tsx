"use client"

import { useAppDispatch, useAppSelector } from '@/Store/hooks';
import { SelectService } from '@/Store/workSlice';
import React, { useEffect, useState } from 'react';

export default function Alert() {
  const [modalOpen, setModalOpen] = useState(false);
    const service:string=useAppSelector((s)=>s.Work.service);
    const [input,setInput]=useState<string>("Redux");
    const dispatch=useAppDispatch();
  const services = [
    "Web Development",
    "Mobile App Development",
    "UI/UX Design",
    "Software Development",
    "Graphic Design",
    "Digital Marketing",
    "SEO Optimization",
    "Cloud Computing",
    "Social Media Management",
    "Web Hosting",
  ];



  useEffect(()=>{
   
        if(service.length<1){
            setTimeout(()=>{
                setModalOpen(true);
            },2000)
        
        }
        else{
            setModalOpen(false)
        }
   
  },[service])

  function handleSubmit(){

    if(input.length<1){
        return;
    }
    else{
        console.log("submit 43")
        dispatch(SelectService(input));
    }
  }

  return (
    <>
      {modalOpen && (
        <div id="authentication-modal" aria-hidden="true" className="fixed top-0 right-0 bottom-0 left-0 z-50 flex justify-center items-center bg-black bg-opacity-50">
          <div className="relative p-4 w-full max-w-md">
            <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
              <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  Select a Service
                </h3>
                <button onClick={()=>setModalOpen((s)=>!s)} type="button" className="end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="authentication-modal">
                  <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                  </svg>
                  <span className="sr-only">Close modal</span>
                </button>
              </div>
              <div className="p-4 md:p-5">
                <form className="space-y-4   min-h-[200px]" onSubmit={(e)=>{e.preventDefault(); handleSubmit() }}>
                   
                    <div className='mb-[100px]'>
                       <select defaultValue={input} onChange={(e)=>setInput(e.target.value)} className="bg-gray-50 border border-gray-300
                       text-black text-sm rounded-lg focus:ring-blue-500
                        focus:border-blue-500 block w-full p-2.5
                         dark:bg-gray-600 dark:border-gray-500 
                         dark:placeholder-gray-400 dark:text-white" >
                        {
                            services.map((e,i)=>{
                                return (<option key={i} value={e}>{e}</option>)
                            })
                        }
                       </select>
                      
                    </div>
                    
                    <button  type="submit" className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Select Service</button>
                   
                </form>
            </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
