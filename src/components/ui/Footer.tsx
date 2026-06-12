import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Logo } from "./Logo";
import { authFooter, footerSocialLinks, navFooter } from "@/data";

export const Footer: React.FC = () => (
  <footer className="relative border-t border-[var(--color-primary-15)] grid md:grid-cols-2 gap-10 lg:justify-items-center lg:grid-cols-3 bg-primary-thin p-5 sm:p-10 lg:p-20">
    <div className="flex flex-col space-y-4">
      <Logo />
      <p className="font-accent text-sm text-[var(--color-black-50)] leading-relaxed max-w-[28ch]">
        Bridging the Gap Between Learners and Tutors
      </p>
      <p className="font-accent text-xs text-[var(--color-black-20)]">
        © <span>{new Date().getFullYear()}</span> Klosanow. All rights reserved.
      </p>
    </div>

    {/* Extra links */}
    <div className="flex flex-col">
      <h2 className="font-accent font-bold text-xs uppercase tracking-widest text-[var(--color-primary-80)] mb-4">
        Quick Links
      </h2>
      <div className="grid md:grid-cols-2 gap-x-8">
        <ul className="space-y-2.5">
          {navFooter.map(({ title, href }, _i) => (
            <li key={_i}>
              <Link
                href={href}
                className="font-accent text-sm text-[var(--color-black-50)] hover:text-[var(--color-primary-50)] transition-colors duration-200"
              >
                {title}
              </Link>
            </li>
          ))}
        </ul>
        <ul className="space-y-2.5 mt-2.5 md:mt-0">
          {authFooter.map(({ title, href }, _i) => (
            <li key={_i}>
              <Link
                href={href}
                className="font-accent text-sm text-[var(--color-black-50)] hover:text-[var(--color-primary-50)] transition-colors duration-200"
              >
                {title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>

    {/* Socials */}
    <div>
      <h2 className="font-accent font-bold text-xs uppercase tracking-widest text-[var(--color-primary-80)] mb-4">
        Follow Us
      </h2>
      <ul className="flex gap-3">
        {footerSocialLinks.map(({ url, href, width, height }, _i) => (
          <li key={_i}>
            <Link
              href={href}
              className="block opacity-75 hover:opacity-100 transition-opacity duration-200 hover:scale-110 transform"
            >
              <Image
                src={url}
                alt="socialImg"
                width={width}
                height={height}
                draggable={false}
              />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  </footer>
);
