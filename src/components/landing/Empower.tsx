"use client";
import React, { useRef } from "react";
import Image from "next/image";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { Elispce } from "../ui/Elispce";
import { ImgPaths } from "@/data";
import { cn } from "@/lib/utils";

export const Empower: React.FC = () => {
  const plugin = useRef(Autoplay({ delay: 2000, stopOnInteraction: true }));

  return (
    <div className="flex flex-col xl:flex-row lg:space-x-40 relative mt-10 lg:mt-20 -z-1 visible">
      <div className="relative space-y-5 p-8">
        <h1 className="font-main font-bold text-3xl md:text-4xl lg:text-[40px] w-full lg:max-w-[23ch] leading-10 md:leading-11">
          Empowering Learners and Tutors Through Online Education
        </h1>
        <Elispce className="absolute w-[35px] h-[35px] bg-secondary-thin -z-1 top-80 left-[80%] md:left-[76%]" />
        <p className="font-accent text-xl max-sm:w-full">
          The Klosanow platform is both effective and efficient, enabling
          learners access learning contents created by tutors.
        </p>
      </div>

      <div className="relative max-sm:mt-10 flex justify-center z-0">
        <div className="flex justify-center items-center w-[300px] h-[300px] md:w-[350px] md:h-[350px] bg-secondary-sm rounded-full">
          {/* <Elispce className="absolute w-[430px] h-[430px] bg-secondary-thin -z-1 top-0 " /> */}
          {/* Sliders */}
          <Carousel
            plugins={[plugin.current]}
            className="w-full max-w-xs"
            onMouseEnter={plugin.current.stop}
            onMouseLeave={plugin.current.reset}
          >
            <CarouselContent>
              {ImgPaths.map(({ url, width, height, className }, index) => (
                <CarouselItem key={index}>
                  <div className={cn("select-none", className)}>
                    <Image
                      src={url}
                      width={width}
                      height={height}
                      alt="slides"
                      draggable={false}
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
      </div>
    </div>
  );
};

{
  /* <Image
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
/>; */
}
