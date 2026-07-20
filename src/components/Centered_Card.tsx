import React, { ReactNode } from 'react'

interface Centered_Card_Props {
    icon: ReactNode
    heading: string
    description: string
}

const Centered_Card = ({ icon, heading, description }: Centered_Card_Props) => {
  return (
    <div 
        data-aos="zoom-in"
        data-aos-duration="1500"
        data-aos-once="true"
        className="bg-[#FAFFF5] border border-[#F5F5F5F5] text-center flex items-center justify-start flex-col px-6 pt-4 rounded-[20px] pb-6 w-full lg:gap-[22px]">
        
        {icon}
        <span className="text-[24px] mb-1 text-[#101828] font-[500] max-sm:text-[16px]">
            {heading}
        </span>
        <p className="font-[400] text-[16px] text-[#475467] max-sm:text-[12px]">
            {description}
        </p>
    </div>
  )
}

export default Centered_Card
