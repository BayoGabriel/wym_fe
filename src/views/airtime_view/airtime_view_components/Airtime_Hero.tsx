// import Hero from "../../../components/Hero"
import { AirtimeImage } from "../../../assets";
import Hero from "../../cashback_view/cashback_view_components/Hero";
import appName from "../../../constants/data/App_Name";
const Airtime_Hero = () => {
  return (
    <>
      <Hero
        title={"Buy Airtime and Internet Data"}
        subText={`Stay connected with easy airtime and internet data purchases. ${appName} covers all mobile networks and major internet service providers in Nigeria.`}
        img={AirtimeImage}
        btnText={"Download App"}
        styles={{
          imgContainer:
            "mb-[-4rem]  xmd:mb-[-5rem] lg:mb-[-5rem] xmd:absolute right-0 bottom-0",
          container: "xmd:py-4 lg:pt-10 xl:pt-16 text-black",
          btn: "text-white bg-[#0a40ed] w-[190px] max-md:px-10 py-[17px] rounded-[4px] font-[300] text-center",
          titleStyle: "xmd:w-[70%]",
        }}
      />
    </>
  );
};

export default Airtime_Hero;
