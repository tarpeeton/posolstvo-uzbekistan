
"use client"
import React, { useState } from "react";

export type FAQItem = {
  question: string;
  answer: string;
};

type FaqProps = {
  data: FAQItem[];
};

const Faq: React.FC<FaqProps> = ({ data }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(1);

  const toggle = (index: number) => {
    setOpenIndex(prev => (prev === index ? null : index));
  };

  return (
    <div className="w-full  ">
      {data.map((item, index) => {
        const isOpen = openIndex === index;
        return (
          <div
            key={index}
            className={`rounded cursor-pointer  mb-2 border  transition-colors duration-300 ${
              isOpen ? "bg-[#006FFF38]" : "bg-[#DEDEE2]"
            }`}
          >
            <button
              onClick={() => toggle(index)}
              className="w-full cursor-pointer  flex justify-between items-center p-4 text-left"
            >
              <span className="text-[16px] w-[80%] lg:w-[95%] font-medium ">{item.question}</span>
              <div className={`text-[20px] w-[20px] h-[20px] lg:w-[25px] lg:h-[25px] flex items-center justify-center font-bold  rounded-full ${isOpen ? "border bg-[#1C5FEF] text-white border-[#1C5FEF]" : "border border-[#242424]"}`}>
                {isOpen ? "−" : "+"}
              </div>
            </button>

            <div
              className={`overflow-hidden ${isOpen && " border-t border-t-[#427EFF54]"} transition-all duration-300 ease-in-out px-4 ${
                isOpen ? " py-2" : "max-h-0"
              }`}
            >
              <div className="text-[15px] text-gray-800 " dangerouslySetInnerHTML={{ __html: item.answer }} />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Faq;
