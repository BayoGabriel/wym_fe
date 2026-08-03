import Nav_Bar from "@/src/components/layout/Nav_bar";
import FAQ_Hero from "./faq_view_components/FAQ_Hero";
import FAQS from "./faq_view_components/FAQS";

const FAQ_View = () => {
  return (
    <>
      <Nav_Bar
        bgColor="bg-[#DCFFC7]"
        logoColor="black"
        linkColor="text-black"
        linkDColor="text-black"
        personalStyle="bg-[#0B40EE] text-[#DCFFC7]"
        iconColor="text-black"
      />
      <FAQ_Hero />
      <FAQS />
    </>
  );
};

export default FAQ_View;
