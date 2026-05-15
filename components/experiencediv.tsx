"use client";
import { motion , AnimatePresence } from "motion/react";
import { ul } from "motion/react-client";
import { useState } from "react";

type ExperienceProps = {
    compname : string,
    role : string,
    duration : string,
    image : string,
    tasks : string[]
}


export default function Collapsibleexpdiv({ compname , role , duration , image ,tasks } : ExperienceProps){

    const [open,setOpen]  = useState(false);
    return(
        <div className="flex flex-col">
            <button className=" flex justify-between hover:bg-amber-50/10 transition-colors duration-300 rounded-xl " onClick={()=>setOpen(!open)}>
                <div className="flex gap-2 p-2 ">
                    <img src={`/${image}`} className="w-10 h-10" alt="" />
                    <h2 className="text-sm sm:text-2xl pt-3 sm:pt-1">{compname}</h2>
                    <h2 className=" text-sm sm:text-2xl opacity-70 pt-3 sm:pt-1"> / {role}</h2>
                </div>
                <div className="flex gap-2 p-3 text-sm pt-5 sm:pt-4">
                    {duration}
                </div>
            </button>
            
            
            <AnimatePresence>
                {open && (
                    <motion.div
                    initial={{height:0 , opacity:0}}
                    animate={{height:"auto" , opacity:1}}
                    exit={{height:0 , opacity:0}}
                    transition={{duration:0.3 , ease:"easeInOut"}}
                    className="overflow-hidden "
                    >
                        {tasks.map((item)=>(
                            <ul key={item} className="list-disc pl-6 pt-1 whitespace-normal">
                                <li className="whitespace-normal">{item}</li>
                            </ul>
                        ))}
                        
                    </motion.div>
                )}
            </AnimatePresence>
            
            
        </div>
    )
}