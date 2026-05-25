"use client"
import { useState } from "react";
import Accordion from "../ui_components/accordion";

interface Question {
  title: string;
  content: string;
}

interface FAQ_Props {
  title: string;
  description: string;
  questions: Question[];
  // active: number | null
  // index: number
  // setActive:React.Dispatch<React.SetStateAction<number | null>>
}

const FAQ = ({ title, description, questions }: FAQ_Props) => {
  const [active, setActive] = useState<number | null>(null);

  return (
    <div className="bg-white text-black py-[20px] md:py-[60px] mt-[0px]">
      <div className="lg:w-[60%] mb-[2rem] mx-auto text-center">
        <h1 className="lg:text-[60px] capitalize lg:leading-[64px] leading-[30px] text-[30px] font-[500] pt-4 font-aeonik">
          {title}
        </h1>
    
      </div>
      <div className="bg-[#Fff] containerclass">
        <div className={`wrapperContainer`}>
          {questions.map((item, key) => (
            <Accordion
              key={key}
              title={item.title}
              active={active}
              index={key}
              setActive={setActive}
            >
              <p className="lg:text-[18px] text-[13px] font-[300] text-[#667085]">
                {item.content}
              </p>
            </Accordion>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ;
