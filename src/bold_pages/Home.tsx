import { Fragment } from 'react';
import Home_View from '../views/home_view/Home_View';
import Home_View_Modals from '../views/home_view/Home_View_Modals';
import { Home_Context_Ref_State_Provider } from '../context/page_context/home_context';

const Home = () => {
  return (
    <Fragment>
      <Home_Context_Ref_State_Provider>
        <Home_View_Modals>
          <Home_View />
        </Home_View_Modals>
      </Home_Context_Ref_State_Provider>
    </Fragment>
  );
};

export default Home;
