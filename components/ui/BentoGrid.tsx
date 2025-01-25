"use client"

import { cn } from "@/lib/utils";
import { BackgroundGradientAnimation } from "./GradientBg";
import animationData from "@/data/confetti.json";
import { GridGlobe } from "./GridGlobe";
import Lottie from "react-lottie";
import { useEffect, useState } from "react";
import MagicButton from "./MagicButton";
import { IoCopyOutline } from "react-icons/io5";
import Image from "next/image";

export const BentoGrid = ({
    className,
    children,
}: {
    className?: string;
    children?: React.ReactNode;
}) => {
    return (
        <div
            className={cn(
                "grid md:auto-rows-[18rem] grid-cols-1 md:grid-cols-5 gap-4 mx-auto",
                className
            )}
        >
            {children}
        </div>
    );
};

export const BentoGridItem = ({
    className,
    id,
    title,
    description,
    img,
    imgClassname,
    spareImg,
    titleClassname
}: {
    className?: string;
    id?: number;
    title?: string | React.ReactNode;
    description?: string | React.ReactNode;
    img?: string;
    spareImg?: string;
    imgClassname?: string;
    titleClassname?: string;
}) => {
    const leftList = ["Reactjs", "Typescript", "Next.js"];
    const rightList = ["Express.js", "Node.js", "Git/Github"];

    const [copied, setCopied] = useState(false);

    const handleCopy = () => {
        navigator.clipboard.writeText("anegi6723@gmail.com");
        setCopied(true);
    }

    useEffect(() => {
        if(copied){
            const timeoutID = setTimeout(() => {
            setCopied(false);
            },5000)
            
            return () => clearTimeout(timeoutID)
        }
    },[copied])

    return (
        <div
            className={cn(
                "row-span-1 relative overflow-hidden rounded-3xl group/bento hover:shadow-xl transition duration-200 shadow-input bg-white border border-white/[0.1] justify-between flex flex-col space-y-4",
                className
            )}
            style={{
                background: "rgb(4,7,29)",
                backgroundColor:
                    "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
            }}
        >
            <div className={`${id === 6 && 'flex flex-col items-center'} h-full`}>
                {/* Image */}
                <div className="w-full h-full absolute">
                    {img && <Image src={img} alt={img} className={cn(imgClassname, 'object-cover object-center')} />}
                </div>
                {/* Spare Image */}
                <div className={`absolute right-0 bottom-0 ${id === 5 && 'w-full opacity-80'}`}>
                    {spareImg && <Image src={spareImg} alt={spareImg} className="object-cover object-center" />}
                </div>


                <div className={cn(titleClassname, "z-10 group-hover/bento:translate-x-2 transition duration-200 relative md:h-full w-full min-h-40 flex flex-col px-5 lg:p-10")}>
                    <div className="font-sans font-extralight text-[#c1c2d3] text-sm md:text-xs lg:text-base z-10">
                        {description}
                    </div>
                    <div className={`font-sans text-lg lg:text-3xl max-w-96 font-bold z-10`}>
                        {title}
                    </div>

                    {
                        id === 2 && <GridGlobe />
                    }
                    {
                        id === 6 && (
                            <BackgroundGradientAnimation>
                                <div className="relative flex justify-center items-center text-white font-bold" />
                            </BackgroundGradientAnimation>
                        )
                    }
                    {
                        id == 3 && (
                            <div className="flex gap-1 lg:gap-5 w-fit absolute  -right-2 lg:-right-3">
                                <div className="flex flex-col gap-3 lg:gap-5">
                                    {leftList.map((item) => {
                                        return <span key={item} className="py-2 lg:py-4 lg:px-3 px-3 text-xs lg:text-base opacity-70 rounded-lg text-center bg-[#10132E]">{item}</span>
                                    })}
                                    <span className="py-4 px-4 opacity-70 text-center rounded-lg bg-[#10132e]" />
                                </div>
                                <div className="flex flex-col gap-3 lg:gap-5">
                                    <span className="py-4 px-4 text-center opacity-50 rounded-lg bg-[#10132e]" />
                                    {rightList.map((item) => (
                                        <span key={item} className="py-2 lg:py-4 lg:px-3 px-3 text-xs lg:text-base opacity-50 rounded-lg text-center bg-[#10132E]">{item}</span>
                                    ))}
                                </div>
                            </div>
                        )
                    }
                    {
                        id === 6 && (
                            <div className="my-5 relative">
                                <div className={`absolute right-0 -bottom-5`}>
                                    <Lottie 
                                    options={{
                                        loop : copied,
                                        autoplay : copied,
                                        animationData : animationData,
                                        rendererSettings : {
                                            preserveAspectRatio : "xMidyMid slice"
                                        }
                                    }} />
                                </div>

                                <MagicButton 
                                    title={copied ? "Email is Copied" : "Copy my Email Address"}
                                    icon = {<IoCopyOutline />}
                                    position="left"
                                    otherClasses="bg-[161a31]"
                                    handleClick={handleCopy}
                                    />
                            </div>
                        )
                    }
                </div>
            </div>
        </div>
    );
};
