import Image from "next/image";
import Link from "next/link";

interface Hero_Props {
  title: string;
  title2?: string;
  subText: string;
  img: any;
  btnText: string;
  styles: {
    imgContainer?: string;
    container: string;
    btn: string;
    haswidth?: string;
    subTextStyle?: string;
    titleStyle?: string;
    img?: string;
    root?: string;
  };
  btnAction?: () => void;
  isabsolute?: boolean;
}

const Hero = ({
  title,
  title2,
  subText,
  btnText,
  img,
  styles,
  btnAction,
  isabsolute = false,
}: Hero_Props) => {
  return (
    <div
      className={`w-full containerclass flex max-lg:flex-col items-center justify-between gap-8 ${styles.root ?? ""}`}
    >
      <div
        className={`w-full xmd:w-[60%] flex flex-col gap-4 xmd:gap-8 pb-4 ${styles.container}`}
      >
        <h2
          className={` font-[700] text-[38px] md:text-[65px] md:leading-[64px] font-aeonik ${styles.titleStyle}`}
        >
          {title}
        </h2>
        <h2
          className={`${styles.titleStyle} font-[400] text-[38px] md:text-[40px] md:leading-[44px] lg:text-6xl leading-[42px] lg:leading-[59px] font-aeonik xmd: mt-[-1rem] xmd:mt-[-2rem]`}
        >
          {title2}
        </h2>
        <p
          className={`xmd:w-[80%] font-Inter font-[300]  ${styles.subTextStyle}`}
        >
          {subText}
        </p>
        <Link
          href={"/auth/login"}
          className={`py-[10px] px-8 rounded-[4px] xmd: font-semibold xmd:font-bold w-fit max-md:px-4 max-md:py-2 ${styles.btn}`}
        >
          {btnText}
        </Link>
      </div>

      {!isabsolute ? (
        <div
          className={`${styles.imgContainer ?? ""} h-full w-full xmd:w-[40%] flex items-end justify-center mx-auto`}
          data-aos="fade-up"
          data-aos-once="true"
          data-aos-duration="1500"
        >
          <Image
            src={img}
            alt=""
            className={`mx-auto h-auto xmd:h-full object-contain ${styles.img ?? ""}`}
          />
        </div>
      ) : (
        <div
          className={`${styles.imgContainer ?? ""} h-full w-full xmd:w-[40%] flex items-end justify-center mx-auto`}
        >
          <Image
            src={img}
            alt=""
            className={`mx-auto h-auto xmd:h-full object-contain ${styles.img ?? ""}`}
          />
        </div>
      )}
    </div>
  );
};

export default Hero;
