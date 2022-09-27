import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import displayPic from "../img/287859016_756402022054509_2491597428416444573_n.jpg";
import { Project } from "../typings";
import { urlFor } from "../sanity";

type Props = {
  projects: Project[];
};

const Projects = ({ projects }: Props) => {
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

      <div className="h-full space-y-4 relative flex scrollbar-thin scrollbar-thumb-primary scrollbar-track-gray-400/20 overflow-x-scroll w-full overflow-y-hidden z-20 snap-x snap-mandatory">
        {projects.map((project, index) => (
          <div
            key={index}
            className="h-full p-20 z-20 w-screen flex-shrink-0 snap-center flex flex-col justify-center items-center"
          >
            <motion.div
              initial={{
                y: -200,
                opacity: 0,
              }}
              transition={{ duration: 1 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="w-28 h-28 sm:w-60 sm:h-60 relative rounded-full overflow-hidden"
            >
              <Image src={urlFor(project.image).url()} layout="fill" alt="dp" />
            </motion.div>
            <div className="sm:space-y-6 space-y-2 px-1 md:px-10 max-w-3xl">
              <h4 className="sm:text-2xl text-md font-semibold text-center mt-8">
                <span className="underline decoration-primary/50">
                  Case Study {index + 1} of {projects.length}:
                </span>{" "}
                {project.title}
              </h4>
              <div className="flex items-center justify-center">
                {project?.technologies.map((tech) => (
                  <div
                    key={tech._id}
                    className="w-6 h-6 sm:w-6 sm:h-6 relative rounded-full overflow-hidden"
                  >
                    <Image
                      src={urlFor(tech.image).url()}
                      layout="fill"
                      alt="dp"
                    />
                  </div>
                ))}
              </div>
              <p className="text-lg text-center md:text-left">
                {project.summary}
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
