import React from 'react'
import Simple_Flex_Items from '../../../components/Simple_Flex_Items'
import { NetworkImage } from '../../../assets'
import First_Section_Heading from '../../../components/First_Section_Heading'
import appName from '../../../constants/data/App_Name'
const FIrst_Section = () => {
  return (
    <div className='w-full bg-white'>
        <First_Section_Heading
          textStyle='font-[200]'
          headingStyle='font-[800] text-[3.5em] leading-none pt-10'
          title='Time to Renew your TV Cable Subscription?'
          containerClass='w-[95%] max-w-screen-2lg 3xl:max-w-xlg mx-auto flex flex-col items-center justify-center lg:pt-[52px] pt-[10px]'
          description={`Never miss your favorite shows with quick ${appName} bill payments. It only takes a few clicks to renew your TV cable and other streaming subscription services on ${appName}.`}
        />
        <Simple_Flex_Items 
            img={{
              img: NetworkImage,
              imgPosition: "left"
            }} 
            bgColor='bg-white'
            title={'Get paid for every renewals!'} 
            details={`Not only is ${appName} the fastest way to renew your cable subscription, but we’ll also give you some money back each time you pay your cable bill. With ${appName}, you’ll get paid each time you pay!`} 
            btn={{
                btnStyles: "text-white bg-[#0a40ed] w-[190px] max-md:px-10 py-[17px] rounded-[4px] font-[300] text-center",
                btnText: 'Renew & Earn!',
                btnBgColor: "bg-[#006FFF]"
            }}        
        />
    </div>
  )
}

export default FIrst_Section