import React from "react";
import { motion } from "framer-motion";
import { useForm, SubmitHandler } from "react-hook-form";
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from "@heroicons/react/24/solid";

type Props = {};

type Inputs = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

const Contact = (props: Props) => {
  const { register, handleSubmit } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (formData) => {
    window.location.href = `mailto:mohaiminul69@gmail.com?subject=${formData.subject}&body=Hi, my name is ${formData.name}. ${formData.message} ${formData.email}`;
  };

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
      className="h-screen pt-32 sm:pt-28 flex relative overflow-hidden flex-col text-left md:flex-row max-w-full px-6 sm:px-10 justify-center mx-auto items-center"
    >
      <h1 className="pageTitle">Contact Me</h1>

      <div className="flex flex-col space-y-6">
        <h4 className="text-md xl:text-xl font-semibold text-center">
          I have got just what you need.{" "}
          <span className="underline decoration-primary/50">Lets Talk</span>
        </h4>

        <div className="sm:space-y-2 space-y-1">
          <div className="flex items-center space-x-5 justify-center">
            <PhoneIcon className="text-primary h-5 w-5 animate-pulse" />
            <p className="text-xl">+01732442324</p>
          </div>

          <div className="flex items-center space-x-5 justify-center">
            <EnvelopeIcon className="text-primary h-5 w-5 animate-pulse" />
            <p className="text-xl">mohaiminul@gmail.com</p>
          </div>

          <div className="flex items-center space-x-5 justify-center">
            <MapPinIcon className="text-primary h-5 w-5 animate-pulse" />
            <p className="text-xl">123 Developer Lane</p>
          </div>
        </div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col space-y-2 w-full sm:w-fit mx-auto"
        >
          <div className="flex space-x-2">
            <input
              {...register("name")}
              placeholder="Name"
              className="contactInput"
              type="text"
            />
            <input
              {...register("email")}
              placeholder="Email"
              className="contactInput"
              type="email"
            />
          </div>

          <input
            {...register("subject")}
            placeholder="Subject"
            className="contactInput"
            type="text"
          />

          <textarea
            {...register("message")}
            placeholder="Message"
            className="contactInput"
          />
          <button
            type="submit"
            className="bg-primary text-black font-bold py-5 px-18 rounded-md text-lg"
          >
            Submit
          </button>
        </form>
      </div>
    </motion.div>
  );
};

export default Contact;
