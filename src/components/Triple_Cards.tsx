import Image from "next/image";
import React, { ReactNode } from "react";

interface Triple_Cards_Props {
  img1: string;
  img2: ReactNode;
  img3: ReactNode;
  headingText: string;
  firstCardBody: string;
  secondCardBody: string;
  card1: string;
  card2: string;
}
const Triple_Cards = ({
  img1,
  img2,
  img3,
  headingText,
  firstCardBody,
  secondCardBody,
  card1,
  card2,
}: Triple_Cards_Props) => {
  return (
    <div
      className="flex flex-col gap-4 w-[95%] max-w-screen-2lg 3xl:max-w-xlg mx-auto py-4 xmd:pt-8 xmd:pb-12"
      data-aos="zoom-in"
      data-aos-duration="1500"
      data-aos-once="true"
    >
      <h4 className="text-[46px] max-md:text-[26px] max-md:font-[600] font-[700] font-aeonik leading-none pb-2 md:w-[70%]">
        {headingText}
      </h4>
      <div className="w-full flex gap-4 max-md:flex-col md:flex-grow">
        <div className="w-full flex items-center justify-center px-6 rounded-[30px] pt-10 md:pt-[45px] md:rounded-[42px] bg-[#CDF2FC] md:w-[70%]">
          <Image src={img1} alt="img1" />
        </div>
        <div className="w-full max-xmd:hidden md:w-[25%] grid grid-rows-2 gap-4">
          <div
            className={`w-full rounded-[42px] max-md:rounded-[30px] flex flex-col gap-2 items-center justify-center p-5 ${card1}`}
          >
            {img2}
            <p>{firstCardBody}</p>
          </div>
          <div
            className={`w-full rounded-[42px] max-md:rounded-[30px] flex gap-2 flex-col items-center justify-center p-5 ${card2}`}
          >
            <div className="max-w-[174px]">{img3}</div>
            <p>{secondCardBody}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Triple_Cards;
