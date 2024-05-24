"use client"

import { useAppSelector } from '@/Store/hooks';
import { Cross } from 'lucide-react'
import React from 'react'

export default function SelectedField() {


    const service:string=useAppSelector((s)=>s.Work.service);
  return (
    service.length>0 ?<div className='w-[95%] mx-[2.5%] '> <p className=' ml-[2rem] mt-[2rem]'>{service} X</p></div>:null
  ) 
}



		



