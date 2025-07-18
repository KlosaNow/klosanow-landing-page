import React from "react";
import Image from "next/image";
import { Elispce } from "@/components/ui/Elispce";
import { cultureImg, moonImg, stackImg } from "@/assets";
import { AboutSlide } from "@/components/ui/AboutSlide";
import { cultureTalks } from "@/data";

const About: React.FC = () => (
  <div className="relative mt-24 overflow-x-hidden pb-10">
    <div className="relative flex flex-col justify-center items-center p-5 sm:p-20">
      <Elispce className="absolute bg-[#FED7D7] w-[300px] h-[300px] md:w-[600px] md:h-[600px] -right-40 md:-right-80 top-64 bottom-0" />
      <div className="relative flex flex-col justify-center items-center max-w-[1000px]">
        <div className="absolute -top-10 -right-30">
          <Image src={moonImg} alt="moon img" draggable={false} />
        </div>
        <h1 className="font-main text-2xl md:text-4xl text-center">
          Get to Know Us!
        </h1>
        <p className="font-accent font-medium text-[18px] text-center mt-2 text-gray-500 max-w-[70ch]">
          At Klosanow, we revolutionize the educational landscape by providing a
          cutting-edge EdTech platform that seamlessly connects tutors with
          learners. Our innovative solution empowers tutors to create and share
          engaging pre-recorded video lessons, enabling learners to access and
          engage with the content conveniently on our platform, anytime and
          anywhere. Embrace the future of education with Klosanow and embark on
          a transformative teaching and learning experience that transcends
          traditional boundaries.
        </p>
        <div className="lg:-mt-24">
          <Image src={stackImg} alt="stack" draggable={false} />
        </div>
      </div>
    </div>
    {/* About slide  */}
    <div className="flex justify-center items-center pb-24 lg:pb-10">
      <AboutSlide />
    </div>

    {/* Culture talks */}
    <div className="relative flex flex-col md:flex-col-reverse xl:flex-row gap-28 mt-4 p-5 sm:p-20">
      <div className="">
        <h1 className="font-main text-2xl md:text-4xl">
          We live a worthwhile <span className="underline">culture</span>
        </h1>
        <div className="mt-4">
          {cultureTalks.map(({ title, text }, index) => (
            <div key={index} className="flex">
              <span className="font-accent text-[#525256] text-[18px] max-w-[50ch] mt-4">
                <u className="font-semibold text-[18px]">{title}</u> {text}
              </span>
            </div>
          ))}
        </div>
      </div>
      <div className="max-w-[500px]">
        <Image src={cultureImg} alt="img" draggable={false} />
      </div>
    </div>
  </div>
);

export default About;
