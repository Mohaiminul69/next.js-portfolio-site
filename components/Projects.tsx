import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import displayPic from "../img/287859016_756402022054509_2491597428416444573_n.jpg";

type Props = {};

const Projects = (props: Props) => {
  const projects = [1, 2, 3, 4, 5, 6];
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1.5,
      }}
      className="h-screen pt-32 sm:pt-28 flex relative overflow-hidden flex-col text-left md:flex-row max-w-full px-10 justify-evenly mx-auto items-center"
    >
      <h1 className="pageTitle">Projects</h1>

      <div className="h-full space-y-4 relative flex overflow-x-scroll w-full overflow-y-hidden z-20 snap-x snap-mandatory">
        {projects.map((project, index) => (
          <div
            key={index}
            className="h-full p-20 z-20 w-screen flex-shrink-0 snap-center flex flex-col justify-center items-center"
          >
            <div className="w-16 h-16 relative rounded-full overflow-hidden">
              <Image src={displayPic} layout="fill" alt="dp" />
            </div>
            <div className="space-y-6 px-8 md:px-10 max-w-3xl">
              <h4 className="text-2xl font-semibold text-center mt-8">
                <span className="underline decoration-primary/50">
                  Case Study {index + 1} of {projects.length}:
                </span>{" "}
                UPs Clone
              </h4>
              <p className="text-lg text-center md:text-left">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Quaerat natus, mollitia nostrum fugiat error beatae molestias,
                reiciendis perferendis sint dolore laudantium suscipit soluta
                consequuntur ipsa.
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="-skew-y-12 w-full absolute top-[25%] bg-primary/10 h-[400px]" />
    </motion.div>
  );
};

export default Projects;
