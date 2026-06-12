import React from "react";
import { Elispce } from "../ui/Elispce";
import { features } from "@/data";
import Image from "next/image";

export const Features: React.FC = () => (
  <div className="relative flex justify-center mt-10 pb-1 lg:pb-24">
    <Elispce className="absolute w-[500px] h-[500px] bg-secondary-sm -z-1 top-52 -left-52" />
    <div className="flex flex-col justify-center bg-neutral-xmd w-full p-8 sm:p-14 lg:p-20 rounded-2xl shadow-xl">
      <div className="flex justify-end relative w-full">
        <div className="text-center w-full lg:max-w-[45ch] lg:text-end">
          <h1 className="relative font-main w-[110%] font-black text-3xl md:text-5xl">
            How Klosanow wo
            <span className="underline decoration-4 decoration-[var(--color-secondary-30)] md:no-underline md:after:absolute md:after:content[''] md:after:w-14 how-works md:after:h-1 md:after:bottom-0 md:after:right-0">
              rks
            </span>
          </h1>
        </div>
      </div>

      <div className="flex justify-center mt-12">
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
          {features.map(({ src, desc, title }, _i) => (
            <div
              key={_i}
              className="group flex flex-col items-center text-center gap-4 bg-white rounded-2xl w-[300px] p-8 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              <div className="flex items-center justify-center w-16 h-16 rounded-full bg-[var(--color-primary-5)]">
                <Image
                  src={src}
                  alt="features"
                  width={36}
                  height={36}
                  priority
                  draggable={false}
                />
              </div>
              {title && (
                <h3 className="font-main font-bold text-lg text-[var(--color-primary-80)]">
                  {title}
                </h3>
              )}
              <p className="font-accent text-sm text-[var(--color-black-50)] leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
);
