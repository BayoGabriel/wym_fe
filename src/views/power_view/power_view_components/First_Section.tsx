import React from 'react'
import Simple_Flex_Items from '../../../components/Simple_Flex_Items'
import { ElectricityProvider } from '../../../assets'
import First_Section_Heading from '../../../components/First_Section_Heading'
import appName from '../../../constants/data/App_Name'
const FIrst_Section = () => {
  return (
    <div className='w-full bg-white'>
        <First_Section_Heading
        headingStyle='font-[900] text-[3.5em] leading-none text-[#181818FF]'
        textStyle='font-[200]'
          title='Reload Your Electricity Meter Any Time '
          containerClass='w-[95%] relative z-[10] max-w-screen-2lg 3xl:max-w-xlg mx-auto flex flex-col items-center justify-center lg:pt-[52px] pt-[30px]'
          description={`You can stay in charge, keep the lights on, and enjoy your money’s worth when you buy electricity units with ${appName}.`}
        />
        <div className='m-10'>
          <Simple_Flex_Items 
              img={{
                img: ElectricityProvider,
                imgPosition: "right"
              }} 
              bgColor='bg-[white]'
              title={'Get Paid When You Buy Units'} 
              details={`We will pay you each time you make an electricity top-up. ${appName} is the most pocket-friendly way to keep the electricity on at home or at work.`} 
              btn={{
                  btnStyles: 'bg-[#006FFF] text-white',
                  btnText: 'Buy Power',
                  btnBgColor: "text-white bg-[#0a40ed] w-[190px] max-md:px-10 py-[17px] rounded-[4px] font-[300] text-center",
              }}        
          />
        </div>
    </div>
  )
}

export default FIrst_Section