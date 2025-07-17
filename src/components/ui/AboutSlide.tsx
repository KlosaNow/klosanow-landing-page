"use client";
import React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import {
  useCarousel,
  Carousel,
  CarouselContent,
  CarouselItem,
  // CarouselNext,
  // CarouselPrevious,
} from "./carousel";
import { aboutSlide } from "@/data";
import { Elispce } from "./Elispce";

const CarouselControls = () => {
  const { scrollPrev, scrollNext } = useCarousel();
  return (
    <div className="flex justify-center items-center gap-6">
      <button onClick={scrollPrev} className="text-primary cursor-pointer">
        <ChevronLeft className="w-8 h-10" />
      </button>
      <span className="h-1 w-7 rounded-sm bg-primary-xs" />
      <button onClick={scrollNext} className="text-primary cursor-pointer">
        <ChevronRight className="w-8 h-10" />
      </button>
    </div>
  );
};

export const AboutSlide: React.FC = () => (
  <Carousel
    className="relative w-[350px] max-[375px]:w-[300px] sm:w-[500px] md:w-[700px] lg:w-[850px] xl:w-[1000px] xl:h-[390px] bg-primary-thin rounded-2xl"
    opts={{ loop: true }}
  >
    <CarouselContent className="xl:h-[390px] w-full">
      {aboutSlide.map(({ title, desc }, index) => (
        <CarouselItem
          key={index}
          className="relative w-full h-[390px] flex items-center justify-center"
        >
          {/* Elipsce elements */}

          <Elispce className="absolute bg-neutral-xs w-[100px] h-[100px] md:w-[150px] md:h-[150px] xl:w-[208px] xl:h-[208px] top-4 left-10" />
          <Elispce className="absolute bg-neutral-xs w-[45px] h-[45px] md:w-[50px] md:h-[50px] xl:w-[50px] xl:h-[50px] bottom-20 left-40" />
          <Elispce className="absolute bg-neutral-xs w-[30px] h-[30px] md:w-[34px] md:h-[34px] xl:w-[35px] xl:h-[35px] top-32 left-96" />
          <Elispce className="absolute bg-neutral-xs w-[75px] h-[75px] xl:w-[108px] xl:h-[108px] top-40 right-52" />
          <Elispce className="absolute bg-neutral-xs w-[50px] h-[50px xl:w-[70px] xl:h-[70px] top-20 right-10" />

          <div className="w-full h-full flex flex-col justify-center items-center select-none">
            <h1 className="font-main font-semibold text-2xl xl:text-4xl z-10">
              {title}
            </h1>
            <p className="mt-4 font-accent text-center text-xl max-w-[24ch] md:max-w-[45ch] z-10 select-none">
              {desc}
            </p>
          </div>
        </CarouselItem>
      ))}
    </CarouselContent>
    <div className="absolute -bottom-16 left-1/2 transform -translate-x-1/2 z-20 flex">
      {" "}
      <CarouselControls />
    </div>

    {/* <div className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 z-20 flex gap-10">
        <CarouselPrevious className="cursor-pointer text-primary" />
        <span className="h-1 w-7 rounded-sm bg-primary-xs" />
        <CarouselNext className="cursor-pointer text-primary font-extrabold text-2xl" />
      </div> */}

    {/* <div className="absolute flex justify-center items-center inset-x-0 -bottom-10 ">
        <div className="flex items-center gap-4">
          <CarouselPrevious className="cursor-pointer text-primary font-bold text-xl" />
          <CarouselNext className="cursor-pointer text-primary font-extrabold text-xl" />
        </div>
      </div> */}
  </Carousel>
);
