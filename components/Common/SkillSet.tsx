import { Separator } from "../ui/separator"

export default function SkillSet({skills}:{skills:string[]}){

    return (
        <>
        <p className='ml-[0.5rem] md:ml-[2rem] text-black text-[2rem] mt-[2rem] mb-[1rem]'>Skills Required</p>
        <div className="mt-[2rem] ml-[0.5rem] md:ml-[2rem] flex-wrap flex h-5 items-center space-x-4 text-sm">
        {
        skills.map((e,i)=>{
        return (<><div key={i}><p className='text-black text-[0.8rem] md:text-[1.2rem]'>{e}</p></div>
        <Separator orientation="vertical" />
        </>)
        })
    }   
      </div>
      </>
    )
}