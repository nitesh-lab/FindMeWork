import { Star } from 'lucide-react'
import React from 'react'

export default function Services() {

   const services:{title:string,subtitle:string,info:string,rating:number}[]= [
        {
          "title": "FullStack  Development",
          "subtitle": "Crafting Stunning Websites for Your Business",
          "info": "Our team of experienced developers specializes in creating custom websites tailored to your needs. From e-commerce platforms to corporate websites, we deliver high-quality solutions that impress your audience and drive results.",
          "rating": 4.8
        },
        {
          "title": "Custom Web Applications",
          "subtitle": "Developing Tailored Solutions for Your Business Needs",
          "info": "Empower your business with custom web applications designed to streamline your operations and enhance productivity. Our team builds robust and scalable solutions that address your specific challenges and goals.",
          "rating": 4.6
        },
        {
          "title": "Web Hosting and Maintenance",
          "subtitle": "Keeping Your Website Secure and Up-to-Date",
          "info": "Ensure your website stays online and performs optimally with our reliable web hosting and maintenance services. We handle server management, security updates, backups, and ongoing support, so you can focus on your business.",
          "rating": 4.7
        },
        {
          "title": "UI/UX Design",
          "subtitle": "Creating Engaging and Intuitive User Experiences",
          "info": "Delight your users and differentiate your brand with our UI/UX design services. We combine creative design principles with user-centric approaches to craft interfaces that are not only visually appealing but also intuitive and easy to use.",
          "rating": 4.9
        },
        {
          "title": "Frontend Development",
          "subtitle": "Building Dynamic and Interactive User Interfaces",
          "info": "Bring your website to life with our frontend development expertise. We leverage the latest frontend technologies and frameworks to create dynamic and interactive user interfaces that engage your audience and drive conversions.",
          "rating": 4.6
        },
        {
          "title": "Backend Development",
          "subtitle": "Powering Your Website with Robust Backend Solutions",
          "info": "Ensure your website operates smoothly and efficiently with our backend development services. We architect scalable and secure backend systems that handle data processing, user authentication, and business logic, delivering a seamless experience for your users.",
          "rating": 4.7
        }
      ]
      

  return (
  <>
<div>
  <h1 className='block sm:hidden mt-[2rem]  ml-[2rem] mb-[2rem] font-extrabold text-[2rem]'>Services</h1>
  </div>
  {services.map((e,i)=>{
        
    return (<div key={i} className="hover:cursor-pointer bg-white max-w-sm rounded overflow-hidden shadow-lg">
  <div className="px-6 py-4">
    <div className="font-bold text-xl mb-2">{e.title}</div>
    
    <p className="text-gray-700 text-base">
      {e.subtitle}
    </p>
  </div>
  <div className="flex  mb-[1rem] gap-[0.5rem] items-center ">
    <div>
  <Star className='ml-[1rem] text-yellow-500 '/>
  </div>
  <div>
    <span className="inline-block bg-gray-200 rounded-full  text-sm
     font-semibold text-gray-700 ">{e.rating}/5</span>
  </div>
  </div>
</div>)
    })}
  </>  
)
}
