"use client";
import { motion } from "framer-motion";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

const Inner = ({ children }) => {
  const [dimensions, setDimensions] = useState({ height: 0, width: 0 });
  const pathname = usePathname();
  const { t } = useTranslation();
  const anim = (variants) => {
    return {
      initial: "initial",
      animate: "enter",
      exit: "exit",
      variants,
    };
  };

  const routes = {
    "/": `${t("home")}`,
    "/resume": `${t("resume")}`,
    "/work": `${t("work")}`,
    "/contact": `${t("contact")}`,
  };

  const text = {
    initial: { opacity: 1 },
    enter: {
      opacity: 0,
      top: -100,

      transition: {
        duration: 0.75,
        delay: 0.3,
        ease: [0.76, 0, 0.24, 1],
      },
    },
  };
  useEffect(() => {
    const resize = () => {
      setDimensions({
        height: window.innerHeight,
        width: window.innerWidth,
      });
    };
    resize();
    window.addEventListener("resize", resize);
    return () => window.removeEventListener("resize", resize);
  }, []);

  return (
    <div className="page">
      <motion.p
        {...anim(text)}
        className="text-z absolute text-white top-[40%] translate-x-2/4  sm:left-[20%] z-10 text-2xl"
      >
        {routes[pathname]}
      </motion.p>
      <div
        className="bg-white w-[100vw] height-[calc(100vh+600px)] fixed pointer-events-none left-0 "
        style={{ opacity: dimensions.width > 0 ? 0 : 1 }}
      ></div>
      {dimensions.width > 0 && <SVG {...dimensions} />} {children}
    </div>
  );
};

const SVG = ({ width, height }) => {
  const initialPath = `M0 300
  Q${width / 2} 0 ${width} 300
  L${width} ${height + 300}
  Q${width / 2} ${height + 600} 0 ${height + 300}
  L0 300`;

  const targetPath = `M0 300
  Q${width / 2} 0 ${width} 300
  L${width} ${height}
  Q${width / 2} ${height} 0 ${height}
  L0 300`;
  const anim = (variants) => {
    return {
      initial: "initial",
      animate: "enter",
      exit: "exit",
      variants,
    };
  };

  const curve = {
    initial: {
      d: initialPath,
    },
    enter: {
      d: targetPath,
      top: "-100vh",
      transition: {
        duration: 0.75,
        delay: 0.3,
        ease: [0.75, 0, 0.24, 1],
      },
    },
    exit: {
      d: initialPath,
      transition: {
        duration: 0.75,
        delay: 0.3,
        ease: [0.75, 0, 0.24, 1],
      },
    },
  };

  const slider = {
    initial: {
      top: "-300px",
    },
    enter: {
      top: "-100vh",
      transition: {
        duration: 0.75,
        delay: 0.3,
        ease: [0.75, 0, 0.24, 1],
      },
      transitionEnd: {
        top: "100vh",
      },
    },
    exit: {
      top: "-300px",
      transition: {
        duration: 0.75,
        delay: 0.3,
        ease: [0.75, 0, 0.24, 1],
      },
    },
  };
  return (
    <motion.svg fill={"#FDA745"} {...anim(slider)}>
      <motion.path {...anim(curve)}></motion.path>
    </motion.svg>
  );
};

export default Inner;
