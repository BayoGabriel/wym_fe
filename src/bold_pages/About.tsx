import { Fragment } from "react";
import About_Modal from "@/src/views/about_view/about_view_components/About_Modal";
import About_View from "@/src/views/about_view/About_View";

const About = () => {
  return (
    <Fragment>
      <About_Modal>
        <About_View />
      </About_Modal>
    </Fragment>
  );
};

export default About;
