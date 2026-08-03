import Nav_Bar from "@/src/components/layout/Nav_bar";
import Contact_Hero from "./contact_view_components/Contact_Hero";
import Contact_Section from "./contact_view_components/Contact_Section";
import Contact_Footer from "./contact_view_components/Contact_Footer";

const Contact_View = () => {
  return (
    <>
      <Nav_Bar
        bgColor="bg-[#DCFFC7]"
        logoColor="blue"
        linkColor="text-black"
        linkDColor="text-black"
        personalStyle="bg-[#0B40EE] text-white"
        iconColor="text-black"
      />
      <Contact_Hero />
      <Contact_Section />
      <Contact_Footer />
    </>
  );
};

export default Contact_View;
