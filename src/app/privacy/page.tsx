import { sections } from "@/data";
import React from "react";

const PrivacyPage: React.FC = () => (
  <div className="relative mt-24 overflow-x-hidden pb-10">
    <div className="relative flex flex-col justify-center p-5 sm:p-20">
      {sections.map(({ title, paragraphs }, index) => (
        <div key={index} className="flex flex-col gap-5">
          <h1 className="font-main font-bold text-xl lg:text-3xl mt-5">
            {title}
          </h1>
          {paragraphs.map((para, pIndex) => (
            <p
              key={pIndex}
              className="font-accent"
              dangerouslySetInnerHTML={{ __html: para }}
            />
          ))}
        </div>
      ))}
    </div>
  </div>
);

export default PrivacyPage;
