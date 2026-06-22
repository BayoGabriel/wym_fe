import { CgQuote } from "react-icons/cg";

const Testimonial_Card_Main = ({ card }: { card: any }) => (
  <>
    <div className="flex">
      <span className="p-4 text-[20px] text-white bg-black/10 rounded-full">
        <CgQuote />
      </span>
    </div>
    <div className="flex flex-col gap-4">
      <span className="text-[#FFFFFF80] font-[500] text-[14px] uppercase">
        WORD FROM {card.title}
      </span>
      <h4 className="font-instrumentSans font-[500] text-white text-[24px] leading-[120%]">
        “{card.quote}”
      </h4>
      <p className="flex items-center gap-1">
        <span className="text-[#FFFFFF] font-instrumentSans font-[500] text-[14px]">—</span>
        <span className="text-[#FFFFFF] font-instrumentSans font-[500] text-[14px]">
          {card.name}
        </span>
      </p>
    </div>
  </>
);

export default Testimonial_Card_Main;
