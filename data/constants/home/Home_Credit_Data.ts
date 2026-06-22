import {
  HomeSuccess1,
  HomeSuccess2,
  HomeSuccess3,
  HomeSuccess4,
  Savings3,
} from "../../assets";
import OverDraft from "../../assets/svg/OverDraft";
import Savings from "../../assets/svg/Savings";
import Transfer from "../../assets/svg/Transfer";

export const Home_Credit_Data = [
  {
    title: " Credit Card Builder",
    data: [
      "Build Your UK credit score from the First Day",
      "No Prior credit History Required",
      "Low Annual percentage rates designed for new comers. ",
    ],
    img: HomeSuccess1,
    svg: Savings3,
  },
  {
    title: "Savings Account",
    data: [
      "Earn Competitive Interest rates.",
      "No Monthly fees for students or migrants during the first year.",
      "Tools to help set and track savings goals",
    ],
    img: HomeSuccess2,
    svg: Savings,
    reverseImg: true,
  },
  {
    title: "International Transfers",
    data: [
      "Send money home securely with low fees and competitive exchange rates",
      "Track transfers in real-time via the Bravoo app",
    ],
    img: HomeSuccess3,
    svg: Transfer,
  },
  {
    title: "Overdraft  Protection",
    data: [
      "Flexible overdraft options to cover unexpected expenses.",
      "Transparent terms with no hidden fees",
    ],
    img: HomeSuccess4,
    svg: OverDraft,
    reverseImg: true,
  },
];

export const tabData: string[] = [
  "Credit Card Builder",
  "Savings Account",
  "International Transfers",
  "Overdraft  Protection",
];
