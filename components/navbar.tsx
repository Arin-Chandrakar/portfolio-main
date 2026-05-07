"use client"
import { useState } from "react"
import { usePathname } from "next/navigation";
import Link from "next/link";


export function Navbar(){
    const [dark,setDark]=useState(false);
    const [active,setActive]=useState("Home")

    const pathname = usePathname();

    const navItems = [
        {name:"Home",href:"/"},
        {name:"Projects",href:"/Projects"},
        {name:"Blog",href:"/Blog"},
    ];


    return(
        <nav className="sticky top-0 z-50 flex w-full mx-auto mt-8 py-3 px-4 justify-between  text-amber-50 backdrop-blur-xs ">
            <div className="flex items-center gap-x-6">
                {navItems.map((item)=>{
                    const isActive = pathname === item.href;

                    return(
                    <Link 
                    key={item.name}
                    href={item.href}
                    className={`relative pb-1 text-sm transition-colors duration-300 ${isActive ? "text-white" : "text-zinc-400 hover:text-zinc-200"}`}
                    >
                        {item.name}

                    <span
                    className={`absolute bottom-0 left-0 h-0.5 w-full rounded-full bg-white transition-transform duration-300 ${isActive ? "scale-x-100" : "scale-x-0"}`}
                    />
                    </Link>
                    );
                })}
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