import React, { useEffect, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { MobileLinks } from "@/data";
import { NavLinks } from "./NavLinks";
import { Logo } from "../ui/Logo";
import { X } from "lucide-react";

export const MobileNav: React.FC<{
  navIsOpen: boolean;
  setNavIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}> = ({ navIsOpen, setNavIsOpen }) => {
  const navRef = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    const handleOutsideClick = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node))
        setNavIsOpen(false);
    };

    if (navIsOpen) document.addEventListener("click", handleOutsideClick);

    return () => document.removeEventListener("click", handleOutsideClick);
  }, [navIsOpen, setNavIsOpen]);

  return (
    <AnimatePresence>
      {navIsOpen && (
        <div className="fixed inset-0 z-50 flex md:hidden backdrop-brightness-90 backdrop-saturate-150 ">
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ type: "tween", duration: 0.3 }}
            ref={navRef}
          >
            <div className="h-full bg-white w-3xs relative py-1 px-4">
              <div className="mt-4">
                <Logo />
              </div>
              <button
                className="absolute text-primary-bold top-3 right-3 cursor-pointer"
                onClick={() => setNavIsOpen(false)}
              >
                <X />
              </button>
              <div className="flex justify-center mt-10">
                <ul className="flex flex-col space-y-8 text-primary-bold font-accent">
                  {MobileLinks.map(({ title, href }, i) => (
                    <li key={i}>
                      <NavLinks
                        href={href}
                        handleNavClick={() => setNavIsOpen((prev) => !prev)}
                      >
                        {title}
                      </NavLinks>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
