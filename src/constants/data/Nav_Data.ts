import Airtime_Icon from "../../assets/svgs/Airtime_Icon";
import Blog_Icon from "../../assets/svgs/Blog_Icon";
import Bonus_Icon from "../../assets/svgs/Bonus_Icon";
import Cable_Icon from "../../assets/svgs/Cable_Icon";
import Cashback_Icon from "../../assets/svgs/Cashback_Icon";
import Contact_Icon from "../../assets/svgs/Contact_Icon";
import FAQ_Icon from "../../assets/svgs/FAQ_Icon";
import Local_Transfer_Icon from "../../assets/svgs/Local_Transfer_Icon";
import Power_Icon from "../../assets/svgs/Power_Icon";
import ROUTES from "../routes";

export const PAYMENT = [
  {
    title: "Bill Payment",
    subList: [
      { href: ROUTES.AIRTIME, name: "Airtime", image: Airtime_Icon },
      {
        href: ROUTES.POWER,
        name: "Buy Power",
        image: Power_Icon,
      },
      { href: ROUTES.CABLE, name: "Cable TV", image: Cable_Icon },
    ],
  },
  {
    title: "Account & Services",
    subList: [
      {
        href: ROUTES.TRANSFER,
        name: "Local Transfer",
        image: Local_Transfer_Icon,
      }
    ],
  }
];

export const HELP = [
  {
    subList: [
      {
        href: "/",
        name: " Blog",
        image: Blog_Icon,
        target: "_blank",
      },
      { href: ROUTES.FAQ, name: " FAQ", image: FAQ_Icon },
      {
        href: ROUTES.CONTACT,
        name: " Contact Us",
        image: Contact_Icon,
      },
      {
        href: `/`,
        name: " Knowledge Base",
        image: FAQ_Icon,
        target: "_blank",
      },
    ],
  },
];

export const REWARD = [
  {
    subList: [
      // {
      //   href: ROUTES.BONUS,
      //   name: " Referral Bonuses",
      //   image: Bonus_Icon,
      // },
      // {
      //   href: ROUTES.CASHBACK,
      //   name: "Cashbacks & Bonuses",
      //   image: Cashback_Icon,
      // },
    ],
  },
];
