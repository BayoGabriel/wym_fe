import Link from "next/link";

type HomeTypes = {
  isOpen?: boolean;
  navList?: any;
  setDropDown: (x: boolean) => void;
};


const NavMenu = ({ navList, setDropDown, isOpen }: HomeTypes) => {
  return (
    <div
      className={`xmd:absolute bg-primary rounded-[8px] xmd:w-[320px] w-full z-200 py-3 top-[2.5rem] flex flex-col gap-3 transition-all duration-700 drop-shadow-2xl z-[1000]`}
    >
      {navList.map((data: any, ind: any) => (
        <div
          // variants={itemVariants}
          key={ind}
          className={'flex flex-col gap-1'}
        >
          {data?.title && (
            <div className="py-1 px-6">
              <p className="text-[#667085] text- base font-normal">
                {data?.title}
              </p>
            </div>
          )}

          <div>
            {data?.subList?.map((item: any, key: any) => (
              <Link
                key={key}
                target={item.target ? item.target : '_self'}
                href={item?.href}
                onClick={() => setDropDown(false)}
              >
                <div
                  className="flex flex-row gap-3 px-6 py-2"
                >
                  <img
                    className=""
                    src={item?.image}
                    alt="transfer"
                  />
                  <p className="text-[#101828] text-base font-medium">
                    {item?.name}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default NavMenu;
