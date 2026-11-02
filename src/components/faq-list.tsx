"use client";

import { useState } from "react";
import { RichText } from "@/components/rich-text";
import { faqs } from "@/data/content";

export function FaqList() {
  const [open, setOpen] = useState<boolean[]>(() => faqs.map((_, index) => index === 0));

  return (
    <div className="mx-auto flex max-w-[1080px] flex-col">
      {faqs.map((item, index) => {
        const expanded = open[index];
        return (
          <div key={item.question} className="border-b border-[#1e2939] pt-2.5 pb-6">
            <button
              type="button"
              className="flex w-full items-center justify-between gap-4 py-4 text-left"
              aria-expanded={expanded}
              onClick={() =>
                setOpen((current) => current.map((value, itemIndex) => (itemIndex === index ? !value : value)))
              }
            >
              <span className="font-display text-[16px] leading-5 font-semibold tracking-[-0.5px] text-[#24354c]">
                {item.question}
              </span>
              <span
                className="relative grid h-[30px] w-[46px] shrink-0 place-items-center rounded-full border border-[#1e2939] text-[#1e2939]"
                aria-hidden="true"
              >
                <svg
                  viewBox="0 0 12 8"
                  className={`absolute h-2 w-3 transition duration-200 ${expanded ? "rotate-90 scale-75 opacity-0" : "opacity-100"}`}
                >
                  <path d="M1 1.2 6 6.2 11 1.2" fill="none" stroke="currentColor" strokeWidth="1.4" />
                </svg>
                <svg
                  viewBox="0 0 12 12"
                  className={`absolute h-3 w-3 transition duration-200 ${expanded ? "rotate-0 opacity-100" : "-rotate-90 scale-75 opacity-0"}`}
                >
                  <path d="M2 2 10 10M10 2 2 10" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
                </svg>
              </span>
            </button>
            {expanded ? (
              <div className="max-w-[1015px] space-y-4 font-display text-[16px] leading-5 font-medium tracking-[-0.5px] text-[#6a7282]">
                {item.answer.map((paragraph, paragraphIndex) => (
                  <p key={paragraphIndex}>
                    <RichText segments={paragraph} boldClass="font-bold text-[#111827]" />
                  </p>
                ))}
              </div>
            ) : null}
          </div>
        );
      })}
    </div>
  );
}
