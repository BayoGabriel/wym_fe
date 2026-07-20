import { Simple_Flex_Props } from "@/types/component_types/wisget_types";
import Image from "next/image";

const Equal_Flex = ({
  img,
  bgColor,
  title,
  details,
  details2,
  details3,
  btn,
  comp,
  text,
}: Simple_Flex_Props) => {
  const isImgRight = img.imgPosition === "right";

  return (
    <section className={`${bgColor}`}>
      <div
        className={`
          w-[95%] max-w-screen-2lg 3xl:max-w-xlg mx-auto py-12 xmd:py-[5rem] flex 
          ${
            isImgRight
              ? "md:flex-row flex-col"
              : "md:flex-row-reverse flex-col-reverse"
          } 
        `}
        data-aos="zoom-in"
        data-aos-duration="1500"
        data-aos-once="true"
      >
        {/* Text Section */}
        <div className="w-full md:w-[45%] grid gap-8">
          <h4 className="xmd:text-[38px] font-[500] text-left text-[36px] leading-[44px]">
            {title}
          </h4>

          <div className="flex flex-col gap-2">
            <p className={`lg:text-xl text-[#344054] ${text?.detailStyle}`}>
              {details}
            </p>
            <p className={`lg:text-xl text-[#344054] ${text?.detailStyle}`}>
              {details2}
            </p>
            <p className={`lg:text-xl text-[#344054] ${text?.detailStyle}`}>
              {details3}
            </p>
          </div>

          {!comp ? (
            <button
              className={`${
                btn.btnStyles
              } w-fit mt-6 max-md:mt-2 font-semibold text-lg ${
                btn.btnBgColor && `p-2 px-10 bg ${btn.btnBgColor}`
              }`}
            >
              {btn.btnText}
            </button>
          ) : (
            <>{comp}</>
          )}
        </div>

        {/* Image Section */}
        <div className={`w-full md:w-[45%]`}>
          <Image
            src={img.img}
            alt="smiling-ladies"
            className={`w-full ${img.imgSm && "hidden md:block"}`}
          />
          {img.imgSm && (
            <Image alt="sm" src={img.imgSm} className="md:hidden w-[70%] mx-auto -mb-12" />
          )}
        </div>
      </div>
    </section>
  );
};

export default Equal_Flex;
