import { Fragment } from "react";
import FAQ_View_Modal from "@/src/views/faq_view/faq_view_components/FAQ_View_Modal";
import FAQ_View from "@/src/views/faq_view/FAQ_View";

const FAQ = () => {
  return (
    <Fragment>
      <FAQ_View_Modal>
        <FAQ_View />
      </FAQ_View_Modal>
    </Fragment>
  );
};

export default FAQ;
