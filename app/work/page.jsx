"use client";

import "swiper/css";

import {
  Tooltip,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { TooltipContent } from "@radix-ui/react-tooltip";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { BsArrowUpRight } from "react-icons/bs";
import { Swiper, SwiperSlide } from "swiper/react";

import WorkSliderBtns from "@/components/WorkSliderBtns";
import { useTranslation } from "react-i18next";

const projects = [
  {
    num: "01",
    category: "frontend",
    title: "project 1",
    description: "Portfolio Project",
    stack: [
      { name: "html5" },
      { name: "css3" },
      { name: "javascript" },
      { name: "Tailwind.css" },
      { name: "NextJS" },
    ],
    image: "/portfolioimage.jpg",
    link: "brahimzerd.me",
  },
  {
    num: "02",
    category: "frontend",
    title: "project 2",
    description: "project2Description",
    stack: [
      { name: "html5" },
      { name: "css3" },
      { name: "javascript" },

      { name: "Docker" },
      { name: "Figma" },
    ],
    image: "/portfolioimage3.jpg",
    link: "app.everwave.xyz",
  },
  {
    num: "03",
    category: "wordpress",
    title: "project 3",
    description: "project3Description",
    stack: [
      { name: "html5" },
      { name: "css3" },
      { name: "Php" },
      { name: "Figma" },
    ],
    image: "/portfolioimage2.jpg",
    link: "uniciteecreation.com",
  },
];

const Work = () => {
  const [project, setProject] = useState(projects[0]);
  const { t } = useTranslation();

  const handleSliderChange = (swiper) => {
    const currentIndex = swiper.activeIndex;
    setProject(projects[currentIndex]);
  };
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
            <div className="flex flex-col gap-[30px] h-[50%] ">
              <div
                style={{ WebkitTextStroke: "1px white" }}
                className="text-8xl leading-none font-extrabold text-transparent"
              >
                {project.num}
              </div>
              <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">
                {project.category} project
              </h2>
              <p className="text-white/60">{t(project.description)}</p>
              <ul className="flex gap-4 flex-col xl:flex-row capitalize ">
                {project.stack.map((item, index) => {
                  return (
                    <li key={index} className="text-xl text-accent">
                      {" "}
                      {item.name}
                      {index !== project.stack.length - 1 && ","}
                    </li>
                  );
                })}
              </ul>
              <div className="border border-white/20"></div>
              <div>
                <Link href={project.link}>
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group hover:text-accent">
                        <BsArrowUpRight />
                        <TooltipContent>
                          <p>{t("Live project")}</p>
                        </TooltipContent>
                      </TooltipTrigger>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
              </div>
            </div>
          </div>
          <div className="w-full xl:w-[50%]">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              className="xl:h-[520px] mb-12"
              onSlideChange={handleSliderChange}
            >
              {projects.map((project, index) => {
                return (
                  <SwiperSlide key={index}>
                    <div className="h-[460px]  relative group flex justify-center items-center bg-primary">
                      <div>
                        <div>
                          <Image
                            src={project.image}
                            fill
                            className="object-contain opacity-70"
                            alt=""
                          />
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
              <WorkSliderBtns
                containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)]  z-20 w-full justify-between  "
                iconsStyles="text-3xl text-accent"
              />
            </Swiper>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Work;
