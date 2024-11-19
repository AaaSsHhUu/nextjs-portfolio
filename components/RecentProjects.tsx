import { projects } from "@/data";
import { ThreeDCard } from "./ui/ThreeDCard";

const RecentProjects = () => {
  return (
    <div className="py-20" id="projects">
        <h1 className="heading my-10">
            A small collection of {" "}
            <span className="text-purple">recent projects</span>
        </h1>
        <div className="flex flex-wrap justify-center items-center p-4">
            {projects.map(({id, title, des, img, gitLink, liveLink}) => (
                <div className="lg:min-h-[32.5rem] flex sm:w-[34rem] w-full" key={id}>
                    <ThreeDCard title={title} des={des} img={img} key={id} gitLink={gitLink} liveLink={liveLink} />
                </div>
            ))}
        </div>
    </div>
  )
}

export default RecentProjects