import { appName } from "@/data/constants/app_name";
import { SendMoneyPng } from "@/src/assets";
import Hero from "@/src/views/cashback_view/cashback_view_components/Hero";

const Transfer_Hero = () => {
  return (
    <>
      <Hero
        title={"Local and International Money Transfers"}
        subText={`Send money the smarter way with ${appName}. Make instant, secure transfers to any local bank account with ease and confidence.`}
        img={SendMoneyPng}
        btnText={`Download Now`}
        styles={{
          imgContainer:
            "mb-[-4rem] xmd:mb-[-3rem] xmd:absolute right-0 bottom-0",
          container: "xmd:py-10 text-black",
          btn: "text-white bg-[#0E46FCFF] px-6 py-3 text-sm md:px-12 md:py-5 md:text-base rounded-md transition",
        }}
      />
    </>
  );
};

export default Transfer_Hero;
