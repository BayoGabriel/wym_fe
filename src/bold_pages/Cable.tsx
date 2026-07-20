import React, { Fragment } from 'react'
import Cable_View_Modals from '../views/cable_view/cable_view_components/Cable_View_Modal'
import Cable_View from '../views/cable_view/Cable_View'

const Cable = () => {
  return (
    <Fragment>
        <Cable_View_Modals>
            <Cable_View/>
        </Cable_View_Modals>
    </Fragment>
  )
}

export default Cable