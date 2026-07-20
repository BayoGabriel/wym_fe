import React from 'react'
import Double_Image from '../../../components/Double_Image'
import { TwoImage, OneImage } from '../../../assets'
import appName from '../../../constants/data/App_Name'

const Second_Section = () => {
  return (
    <div className=''>
        <Double_Image
          img1={OneImage}
          img2={TwoImage}
          headingText={`With ${appName} Paying For Your TV Cable Has Never Been Easier`}
        />
    </div>
  )
}

export default Second_Section