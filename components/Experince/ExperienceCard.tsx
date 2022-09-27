import React from "react";
import Image from "next/image";
import displayPic from "../../img/287859016_756402022054509_2491597428416444573_n.jpg";
import { motion } from "framer-motion";
import { Experience } from "../../typings";
import { urlFor } from "../../sanity";

type Props = {
  experience: Experience;
};

const ExperienceCard = ({ experience }: Props) => {
  return (
    <article className="duration-200 overflow-hidden opacity-40 hover:opacity-100 cursor-pointer transition-opacity  snap-center bg-[#292929] p-6 w-[290px] md:w-[380px] xl:[900px] flex flex-col rounded-lg items-center space-y-5 flex-shrink-0">
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        transition={{ duration: 1.2 }}
        whileInView={{ opacity: 1, y: 8 }}
        viewport={{ once: true }}
        className="w-24 h-24 relative rounded-full overflow-hidden xl:w-[100px] xl:h-[100px]"
      >
        <Image
          src={urlFor(experience?.companyImage).url()}
          layout="fill"
          alt="dp"
        />
      </motion.div>

      <div className="px-0 md:px-6">
        <h4 className="text-3xl font-light">Frontend Developer</h4>
        <p className="font-bold text-2xl mt-1">at Nascenia</p>
        <div className="flex space-x-2 my-2">
          {experience.technologies.map((tech) => (
            <div
              key={tech._id}
              className="w-8 h-8 relative rounded-full overflow-hidden xl:w-[50px] xl:h-[50px]"
            >
              <Image src={urlFor(tech.image).url()} layout="fill" alt="dp" />
            </div>
          ))}
        </div>
        <p className="uppercase py-3 text-gray-300">
          {new Date(experience.dateStarted).toDateString()} -{" "}
          {experience.isCurrentlyWorkingHere
            ? "Present"
            : new Date(experience.dateEnded).toDateString()}
        </p>
        <ul className="list-disc space-y-1 ml-5 text-lg">
          {experience.points.map((point, i) => (
            <li key={i}>{point}</li>
          ))}
        </ul>
      </div>
    </article>
  );
};

export default ExperienceCard;
