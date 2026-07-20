import Image from "next/image";
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

interface Text_Image2_Props {
  preText?: string;
  title: string;
  text: string;
  img: any;
  colors: Colors;
  bottom?: boolean;
  row?: boolean;
  bomrow?: boolean;
  bomrow1?: boolean;
  link: string;
  linkStyle: string;
}

const Text_Image2 = ({
  preText,
  title,
  text,
  img,
  bottom,
  colors,
  row,
  link,
  linkStyle,
  bomrow,
  bomrow1,
}: Text_Image2_Props) => {
  return (
    <div
      style={{
        background: `linear-gradient(to right, ${colors.gradient1}, ${colors.gradient2})`,
      }}
      className="h-full rounded-2xl w-full  text-white relative overflow-hidden"
    >
      <div
        className={`${
          bomrow
            ? "p-5 lg:px-[2rem] xmd:px-[2rem] py-[2rem] w-[70%] max-xmd:w-[75%]"
            : bomrow1
              ? "p-5 lg:px-[2rem] xmd:px-[2rem] py-[2rem] w-full max-xm:w-[85%] lg:w-full xm:w-[65%] sm:w-[60%]"
              : "px-8 lg:px-[4.5rem] xmd:px-[4rem] py-[3rem]"
        }`}
      >
        {preText && (
          <p
            style={{ color: `${colors.preText}` }}
            className="uppercase lg:mb-2 max-md:text-[12px] font-[400] max-md:tracking-[2px] leading-[16px]"
          >
            {preText}
          </p>
        )}

        <h4
          style={{ color: `${colors.title}` }}
          className="xl:text-left font-[500] font-aeonik text-2xl md:text-[1.6rem] text-left mb-3 leading-[20px]"
        >
          {title}
        </h4>

        <p
          style={{ color: `${colors.text}` }}
          className={`text-sm md:text-[1.125rem] mb-3 md:leading-[1.4rem] ${
            bomrow1 ? "w-full" : ""
          }`}
        >
          {text}
        </p>

        <Link
          href={"/auth/login"}
          className={`${linkStyle} ${
            row ? "md:pt-[4rem] lg:pt-[6rem] xl:pt-[8rem]" : ""
          } 'text-[15px] font-[400]`}
        >
          {link}
          {IoArrowForwardCircleOutline({
            size: 20,
            className: "inline ml-1",
          })}
        </Link>
      </div>

      <div
        className={`${
          bomrow
            ? "absolute bottom-0 right-0 xmd:w-[55%] max-xmd:w-[30%]"
            : bomrow1
              ? "absolute bottom-0 right-0 w-[55%]"
              : ""
        }`}
      >
        <Image
          src={img}
          alt={preText as string}
          className={` ${bomrow1 ? "w-full" : bomrow ? "w-full" : "w-[80%]"}`}
        />
      </div>
    </div>
  );
};
export default Text_Image2;
