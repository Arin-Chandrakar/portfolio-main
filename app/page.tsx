import Image from "next/image";

export default function Home() {
  return (
    <div className="">
        <div className="relative w-full">
                 <img src="/Hanuman.png" className="w-full" alt="" />
                 <div className="absolute top-0 left-0 h-5 w-full bg-linear-to-b from-black to-transparent "/>
                 <div className="absolute bottom-0 left-0 h-5 w-full bg-linear-to-t from-black to-transparent "/>
            <div className="absolute md:left-14 md:top-75 left-7 top-32 flex gap-5 sm:gap-10 items-center" >
                 <div className="aspect-square rounded-full md:w-55 w-24 border-white/50 border-2 p-px overflow-hidden">
                    <img src="/favicon.png" className="w-full h-full object-cover" alt="" />
                 </div>
                 <div className="flex flex-col gap-1.5">
                    <div className="flex items-center gap-2 pt-4 flex-1 ">
                       <h1 className="text-2xl sm:text-5xl font-arimo font-bold tracking-normal">Arin Chandrakar</h1>
                       <img src="/verified.svg" className="sm:h-8 h-6" alt="" />
                    </div>
                    <div className="font-arimo text-amber-50 opacity-80 text-xs">
                      <p>22 &nbsp;•&nbsp; Developer &nbsp;•&nbsp; Learner &nbsp;•&nbsp; Builder</p>
                    </div>
                    <div className="flex gap-2 mt-2">
                      <a href="www.google.com">
                        <span className="aspect-square ">
                          <img src="/logos/github.svg" className="contrast-0 invert-100 h-7 w-7 hover:contrast-100 transition-all duration-300" alt="" />
                        </span>
                      </a>
                      <a href="www.google.com">
                        <span className="aspect-square ">
                          <img src="/logos/medium.svg" className="contrast-0 invert-100 h-7 w-7 hover:contrast-100 transition-all duration-300" alt="" />
                        </span>
                      </a>
                      <a href="www.google.com">
                        <span className="aspect-square ">
                          <img src="/logos/linkedin.svg" className="h-7 w-7  transition-all duration-300" alt="" />
                        </span>
                      </a>
                      <a href="www.google.com">
                        <span className="aspect-square ">
                          <img src="/logos/X.svg" className="contrast-0 invert-100 h-7 w-7 hover:contrast-100 transition-all duration-300" alt="" />
                        </span>
                      </a>
                    </div>
                    
                 </div>
                 
            </div>
        </div>
            










    </div>
  );
}
