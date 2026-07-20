import { Fragment, useEffect } from 'react';
// import { Outlet } from 'react-router-dom';
import Footer from '../components/layout/Footer';
import AOS from "aos";
import 'aos/dist/aos.css';

const Main_Layout = () => {
    useEffect(() => {
        AOS.init({
            disable: false,
            startEvent: 'DOMContentLoaded',
            initClassName: 'aos-init',
            animatedClassName: 'aos-animate',
            useClassNames: false,
            disableMutationObserver: false,
            debounceDelay: 50,
            throttleDelay: 99,
            offset: 120,
            delay: 0,
            duration: 400,
            easing: 'ease',
            once: false,
            mirror: false,
            anchorPlacement: 'top-bottom',
        });
  
        return () => {
            AOS.refresh();
        };
    }, []);
  return (
    <Fragment>
      {/* <Navbar /> */}

      {/* <Outlet /> */}
      <Footer />
    </Fragment>
  );
};

export default Main_Layout;
