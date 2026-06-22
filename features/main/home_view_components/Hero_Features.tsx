// import { HomeHeroAtm } from "../../../assets";
import Image from "next/image";
import { Use_Home_Context_Ref_State_Handler } from "../api/main_context";
import Hero_Features_Left from "./Hero_Features_Left";
import Hero_Features_Right from "./Hero_Features_Right";
import { HomeHeroAtm } from "@/assets";
const Hero_Features = () => {
  const { showCard } = Use_Home_Context_Ref_State_Handler();

  return (
    <div className={`w-full bg-white max-lg:hidden h-full transition-all ease-in-out flex items-center space-x-[-100px] px-[6rem] duration-700 ${showCard ? 'mt-4' : 'absolute top-[50%]'}`}>
      <div className="relative mt-10">
        <Hero_Features_Left/>
      </div>

      <div className="xlg:max-w-[400px] hover:scale-105 max-w-[300px]">
        <Image src={HomeHeroAtm} alt="ATM Machine" className="w-full" />
      </div>
      
      <div className="relative mt-10">
        <Hero_Features_Right/>
      </div>
    </div>
  );
};

export default Hero_Features;
