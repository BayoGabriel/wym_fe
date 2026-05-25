import { ReactNode } from "react";

export interface Simple_Flex_Props {
  img: {
    img: string;
    imgPosition?: string;
    imgSm?: string;
    imgStyle?: string;
  };
  bgColor: string;
  title: string;
  titleStyle?: string;
  spanText?: string;
  details: string;
  details2?: string;
  details3?: string;
  btn: {
    btnStyles: string;
    btnText: string;
    btnBgColor?: string;
  };
  footer?: boolean;
  bannerSize?: string;
  comp?: ReactNode;
  text?: {
    detailStyle?: string;
    titleStyle?: string;
  };
  absoluteImg?: string;
  make?: string;
  btnAction?: () => void;
}
