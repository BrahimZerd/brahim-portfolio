// variants
import { motion } from "framer-motion";
const stairAnimation = {
  initial: {
    bottom: "0%",
  },
  animate: {
    bottom: "100%",
  },
  exit: {
    bottom: ["100%", "0%"],
  },
};

const reverseIndex = (index) => {
  const totalSteps = 6;
  return totalSteps - index - 1;
};

const Stairs = () => {
  return (
    <>
      {[...Array(8)].map((_, index) => {
        return (
          <motion.div
            key={index}
            variants={stairAnimation}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{
              duration: 0.4,
              ease: "easeIn",
              delay: reverseIndex(index) * 0.1,
            }}
            className={`h-[full] w-full ${
              index === 3 || index === 5 ? "bg-accent" : "bg-white"
            } relative`}
          />
        );
      })}
    </>
  );

  {
    /** render 6 motion divs, each representing a step of the stairs */
  }
};

export default Stairs;
