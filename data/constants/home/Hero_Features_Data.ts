// import { Home_Icon, Home_Icon_Left, Home_Icon_Two, Home_Transfer_Icon } from "../../assets";

import {
  Home_Icon,
  Home_Icon_Left,
  Home_Icon_Two,
  Home_Transfer_Icon,
} from "@/assets";

export const leftFeatures = [
  {
    icon: Home_Icon,
    text: "24/7 Customer Support",
    position:
      "absolute left-[-4.4rem] flex flex-col items-center justify-center max-xlg:top-1 max-xlg:left-[-3.5rem] gap-2 top-[-1.4rem]",
  },
  {
    icon: Home_Icon_Two,
    text: "Cashback & Rewards",
    position:
      "absolute left-[9rem] flex flex-col items-center justify-center max-xlg:top-1 gap-2 top-[-1.4rem]",
  },
];

export const rightFeatures = [
  {
    icon: Home_Transfer_Icon,
    text: "Instant Transfers",
    position:
      "absolute right-[-4.4rem] max-xlg:right-[-3rem] flex flex-col items-center justify-center max-xlg:top-[-0.3rem] gap-2 top-[-2.8rem]",
  },
  {
    icon: Home_Icon_Left,
    text: "Fraud Protection",
    position:
      "absolute right-[12rem] max-xlg:right-[8rem] flex flex-col items-center justify-center max-xlg:top-[-0.3rem] gap-2 top-[-2.8rem]",
  },
];
