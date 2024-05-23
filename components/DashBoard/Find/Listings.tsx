import SearchBar from '@/components/Common/SearchBar'
import React from 'react'
import Work, { task } from './Work'

export default function Listings() {

    const tasks = [
        {
          posted: "1",
          title: "React website",
          subtitle: "Need to Build a feature",
          proposals: 2,
          Price: 10
        },
        {
          posted: "2",
          title: "Mobile App Development",
          subtitle: "Develop a cross-platform mobile app",
          proposals: 5,
          Price: 20
        },
        {
          posted: "3",
          title: "Graphic Design",
          subtitle: "Design a logo for a new startup",
          proposals: 3,
          Price: 15
        },
        {
          posted: "4",
          title: "Content Writing",
          subtitle: "Write SEO-friendly articles for a blog",
          proposals: 4,
          Price: 12
        },
        {
          posted: "5",
          title: "Data Entry",
          subtitle: "Enter data into a spreadsheet",
          proposals: 1,
          Price: 8
        }
      ];

  return (
    <div className='mt-[2rem]  w-[95vw] mx-[2.5vw]'>
        <SearchBar/>
        <div className='mt-[2rem]'>
        {
            tasks.map((e,i)=>{       
       return  (<Work key={i} data={e}/>)
    })
            }
        </div>
        
    </div>
  )
}
