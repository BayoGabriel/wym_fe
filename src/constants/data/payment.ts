import appName from "./App_Name";

export const PAYMENT = [
  {
    title: 'Bill Payment',
    subList: [
      { href: '/airtime', name: 'Airtime', image: '/icons/Aitime.svg' },
      {
        href: '/power',
        name: 'Buy Power',
        image: '/icons/ELECTRICITY.svg',
      },
      { href: '/cable', name: 'Cable TV', image: '/icons/TV.svg' },
    ],
  },
  {
    title: 'Account & Services',
    subList: [
      {
        href: '/transfer',
        name: 'Transfer Money',
        image: '/icons/transferIcon.svg',
      },
      {
        href: '/Save',
        name: 'Save Money',
        image: '/icons/save.svg',
      },
      {
        href: '/loan',
        name: 'Loans',
        image: '/icons/loan.svg',
      },
    ],
  },
  {
    title: `${appName} Card`,
    subList: [
      {
        href: '/virtual',
        name: 'Virtual Card',
        image: '/icons/virtual.svg',
      },
    ],
  },
];
