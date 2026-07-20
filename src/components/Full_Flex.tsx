import Image from "next/image";
import Link from "next/link";

interface Full_Flex_Props {
  img: any;
  title?: string;
  details: string;
  subText?: {
    span: string;
    text: string;
  };
  btnText: string;
  styles: {
    bg: string;
    textbg: string;
  };
  btnAction?: () => void;
}

const Full_Flex = ({
  img,
  title,
  details,
  btnText,
  subText,
  styles,
  btnAction,
}: Full_Flex_Props) => {
  return (
    <section className="grid md:grid-cols-2">
      <div
        className={`${styles.bg} flex items-end justify-end max-md:justify-center`}
      >
        <div className=" flex items-end justify-center md:justify-start pt-6 w-full md:max-w-[580px]">
          <Image
            src={img}
            alt=""
            className="max-md:h-[23rem] h-[30rem] object-contain"
          />
        </div>
      </div>
      <div className={`${styles.textbg}`}>
        <div className="max-w-[580px] flex flex-col h-full justify-center gap-6 pl-6 xmd:pl-12 py-8 md:py-10 ">
          <p className="text-xl xmd:text-4xl font-Inter text-[#101828] font-[700]">
            {title}
          </p>
          <p className="font-[300] text-base xmd:text-[16px] font-Inter">
            {details}
          </p>
          <p>
            <span className="font-[500] text-2xl">{subText?.span}</span>{" "}
            {subText?.text}
          </p>
          <Link
            href={"/auth/login"}
            className="w-fit bg-[#0a40ed] px-8 font-[600] hover:bg-inherit/40 py-3 rounded-xl text-white px-6 py-3 text-sm md:px-12 md:py-5 md:text-base rounded-[3px]"
          >
            {btnText}
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Full_Flex;
