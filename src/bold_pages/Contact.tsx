import { Fragment } from "react";
import Contact_View_Modal from "@/src/views/contact_view/contact_view_components/Contact_View_Modal";
import Contact_View from "@/src/views/contact_view/Contact_View";

const Contact = () => {
  return (
    <Fragment>
      <Contact_View_Modal>
        <Contact_View />
      </Contact_View_Modal>
    </Fragment>
  );
};

export default Contact;
