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
          <Link
            href={data.href}
            onClick={handleLinkClick}
            className="text-sm font-medium text-secondary hover:text-primary transition-colors lg:text-base"
          >
            {data.name}
          </Link>
        </div>
      ))}
    </>
  );
};

export default Nav_List;
