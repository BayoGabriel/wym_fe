import React, { ReactNode } from "react";

interface Card_Props {
  icon: ReactNode;
  heading: string;
  description: string;
  containerbg?: string;
  imageStyle: string;
}
const Card = ({
  icon,
  heading,
  description,
  imageStyle,
  containerbg,
}: Card_Props) => {
  return (
    <div
      data-aos="zoom-in"
      data-aos-duration="1500"
      data-aos-once="true"
      className={`${
        containerbg ? containerbg : "bg-[#C7EAFB]"
      } flex flex-col gap-4 px-6 pt-4 rounded-[20px] pb-6  lg:gap-[22px]`}
    >
      <div className={`${imageStyle}`}>
        {icon}
        <span className="text-[24px] font-aeonik text-[#101828] font-[500] max-sm:text-[16px]">
          {heading}
        </span>
      </div>
      <p className="font-[200] text-[16px] text-[#101828] max-sm:text-[12px]">
        {description}
      </p>
    </div>
  );
};

export default Card;
