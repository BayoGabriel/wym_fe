import MobileNav from './Mobile_Nav';
import DesktopNav from './Desktop_Nav';

interface NavListProps {
    scroll: boolean,
    openMobileNav: boolean
    dropdownRef: React.RefObject<HTMLDivElement | null>
    navIndicator: string
    linkDColor: string
    handleNavIndicator: (val: string) => void
    setDropDown: React.Dispatch<React.SetStateAction<boolean>>
    setOpenMobileNav: React.Dispatch<React.SetStateAction<boolean>>
}

const NavList = ({ 
  scroll, 
  openMobileNav, 
  dropdownRef, 
  navIndicator, 
  handleNavIndicator, 
  setDropDown, 
  setOpenMobileNav,
  linkDColor
}: NavListProps) => {
  
  return (
    <>
      <MobileNav 
        openMobileNav={openMobileNav}
        navIndicator={navIndicator}
        handleNavIndicator={handleNavIndicator}
        setOpenMobileNav={setOpenMobileNav}
        dropdownRef={dropdownRef}
      />
      <DesktopNav 
        scroll={scroll}
        navIndicator={navIndicator}
        handleNavIndicator={handleNavIndicator}
        setDropDown={setDropDown}
        dropdownRef={dropdownRef}
        linkDColor={linkDColor}
      />
    </>
  );
};

export default NavList;