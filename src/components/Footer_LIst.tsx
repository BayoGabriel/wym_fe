import Link from "next/link";

interface ListProps {
  listTitle?: String;
  listLinks?: any;
  width?: string;
}
const Footer_List = ({
  listTitle = "list title",
  listLinks = [
    { href: "#", name: "Buy Airtime" },
    { href: "#", name: "Buy Power" },
    { href: "#", name: "Tv Cable Subscription" },
    { href: "#", name: "Buy Internet Data" },
  ],
  width = "10%",
}: ListProps) => {
  return (
    <div className="payBillContaim my-6 w-[48%] lg:pl-[5px] pl-0 lg:w-[13%]">
      <h3 className="font-[500] text-lemonColor mb-2 text-[14px] leading-loose">
        {listTitle}
      </h3>
      {listLinks?.map((item: any, key: any) => (
        <Link
          key={key}
          href={item.href}
          target={item.target ? item.target : "_self"}
          className="text-[13.67px] block text-[white] my-[16px] tracking-[0/001rem] leading-[1.2]"
        >
          {item?.name}
        </Link>
      ))}
    </div>
  );
};

export default Footer_List;
