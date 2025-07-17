import { termsSection } from "@/data";
import React from "react";
import Link from "next/link";

function wrapPrivacyPolicy(text: string) {
  const regex = /PRIVACY POLICY/;
  const parts = text.split(regex);
  const matches = text.match(regex);

  if (!matches) return text;

  return parts.reduce((acc: React.ReactNode[], part, i) => {
    acc.push(part);
    if (i < matches.length) {
      acc.push(
        <Link
          key={i}
          href="/privacy"
          className="underline text-primary hover:opacity-80"
        >
          {matches[i]}
        </Link>,
      );
    }
    return acc;
  }, []);
}

const TermsPage: React.FC = () => (
  <div className="relative mt-24 overflow-x-hidden pb-10">
    <div className="relative flex flex-col justify-center p-5 sm:p-20">
      {termsSection.map(({ title, paragraphs }, index) => (
        <div key={index} className="flex flex-col gap-5">
          <h1 className="font-main font-bold text-xl lg:text-3xl mt-5">
            {title}
          </h1>
          {paragraphs.map((para, pIndex) => (
            <p key={pIndex} className="font-accent">
              {wrapPrivacyPolicy(para)}
            </p>
          ))}
        </div>
      ))}
    </div>
  </div>
);

export default TermsPage;
