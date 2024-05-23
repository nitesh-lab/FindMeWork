import Listings from '@/components/DashBoard/Find/Listings'
import Slides from '@/components/DashBoard/Find/Slides'
import React from 'react'

export default function page() {
  return (
    <>
    <div className='mt-[2rem]'>
    <Slides/>
    <Listings/>
    </div>
    </>
  )
}
