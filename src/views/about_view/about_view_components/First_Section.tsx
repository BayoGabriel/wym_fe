import Image from "next/image";
import { Globe } from "@/src/assets";
import { appName } from "@/data/constants/app_name";

const First_Section = () => {
  return (
    <div className="w-full mx-auto py-12 xmd:py-[5rem]">
      <div className="w-[95%] max-w-screen-2lg 3xl:max-w-xlg mx-auto flex flex-col items-center justify-center">
        <span className="text-[#006FFF] text-[16px] font-[600]">About Us</span>
        <h2 className="text-[#101828] font-[500] font-aeonik lg:text-[60px] text-center text-[30px] leading-[34px]  xl:w-[960px] xl:px-0 px-[24px] lg:py-[16px] py-[12px] flex lg:leading-[64px]">
          Revolutionizing payments, redefining modern transactions
        </h2>
        <p className="md:text-[16px] text-[14px] px-auto flex lg:w-[90%] w-[90%] pb-[39px] text-[#344054] xl:w-[906px] text-center font-[200]">
          {appName} is on a mission to transform payments in Africa. We&apos;re building a smarter, faster, and more reliable way to handle everyday payments. No more failed transfers, no hidden fees, no outdated systems. From Scan &amp; Pay to FacePay, our next-gen tools are designed to make paying bills, sending money, and running a business seamless and stress free. This isn&apos;t just fintech, it&apos;s a bold shift toward true financial freedom for everyone.
        </p>
        <Image src={Globe} className="w-full my-10" alt="globe" />
      </div>
    </div>
  );
};

export default First_Section;
