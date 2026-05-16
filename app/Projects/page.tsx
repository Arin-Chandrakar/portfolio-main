import ProjectsCard from "@/components/projects";
import {projects} from "@/info/projects"

export default function Projects(){
    return(
        <>
        <div className="max-w-3xl sm:w-3xl mx-auto px-3">
            <h1 className="font-arimo font-bold text-3xl mt-3">Projects</h1>
            <p className="pt-3 opacity-90">These are some of the projects which i have made. Some are professional, some are just curiosity based and some are just for fun.</p>
        </div>


        <div className="max-w-3xl mx-auto mt-8 px-3 sm:px-0">
            {projects.map((project)=>(
                        <ProjectsCard key={project.id}
                        {...project}/>
                      ))}
        </div>
        </>
        
        
    )
}