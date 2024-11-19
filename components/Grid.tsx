import { BentoGrid, BentoGridItem } from "./ui/BentoGrid"
import { gridItems } from "@/data"

const Grid = () => {
  return (
    <section id="about">
        <BentoGrid>
            {gridItems.map(({id, description, title, img, imgClassName, titleClassName, spareImg, className }) => (
                <BentoGridItem 
                    key={id}
                    id={id}
                    title={title}
                    description={description}
                    className={className}
                    img={img}
                    imgClassname={imgClassName}
                    titleClassname={titleClassName}
                    spareImg={spareImg}
                />
            ))}            
        </BentoGrid>
    </section>
  )
}

export default Grid