import { JSX, ReactNode } from "react";
import { JsxElement } from "typescript";

interface CircleCardItemProps {
  image: () => JSX.Element;
  text: string;
  alt?: string;
  circleClass?: string;
  textClass?: string;
  itemClass?: string;
  imageClass?: string;
}

const Circle_Card_Item: React.FC<CircleCardItemProps> = ({
  image,
  text,
  alt,
  circleClass = "bg-[#DCFFC7] rounded-full grid place-items-center w-[3.5rem] h-[3.5rem] xmd:w-[4rem] mx-auto xmd:h-[4rem]",
  textClass = "text-[10px] xmd:text-sm text-[#344054] font-medium",
  itemClass = "flex flex-col w-full gap-2 text-center",
  imageClass = "h-6 w-6",
}) => {
  return (
    <div className={itemClass}>
      <div className={circleClass}>
        {/* <img src={image} className={imageClass} alt={alt || text} /> */}
        <div className={imageClass}>{image()}</div>
      </div>
      <p className={textClass}>{text}</p>
    </div>
  );
};

interface CircleCardsContainerProps {
  items: Array<{
    image: () => JSX.Element;
    text: string;
    alt?: string;
  }>;
  containerClass?: string;
  itemClass?: string;
  circleClass?: string;
  textClass?: string;
  imageClass?: string;
  aosAnimation?: string;
  aosDuration?: string;
  aosOnce?: boolean;
}

const Circle_Cards_Container: React.FC<CircleCardsContainerProps> = ({
  items,
  containerClass = "w-full md:w-[48%] lg:w-[33.33%] h-auto flex lg:gap-4",
  itemClass,
  circleClass,
  textClass,
  aosAnimation = "fade-up",
  aosDuration = "1500",
  aosOnce = true,
}) => {
  return (
    <div
      className={containerClass}
      data-aos={aosAnimation}
      data-aos-duration={aosDuration}
      data-aos-once={aosOnce}
    >
      {items.map((item, index) => (
        <Circle_Card_Item
          key={index}
          image={item.image}
          text={item.text}
          alt={item.alt}
          itemClass={itemClass}
          circleClass={circleClass}
          textClass={textClass}
        />
      ))}
    </div>
  );
};

export { Circle_Card_Item, Circle_Cards_Container };
