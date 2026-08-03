import { useState } from "react";

interface AccordionProps {
  toggleDropdown?: (open: boolean) => void;
  item?: any[];
}

const FrequentAccordion = ({
  toggleDropdown = () => {},
  item = [],
}: AccordionProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const handleClick = (index: number) => {
    const nextIndex = index === activeIndex ? null : index;
    setActiveIndex(nextIndex);
    setIsOpen(nextIndex !== null);
    toggleDropdown(nextIndex !== null);
  };

  return (
    <div className="relative">
      <div>
        {item?.map((content: any, key: number) => (
          <div key={key}>
            <div className="flex flex-row  border-b border-[#8495B160] xl:w-[100%] items-center md:justify-between px-[20px]">
              <p className="md:text-[22px] text-[20px] leading-[24px] md:leading-[28px] font-[600] text-[#101828] xl:pt-[30px]  pb-[11px] py-3 w-[90%]">
                {content?.head}
              </p>
              <button
                onClick={() => handleClick(key)}
                className=" absolute right-[20px] font-semibold"
              >
                {isOpen && activeIndex === key && (
                  <svg
                    width="18"
                    height="11"
                    viewBox="0 0 18 11"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M16.6641 9.37402L9.16406 1.87402L1.66406 9.37402"
                      stroke="#101828"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                )}
                {(!isOpen || activeIndex !== key) && (
                  <svg
                    width="18"
                    height="10"
                    viewBox="0 0 18 10"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1.66406 1.25L9.16406 8.75L16.6641 1.25"
                      stroke="#101828"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                )}
              </button>
            </div>
            <div className="w-full mt-2 px-[20px]  rounded-md  z-1">
              {key === activeIndex &&
                content?.subList?.map((ite: any, index: number) => (
                  <div key={index}>
                    <p className="text-[16px] font-[500]  text-[#101828] pt-[30px]">
                      {ite.subtitle}
                    </p>
                    <p className="  mt-[-20px] pb-[30px] text-[#3D4F60]">
                      {ite.text}
                    </p>
                  </div>
                ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FrequentAccordion;
