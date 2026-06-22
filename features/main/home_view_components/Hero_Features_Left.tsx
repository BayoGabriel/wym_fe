import { leftFeatures } from "@/data/constants/home/Hero_Features_Data"
import { Home_Hero_First_Line } from "../../../assets"
import Feature_Item from "./Feature_Item"

const Hero_Features_Left = () => {
  return (
    <>
        {leftFeatures.map((feature, index) => (
          <Feature_Item 
            key={`left-feature-${index}`}
            icon={feature.icon}
            text={feature.text}
            position={feature.position}
          />
        ))}
        <Home_Hero_First_Line />
    </>
  )
}

export default Hero_Features_Left