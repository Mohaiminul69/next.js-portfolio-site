import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import displayPic from "../../img/287859016_756402022054509_2491597428416444573_n.jpg";

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
        className="border-2 border-gray-500 sm:p-2 p-1 rounded-full"
      >
        <div className="w-12 h-12 sm:w-16 sm:h-16 relative rounded-full overflow-hidden">
          <Image src={displayPic} layout="fill" alt="dp" />
        </div>
      </motion.div>
      <div className="group-hover:bg-white rounded-full w-12 h-12 sm:w-16 sm:h-16 ease-in-out absolute opacity-0 group-hover:opacity-80 transition duration-300">
        <div className="flex items-center justify-center h-full">
          <p className="sm:text-3xl text-sm font-bold text-black opacity-100">
            100%
          </p>
        </div>
      </div>
    </div>
  );
};

export default Skill;
