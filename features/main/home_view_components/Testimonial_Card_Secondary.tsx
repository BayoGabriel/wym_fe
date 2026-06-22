import Card_Star from "../../../assets/svg/Card_Star";

const Testimonial_Card_Secondary = ({ card }: { card: any }) => (
  <div>
    <Card_Star />
    <div className="flex flex-col gap-10 justify-between mt-auto">
      <h4 className="font-instrumentSans font-[500] text-white text-[24px] leading-[120%]">
        “{card.quote}”
      </h4>
      <div className="flex items-center gap-3 mt-auto">
        <img src={card.companyImg} className="max-h-10" alt="company logo" />
        <div className="flex flex-col gap-1">
          <h6 className="text-white font-instrumentSans font-[500] text-lg">{card.name}</h6>
          <span className="text-white font-instrumentSans font-[400] text-[14px] opacity-50">
            {card.title}
          </span>
        </div>
      </div>
    </div>
  </div>
);

export default Testimonial_Card_Secondary;
