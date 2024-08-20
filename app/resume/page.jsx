"use client";

import { ScrollArea } from "@/components/ui/scroll-area";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { TabsContent } from "@radix-ui/react-tabs";
import { Tooltip } from "@radix-ui/react-tooltip";
import { motion } from "framer-motion";
import {
  FaCss3,
  FaDocker,
  FaFigma,
  FaHtml5,
  FaJs,
  FaReact,
} from "react-icons/fa";
import { RiNextjsLine, RiTailwindCssFill } from "react-icons/ri";

import { useTranslation } from "react-i18next";

//data
const about = {
  title: "About me",
  description: "",
  info: [
    {
      fieldname: "Name",
      fieldValue: "Brahim Zerd",
    },
    {
      fieldname: "Phone",
      fieldValue: "+33 6 25 20 55 05",
    },
    {
      fieldname: "LinkedIn",
      fieldValue: "Brahim Zerd",
    },
    {
      fieldname: "Nationality",
      fieldValue: "French",
    },
    {
      fieldname: "Email",
      fieldValue: "brahimzerd@gmail.com",
    },
    {
      fieldname: "Languages",
      fieldValue: "French, English, Spanish",
    },
  ],
};

const experience = {
  icon: "trouver une icon",
  title: "My experience",
  description: "description de mes experiences",
  items: [
    {
      company: "Everwave",
      position: "Front End Developer",
      duration: "2023 - Present",
    },
    {
      company: "Freelance",
      position: "Full Stack Developer",
      duration: "2023 - Present",
    },
    {
      company: "Unicitee Creation",
      position: "Full Stack Developer / Wordpress Developer",
      duration: "2024 - Present",
    },
    {
      company: "Docaposte Agility",
      position: "Intern Front End Developer",
      duration: "March 2024 - April 2024",
    },
  ],
};
const education = {
  icon: "trouver une icon",
  title: "My education",
  description: "description de mes experiences",
  items: [
    {
      institution: "OpenClassroom",
      position: "Front end Web Development",
      duration: "2020 - 2023",
    },
    {
      institution: "Online Course Platform",
      position: "Programming Course in Rust",
      duration: "2023 - Present",
    },
  ],
};

const skills = {
  title: "My skills",
  description: "",
  skillslist: [
    {
      icon: <FaHtml5 />,
      name: "Html 5",
    },
    {
      icon: <FaCss3 />,
      name: "Css 3",
    },
    {
      icon: <FaJs />,
      name: "Javascript",
    },

    {
      icon: <FaReact />,
      name: "React.js",
    },

    {
      icon: <FaFigma />,
      name: "Figma",
    },
    {
      icon: <FaDocker />,
      name: "Docker",
    },
    {
      icon: <RiNextjsLine />,
      name: "NextJS",
    },
    {
      icon: <RiTailwindCssFill />,
      name: "Tailwind",
    },
  ],
};

const Resume = () => {
  const { t } = useTranslation();
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto ">
        <Tabs
          className="flex flex-col xl:flex-row gap-[60px]"
          defaultValue="experience"
        >
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="experience">{t("Experience")}</TabsTrigger>
            <TabsTrigger value="education">{t("Education")}</TabsTrigger>
            <TabsTrigger value="skills">{t("Skills")}</TabsTrigger>
            <TabsTrigger value="about">{t("About me")}</TabsTrigger>
          </TabsList>
          <div className="min-h-[70vh] w-full">
            <TabsContent value="experience" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{t(experience.title)}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {t(experience.description)}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px] ">
                    {experience.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#232329] h-[185px]  py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start"
                        >
                          <span className="text-accent">{item.duration}</span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                            {item.position}
                          </h3>
                          <div className="flex items-center gap-3">
                            <span className="w-[6px] h-[6px] bg-accent rounded-full"></span>
                            <p className="text-white/60">{item.company}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            <TabsContent value="education" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{t(education.title)}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {t(education.description)}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {education.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#232329] h-[185px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start"
                        >
                          <span className="text-accent">{item.duration}</span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                            {item.position}
                          </h3>
                          <div className="flex items-center gap-3">
                            <span className="w-[6px] h-[6px] bg-accent rounded-full"></span>
                            <p className="text-white/60">{item.institution}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            <TabsContent value="skills" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{t(skills.title)}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {skills.description}
                </p>
                <ul className="max-w-[600px] mx-auto xl:mx-0 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[20px]">
                  {skills.skillslist.map((item, index) => {
                    return (
                      <TooltipProvider delayDuration={100}>
                        <Tooltip>
                          <TooltipTrigger>
                            <li
                              key={index}
                              className="bg-[#232329] h-[125px] w-[125px] rounded-xl flex flex-col justify-center items-center text-center"
                            >
                              <div className="hover:text-accent cursor-pointer text-6xl">
                                {item.icon}
                              </div>
                            </li>
                          </TooltipTrigger>
                          <TooltipContent>{item.name}</TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>
            <TabsContent
              value="about"
              className="w-full text-center xl:text-left"
            >
              <div className="flex flex-col gap-[30px]">
                <h3 className="text-4xl font-bold">{about.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {about.description}
                </p>
                <ul className="grid grid-cols-1 xl:grid-cols2 gap-y-6 max-w-[620px] mx-auto xl:mx-0">
                  {about.info.map((item, index) => {
                    return (
                      <li
                        key={index}
                        className="flex items-center justify-center xl:justify-start gap-4"
                      >
                        <span className="text-white/60">
                          {t(item.fieldname)}
                        </span>
                        <span className="text-xl">{item.fieldValue}</span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default Resume;
