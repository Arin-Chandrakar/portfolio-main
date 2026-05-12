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
            <button className=" flex justify-between border-b-2 border-amber-50/50" onClick={()=>setOpen(!open)}>
                <div className="flex gap-2 p-2">
                    <img src={`/${image}`} className="w-10 h-10" alt="" />
                    <h2 className="text-xs sm:text-2xl">{compname}</h2>
                    <h2 className=" text-xs sm:text-2xl opacity-70"> / {role}</h2>
                </div>
                <div className="flex gap-2 p-2">
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
                            <ul key={item} className="list-disc pl-6">
                                <li>{item}</li>
                            </ul>
                        ))}
                        
                    </motion.div>
                )}
            </AnimatePresence>
            
            
        </div>
    )
}