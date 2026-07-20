import Image from "next/image";
import React from "react";

interface Flex_With_Bg_Props {
  img: any;
  imgContainer: string;
  contentContainer: string;
  buttonText: string;
  buttonClass: string;
  testimonial: string;
  name?: string;
  littleText?: string;
  contentHeading?: string;
  buttonLink: string;
}

const Flex_With_Bg = ({
  img,
  contentContainer,
  buttonLink,
  contentHeading,
  imgContainer,
  buttonText,
  buttonClass,
  testimonial,
  littleText,
  name,
}: Flex_With_Bg_Props) => {
  return (
    <div className="w-full grid grid-cols-2 max-md:grid-cols-1 h-fit">
      <div
        className={`${imgContainer} max-md:px-6 flex items-center justify-center`}
      >
        <Image src={img} alt="image" className="h-[30rem] object-contain" />
      </div>
      <div
        className={`flex items-center justify-center max-md:py-6 ${contentContainer} h-fit`}
      >
        <div
          className={`w-full flex justify-center max-w-[620px] px-10 flex-col gap-3 max-md:gap-2`}
        >
          <h4 className="text-[36px] font-[500] text-[#101828] max-md:text-[24px] max-md:text-[600]">
            {contentHeading}
          </h4>
          <p className="text-[#082552] text-[20px] font-[500] md:text-[25px]">
            {testimonial}
          </p>

          {(name || littleText) && (
            <div className="flex items-end text-[25px] max-md:text-[16px] font-[600] text-[#082552] gap-2">
              <span>-</span>
              {name && <span className="">{name},</span>}
              {littleText && (
                <span className="text-[#57636C] pb-1 text-[16px] font-[500] max-md:text-[12px]">
                  {littleText}
                </span>
              )}
            </div>
          )}
          <div className="mt-8 max-md:mt-4">
            <a
              href={buttonLink}
              className={`rounded-[8px] px-5 py-3 ${buttonClass}`}
            >
              {buttonText}
            </a>
          </div>
        </div>
      </div>
    </div>
    // <div className='w-full grid xmd:grid-cols-2'>
    //     <div className={`h-full`}>
    //         <img src={img} alt='' className='h-[30rem] w-full object-contain'  />
    //     </div>
    //     <div className={`flex items-center justify-center max-md:py-6 ${contentContainer}`}>
    //         <h4 className='text-[36px] font-[500] text-[#101828] max-md:text-[24px] max-md:text-[600]'>
    //            {contentHeading}
    //         </h4>
    //     </div>
    // </div>
  );
};

export default Flex_With_Bg;
