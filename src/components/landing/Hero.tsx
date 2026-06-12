"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Elispce } from "../ui/Elispce";
import { heroImg } from "@/assets";

export const Hero: React.FC = () => (
  <div className="flex flex-col max-w-[2024px] justify-center xl:flex-row lg:space-x-40 relative mt-10">
    <Elispce className="absolute w-[400px] h-[400px] border-secondary-thin -z-1 -top-52 -left-70" />
    <motion.div
      className="relative space-y-6 p-8"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
    >
      {/* Badge pill */}
      <span className="inline-flex items-center gap-2 bg-[var(--color-primary-5)] text-[var(--color-primary-60)] text-sm font-accent font-semibold px-4 py-1.5 rounded-full">
        <span className="w-2 h-2 rounded-full bg-[var(--color-primary-50)] animate-pulse" />
        Online Education, Reimagined
      </span>

      <h1 className="font-main font-black text-4xl md:text-5xl lg:text-6xl w-full lg:max-w-[18ch] leading-tight">
        Online teaching and learning just got seamless with Klosanow
      </h1>
      <Elispce className="absolute w-[35px] h-[35px] bg-secondary-thin -z-1 top-40 left-[80%] md:left-[96%]" />
      <p className="font-accent text-lg text-[var(--color-black-50)] max-w-[52ch] leading-relaxed">
        Create engaging video learning content, send it to your learning
        community and stay connected 24/7 through the messaging feature on the
        platform.
      </p>

      <div className="flex items-center gap-4">
        <button
          className="btn-primary inline-flex items-center gap-2"
          onClick={() => window.open("https://zc.vg/tav67", "_blank")}
        >
          Join Waitlist <ArrowRight size={16} />
        </button>
      </div>

      {/* Stats row */}
      <div className="flex flex-wrap gap-6 pt-2">
        {[
          { value: "500+", label: "Tutors" },
          { value: "2,000+", label: "Learners" },
          { value: "Free", label: "To start" },
        ].map(({ value, label }) => (
          <div key={label} className="flex flex-col">
            <span className="font-main font-black text-2xl text-[var(--color-primary-60)]">{value}</span>
            <span className="font-accent text-sm text-[var(--color-black-50)]">{label}</span>
          </div>
        ))}
      </div>
    </motion.div>

    <motion.div
      className="relative max-sm:mt-10 flex justify-center"
      animate={{ scale: [1.05, 1], x: [-60, 0] }}
      transition={{ duration: 0.6 }}
    >
      <div className="flex justify-center items-center w-[380px] h-[380px] md:w-[450px] md:h-[450px] bg-secondary-sm rounded-full transition-all duration-500 hover:scale-105">
        <Elispce className="absolute w-[500px] h-[500px] border-secondary-sm -z-1 top-52 -right-52" />
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
