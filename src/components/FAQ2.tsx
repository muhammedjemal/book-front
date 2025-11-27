"use client";
import React from "react";
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import { BiMinus, BiPlus } from "react-icons/bi";
import ReviewDropdown from "./ReviewPopUp";
import { faqs as faqs1 } from "@/data/faq1";
import { faqs as faqs2 } from "@/data/faq2";
import { faqs as faqs3 } from "@/data/faq3";
import ReviewCard from "./ReviewCard";

interface IFAQ {
  question: string;
  answer: string;
}

const FAQ = ({ prodName }) => {
  const faq: IFAQ[] =
    prodName === "1"
      ? faqs1
      : prodName === "2"
      ? faqs2
      : prodName === "3"
      ? faqs3
      : faqs3;

  const parseAnswer = (answer: string) => {
    const lines = answer.split(/<br\s*\/?>/);
    return (
      <ul style={{ listStyle: "none", paddingLeft: "0px" }}>
        {lines.map((line, index) => (
          <li key={index} style={{ marginBottom: "5px" }}>
            {line.replace("• ", "")}
          </li>
        ))}
      </ul>
    );
  };

  return (
    <section id="faq" className="py-10 lg:py-20">
      <div className="flex flex-col lg:flex-row gap-10">
        <div className="w-full lg:max-w-2xl mx-auto border-b">
          {faq.map((faqItem, index) => (
            <div key={index} className="mb-7">
              <Disclosure>
                {({ open }) => (
                  <>
                    <DisclosureButton className="flex items-center justify-between w-full px-4 pt-7 text-lg text-left border-t">
                      <span className="text-2xl font-semibold">
                        {faqItem.question}
                      </span>
                      {open ? (
                        <BiMinus className="w-5 h-5 text-secondary" />
                      ) : (
                        <BiPlus className="w-5 h-5 text-secondary" />
                      )}
                    </DisclosureButton>
                    <DisclosurePanel className="px-4 pt-4 pb-2 text-foreground-accent">
                      {parseAnswer(faqItem.answer)}
                    </DisclosurePanel>
                  </>
                )}
              </Disclosure>
            </div>
          ))}
          <div className="mb-7">
            <Disclosure defaultOpen>
              {({ open }) => (
                <>
                  <DisclosureButton className="flex items-center justify-between w-full px-4 pt-7 text-lg text-left border-t">
                    <span className="text-2xl font-semibold w-fit flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        height="24px"
                        viewBox="0 -960 960 960"
                        width="24px"
                        fill="black"
                      >
                        <path d="m344-60-76-128-144-32 14-148-98-112 98-112-14-148 144-32 76-128 136 58 136-58 76 128 144 32-14 148 98 112-98 112 14 148-144 32-76 128-136-58-136 58Zm34-102 102-44 104 44 56-96 110-26-10-112 74-84-74-86 10-112-110-24-58-96-102 44-104-44-56 96-110 24 10 112-74 86 74 84-10 114 110 24 58 96Zm102-318Zm-42 142 226-226-56-58-170 170-86-84-56 56 142 142Z" />
                      </svg>
                      <span className="ml-2">REVIEWS</span>
                    </span>
                    {open ? (
                      <BiMinus className="w-5 h-5 text-secondary" />
                    ) : (
                      <BiPlus className="w-5 h-5 text-secondary" />
                    )}
                  </DisclosureButton>
                  <DisclosurePanel className="px-4 pt-4 pb-2 text-foreground-accent">
                    <ReviewDropdown />
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        gap: "10px",
                      }}
                    >
                      <div className="flex flex-wrap justify-start gap-4">
                        <ReviewCard
                          name="Shelly D."
                          date="9/21/2024"
                          review="The artwork is beautiful and I absolutely love it!"
                          itemType={`40"x 30"/ 102 x 76 CM / Stretch+Gold Frame`}
                        />
                        <ReviewCard
                          name="Cynthia D."
                          date="9/21/2024"
                          review="Beautiful colors, so beautifully done! Very happy with end product and customer service."
                          itemType={`40"x 30"/ 102 x 76 CM / Stretch+Gold Frame`}
                        />
                        <ReviewCard
                          name="Theron"
                          date="9/21/2024"
                          review="Very beautiful! Really. In the house it is gorgeous. Change the environment. Very satisfied"
                          itemType={`40"x 30"/ 102 x 76 CM / Stretch+Gold Frame`}
                        />
                        <ReviewCard
                          name="Caleb C."
                          date="9/21/2024"
                          review="Beautiful painting. Looks perfect in my apartment. Love the quality and fast response!!"
                          itemType={`40"x 30"/ 102 x 76 CM / Stretch+Gold Frame`}
                        />
                      </div>
                    </div>{" "}
                  </DisclosurePanel>
                </>
              )}
            </Disclosure>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
