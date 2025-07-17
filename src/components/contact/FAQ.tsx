import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { faqItems } from "@/data";

export const FAQ: React.FC = () => (
  <Accordion
    type="single"
    collapsible
    className="w-[430px] md:w-[500px] lg:w-[900px] bg-white p-10"
    defaultValue="item-1"
  >
    {faqItems.map(({ title, text }, _i) => (
      <AccordionItem
        key={_i}
        value={`"item-${_i + 1}"`}
        className="w-full border-gray-300"
      >
        <AccordionTrigger className="w-full font-main font-bold text-[16px] lg:text-xl cursor-pointer">
          {title}
        </AccordionTrigger>
        <AccordionContent className="flex flex-col gap-4 text-balance">
          <p
            className="font-accent text-[16px] lg:text-[18px]"
            style={{ whiteSpace: "pre-line" }}
          >
            {text}
          </p>
        </AccordionContent>
      </AccordionItem>
    ))}
  </Accordion>
);
