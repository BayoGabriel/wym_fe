import { rightFeatures } from "@/data/constants/home/Hero_Features_Data"
import { Home_Hero_Second_Line } from "../../../assets"
import Feature_Item from "./Feature_Item"

const Hero_Features_Right = () => {
  return (
    <>
        {rightFeatures.map((feature, index) => (
            <Feature_Item 
            key={`right-feature-${index}`}
            icon={feature.icon}
            text={feature.text}
            position={feature.position}
            />
        ))}
        <Home_Hero_Second_Line />
    </>
  )
}

export default Hero_Features_Right