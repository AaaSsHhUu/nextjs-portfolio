"use client";

import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "./CardContainer";
import Link from "next/link";
import { FaGithub, FaLocationArrow } from "react-icons/fa6";

type CardProps = {
  title : string;
  img : string;
  des : string;
  gitLink ?: string;
  liveLink ?: string;
}

export function ThreeDCard({title, img, des, gitLink, liveLink} : CardProps) {
  return (
    <CardContainer className="inter-var">
      <CardBody className={`relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:border-white/[0.2] border-black/[0.1] w-full sm:w-[30rem] h-auto rounded-xl p-6 border bg-card-bg `}>
        <CardItem
          translateZ="50"
          className="text-xl font-bold text-neutral-600 dark:text-white"
        >
          {title}
        </CardItem>
        <CardItem
          as="p"
          translateZ="60"
          className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
        >
          {des}
        </CardItem>
        <CardItem translateZ="100" className="w-full mt-4">
          <Image
            src={img}
            height="1000"
            width="1000"
            className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
            alt="thumbnail"
          />
        </CardItem>
        <div className="flex justify-between items-center mt-20">
          <CardItem
            translateZ={20}
            as={Link}
            // href={liveLink || "#"}
            // target="__blank"
            className="px-4 py-2 flex items-center gap-1 opacity-70 hover:opacity-100 rounded-xl text-xs font-normal dark:text-white"
          >
            Live {<FaLocationArrow />}
          </CardItem>
          <CardItem
            translateZ={20}
            as={Link}
            // href={gitLink || "#"}
            className="px-4 py-2 rounded-xl opacity-70 hover:opacity-100 flex items-center gap-2 bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
          >
            {<FaGithub />} Github
          </CardItem>
        </div>
      </CardBody>
    </CardContainer>
  );
}
