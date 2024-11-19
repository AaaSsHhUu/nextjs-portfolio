import { testimonials } from "@/data"
import { InfiniteMovingCards } from "./ui/InfiniteMovingCards"

const Clients = () => {
  return (
    <div className="py-20" id="testimonials">
        <h1 className="heading my-10">
            Kind words from {" "}
            <span className="text-purple">Satisfied Clients</span>
        </h1>
        <div className="flex flex-col items-center">
            <div className="h-[50vh] md:h-[30rem] rounded-md flex flex-col antialiased items-center relative overflow-hidden">
                <InfiniteMovingCards 
                    items={testimonials}
                    speed="slow"
                    direction="right"
                />
            </div>
        </div>
    </div>
  )
}

export default Clients