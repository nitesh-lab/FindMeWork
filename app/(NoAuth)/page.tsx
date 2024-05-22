import Footer from '@/components/Common/Footer'
import NavBar from '@/components/Common/NavBar'
import Intro from '@/components/NoAuth/Intro'
import Services from '@/components/NoAuth/Services'
import TestiMonials from '@/components/NoAuth/TestiMonials'
import React from 'react'

export default function page() {
  return (
    <>
    <div className='bg-blue-100'>
    <NavBar/>
    <Intro/>
    <div className='flex mt-[3rem] justify-center flex-wrap gap-[1rem]'>
    <Services/>
    </div>
    <TestiMonials/>
    <Footer/>
    </div>
    </>
  )
}
