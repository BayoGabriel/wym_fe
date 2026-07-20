import React from "react";
import { FiPlusCircle, FiMinusCircle } from "react-icons/fi";

interface AccordionProps {
  active: number | null;
  index: number;
  setActive: React.Dispatch<React.SetStateAction<number | null>>;
  title?: string;
  children?: React.ReactNode;
}

const Accordion = ({ active, index, setActive, title, children }: AccordionProps) => {
  const handleToggle = () => {
    setActive(active === index ? null : index);
  };

  return (
    <div className="w-[95%] max-w-screen-2lg 3xl:max-w-xlg px-[10px] py-[20px] my-[1rem] mx-auto border-b-[0.5px] border-[#EAECF0]">
      <div
        className="accordion-header flex justify-between items-center mb-[0.5rem] cursor-pointer"
        onClick={handleToggle}
      >
        <div className="accordion-title font-[500] text-[16px] lg:text-[20px]">
          {title}
        </div>
        <div className="accordion-icon text-secondary flex justify-center items-center">
          {active === index ? (
            FiMinusCircle({
                    className:"text-[24px] font-[900]"
                })
          ) : (
            FiPlusCircle({
                    className:"text-[24px] font-[900]"
                })
          )}
        </div>
      </div>
      {active === index && (
        <div className="accordion-content my-[0.5rem]">{children}</div>
      )}
    </div>
  );
};

export default Accordion;
