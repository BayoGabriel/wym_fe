import ROUTES from "../routes";
export const FooterTopData = [
  {
    width: 10,
    title: "Pay Bills",
    listItems: [
      {
        href: ROUTES.AIRTIME,
        name: "Buy Airtime",
      },
      {
        href: ROUTES.POWER,
        name: "Buy Power",
      },
      {
        href: ROUTES.CABLE,
        name: "Tv Cable",
      },
      {
        href: ROUTES.AIRTIME,
        name: "Buy Internet Data",
      },
    ],
  },
  {
    width: 10,
    title: "Transfer & Spend",
    listItems: [
      {
        href: ROUTES.TRANSFER,
        name: "Send Money",
      },
      // {
      //   href: ROUTES.VIRTUAL,
      //   name: "Virtual Card",
      // },
      // {
      //   href: ROUTES.LOAN,
      //   name: "Loan",
      // },
      // {
      //   href: "/bulk",
      //   name: "Bulk Transfer",
      // },
    ],
  },
  // {
  //   width: 10,
  //   title: "Rewards & Earn",
  //   listItems: [
  //     {
  //       href: "/bonus",
  //       name: "Referral Bonus",
  //     },
  //     {
  //       href: "/cashback",
  //       name: "Cashbacks",
  //     },
  //     {
  //       href: "/bonus",
  //       name: "Bonus",
  //     },
  //   ],
  // },
  {
    width: 10,
    title: "Company",
    listItems: [
      {
        href: ROUTES.ABOUT,
        name: "About Us",
      },
      {
        href: ROUTES.CONTACT,
        name: "Contact Us",
      },
      {
        href: "https://wymnet.org",
        name: "Blog",
        target: "_blank",
      },
    ],
  },
  {
    width: 10,
    title: "Help",
    listItems: [
      {
        href: ROUTES.CONTACT,
        name: "Get Help",
      },
      {
        href: ROUTES.FAQ,
        name: "FAQs",
      },
      {
        href: "",
        name: "Knowledge Base",
        target: "_blank",
      },
    ],
  },
  {
    width: 15,
    title: "Legal",
    listItems: [
      {
        href: ROUTES.TERMS,
        name: "Terms",
      },
      {
        href: ROUTES.PRIVACY,
        name: "Privacy",
      },
      {
        href: ROUTES.AML,
        name: "Anti Money Laundering",
      },
      {
        href: ROUTES.RISK,
        name: "Risk Disclosure",
      },
    ],
  },
];
