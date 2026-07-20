
import { Simple_Flex_Props } from "@/types/component_types/wisget_types";
import Image from "next/image";
import Link from "next/link";

const Simple_Flex_Items = ({
  img,
  bgColor,
  title,
  titleStyle,
  details,
  btn,
  comp,
  text,
  details2,
  details3,
  absoluteImg,
  spanText,
  btnAction,
  bannerSize,
  make,
}: Simple_Flex_Props) => {
  return (
    <section className={`${bgColor} overflow-hidden mt-8`}>
      <div
        className={`w-[95%] max-w-screen-2lg 3xl:max-w-xlg mx-auto py-4 xmd:py-[2rem] flex ${
          img.imgPosition ? "md:flex-row-reverse" : "md:flex-row"
        } flex-col gap-12 lg:gap-6 items-center justify-between`}
        data-aos="zoom-in"
        data-aos-duration="1500"
        data-aos-once="true"
      >
        <div className="w-full xmd:w-[70%] lg:w-[55%] grid max-xmd:gap-4 gap-8">
          <h4
            className={`${
              make ? make : "xmd:text-[38px]"
            } font-[500] text-left text-[30px] md:text-[36px] max-md:leading-[32px] leading-[44px] font-aeonik ${bannerSize} ${titleStyle}`}
          >
            <span className="text-[#0B40EE]">{spanText}</span>
            {title}
          </h4>

          <p className={` text-[#344054] font-[200] ${text?.detailStyle}`}>
            {details}
          </p>
          <p className={`text-[#344054] font-[200] ${text?.detailStyle}`}>
            {details2}
          </p>
          <p className={`text-[#344054] font-[200]${text?.detailStyle}`}>
            {details3}
          </p>

          {!comp ? (
            <Link href={"/auth/login"}>
              <button
                className={`text-[12px] max-md-[16px] mt-[-20px] w-[190px] ${
                  btn.btnBgColor && `rounded-[4px] p-2 px-10  bg ${btn.btnBgColor}`
                } ${btn.btnStyles}`}
                onClick={btnAction}
              >
                {btn.btnText}
              </button>
            </Link>
          ) : (
            <>{comp}</>
          )}
        </div>
        {/* <div className={`w-full xmd:w-[35%] `}> */}
        <div
          className={`w-full xmd:w-[35%] ${
            !comp ? "lg:w-[40%]" : "lg:w-[46%]"
          } ${img.imgStyle}`}
        >
          <Image
            src={img.img}
            alt="smiling-ladies"
            className={`w-full ${img.imgSm && "hidden md:block"} ${img.imgStyle}`}
          />
          {img.imgSm && (
            <Image alt="smiling-ladies" src={img.imgSm} className="md:hidden w-[70%] mx-auto -mb-12" />
          )}
          <Image
            src={absoluteImg as any}
            alt="absolute-image"
            className="absolute top-[10%] scale-[1.3] z-[-6] -left-[50%]"
          />
        </div>
      </div>
    </section>
  );
};

export default Simple_Flex_Items
