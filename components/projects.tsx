
type ProjectInfo = {
    name:string,
    description:string,
    livelink:string,
    githublink:string,
    techused?:string[]
    image:string,
}



export default function ProjectsCard({name,description,livelink,githublink,techused,image}:ProjectInfo){
    return(
        <div className=" flex flex-col sm:flex-row p-4 bg-amber-50/8 rounded-xl border border-amber-50/10">
            
            <div className=" sm:w-70 sm:h-30 w-full mr-3">
                <img src={`/${image}`} alt=""  className="w-full h-full object-cover rounded-xl"/>
            </div>
            <div className=" w-full sm:h-30 flex flex-col mt-1">
                <div className=" h-8 flex justify-between items-center">
                    <div className="font-arimo font-bold text-xl">
                        {name}
                    </div>
                    <div className="">
                        <button className="flex gap-2" >
                            <a href={`${livelink}`} className="border p-1 text-xs sm:text-sm rounded-md font-extralight opacity-80 hover:opacity-100">Live</a>
                            <a href={`${githublink}`} className="border p-1 text-xs sm:text-sm rounded-md font-extralight opacity-80 hover:opacity-100">GitHub</a>
                        </button>
                    </div>
                </div>
                <div className=" pt-1">
                    <div>
                        {description}
                    </div>
                    <div>
                        
                    </div>
                </div>
            </div>



        </div>
    )
}