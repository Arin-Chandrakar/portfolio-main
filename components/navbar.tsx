"use client"

import {motion} from "motion/react"
// import { motion } from "motion/react-client"
import { useState } from "react"



export function Navbar(){
    const [dark,setDark]=useState(false)


    return(
        <nav className="sticky top-0 z-50 flex max-w-6xl mx-5 mt-8 py-3 px-4 items-center justify-between  text-amber-50 backdrop-blur-xs ">
            <div className="flex items-center gap-x-6">
                <div>
                <a href="/" className="">Home</a>
                </div>
                <div>
                <a href="/Projects" className="">Projects</a>
                </div>
                <div>
                <a href="/Blog" className="">Blog</a>
                </div>
            </div>
            <div className=" mr-2">
                <button onClick={()=>{setDark(!dark)}}
                    className=""
                >
                    <img src={dark ? "/sun.png":"/night.png"} width={15} height={15} alt="" />
                </button>
            </div>
        </nav>
    )   
}