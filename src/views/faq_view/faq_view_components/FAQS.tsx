import { useEffect, useState } from "react";
import { LIST } from "@/src/constants/data/Data";
import FrequentAccordion from "./Faq_Accordion";

interface FAQProps {
  List?: any[];
}

const FAQS = ({ List = LIST }: FAQProps) => {
  const [activeButtonIndex, setActiveButtonIndex] = useState<number | null>(0);
  const [currentData, setCurrentData] = useState<any[]>([]);
  const [isOpenIndex, setIsOpenIndex] = useState<number>(0);

  useEffect(() => {
    setCurrentData(LIST[0].button);
  }, []);

  const handleClick = (index: number) => {
    setActiveButtonIndex(index);
    setCurrentData(LIST[index]?.button ?? []);
    setIsOpenIndex(isOpenIndex === index ? 0 : index);
  };

  return (
    <div className="bg-[#F9F9F9]">
      <div className="w-[95%] max-w-screen-2lg 3xl:max-w-xlg mx-auto">
        <div className="bg-[#F9F9F9] py-[75px] lg:w-[100%]">
          <div className=" lg:w-[100%]">
            <div className="md:flex justify-start ">
              <div className="lg:flex-column w-[90%] mx-auto lg:mx-0 text-sm font-medium text-gray-500 dark:text-gray-400 lg:w-[30%]  rounded-[10px] border border-[#8495B160] bg-[#fff] ">
                {List.map((items: any, index: number) => (
                  <div key={index}>
                    <button
                      className={`inline-flex items-center xl:text-[18px] font-[600] py-3 leading-[27px] md:ml-[21px] text-black md:pb-[14px] ${
                        activeButtonIndex === index
                          ? "bg-blue-700 px-4 max-[769px]:w-full w-[85%] text-white "
                          : "px-4"
                      } rounded-lg  md:mt-[14px] active w-[100%] dark:bg-blue-600" aria-current="page" `}
                      onClick={() => handleClick(index)}
                    >
                      <p>{items?.title}</p>
                    </button>
                    <div className="md:p-6 md:hidden block bg-[#F2F7F8] text-medium text-[#101828] dark:text-[#101828] dark:bg-[#F2F7F8] rounded-lg lg:w-[90%] w-full">
                      {isOpenIndex === index && (
                        <div className="relative">
                          <FrequentAccordion item={currentData} />
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              <div className="p-6 md:block hidden  text-medium text-[#101828] dark:text-[#101828]  lg:w-[100%] w-full">
                {isOpenIndex >= 0 && (
                  <div className="relative">
                    <FrequentAccordion item={currentData} />
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQS;
