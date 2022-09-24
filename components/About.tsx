/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import displayPic from "../img/287859016_756402022054509_2491597428416444573_n.jpg";
import React from "react";
import { motion } from "framer-motion";

type Props = {};

const About = (props: Props) => {
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
      className="pt-32 sm:pt-0 px-8 relative mx-auto items-center max-w-6xl md:text-left md:flex-row h-screen flex flex-col space-y-8 text-center overflow-hidden"
    >
      <h3 className="ml-6 sm:ml-0 absolute top-24 uppercase text-gray-500 text-2xl tracking-[20px]">
        About
      </h3>
      <motion.div
        initial={{
          x: -200,
          opacity: 0,
        }}
        whileInView={{
          x: 0,
          opacity: 1,
        }}
        transition={{ duration: 1.2 }}
        viewport={{ once: true }}
        className="sm:w-[300px] sm:h-[400px] sm:rounded-xl mt-36 imageDiv md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover"
      ></motion.div>
      <div className="space-y-10 px-0 md:px-10">
        <h4 className="text-2xl font-semibold">
          Here is a <span className="underline decoration-primary">little</span>{" "}
          Background
        </h4>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio
          hic nihil doloremque dignissimos cupiditate voluptatem provident
          similique tempora quibusdam omnis in minima, possimus odio voluptates,
          aliquam deserunt, eum obcaecati eos?
        </p>
      </div>
    </motion.div>
  );
};

export default About;
