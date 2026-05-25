"use client"
import { Drop_Down } from "@/assets";
import { Nav_Data } from "@/data/constants/footer_data";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const Nav_List = ({
  setMobileNav,
  mobileNav,
}: {
  mobileNav: boolean;
  setMobileNav: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const [dropDown, setDropDown] = useState("");
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node) &&
        !mobileNav
      ) {
        setDropDown("");
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [mobileNav]);

  // const toggleDropDown = (name: string) => {
  //   if (dropDown === name) {
  //     setDropDown("");
  //   } else {
  //     setDropDown(name);
  //   }
  // };

  // Common handler for any link click
  const handleLinkClick = () => {
    setMobileNav(false); // close mobile menu
    setDropDown(""); // close dropdown
  };

  return (
    <>
      {Nav_Data.map((data) => (
        <div key={data.name} ref={dropDown === data.name ? dropdownRef : null}>
          {!data.subLink && (
            <Link
              href={data.href}
              onClick={handleLinkClick}
              className="lmd:font-bold hover:text-[#FD5E1D]"
            >
              {data.name}
            </Link>
          )}

          {data.subLink && (
            <div
              className="lmd:relative"
              onMouseOver={() => setDropDown(data.name)}
              onMouseLeave={() => setDropDown("")}
              style={{ padding: "8px 5px" }}
            >
              <div className="flex items-center gap-4 justify-between cursor-pointer">
                <p className="lmd:font-bold">{data.name}</p>
                <Drop_Down />
              </div>

              {/* {dropDown === data.name && (
                <div className="lmd:absolute bg-white grid gap-3 p-1 rounded-lg lmd:border lmd:border-[#F2F4F7] lmd:top-full lmd:mt-2 lmd:left-0 lmd:w-60 z-30 xmd:shadow-xl mt-2">
                  {data.subLink.map((link) => (
                    <Link
                      to={link.href}
                      key={link.name}
                      onClick={handleLinkClick}
                      className="flex gap-4 items-center font-inter font-medium text-[#101828] p-2 hover:bg-[#FD5E1D] hover:text-white"
                    >
                      <span>{link.icon()}</span>
                      <span>{link.name}</span>
                    </Link>
                  ))}
                </div>
              )} */}
              {dropDown === data.name && (
                <ul
                  className="dropdown-animate lmd:absolute transition-all duration-500 ease-in-out bg-white delay-500 grid gap-3 p-1 rounded-lg 
                 lmd:border lmd:border-[#F2F4F7] lmd:top-full lmd:mt-[-1px] lmd:left-0 
                 lmd:w-60 z-30 mt-[-1px]"
                >
                  {data.subLink.map((link, index) => (
                    <li
                      key={link.name}
                      style={{ animationDelay: `${0 + index * 0.1}s` }} // stagger like demo
                      className="w-full"
                    >
                      <Link
                        href={link.href}
                        onClick={handleLinkClick}
                        className="flex gap-4 items-center font-inter font-medium text-[#101828] p-2 hover:bg-[#FD5E1D] hover:text-white w-full"
                      >
                        <span>{link.icon()}</span>
                        <span>{link.name}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          )}
        </div>
      ))}
    </>
  );
};

export default Nav_List;
