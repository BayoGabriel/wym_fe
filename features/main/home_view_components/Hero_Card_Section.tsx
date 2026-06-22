import { desktopCards } from "@/data/constants/home/Hero_Card_Data";
import { ImageCardGridProps } from "@/types/component_types/ui_types";

const Hero_Card_Section = ({
  cards = desktopCards,
  containerClassName = "max-lg:gap-5 max-lg:px-2 sm:px-6 md:px-10 max-lg:mt-20 max-md:gap-2 max-lg:grid max-lg:grid-cols-2 ",
  showCard = false,
}: ImageCardGridProps) => {
  return (
    <div
      className={`lg:flex lg:gap-5 lg:justify-between transition-all duration-500 w-full lg:px-[4rem] 
        ${showCard ? "lg:-mt-10" : "lg:mt-0"} ${containerClassName}`}
    >
      {cards.map((card, index) => (
        <div data-aos="flip-up" data-aos-delay={index * 50} key={index} className={card.className}>
          {card.content ? (
            <div className="w-full h-full">{card.content}</div>
          ) : (
            <img src={card.src} alt={card.alt} className="w-full" />
          )}
        </div>
      ))}
    </div>
  );
};

export default Hero_Card_Section;
