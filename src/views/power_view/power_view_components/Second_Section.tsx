import React from 'react'
import Triple_Cards from '../../../components/Triple_Cards'
import { PowerMain } from '../../../assets'
import appName from '../../../constants/data/App_Name'
import Power_Three_Icon_One from '../../../assets/svgs/Power_Three_Icon_One'
import Power_Three_Icon_Two from '../../../assets/svgs/Power_Three_Icon_Two'
const Second_Section = () => {
  return (
    <div className='py-10'>
        <Triple_Cards
            img1={PowerMain}
            img2={<Power_Three_Icon_One/>}
            img3={<Power_Three_Icon_Two/>}
            headingText={`With ${appName}, managing your electricity payments is simpler than ever.`}
            firstCardBody="Buy electricity units from any distribution company"
            secondCardBody="Receive your meter token promptly through both email and the app"
            card1='bg-[#006FFF] text-white text-center'
            card2='bg-[#212337] text-white text-center'
        />
    </div>
  )
}

export default Second_Section