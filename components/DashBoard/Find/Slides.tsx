'use client'

import Autoplay from "embla-carousel-autoplay"

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

import Image from "next/image";

export default function Slides(){


    const staticData = [
        {
          title: "Create a Professional Resume",
          description: "A well-written resume can attract hirers",
          image: "/resume.jpg",
          color:"bg-gray-800"
          
        },
        {
          title: "Attract Hirers with a Strong Portfolio",
          description: "A strong portfolio can make you stand out to potential hirers.",
          image: "/portfolio.jpg",
          
          
        },
        {
          title: "Communicate Clearly and Professionally",
          description: "Effective communication is key to success on FindMework.",
          image: "/communication.jpg",
          
        },
        {
          title: "Provide Excellent Customer Service",
          description: "Deliver high-quality work on time and be responsive to client feedback.",
          image: "/customer_service.jpg",
          
        }
      ];
      
     
      

  return (
    <div className="w-[95vw] rounded-lg mx-[2.5vw] bg-orange-500 flex justify-center ">
    <Carousel
      style={{gap:"0px"}}
      plugins={[Autoplay({ delay:2500,stopOnInteraction: true })]}
      opts={{
        align: "start",
        loop: true,
        
      }}
      className="w-full min-h-[250px] rounded-lg md:min-h-[300px] max-w-[80%] "
    >
      <CarouselContent className="h-[100%] min-h-[250px] sm:min-h-[300px]">
         
           {staticData.map((e,i)=>{
            return (
                <CarouselItem key={i} className="
                  min-h-[250px]  sm:min-h-[300px] h-[100%]" >

            <Options  title={e.title} subtitle={e.description} image={e.image}/>
            </CarouselItem>)
             })
            }           
          
      </CarouselContent>
      {/* <CarouselPrevious />
      <CarouselNext /> */}
    </Carousel>
    </div>
  )
}

function Options({title,subtitle,image}:{title:string,subtitle:string,image:string}){

    return (
        <div className="text-white relative bg-orange-500 sm:min-h-[300px] min-h-[250px]">
        <h1 className="absolute z-[2] font-extrabold text-[1.5rem] sm:text-[2rem] lg:text-[2.5rem] xl:text-[3rem] top-[10%] left-[10%]">{title}</h1>
        <p  className="absolute z-[2] sm:text-[1.5rem] top-[50%] left-[10%]">{subtitle}</p>
        </div>
    )
}