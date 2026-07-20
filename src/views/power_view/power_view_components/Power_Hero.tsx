import React from "react";
// import Hero from '../../../components/Hero'
import { PowerHero } from "../../../assets";
import Hero from "../../cashback_view/cashback_view_components/Hero";
import appName from "../../../constants/data/App_Name";

const Power_Hero = () => {
  return (
    <Hero
      title={"Purchase Electricity Unit"}
      subText={`You can stay in charge, keep the lights on, and enjoy your money’s worth when you buy electricity units with ${appName}.`}
      img={PowerHero}
      btnText={"Recharge Now"}
      styles={{
        imgContainer:
          "mb-[-12rem] xmd:mb-[-8rem] lg:mb-[-3rem] xmd:absolute right-0 -bottom-0",
        container: "xmd:py-16 text-black",
        btn: "text-white bg-[#0a40ed] w-[190px] max-md:px-10 py-[17px] rounded-[4px] font-[300] text-center",
      }}
    />
  );
};

export default Power_Hero;
