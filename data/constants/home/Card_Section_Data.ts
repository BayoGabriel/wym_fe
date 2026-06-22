import { FirstCardImage, SecondCardImage, ThirdCardImage } from "../../assets";

const Card_Section_Data = [
  {
    bgColor: "bg-[#5295A6]",
    cardTitle: "Select Preferred transfer options ",
    cardDescription:
      "Go ahead and choose the one that’s easiest for you to use.",
    hasButton: false,
    getStarted: false,
    cardImage: FirstCardImage,
    cardLabel: true,
    cardLabelText: "Educational",
    cardLabelStyle:
      "text-[#F4F4F4] border-[1.33px] border-[#F4F4F4] p-1 px-2 rounded-[16px]",
    descriptionStyle: "text-[#F4F4F4] mb-[28px]",
    headingStyle: "text-[#F4F4F4] my-[12px] font-poppins",
  },
  {
    bgColor: "bg-[#34D3FF]",
    cardTitle: "Seamless International and Local Transfer",
    cardDescription:
      "Send money smoothly, whether it’s around the corner or across the globe.",
    hasButton: true,
    getStarted: false,
    cardImage: SecondCardImage,
    cardImageStyle: " pt-6",
    cardLabel: true,
    cardLabelText: "Financial",
    cardLabelStyle:
      "text-[#090A0B] border-[1.33px] border-[#090A0B] p-1 px-2 rounded-[16px]",
    descriptionStyle: "mb-[8px] ",
    headingStyle: "my-[12px] font-poppins",
  },
  {
    bgColor: "bg-[#FD5E1D]",
    cardTitle: "No Overdraft Limits for first 30 Days",
    cardDescription:
      "We’re keeping things easy — no overdraft caps for your first month with us.",
    hasButton: false,
    getStarted: false,
    cardImage: ThirdCardImage,
    cardLabel: true,
    cardLabelText: "Travelling",
    cardLabelStyle:
      "text-[#F4F4F4] border-[1.33px] border-[#F4F4F4] p-1 px-2 rounded-[16px]",
    descriptionStyle: "text-[#F4F4F4] mb-[28px]",
    headingStyle: "text-[#F4F4F4] my-[12px] font-poppins",
  },
];
export default Card_Section_Data;
