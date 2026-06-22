import {
  Analytics_Icon,
  Features_Icon,
  Intergration_Icon,
  ThirdTxDetailImage,
} from "../../assets";
import Card_Chart from "../../views/home_view/home_view_components/Card_Chart";
import Card_Second from "../../views/home_view/home_view_components/Card_Second";

export const Transaction_Data = [
  {
    bgColor: "min-w-[350px] bg-[#FEEAE4] border border-[#E1E5E7] pb-6",
    cardTitle: "Real-Time Analytics",
    labelIcon: Analytics_Icon,
    cardDescription:
      "Make informed decisions with real-time analytics that update as your activity does.",
    hasButton: false,
    getStarted: false,
    cardImage:  <Card_Chart />,
    cardLabel: true,
    cardLabelText: "ANALYSIS",
    cardLabelStyle:
      "text-[#F4F4F4] border-[1.33px] bg-[#FD5E1D] p-1 px-2 rounded-[16px]",
    descriptionStyle:
      "text-[#4C5C75] text-[14px] leading-[160%] font-montserrat mb-[28px]",
    headingStyle:
      "text-[#000000] font-instrumentSans font-[500] my-[12px] lg:text-[22px] leading-[24px] text-[18px]",
  },
  {
    bgColor: "min-w-[350px] bg-[#E3F0FB] border border-[#E1E5E7]",
    cardTitle: "Break down payment barriers worldwide",
    cardDescription:
      "Say goodbye to limits break down global payment barriers and connect your finances across borders.",
    hasButton: false,
    getStarted: true,
    cardImage: <Card_Second/>,
    cardLabel: true,
    labelIcon: Features_Icon,
    cardLabelText: "FEATURES",
    cardLabelStyle:
      "text-[#F4F4F4] border-[1.33px] bg-[#FD5E1D] p-1 px-2 rounded-[16px]",
    descriptionStyle:
      "text-[#4C5C75] text-[14px] leading-[160%] font-montserrat mb-[28px]",
    cardImageStyle: "",
    headingStyle:
      "text-[#000000] font-instrumentSans font-[500] my-[12px] lg:text-[22px] leading-[24px] text-[18px]",
  },
  {
    bgColor: "min-w-[350px] bg-[#FFF5D9] border border-[#E1E5E7]",
    cardTitle: "Automatic Monthly Reporting",
    cardDescription:
      "Get organized with effortless monthly reporting, sent straight to your inbox.",
    hasButton: false,
    getStarted: true,
    cardImage:  <img src={ThirdTxDetailImage} alt="ytdf" />,
    cardImageStyle: "",
    cardLabel: true,
    labelIcon: Intergration_Icon,
    cardLabelText: "INTERGRATION",
    cardLabelStyle:
      "text-[#F4F4F4] border-[1.33px] bg-[#FD5E1D] p-1 px-2 rounded-[16px]",
    descriptionStyle:
      "text-[#4C5C75] text-[14px] leading-[160%] font-montserrat mb-[28px]",
    headingStyle:
      "text-[#000000] font-instrumentSans font-[500] my-[12px] lg:text-[22px] leading-[24px] text-[18px]",
  },
];
