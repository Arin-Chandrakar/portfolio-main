import Image from "next/image";

export default function Home() {
  return (
    <div className="">
        <div className="relative w-full">
                 <img src="/Hanuman.png" className="w-full" alt="" />
                 <div className="absolute top-0 left-0 h-5 w-full bg-linear-to-b from-black to-transparent "/>
            <div className="absolute md:left-14 md:top-75 left-7 top-32" >
                 <div className="aspect-square rounded-full md:w-55 w-24 border-white/50 border-2 p-px">
                    <img src="/favicon.png" className="" alt="" />
                 </div>
                 
            </div>
        </div>
            










    </div>
  );
}
