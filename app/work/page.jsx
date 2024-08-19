"use client";

import "swiper/css";

import { motion } from "framer-motion";
import { useState } from "react";

const projects = [
  {
    num: "01",
    category: "frontend",
    title: "project 1",
    description: "project description",
    stack: [
      { name: "html5" },
      { name: "css3" },
      { name: "javascript" },
      { name: "Tailwind.css" },
      { name: "NextJS" },
      { name: "Figma" },
    ],
    image: "/assets/portfolioimage.jpg",
  },
  {
    num: "02",
    category: "frontend",
    title: "project 2",
    description: "project description",
    stack: [
      { name: "html5" },
      { name: "css3" },
      { name: "javascript" },
      { name: "NextJS" },
      { name: "Tailwind.css" },
      { name: "Docker" },
      { name: "Figma" },
    ],
    image: "/assets/portfolioimage.jpg",
  },
  {
    num: "03",
    category: "frontend",
    title: "project 3",
    description: "project description",
    stack: [
      { name: "html5" },
      { name: "css3" },
      { name: "Php" },
      { name: "Figma" },
    ],
    image: "/assets/portfolioimage2.jpg",
  },
];

const Work = () => {
  const [project, setProject] = useState(projects[0]);
  console.log(project);
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
            <div
              style={{ WebkitTextStroke: "1px white" }}
              className="text-8xl leading-none font-extrabold text-transparent"
            >
              {project.num}
            </div>
          </div>
          <div className="w-full xl:w-[50%]">slider</div>
        </div>
      </div>
    </motion.section>
  );
};

export default Work;
