import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import displayPic from "../../img/91112540_881051512316044_4608303671552245760_n.jpg";

type Props = {
  directionLeft?: boolean;
};

const Skill = (props: Props) => {
  const { directionLeft } = props;
  return (
    <div className="flex relative cursor-pointer group items-center justify-center">
      <motion.div
        initial={{
          x: directionLeft ? 200 : -200,
          opacity: 0,
        }}
        transition={{ duration: 1 }}
        whileInView={{ opacity: 1, x: 0 }}
        className="border-2 border-gray-500 p-2 rounded-full"
      >
        <div className="filter group-hover:grayscale transition duration-300 ease-in-out w-16 h-16 relative rounded-full overflow-hidden">
          <Image src={displayPic} layout="fill" alt="dp" />
        </div>
      </motion.div>
      <div className="group-hover:bg-white rounded-full w-20 h-20 ease-in-out absolute opacity-0 group-hover:opacity-80 transition duration-300">
        <div className="flex items-center justify-center h-full">
          <p className="text-3xl font-bold text-black opacity-100">100%</p>
        </div>
      </div>
    </div>
  );
};

export default Skill;
