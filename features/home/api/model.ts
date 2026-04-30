import { Use_Home_Context } from "@/features/home/api/home_context";
import { useMemo } from "react";

const home_model = () => {
  //   const { status, setStatus, loaderRef, errorModalRef, user_data } =
  //     use_Global_State_Modal_Handler();

  const {} = Use_Home_Context();

  return useMemo(() => ({}), []);
};

export default home_model;
