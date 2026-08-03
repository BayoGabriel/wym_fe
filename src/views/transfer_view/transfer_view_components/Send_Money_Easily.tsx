import First_Section_Heading from "@/src/components/First_Section_Heading";
import Text_Image2 from "@/src/views/home_view/Text_Image2";
import { DivImage, DropdownMenu, ZeroFees } from "@/src/assets";
import appName from "@/src/constants/data/App_Name";
import Image from "next/image";

const Send_Money_Easily = () => {
  return (
    <div className="pb-[30px] xmd:py-20 bg-[#f9fafe]">
      <div className="max-w-screen-2lg 3xl:max-w-xlg w-[95%] mx-auto">
        <First_Section_Heading
          title={`Transfer Easily Between ${appName} Accounts`}
          description=""
          containerClass=""
          headingStyle="text-[#191919FF] font-[800] mb-5 mt-5 max-w-[800px] xmd:leading-[65px] xmd:text-[65px] text-3xl max-xmd:py-[35px]font-aeonik"
        />
        <div className="flex flex-grow max-md:flex-col gap-4">
          <div className="xmd:w-[40%] w-full xmd:block hidden">
            <Image src={DivImage} alt="woma" />
          </div>
          <div className="flex w-full xmd:w-[55%] flex-col gap-3">
            <Text_Image2
              title="Zero Transaction Fees"
              text={`Enjoy fee-free transfers between ${appName} accounts, saving you money on transaction costs while providing a seamless and economical way to manage your finances.`}
              link="Send money"
              linkStyle="text-[#EEFFDE] absolute bottom-5"
              img={ZeroFees}
              colors={{
                text: "#ffffff",
                title: "#ffffff",
                link: "#EEFFDE",
                preText: "#5E19B3",
                gradient1: "#0a40ed",
                gradient2: "#0a40ed",
              }}
              bomrow
            />
            <Text_Image2
              title="Zero Transaction Fees"
              text={`Transfer funds between ${appName} accounts completely free of charge, helping you avoid transaction fees while enjoying a seamless and cost-effective way to manage your money.`}
              link="Transfer money"
              linkStyle="text-[#1F2C3BFF] absolute bottom-5"
              img={DropdownMenu}
              colors={{
                text: "#101828",
                title: "#101828",
                link: "",
                preText: "#5E19B3",
                gradient1: "#bfdefa",
                gradient2: "#bfdefa",
              }}
              bomrow1
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Send_Money_Easily;
