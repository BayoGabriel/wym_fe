"use client";
import { Fragment, useEffect, useRef, useState } from "react";
import { IoMdMenu } from "react-icons/io";
import NavList from "../NavList";
import Link from "next/link";
import Image from "next/image";
import Logo from "@/assets/images/logo.png";

interface Navbar_Props {
  bgColor: string;
  logoColor?: string;
  linkColor: string;
  linkDColor: string;
  personalStyle?: string;
  getStartedBtn?: string;
  iconColor?: string;
}

const Nav_Bar = ({
  bgColor,
  logoColor,
  linkColor,
  linkDColor,
  personalStyle,
  getStartedBtn,
  iconColor,
}: Navbar_Props) => {
  const [navIndicator, setNavIndicator] = useState("");
  const [scroll, setScroll] = useState(false);
  const [dropDown, setDropDown] = useState(false);
  const [openMobileNav, setOpenMobileNav] = useState(false);
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      return window?.scrollY < 30 ? setScroll(false) : setScroll(true);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setNavIndicator("");
        setDropDown(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleNavIndicator = (data: string) => {
    return data == navIndicator ? setNavIndicator("") : setNavIndicator(data);
  };

  return (
    <Fragment>
      <header
        className={`${scroll ? "bg-white" : bgColor} py-4 sticky z-[150] top-0`}
        style={{ paddingTop: 20 }}
      >
        {/* nav */}
        <nav
          className={`w-[95%] containerclass max-w-screen-2lg 3xl:max-w-xlg mx-auto flex justify-between items-center`}
        >
          <div className={`flex items-center gap-[35.6px]`}>
            <Link href="/">
              {/* <Logo_Wrapper indicator={`${scroll ? "black" : logoColor!}`} /> */}
              <Image src={Logo} width={50} height={50} alt="" />
            </Link>
            {/* <div className="flex items-center gap-[16.69px]">
              <Link
              to={"/"}
                className={`${
                  personalStyle ? personalStyle : "text-[#0B40EE] bg-[#DCFFC7]"
                } hidden font-[600] text-base leading-[24px] lg:block w-fit px-[14px] py-[0.3rem] rounded-[20px]`}
              >
                <p className="font-[600] font-Inter">Personal</p>
              </Link>
              <div>
                <a
                  href=" "
                  target="_blank"
                  className={`font-[600] font-Inter hidden lg:block px-[10px] py-[0.3rem] leading-[26.7px] text-base rounded-[20px]
                  ${scroll ? "text-[#101828]" : linkColor!}`}
                >
                  Business
                </a>
              </div>
            </div> */}
          </div>

          <NavList
            scroll={scroll}
            openMobileNav={openMobileNav}
            dropdownRef={dropdownRef}
            navIndicator={navIndicator}
            handleNavIndicator={handleNavIndicator}
            setDropDown={setDropDown}
            setOpenMobileNav={setOpenMobileNav}
            linkDColor={linkDColor}
          />

          <Link
            href="/auth/login"
            className={`${
              getStartedBtn && !scroll ? getStartedBtn : "bg-black text-white"
            } hidden lg:block text-sm font-medium px-6 py-[20px] rounded-[4px]`}
          >
            Get started — It's free
          </Link>

          <button className="lg:hidden" onClick={() => setOpenMobileNav(true)}>
            {IoMdMenu({
              size: 24,
              className: `${
                scroll ? "text-[#101828]" : iconColor ? iconColor : "text-white"
              } cursor-pointer`,
            })}
          </button>
        </nav>
      </header>
    </Fragment>
  );
};

export default Nav_Bar;
