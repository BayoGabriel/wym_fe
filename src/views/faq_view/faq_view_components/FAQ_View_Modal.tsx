import { Fragment } from "react";
import { children_type } from "@/types/general_types/general_types";

const FAQ_View_Modal = ({ children }: children_type) => {
  return (
    <Fragment>
      {children}
      <Fragment />
      <Fragment />
    </Fragment>
  );
};

export default FAQ_View_Modal;
