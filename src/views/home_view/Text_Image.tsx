import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { IoArrowForwardCircleOutline } from "react-icons/io5";

interface Colors {
  text: string;
  gradient1: string;
  gradient2: string;
  link: string;
  preText: string;
  title: string;
}

interface Text_Image_Props {
  preText: string;
  title: string;
  text: string;
  img: any | StaticImageData;
  colors: Colors;
  bottom?: boolean;
  row?: boolean;
  link: string;
  linkTo?: string;
  linkStyle: string;
  center?: boolean;
}

const Text_Image = ({
  preText,
  title,
  text,
  img,
  bottom,
  colors,
  row,
  link,
  linkTo,
  linkStyle,
  center,
}: Text_Image_Props) => {
  return (
    <div
      style={{
        background: `linear-gradient(to right, ${colors.gradient1}, ${colors.gradient2})`,
      }}
      className="h-full rounded-2xl w-full  text-white relative overflow-hidden "
    >
      <div
        className={`px-6 lg:px-[4.5rem] xmd:px-[70.78px] py-[3rem] pb-[6rem]  ${
          row
            ? "md:w-[56%] lg:w-[55%] flex flex-col gap-[35px] pb-[2rem]"
            : "flex flex-col gap-[35px] "
        }`}
      >
        <p
          style={{ color: `${colors.preText}` }}
          className="uppercase lg:mb-2 max-md:text-[12px] font-[400] max-md:tracking-[2px] leading-[16px]"
        >
          {preText}
        </p>

        <div className="flex flex-col gap-[1rem]">
          <div className="flex flex-col gap-[30px]">
            <h4
              style={{ color: `${colors.title}` }}
              className={`xl:text-left font-aeonik xl:leading-[52.8px] lg:text-[50px] lg:leading-[50px] xmd:text-[35px] font-[500] text-left text-[30px] leading-[36px] ${
                row ? "w-full" : "w-[90%]"
              }`}
            >
              {title}
            </h4>

            <p
              style={{ color: `${colors.text}` }}
              // className="text-[1.25rem] max-md:text-[16px] font-[200] font-Inter leading-[32px] tracking-[0.09px]"
              className="text-lg font-[300]"
            >
              {text}
            </p>
          </div>

          <Link
            href={linkTo ? linkTo : "/download"}
            className={`${linkStyle} ${
              row ? "md:pt-[4rem] lg:pt-[6rem] lg:mb-[-3rem]" : ""
            } 'text-[17px] font-[400]`}
          >
            {link}
            {IoArrowForwardCircleOutline({
              size: 25,
              className: "inline ml-4",
            })}
          </Link>
        </div>
      </div>

      <div
        className={`${
          bottom
            ? "md:absolute w-full flex justify-center items-center mx-auto mb-[-2rem] xmd:-mb-4 bottom-[-2rem]"
            : center
              ? "pb-6 -mt-8  md:pb-0 md:mt-0 md:absolute md:h-auto md:right-0 md:top-1/2  md:-translate-y-1/2"
              : row
                ? "md:absolute -bottom-12 md:bottom-6 xmd:bottom-[-1rem] md:right-0 xmd:right-0 w-fit mx-auto h-auto mb-[-4rem] xmd:mb-0 "
                : "md:absolute w-[100%] ml-auto xmd:w-[80%] right-[-8rem] xmd:right-[-10rem] mr-[-4rem] md:mr-0 pb-20"
        }`}
      >
        <Image
          src={img}
          alt={preText}
          className={`${
            row
              ? "w-[90%] sm:w-[80%] md:w-[65%] xmd:w-[70%] xl:w-[90%] ml-auto mr-8 md:mr-0 lg:mr-8 h-full"
              : bottom
                ? "w-[60%] xmd:w-[50%]"
                : "w-[80%] ml-auto mr-[1rem] xmd:mr-0 xmd:ml-0"
          }`}
        />
      </div>
    </div>
  );
};
export default Text_Image;
