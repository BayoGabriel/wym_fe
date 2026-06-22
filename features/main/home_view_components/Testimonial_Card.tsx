import Testimonial_Card_Main from "./Testimonial_Card_Main";
import Testimonial_Card_Secondary from "./Testimonial_Card_Secondary";

const Testimonial_Card = ({ card, index }: { card: any; index: number }) => {
  const isFirst = index === 0;

  const style = isFirst
    ? {
        backgroundImage: `url(${card.bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }
    : {
        backgroundColor: card.bgColor,
      };

  const widthClass = isFirst
    ? "lg:w-[36%] w-[60%] max-xm:w-[100%] xsm:w-[70%] xmd:w-[40%]"
    : "lg:w-[30%] w-[50%] xmd:w-[35%]";

  return (
    <div
      className={`rounded-[22px] shrink-0 transition-all duration-700 relative ${widthClass}`}
      style={style}
    >
      {isFirst && (
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-[#000000] via-[#00000046] to-[#00000000] rounded-[22px]" />
      )}
      <div className="relative z-10 p-5 flex flex-col justify-between h-full">
        {isFirst ? <Testimonial_Card_Main card={card} /> : <Testimonial_Card_Secondary card={card} />}
      </div>
    </div>
  );
};

export default Testimonial_Card;
