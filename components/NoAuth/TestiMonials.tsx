import React from 'react'
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
  } from "@/components/ui/carousel"

  
export default function TestiMonials() {

    const reviews:{name:string,review:string}[]=[
        {
          "name": "John Doe",
          "review": "I was impressed by the professionalism and expertise of the team at FindMe Work. They delivered a stunning website for my business that exceeded my expectations. Highly recommended!"
        },
        {
          "name": "Jane Smith",
          "review": "Working with FindMe Work was a fantastic experience. They understood my requirements perfectly and translated them into a beautifully designed website. I couldn't be happier with the results!"
        },
        {
          "name": "David Johnson",
          "review": "FindMe Work helped us revamp our online store, and the results were outstanding. The new website is not only visually appealing but also user-friendly, leading to increased sales and customer satisfaction."
        },
        {
          "name": "Emily Brown",
          "review": "I'm extremely grateful to the team at FindMe Work for their exceptional service and support. They went above and beyond to ensure that our website met all our needs and delivered it on time and within budget."
        },
        {
          "name": "Michael Wilson",
          "review": "FindMe Work provided us with top-notch SEO services that significantly improved our website's visibility and rankings. Their expertise and dedication have made a noticeable impact on our online presence."
        }
      ]
      
  return (
    <>
   <div className='mt-[3rem]'>
    <p className='font-extrabold text-[2rem] ml-[1rem] mb-[1rem]'>Reviews</p>
    <Carousel 
      opts={{
        align: "start",
        loop: true,
      }}
    className='w-[100%] min-h-[400px]'>
  <CarouselContent className='w-[100%] h-[100%]'>
      {
        reviews.map((e,i)=>{
       return (
    <CarouselItem key={i} className="h-[100%] w-[50%]  sm:basis-1/2 md:basis-1/3  pl-4"><Card  name={e.name} review={e.review} /></CarouselItem>)
        })
      }
  </CarouselContent>
  <CarouselPrevious className='text-black' />
  <CarouselNext />
</Carousel> 
</div>
    </>
  )
}


function Card({name,review}:{name:string,review:string}){

return (
    <div className="max-w-sm rounded-lg bg-white overflow-hidden shadow-lg">
  <div className="px-6 py-4">
    <div className="font-bold text-xl mb-2">{name}</div>
    <p className="text-gray-700 text-base">
     {review}
    </p>
  </div>
</div>
)

}

