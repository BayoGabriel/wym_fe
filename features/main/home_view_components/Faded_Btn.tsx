import { Faded_Btn_Icon } from "../../../assets";
import { Link } from "react-router-dom";

const Faded_Btn = ({ text }: { text: string }) => {
  return (
    <Link to={'/join-waitlist'}>
    <button className="flex gap-2 items-center text-[#006E75] font-montserrat bg-[#F0F0F0] px-4 py-2 w-fit rounded-xl cursor-pointer">
      {text}
      <Faded_Btn_Icon />
    </button>
    </Link>
  );
};

export default Faded_Btn;
