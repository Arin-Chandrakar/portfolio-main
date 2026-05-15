import Collapsibleexpdiv from "@/components/experiencediv";
import { experience } from "@/info/experience";
import {projects} from "@/info/projects"
import DividerComp from "@/components/divider";
import ProjectsCard from "@/components/projects";

export default function Home() {
  return (
    <div className="">
        <div className="relative w-full ">
                 <img src="/Hanuman.png" className="w-full" alt="" />
                 {/* <video src="/caseycom.mp4" className="w-full object-cover" preload="auto" autoPlay loop muted playsInline/> */}
                 <div className="absolute top-0 left-0 h-5 w-full bg-linear-to-b from-black to-transparent "/>
                 <div className="absolute bottom-0 left-0 h-5 w-full bg-linear-to-t from-black to-transparent "/>
            <div className="absolute bottom-0 translate-y-[70%] left-5 md:left-15 md:bottom-0 md:translate-y-[75%]  flex gap-5 sm:gap-10 items-center" >
                 <div className="aspect-square rounded-full md:w-55 w-30 border-white/50 border-2 p-px overflow-hidden mb-5">
                    <img src="/favicon.png" className="w-full h-full object-cover" alt="" />
                 </div>
                 <div className="flex flex-col gap-1.5">
                    <div className="flex items-center gap-2 pt-8 flex-1 sm:pt-4">
                       <h1 className="text-2xl sm:text-5xl font-arimo font-bold tracking-normal">Arin Chandrakar</h1>
                       <img src="/verified.svg" className="sm:h-8 h-6" alt="" />
                    </div>
                    <div className="font-arimo text-amber-50 opacity-80 text-xs sm:text-sm">
                      <p>22 &nbsp;•&nbsp; Developer &nbsp;•&nbsp; Learner &nbsp;•&nbsp; Builder</p>
                    </div>
                    <div className="flex gap-2">
                      <a href="www.google.com">
                        <span className="aspect-square ">
                          <img src="/logos/github.svg" className="contrast-0 invert-100 sm:h-7 sm:w-7 h-5 w-5 hover:contrast-100 transition-all duration-300" alt="" />
                        </span>
                      </a>
                      <a href="www.google.com">
                        <span className="aspect-square ">
                          <img src="/logos/medium.svg" className="contrast-0 invert-100 sm:h-7 sm:w-7 h-5 w-5 hover:contrast-100 transition-all duration-300" alt="" />
                        </span>
                      </a>
                      <a href="www.google.com">
                        <span className="aspect-square ">
                          <img src="/logos/linkedin.svg" className="sm:h-7 sm:w-7 h-5 w-5  transition-all duration-300" alt="" />
                        </span>
                      </a>
                      <a href="www.google.com">
                        <span className="aspect-square ">
                          <img src="/logos/X.svg" className="contrast-0 invert-100 sm:h-7 sm:w-7 h-5 w-5 hover:contrast-100 transition-all duration-300" alt="" />
                        </span>
                      </a>
                    </div>
                    
                 </div>
                 
            </div>
        </div>
        
        {/* About */}
        <div className=" max-w-3xl mx-auto mb-10 px-3 sm:px-0 mt-30 md:mt-60">
          <h1 className="text-x sm:text-2xl font-arimo font-bold tracking-wide pb-4">About</h1>
          <p className="opacity-80">I like learning, whatever it may be. I love building, books and fc barcelona. I can build full products from frontend to the backend. Doing it for the love of the game.</p>
        </div> 

        {/* Work Experience */}
        <div className="max-w-3xl mx-auto  px-3 sm:px-0 pb-3 sm:pb-5 border-b border-amber-50/20 ">
          <h1 className="font-arimo font-bold sm:text-2xl tracking-wide pb-4">Work Experience</h1>
          {experience.map((experience)=>(
            <Collapsibleexpdiv key={experience.id}
            {...experience}/>
          ))}
        </div>

        {/* Divider */}
        <DividerComp/>

        {/* Projects */}
        <div className="max-w-3xl mx-auto px-3 sm:px-0 pb-3 pt-8 sm:pb-5 border-b border-amber-50/20">
          <h1 className="font-arimo font-bold sm:text-2xl tracking-wide pb-4">Projects</h1>
          {Projects.ts}
        </div>
        
        
        


           










    </div>
  );
}
