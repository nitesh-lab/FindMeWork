import NavBar from '@/components/Common/NavBar'
import Alert from '@/components/DashBoard/Work/Alert'
import WorkProfileList from '@/components/DashBoard/Work/WorkProfileList'
import WorkTop from '@/components/DashBoard/Work/WorkTop'
import React from 'react'

export default function page() {
  return (
    <>
    <Alert/>
    <WorkTop/>
    <WorkProfileList/>
    </>
  )
}
