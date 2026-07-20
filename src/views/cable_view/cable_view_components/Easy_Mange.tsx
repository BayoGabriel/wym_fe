import React from 'react'
import Simple_Flex_Items from '../../../components/Simple_Flex_Items'
import { EasyMange } from '../../../assets'
import appName from '../../../constants/data/App_Name'
const Easy_Mange = () => {
  return (
      <div className='pt-1 pb-6 bg-[#F4F8FC]'>
          <Simple_Flex_Items 
          img={{
              img: EasyMange,
          }} 
          titleStyle='font-[700]'
          bgColor='bg-[#F4F8FC]'
          title={`Easily Manage Your TV Cable Subscriptions With ${appName}.`} 
          details={`Stay effortlessly connected to your favorite TV shows by managing your cable subscriptions seamlessly with ${appName}. Enjoy convenience and peace of mind with every renewal.`} 
          btn={{
              btnStyles: "text-white bg-[#0a40ed] w-[190px] max-md:px-10 py-[17px] rounded-[4px] font-[300] text-center",
              btnText: 'Subscribe Now',
              btnBgColor: "[#006FFF]"
          }}        
        />
      </div>
  )
}

export default Easy_Mange