import { FloatingSvgs, imageSources, layerStyles } from "../../../constants/home/Animated_Data";
import { Use_Home_Context_Ref_State_Handler } from "../../../context/page_context/home_context";

const Real_Animated_Section = () => {
  const { positions } = Use_Home_Context_Ref_State_Handler();

  return (
    <div className="relative w-[360px] h-[220px] flex items-center justify-center">
      {[0, 1, 2].map((i) => (
        <img
          key={i}
          src={imageSources[i]}
          alt={`floating-${i}`}
          className={`absolute left-0 right-0 mx-auto rounded-xl transition-all duration-700 ease-in-out ${
            layerStyles[positions[i]]
          }`}
        />
      ))}
      {
        FloatingSvgs.map((svg, index) => (
          <div key={index} className={`hover:animate-bounce transition-all duration-300 ${svg.position}`}>
            <svg.src/>
          </div>
        ))
      }
    </div>
  );
};

export default Real_Animated_Section;
