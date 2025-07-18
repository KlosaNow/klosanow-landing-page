import Image from "next/image";
import React from "react";
import { contactImg } from "@/assets";
import { ContactForm } from "@/components/contact/ContactForm";
import { FAQ } from "@/components/contact/FAQ";

const Contact: React.FC = () => (
  <div className="relative mt-24 overflow-x-hidden pb-5">
    <div className="p-5 sm:p-20">
      <div className="bg-neutral-xmd py-20 rounded-xl w-full">
        <div className="flex justify-center items-center">
          {" "}
          <h1 className="text-center text-4xl font-main max-w-[15ch]">
            Connect with Us Today
          </h1>
        </div>
        <div className="relative flex flex-row justify-center items-center gap-36">
          <ContactForm />

          {/* Contact Image  */}
          <div className="hidden lg:flex">
            <Image
              src={contactImg}
              alt="contact_img"
              width={300}
              draggable={false}
            />
          </div>
        </div>
      </div>
    </div>
    {/* Accordin FAQS */}
    <div className="flex flex-col justify-center items-center w-full bg-[#f4f4f4] p-5 sm:p-20">
      <div className="flex justify-center items-center">
        <h1 className="font-main text-2xl lg:text-4xl font-semibold">FAQS</h1>
      </div>
      <div className="w-full flex justify-center mt-4">
        <FAQ />
      </div>
    </div>
  </div>
);

export default Contact;
