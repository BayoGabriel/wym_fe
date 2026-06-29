import Image from "next/image";
import { Auth } from "@/assets/images";

export const Auth_Hero_Widget = () => {
  return (
    <aside className="relative hidden min-h-screen flex-col justify-between overflow-hidden rounded-[32px] text-white lg:flex">
      <Image src={Auth} alt="Auth" className="w-full h-full object-cover" />
    </aside>
  );
};
