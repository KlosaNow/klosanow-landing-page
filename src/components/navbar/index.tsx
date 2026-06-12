"use client";
import React, { useState, useEffect } from "react";

import { Menu } from "lucide-react";
import { Links } from "@/data";
import { Logo } from "../ui/Logo";
import { JoinWaitlistButton } from "../ui/JoinWaitlistButton";
import { MobileNav } from "./MobileNav";
import { NavLinks } from "./NavLinks";

export const Navbar: React.FC = () => {
  const [navIsOpen, setNavIsOpen] = useState<boolean>(false);
  const [scrolled, setScrolled] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed bg-white flex justify-between items-center top-0 left-0 w-full py-5 px-5 md:px-20 border-b border-black/10 h-20 z-10 transition-shadow duration-300 ${scrolled ? "shadow-md" : "shadow-none"}`}
    >
      <div className="flex justify-center">
        <Logo />
      </div>
      {/* Desktop Navigation */}
      <div className="hidden md:flex justify-between items-center">
        <ul className="flex space-x-10 font-accent">
          {Links.map(({ title, href }, i) => (
            <li
              key={i}
              className="list-none text-base text-primary-bold font-medium"
            >
              <NavLinks href={href}>{title}</NavLinks>
            </li>
          ))}
        </ul>
      </div>
      {/* Join waitlist desktop view  */}
      <div className="hidden md:flex">
        <JoinWaitlistButton
          handleButtonClick={() => window.open("https://zc.vg/tav67", "_blank")}
        />
      </div>

      {/* Mobile Menu */}
      <MobileNav navIsOpen={navIsOpen} setNavIsOpen={setNavIsOpen} />

      {/* Mobile Menu button */}
      <button
        className="border p-2 rounded-lg md:hidden cursor-pointer text-primary-bold hover:bg-gray-50 transition-colors"
        onClick={(): void => setNavIsOpen((prev) => !prev)}
      >
        <Menu size={20} />
      </button>
    </nav>
  );
};
