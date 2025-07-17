"use client";
import React from "react";
import { JoinWaitlistButton } from "../ui/JoinWaitlistButton";

export const Connect: React.FC = () => (
  <div
    className="w-full flex flex-col justify-center items-center bg-cover bg-center bg-no-repeat mt-12 md:-mt-10 xl:-mt-9 h-[500px] z-[11000]"
    style={{ backgroundImage: `url(/connect.png)` }}
  >
    <p className="lg:text-[18px] text-white font-accent">Let’s Connect</p>
    <h1 className="text-white font-main font-bold text-2xl md:text-4xl max-w-[32ch] text-center mt-5">
      Stay Connected with Our Newsletter for the Latest Updates
    </h1>
    {/* Input */}
    <form
      className="relative flex justify-between px-2 sm:px-5 items-center mt-5 bg-white w-full max-w-[360px] max-[375px]:max-w-[330px] sm:max-w-[490px]  lg:max-w-xl xl:max-w-2xl h-24 rounded-2xl"
      onSubmit={(e) => {
        e.preventDefault();
      }}
    >
      <label htmlFor="newsletter-email" className="sr-only">
        Email Address
      </label>
      <input
        id="newsletter-email"
        type="email"
        required
        className="flex-1 placeholder-gray-400 bg-transparent border-none outline-none px-4 py-3 font-accent font-normal text-gray-900 rounded-l-2xl"
        placeholder="Your Email Address"
        aria-label="Your Email Address"
      />
      <JoinWaitlistButton className="font-semibold ml-2 max-sm:text-[12px] max-sm:font-normal" />
    </form>
  </div>
);
