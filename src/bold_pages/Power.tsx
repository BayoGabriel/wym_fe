import React, { Fragment } from 'react'
import Power_View_Modals from '../views/power_view/power_view_components/Power_View_Modal'
import Power_View from '../views/power_view/Power_View'

const Power = () => {
  return (
    <Fragment>
        <Power_View_Modals>
            <Power_View/>
        </Power_View_Modals>
    </Fragment>
  )
}

export default Power