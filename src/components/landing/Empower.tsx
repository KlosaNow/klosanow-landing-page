"use client";
import React, { useRef } from "react";
import Image from "next/image";
import Autoplay from "embla-carousel-autoplay";
import { CheckCircle } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { Elispce } from "../ui/Elispce";
import { ImgPaths } from "@/data";
import { cn } from "@/lib/utils";

const benefits = [
  "Teach at your own pace with easy-to-use tools",
  "Learners can rewatch lessons until they fully grasp the concept",
  "Flexible scheduling — teach when you want, learn when you can",
  "Personalized content for any language, curriculum or learning style",
];

export const Empower: React.FC = () => {
  const plugin = useRef(Autoplay({ delay: 2000, stopOnInteraction: true }));

  return (
    <div className="flex flex-col xl:flex-row lg:space-x-40 relative mt-10 lg:mt-20 -z-1 visible">
      <div className="relative space-y-6 p-8">
        <span className="inline-block font-accent font-semibold text-sm text-[var(--color-primary-60)] uppercase tracking-widest">
          Why Klosanow
        </span>
        <h1 className="font-main font-black text-3xl md:text-4xl lg:text-5xl w-full lg:max-w-[20ch] leading-tight">
          Empowering Learners and Tutors Through Online Education
        </h1>
        <Elispce className="absolute w-[35px] h-[35px] bg-secondary-thin -z-1 top-80 left-[80%] md:left-[76%]" />
        <p className="font-accent text-base text-[var(--color-black-50)] max-w-[52ch] leading-relaxed">
          The Klosanow platform is both effective and efficient, enabling
          learners to access learning content created by tutors — anytime, anywhere.
        </p>
        <ul className="space-y-3">
          {benefits.map((benefit) => (
            <li key={benefit} className="flex items-start gap-3">
              <CheckCircle
                size={18}
                className="mt-0.5 shrink-0 text-[var(--color-primary-50)]"
              />
              <span className="font-accent text-sm text-[var(--color-black-50)] leading-relaxed">
                {benefit}
              </span>
            </li>
          ))}
        </ul>
      </div>

      <div className="relative max-sm:mt-10 flex justify-center z-0">
        <div className="flex justify-center items-center w-[300px] h-[300px] md:w-[350px] md:h-[350px] bg-secondary-sm rounded-full">
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
