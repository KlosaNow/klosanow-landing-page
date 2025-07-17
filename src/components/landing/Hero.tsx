"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { JoinWaitlistButton } from "../ui/JoinWaitlistButton";
import { Elispce } from "../ui/Elispce";
import { heroImg } from "@/assets";

export const Hero: React.FC = () => (
  <div className="flex flex-col max-w-[2024px] justify-center xl:flex-row lg:space-x-40 relative mt-10">
    <Elispce className="absolute w-[400px] h-[400px] border-secondary-thin -z-1 -top-52 -left-70" />
    <motion.div
      className="relative space-y-5 p-8"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <h1 className="font-main font-bold text-3xl md:text-4xl w-full lg:max-w-[23ch] leading-10 md:leading-11">
        Online teaching and learning just got seamless with Klosanow
      </h1>
      <Elispce className="absolute w-[35px] h-[35px] bg-secondary-thin -z-1 top-40 left-[80%] md:left-[96%]" />
      <p className="font-accent text-xl max-sm:w-full">
        Create engaging video learning content, send it to your learning
        community and stay connected 24/7 through the messaging feature on the
        platform.
      </p>
      <div className="">
        <JoinWaitlistButton
          className="w-44 h-12 px-20 hover:underline"
          handleButtonClick={() => window.open("https://zc.vg/tav67", "_blank")}
        />
      </div>
    </motion.div>

    <motion.div
      className="relatve max-sm:mt-10 flex justify-center"
      whileHover={{ scale: 1.1 }}
      animate={{
        scale: [1.1, 1],
        x: [-100, 0],
      }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex justify-center items-center w-[380px] h-[380px] md:w-[450px] md:h-[450px] bg-secondary-sm rounded-full transition-all duration-500 hover:scale-110">
        <Elispce className="absolute w-[500px] h-[500px] border-secondary-sm -z-1 top-52 -right-52" />
        {/* <Elispce className="absolute w-[430px] h-[430px] bg-secondary-thin -z-1 top-0 " /> */}
        <Image
          src={heroImg}
          alt="hero"
          className="w-[350px] sm:w-[350px] md:w-[400px] lg:w-[400px]"
          width={500}
          height={500}
          sizes="(max-width: 640px) 250px,
         (max-width: 768px) 300px,
         (max-width: 1024px) 400px,
         500px"
          priority
          draggable={false}
        />
      </div>
    </motion.div>
  </div>
);
