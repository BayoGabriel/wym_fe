import { Fragment } from "react";
import { children_type } from "@/types/general_types/general_types";

const Contact_View_Modal = ({ children }: children_type) => {
  return (
    <Fragment>
      {children}
      <Fragment />
      <Fragment />
    </Fragment>
  );
};

export default Contact_View_Modal;
