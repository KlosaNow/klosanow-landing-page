"use client";
import React from "react";
import { JoinWaitlistButton } from "../ui/JoinWaitlistButton";

export const Connect: React.FC = () => (
  <div
    className="w-full flex flex-col justify-center items-center bg-cover bg-center bg-no-repeat mt-12 md:-mt-10 xl:-mt-9 h-[500px] z-[11000] px-4"
    style={{ backgroundImage: `url(/connect.png)` }}
  >
    <span className="inline-block font-accent font-semibold text-sm text-white/80 uppercase tracking-widest mb-3">
      Let&apos;s Connect
    </span>
    <h1 className="text-white font-main font-black text-2xl md:text-4xl max-w-[28ch] text-center leading-tight">
      Stay Connected with Our Newsletter for the Latest Updates
    </h1>
    <form
      className="flex items-center gap-2 mt-6 bg-white w-full max-w-[360px] sm:max-w-[490px] lg:max-w-xl px-3 py-2 rounded-xl shadow-lg"
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
        className="flex-1 placeholder-gray-400 bg-transparent border-none outline-none px-3 py-2 font-accent text-sm text-gray-900"
        placeholder="Your email address"
        aria-label="Your Email Address"
      />
      <JoinWaitlistButton className="text-sm shrink-0" />
    </form>
  </div>
);
