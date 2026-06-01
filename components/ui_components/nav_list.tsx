"use client";
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

  const handleLinkClick = () => {
    setMobileNav(false);
    setDropDown("");
  };

  return (
    <>
      {Nav_Data.map((data) => (
        <div key={data.name} ref={dropDown === data.name ? dropdownRef : null}>
          {!data.subLink && (
            <Link
              href={data.href}
              onClick={handleLinkClick}
              className="text-sm font-medium text-secondary hover:text-primary transition-colors lmd:text-base"
            >
              {data.name}
            </Link>
          )}

          {data.subLink && (
            <div
              className="lmd:relative"
              onMouseOver={() => setDropDown(data.name)}
              onMouseLeave={() => setDropDown("")}
            >
              <button className="flex items-center gap-2 text-sm font-medium text-secondary hover:text-primary transition-colors lmd:text-base">
                {data.name}
                <Drop_Down />
              </button>

              {dropDown === data.name && (
                <ul className="lmd:absolute top-full left-0 mt-2 w-56 bg-white border border-border rounded-xl shadow-lg overflow-hidden z-50 transition-all duration-200">
                  {data.subLink.map((link, index) => (
                    <li key={link.name} className="w-full">
                      <Link
                        href={link.href}
                        onClick={handleLinkClick}
                        className="flex items-center gap-3 px-4 py-3 text-sm font-medium text-secondary hover:bg-primarySoft hover:text-primary transition-colors w-full"
                      >
                        <span className="text-primary">{link.icon()}</span>
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
