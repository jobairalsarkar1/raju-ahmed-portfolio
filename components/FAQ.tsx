"use client";

import { useEffect, useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { faqs } from "@/lib/constants";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <div className="bg-gray-50 py-12 sm:py-16">
      <div className="container mx-auto px-4 lg:px-8 xl:px-16">
        {/* Header */}
        <p className="text-lg sm:text-xl font-medium text-gray-600 tracking-wider mb-2">
          FAQs
        </p>

        <div className="mb-12 md:mb-16 md:flex md:items-start md:gap-8">
          <h2
            className="
            text-[28px] sm:text-[36px] md:text-[44px] 
            font-bold text-gray-900 leading-tight 
            md:w-[65%]
          "
          >
            Smart, clear answers to guide you <br className="hidden md:block" />
            through a seamless design journey
          </h2>

          <p
            className="
            mt-3 text-lg sm:text-xl md:text-2xl 
            text-gray-600 tracking-wide 
            max-w-2xl mb-8 md:mb-0 
            md:w-[35%]
          "
          >
            I transform your goals into intuitive, high-quality designs that
            feel effortless, functional, and aligned with your vision.
          </p>
        </div>

        {/* FAQ LIST */}
        <div>
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            const [showOpenBg, setShowOpenBg] = useState(isOpen);

            useEffect(() => {
              let timer: any;
              if (isOpen) {
                setShowOpenBg(true);
              } else {
                timer = setTimeout(() => setShowOpenBg(false), 500);
              }
              return () => clearTimeout(timer);
            }, [isOpen]);

            return (
              <div
                key={index}
                className={`
                  mb-4 sm:mb-6 overflow-hidden rounded-2xl sm:rounded-3xl 
                  shadow-sm transition-shadow duration-300 
                  ${isOpen ? "shadow-lg" : ""}
                `}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? -1 : index)}
                  className={`
                    w-full 
                    px-4 sm:px-6 md:px-8 
                    py-4 sm:py-6 
                    flex items-center justify-between 
                    text-left gap-4 
                    transition-colors duration-500 
                    ${
                      showOpenBg
                        ? "bg-[#1E1E1E] text-white"
                        : "bg-white text-gray-900 hover:bg-gray-50"
                    }
                  `}
                >
                  <span
                    className="
                    text-[20px] sm:text-[26px] md:text-[32px] 
                    font-semibold leading-snug
                  "
                  >
                    {index + 1}. {faq.question}
                  </span>

                  {isOpen ? (
                    <div
                      className="
                      w-8 h-8 sm:w-9 sm:h-9 
                      bg-[#6C46FF] rounded-full 
                      flex items-center justify-center
                    "
                    >
                      <ChevronUp className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                    </div>
                  ) : (
                    <div
                      className="
                      w-8 h-8 sm:w-9 sm:h-9 
                      bg-gray-900 rounded-full 
                      flex items-center justify-center
                    "
                    >
                      <ChevronDown className="w-4 h-4 sm:w-6 sm:h-6 text-white" />
                    </div>
                  )}
                </button>

                {/* ANSWER CONTENT */}
                <div
                  className={`
                    transition-all duration-500 ease-in-out overflow-hidden 
                    bg-[#1E1E1E] 
                    ${
                      isOpen
                        ? "max-h-[500px] py-4 sm:py-6 px-4 sm:px-6 md:px-8"
                        : "max-h-0 py-0 px-4 sm:px-6 md:px-8"
                    }
                  `}
                >
                  <p className="text-base sm:text-xl md:text-2xl text-white leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
