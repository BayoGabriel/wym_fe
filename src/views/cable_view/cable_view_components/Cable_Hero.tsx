import React from "react";
import { CableMobile, CableDesktop } from "../../../assets";
import Hero from "../../cashback_view/cashback_view_components/Hero";
const Cable_Hero = () => {
  return (
    <Hero
      title={"Never Miss Your Favourite TV Shows"}
      subText={
        "Stay connected to DSTV, GOTV, Startimes, and more with instant bill payments for uninterrupted TV access."
      }
      img={CableDesktop}
      btnText={"Pay Now"}
      styles={{
        imgContainer: "mb-[-4rem] xmd:mb-[-7rem] xmd:absolute right-0 bottom-0",
        container: "xmd:pt-10 text-black",
        btn: "text-white bg-[#0a40ed] w-[190px] max-md:px-10 py-[17px] rounded-[4px] font-[300] text-center",
      }}
    />
  );
};

export default Cable_Hero;
