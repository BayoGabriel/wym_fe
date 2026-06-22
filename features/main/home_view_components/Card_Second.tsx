import Items_Data from "../../../constants/home/Item_Data";
import { Use_Home_Context_Ref_State_Handler } from "../../../context/page_context/home_context";

const Card_Second = () => {
  
  const { containerRef, inView} = Use_Home_Context_Ref_State_Handler()
  return (
    <div ref={containerRef} className="h-[200px] w-full relative">
      {
        Items_Data.map((item, index) => (
          <div key={index} className={`${item.class} ${inView ? `fall-item fall-delay-${index + 1}` : "hidden"}`}>
            <item.src />
          </div>
        ))
      }
    </div>
  );
};

export default Card_Second;
