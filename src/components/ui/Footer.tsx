import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Logo } from "./Logo";
import { authFooter, footerSocialLinks, navFooter } from "@/data";

export const Footer: React.FC = () => (
  <footer className="relative grid md:grid-cols-2 gap-10 lg:justify-items-center lg:grid-cols-3 bg-primary-thin p-5 sm:p-10 lg:p-20">
    <div className="flex flex-col space-y-5">
      <Logo />
      <p className="font-accent">
        Bridging the Gap Between Learners and Tutors
      </p>

      <p className="font-accent">
        © <span>{new Date().getFullYear()}</span> All rights reserved
      </p>
    </div>
    {/* Extra links  */}
    <div className="flex flex-col">
      <h2 className="font-accent">Quick links</h2>
      <div className="grid md:grid-cols-2">
        <ul className="mt-4 space-y-2">
          {navFooter.map(({ title, href }, _i) => (
            <li key={_i} className="font-accent">
              <Link href={href}>{title}</Link>
            </li>
          ))}
        </ul>
        <ul className="mt-4 space-y-2">
          {authFooter.map(({ title, href }, _i) => (
            <li key={_i} className="font-accent">
              <Link href={href}>{title}</Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
    {/* Socials  */}
    <div>
      <h2 className="font-accent">Follow Us</h2>
      <ul className="flex gap-4 mt-4">
        {footerSocialLinks.map(({ url, href, width, height }, _i) => (
          <li key={_i}>
            {" "}
            <Link href={href}>
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
