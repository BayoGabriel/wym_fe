"use client"
import Link from "next/link";
import Nav_List from "../ui_components/nav_list";
// import Button from "../ui_components/button";
// import { Logo, BlackLogo } from "../../assets";
import { IoClose } from "react-icons/io5";
import { IoIosMenu } from "react-icons/io";
import { useState, useEffect } from "react";
import { App_Button } from "../ui_components/app_button";

const Nav_Bar = ({ logo = false }: { logo?: boolean }) => {
  const [mobileNav, setMobileNav] = useState(false);
  const [isAwayFromTop, setIsAwayFromTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Trigger when user is more than 20px from the top
      setIsAwayFromTop(window.scrollY > 50);
    };

    // Run once on mount (in case user reloads mid-scroll)
    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed right-0 left-0 top-0 z-[1000] transition-colors duration-300
        ${
          isAwayFromTop ? "bg-white shadow-xs" : "lmd:bg-transparent bg-white"
        }`}
    >
      <nav className="containerclass flex justify-between py-4">
        <div className="flex gap-20 items-center">
          {logo ? (
            <Link href={"/"}>
              {/* <img src={Logo} alt="logo" /> */}
            </Link>
          ) : (
            <Link href={"/"}>
              {/* <img src={BlackLogo} alt="logo" /> */}
            </Link>
          )}

          <div className="hidden lmd:flex gap-10 items-center">
            <Nav_List mobileNav={mobileNav} setMobileNav={setMobileNav} />
          </div>
        </div>

        <div
          className={`fixed z-[999] top-0 bottom-0 left-0 right-0 bg-white lmd:bg-transparent transition-transform duration-300 ease-in-out lmd:hidden
            ${mobileNav ? "translate-x-0" : "translate-x-full"}`}
        >
          <div className="containerclass">
            <div className="flex flex-col gap-4 h-full">
              <div className="flex items-center justify-between pt-4">
                <div className="flex items-center">
                  <Link href={"/"}>
                    {/* <img src={Logo} alt="logo" className="h-5" /> */}
                  </Link>
                </div>
                <button
                  onClick={() => setMobileNav(false)}
                  className="text-[#292D32]"
                >
                  {IoClose({
                    size: 24,
                    className: "text-[#101828] cursor-pointer",
                  })}
                </button>
              </div>
              <div className="flex flex-col gap-4">
                <Nav_List mobileNav={mobileNav} setMobileNav={setMobileNav} />
              </div>
            </div>
          </div>
        </div>

        <div>
          <button className="lmd:hidden" onClick={() => setMobileNav(true)}>
            {IoIosMenu({
              size: 24,
              className: "text-[#101828] cursor-pointer",
            })}
          </button>
          {/* <App_Button text="Get Started" /> */}
        </div>
      </nav>
    </header>
  );
};

export default Nav_Bar;
