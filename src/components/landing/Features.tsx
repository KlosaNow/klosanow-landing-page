import React from "react";
import { Elispce } from "../ui/Elispce";
import { features } from "@/data";
import Image from "next/image";

export const Features: React.FC = () => (
  <div className="relative flex justify-center mt-10 pb-1 lg:pb-24">
    <Elispce className="absolute w-[500px] h-[500px] bg-secondary-sm -z-1 top-52 -left-52" />
    <div className="flex flex-col justify-center bg-neutral-xmd w-full p-20 rounded-2xl shadow-xl">
      <div className="flex justify-end relative w-full">
        <div className="text-center w-full lg:max-w-[45ch] lg:text-end">
          <h1 className="relative font-main w-[110%] font-bold text-xl md:text-5xl">
            How Klosanow wo
            <span className="underline decoration-4 decoration-[#e6b6a7] md:no-underline md:after:absolute md:after:content[''] md:after:w-14 how-works md:after:h-1 md:after:bottom-0 md:after:right-0">
              rks
            </span>
          </h1>
        </div>
      </div>

      <div className="flex justify-center mt-10">
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-5 md:gap-10 lg:gap-10 xl:gap-5">
          {features.map(({ src, desc }, _i) => (
            <div
              key={_i}
              className="flex flex-col space-y-2 justify-center items-center border border-[#4A5568] rounded-2xl w-[300px] h-[300px] md:w-[200px] lg:w-[270px]  xl:w-[300px] xl:h-[300px] px-2 transition-all duration-300 hover:scale-110"
            >
              <div className="">
                <Image
                  src={src}
                  alt="features"
                  width={70}
                  height={100}
                  priority
                  draggable={false}
                />
              </div>
              <div className="">
                <p className="text-center font-accent">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
);
