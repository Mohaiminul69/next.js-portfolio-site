import React from "react";
import { motion } from "framer-motion";
import Skill from "./Skill";
import { Skill as Skills } from "../../typings";

type Props = {
  skills: Skills[];
};

const Skills = ({ skills }: Props) => {
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
      className="h-screen pt-32 sm:pt-28 flex relative overflow-hidden flex-col text-left md:flex-row max-w-full px-10 justify-center mx-auto items-center"
    >
      <h1 className="pageTitle">Skills</h1>
      <h3 className="text-center absolute top-36 uppercase tracking-[3px] text-gray-500 text-sm">
        Hover over for currency profieciency
      </h3>

      <div className="grid grid-cols-4 sm:gap-4 gap-2">
        {skills?.slice(0, skills.length / 2).map((skill) => (
          <Skill key={skill._id} skill={skill} directionLeft />
        ))}
        {skills?.slice(skills.length / 2, skills.length).map((skill) => (
          <Skill key={skill._id} skill={skill} />
        ))}
      </div>
    </motion.div>
  );
};

export default Skills;
