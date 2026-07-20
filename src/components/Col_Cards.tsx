import Image from "next/image";
import React from "react";
interface Col_Cards_Props {
  img: any;
  heading: string;
  description: string;
}
const Col_Cards = ({ img, heading, description }: Col_Cards_Props) => {
  return (
    <div className="flex flex-col gap-6 justify-between bg-white shadow-md items-center rounded-[20px] pt-6 px-4 lg:px-6 lg:pt-10">
      <div className="w-full flex flex-col gap-[9px]">
        <h4 className="font-[500] text-2xl md:text-[1.6rem] font-aeonik text-[#101828]">
          {heading}
        </h4>
        <p className="text-sm md:text-[1.125rem] md:leading-[1.4rem] text-[#344054]">
          {description}
        </p>
      </div>
      <Image src={img} alt={heading} />
    </div>
  );
};

export default Col_Cards;
