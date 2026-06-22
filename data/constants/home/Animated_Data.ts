import { Floating_Card_Bottom, Floating_Card_Left, Floating_Card_Right, FloatingImage, FloatingImage1, FloatingImage2 } from "../../assets";


export const layerStyles: string[] = [
  "z-[30] scale-100 w-[130%] top-0",
  "z-[20] scale-90 w-[110%] top-6",
  "z-[10] scale-80 w-[90%] top-12",
];

export const imageSources: string[] = [
  FloatingImage,
  FloatingImage1,
  FloatingImage2
];
export const FloatingSvgs = [
  {
    src: Floating_Card_Right,
    position: "absolute h-[50px] top-[-18%] right-[-14%]",
  },
  {
    src: Floating_Card_Left,
    position: "absolute h-[50px] top-[-24%] left-[-14%]",
  },
  {
    src: Floating_Card_Bottom,
    position: "absolute h-[50px] bottom-[10%] left-[15%]",
  },
];