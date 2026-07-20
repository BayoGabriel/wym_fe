// import { JSX } from "react";
// import { BlackLogo, BlueLogo, LemonLogo, PurpleLogo, WhiteLogo } from "../assets";
// // import { LogoColor, LogoImgType, LogoWrapperType } from "../types/nav_types/Nav_Types";


// const LogoImg = ({src,height=52,width=135}:LogoImgType) => {
//   return (
//     <img
//       src={src}
//       alt="Logo"
//     />
//   )
// }

// const Logo_Wrapper = ({ indicator, indicatorWrapper }: LogoWrapperType) => {

//   const displayLogo: Record<LogoColor, JSX.Element> = {
//     "white": (
//                 <LogoImg 
//                   src={WhiteLogo}
//                 />
//               ),
//     "lemon": (
//                 <LogoImg 
//                   src={LemonLogo}
//                 />
//               ),
//     "blue": (
//                 <LogoImg 
//                   src={BlueLogo}
//                 />
//               ),
//     "black": (
//                 <LogoImg 
//                   src={BlackLogo}
//                 />
//               ),
//     "purple": (
//                 <LogoImg 
//                   src={PurpleLogo}
//                 />
//               )
//   }


//   return (
//     <div className={`${indicatorWrapper} flex justify-center items-center`} 
//        style={{width: 120, height:52, objectFit: 'contain'}}>
//       {displayLogo[indicator]}
//     </div>
//   );
// };

// export default Logo_Wrapper;
import React from 'react'

const Logo_Wrapper = () => {
  return (
    <div>Logo_Wrapper</div>
  )
}

export default Logo_Wrapper