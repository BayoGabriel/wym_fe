"use client"
import { App_Button } from "@/components/ui_components/app_button";
import {
  Gbp,
  UsdHero,
  LastHero,
  OrangeHero,
  Home_Arrow,
} from "../../../assets";
import { Use_Home_Context_Ref_State_Handler } from "../api/main_context";
import Image from "next/image";
// import Get_Started_Button from "../../../components/Get_Started_Button";

const Hero_Header = () => {
  const { showCard } = Use_Home_Context_Ref_State_Handler();

  return (
    <div
      className={`flex containerclass flex-col transition-all duration-500 relative ${
        showCard ? "lg:scale-90" : "lg:scale-100"
      }`}
    >
      <div className="w-full max-lg:hidden">
        <h1 className="xl:text-[8rem] lg:text-[6rem] 2lg:text-[7rem] text-[4rem] font-[400] font-montserratAlternate">
          The bank for
        </h1>
        <div className="relative flex w-full justify-end">
          <div className="relative">
            <h1 className="xl:text-[8rem] w-full lg:text-[6rem] 2lg:text-[7rem] text-[4rem] font-[400] font-montserratAlternate">
              Global Citizens
            </h1>
            <Image
              src={Gbp}
              alt=""
              className="absolute bottom-[35%] left-[-25%] 2lg:left-[-20%] xl:left-[-18%] h-[40px]"
            />
          </div>
          <Image
            src={LastHero}
            alt=""
            className="absolute top-[-35%] right-[0%] 2lg:w-[337px] max-2lg:h-[100px]"
          />
        </div>
      </div>
      <div className="w-full flex flex-col xmd:space-y-[-30px] lg:hidden">
        <h1 className="text-[2.5rem] xm:text-[3rem] md:text-[5rem] xmd:text-[6rem] font-[400] font-montserratAlternate">
          The bank
        </h1>
        <div className="flex sm:-mt-6 -mt-3 items-center">
          <Image src={Gbp} alt="" className="h-[20px]" />
          <h1 className="text-[2.5rem] xm:text-[3rem] md:text-[5rem] xmd:text-[6rem] font-[400] font-montserratAlternate">
            for
          </h1>
          <Image src={LastHero} alt="" className="xm:h-[70px] h-[40px]" />
        </div>
        <h1 className="text-[2.5rem] max-xs:pl-3 max-sm:pl-9 pl-12 xm:text-[2.9rem] md:text-[5rem] xmd:text-[6rem] font-[400] font-montserratAlternate">
          Global Citizens
        </h1>
      </div>
      <div className="relative pl-[8rem] mx-auto mt-[5rem] md:mt-[7rem]">
        <div className="absolute md:left-[-17%] h-[40px] md:h-[100px] md:top-[-145%] top-[-65%] left-[20%]">
          <Home_Arrow />
        </div>
        <Image
          src={UsdHero}
          alt=""
          className="absolute top-[-110%] max-md:h-[24px] left-[-5%] md:top-[-235%] md:left-[-58%] 2lg:left-[-67%] max-2lg:h-[40px] h-[50px]"
        />
        <Image
          src={OrangeHero}
          alt="home"
          className="absolute max-md:h-[20px] max-md:top-[-90%] max-md:right-0 top-[-110%] h-[32px] right-[-20%]"
        />
        <div className="flex ">
          <App_Button
            // onClick={() => setMobileNav(false)}
            variant="primary"
            className="w-full px-6 py-3 text-sm font-semibold shadow-md"
          >
            Get Started
          </App_Button>
        </div>
      </div>
    </div>
  );
};

export default Hero_Header;
