import { Fragment } from 'react';
import DownloadAppModal from './home_view_components/DownloadAppModal';
import { Use_Home_Context_Ref_State_Handler } from '../../context/page_context/home_context';
import { children_type } from '@/types/general_types/general_types';

const Home_View_Modals = ({ children }: children_type) => {
  const {isOpen,toggleModal} = Use_Home_Context_Ref_State_Handler();
  return (
    <Fragment>
      {children}

      <Fragment />
        <DownloadAppModal isModalOpen={isOpen} closeModal={toggleModal} />
      <Fragment />
    </Fragment>
  );
};

export default Home_View_Modals;
