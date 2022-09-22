import React from "react";
import { motion } from "framer-motion";

type Props = {};

const BackgroundCircles = (props: Props) => {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      animate={{
        scale: [0.5, 1.5, 1.5, 2, 1],
        opacity: [0.1, 0.2, 0.4, 0.8, 0.1, 1.0],
        borderRadius: ["20%", "20%", "50%", "80%", "20%"],
      }}
      transition={{ duration: 2.5 }}
      className="relative flex items-center justify-center"
    >
      <div className="absolute mt-52 animate-ping border border-[#333] rounded-full h-[200px] w-[200px]" />
      <div className="absolute mt-52 animate-ping border border-[#333] rounded-full h-[300px] w-[300px]" />
      <div className="absolute mt-52 animate-ping border border-[#333] rounded-full h-[500px] w-[500px]" />
      <div className="absolute mt-52 animate-pulse border border-primary opacity-20 rounded-full h-[800px] w-[800px]" />
      <div className="absolute mt-52 animate-ping border border-[#333] rounded-full h-[900px] w-[900px]" />
    </motion.div>
  );
};

export default BackgroundCircles;
