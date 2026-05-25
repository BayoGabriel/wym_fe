import { Use_Home_Context } from "@/features/home/api/home_context";
import { useMemo } from "react";

const useHomeModel = () => {
  //   const { status, setStatus, loaderRef, errorModalRef, user_data } =
  //     use_Global_State_Modal_Handler();

  const { overview, setOverview } = Use_Home_Context();

  return useMemo(() => ({ overview, setOverview }), [overview, setOverview]);
};

export default useHomeModel;
