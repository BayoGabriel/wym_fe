import { ContactHeroBottom, ContactHeroImage } from "@/src/assets";
import appName from "@/src/constants/data/App_Name";
import Image from "next/image";

const Contact_Hero = () => {
  return (
    <div className="bg-[#DCFFC7] text-center relative w-full flex justify-center items-center pb-24">
      <div>
        <div>
          <Image
            className="w-[329.23px] mx-auto h-[200px]"
            width={330}
            height={201}
            src={ContactHeroImage as any}
            alt="hero"
          />
        </div>
        <h3 className="text-[#006FFF] font-[400] uppercase text-[12px] my-[3rem] ">
          CONTACT {appName}
        </h3>
        <h2 className="font-[500] text-[38px] md:text-[40px] md:leading-[44px] lg:text-6xl leading-[42px] lg:leading-[59px] font-aeonik max-w-[918px] ">
          Get in Touch with {appName} for Expert Assistance
        </h2>
      </div>
      <Image
        className="absolute bottom-0 right-0 w-[25%] mx-auto h-[110px] max-lg:hidden"
        width={461}
        height={104}
        src={ContactHeroBottom as any}
        alt="icon"
      />
    </div>
  );
};

export default Contact_Hero;
