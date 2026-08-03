import appName from "./App_Name";
import ROUTES from "../routes";

export const PAYMENT = [
  {
    title: "Bill Payment",
    subList: [
      { href: ROUTES.AIRTIME, name: "Airtime", image: "/icons/Aitime.svg" },
      {
        href: ROUTES.POWER,
        name: "Buy Power",
        image: "/icons/ELECTRICITY.svg",
      },
      { href: ROUTES.CABLE, name: "Cable TV", image: "/icons/TV.svg" },
    ],
  },
  {
    title: "Account & Services",
    subList: [
      {
        href: ROUTES.TRANSFER,
        name: "Transfer Money",
        image: "/icons/transferIcon.svg",
      },
      // {
      //   href: "/Save",
      //   name: "Save Money",
      //   image: "/icons/save.svg",
      // },
      // {
      //   href: ROUTES.LOAN,
      //   name: "Loans",
      //   image: "/icons/loan.svg",
      // },
    ],
  },
  // {
  //   title: `${appName} Card`,
  //   subList: [
  //     {
  //       href: ROUTES.VIRTUAL,
  //       name: "Virtual Card",
  //       image: "/icons/virtual.svg",
  //     },
  //   ],
  // },
];

export const HELP = [
  {
    subList: [
      {
        href: `https://blog.wymnet.org`,
        name: " Blog",
        image: "/images/blog.svg",
        target: "_blank",
      },
      { href: "/faq", name: " FAQ", image: "/images/FAQ.svg" },
      {
        href: ROUTES.CONTACT,
        name: " Contact Us",
        image: "/images/contact.svg",
      },
      {
        href: `https://help.wymnet.org`,
        name: " Knowledge Base",
        image: "/images/FAQ.svg",
        target: "_blank",
      },
    ],
  },
];

export const REWARD = [
  {
    // subList: [
    //   {
    //     href: ROUTES.CASHBACK,
    //     name: " Cashbacks",
    //     image: "/images/cashback.svg",
    //   },
    //   { href: "/bonus", name: " Bonuses", image: "/images/bonus.svg" },
    // ],
  },
];

export const LIST = [
  {
    title: "AIRTIME & DATA",
    button: [
      {
        head: `How do I buy airtime and data on ${appName}?`,
        subList: [
          {
            text: `Simply log into ${appName} and click on the Pay Bills button.`,
          },
        ],
      },
      {
        head: "What networks can I buy airtime or data on?",
        subList: [
          {
            text: "You can buy data and airtime from Glo, MTN, Airtel,  9Mobile, Spectranet, Smile Network and others.",
          },
        ],
      },
      {
        head: `How much does it cost to buy airtime or data on ${appName}?`,
        subList: [
          {
            text: `There are no additional charges for buying data or airtime from ${appName}. ${appName} is the most affordable way to top up your data or airtime in Nigeria.`,
          },
        ],
      },
      {
        head: "How quickly are airtime and data purchases processed?",
        subList: [
          {
            text: `Airtime and data purchases are instant on ${appName}.`,
          },
        ],
      },
      {
        head: "Can I purchase airtime or data for someone else using the app?",
        subList: [
          {
            text: `Yes! With ${appName}, you can easily buy data or airtime for yourself or for others.`,
          },
        ],
      },
    ],
  },
  {
    title: "CASHBACK",
    button: [
      {
        head: "What does cashback mean?",
        subList: [
          {
            text: `The ${appName} cash-back offer allows you to earn some money back each time you spend on a bill payment. We’ll give you back 2% of the total value of your bill payment to help reduce the cost of your bill payments. `,
          },
        ],
      },
      {
        head: `What rewards do you offer for using ${appName}?`,
        subList: [
          {
            text: "In addition to 2% cash back on each utility bill payment, we offer a sign-up bonus of N250 for each new user.",
          },
        ],
      },
      {
        head: "How do I claim the 2% cash back?",
        subList: [
          {
            text: "You don’t have to claim the 2% cash-back on your bill payments. This sum will be credited to your account immediately.",
          },
        ],
      },
    ],
  },
  {
    title: "ELECTRICITY",
    button: [
      {
        head: `How do I buy electricity top-ups on ${appName}?`,
        subList: [
          {
            text: "All you have to do is download and log into the app, click on the Pay Bills section, select the Electricity Top Up button and choose your electricity provider. ",
          },
        ],
      },
      {
        head: "What payment methods can I use for purchasing electricity units on the app?",
        subList: [
          {
            text: "You can buy electricity units directly from the app. Simply login and navigate to the Pay Bills section, then click Electricity Top-up and choose your electricity provider.",
          },
        ],
      },
      {
        head: "How much does it cost to purchase electricity units on the app?",
        subList: [
          {
            text: `There are no charges for purchasing electricity units on ${appName}. In fact, we’ll give you back 2% of the total value of any electricity top-up that you make using the app.`,
          },
        ],
      },
      {
        head: "Is there a limit to how much electricity I can buy on the app?",
        subList: [
          {
            text: `No, there is no limit to how much electricity you can buy on ${appName}.`,
          },
        ],
      },
      {
        head: `What electricity providers does ${appName} support?`,
        subList: [
          {
            text: `${appName} supports major electricity providers in Nigeria including IKEDC IKEJA ELECTRICITY, EKEDC EKO ELECTRICITY, KEDCO EKO ELECTRICITY, PHED PORT HARCOURT ELECTRICITY, JED JOS ELECTRICITY, IBEDC IBADAN ELECTRICITY, KAEDCO KADUNA ELECTRICITY, AEDC ABUJA ELECTRICITY.`,
          },
        ],
      },
    ],
  },
  {
    title: "CABLE TV",
    button: [
      {
        head: "Which Cable TV networks do you support?",
        subList: [
          {
            text: `With ${appName}, you can renew your subscription with DSTV and GOTV.`,
          },
        ],
      },
      {
        head: `What payment methods can I use to renew my cable TV subscription?`,
        subList: [
          {
            text: `You can easily renew your DSTV or GOTV subscription directly from the app. All you need to do is ensure that you fund your ${appName} wallet then proceed to pay your cable TV bill.`,
          },
        ],
      },
      {
        head: "How do I subscribe to Cable TV using the app?",
        subList: [
          {
            text: "How do I subscribe to Cable TV using the app?",
          },
        ],
      },
      {
        head: "Are there any extra fees for subscribing to cable TV?",
        subList: [
          {
            text: "There are no fees for renewing your cable TV subscription! Instead, we’ll give you back 2% of the total value of each transaction when you pay your cable TV and other bills on the app.",
          },
        ],
      },
      {
        head: `Do I get any rewards for paying Cable TV subscription on ${appName}?`,
        subList: [
          {
            text: "Yes! We give you 2% cashback on the total value of any bill you pay using the app, including your cable TV bills. ",
          },
        ],
      },
    ],
  },
  // {
  //   title: "VIRTUAL CARD",
  //   button: [
  //     {
  //       head: "What is a virtual card?",
  //       subList: [
  //         {
  //           text: `${appName} virtual cards are debit cards that allow you to make transactions online without using a physical card. With a virtual card linked to your ${appName} wallet, you can easily pay for any online transactions.`,
  //         },
  //       ],
  //     },
  //     {
  //       head: "How is a virtual card different from an ordinary debit/credit card?",
  //       subList: [
  //         {
  //           text: "Virtual cards do the same thing as regular debit cards, and they work in the same way. However, unlike regular debit cards, virtual cards are not issued physically. ",
  //         },
  //       ],
  //     },
  //     {
  //       head: "How does a virtual card work?",
  //       subList: [
  //         {
  //           text: "Virtual cards work in the same way that regular debit/credit cards work. While there is usually no physical card, they will have a unique card number, expiry date, and secret number just like regular debit/credit cards.",
  //         },
  //       ],
  //     },
  //     {
  //       head: "How much does it cost to get a virtual card?",
  //       subList: [
  //         {
  //           text: `${appName} virtual cards are issued free of charge.`,
  //         },
  //       ],
  //     },
  //     {
  //       head: "Are virtual cards secure?",
  //       subList: [
  //         {
  //           text: `${appName} virtual cards are highly secure. For added safety users must also ensure to only shop on reputable websites and to be vigilant at all times. `,
  //         },
  //       ],
  //     },
  //   ],
  // },
  // {
  //   title: "SAVINGS",
  //   button: [
  //     {
  //       head: `How does ${appName} app help me save?`,
  //       subList: [
  //         {
  //           text: `${appName} provides a savings platform that allows you deposit you where you can deposit your funds and earn interest over time. You can also lock away your funds a specific period, encouraging disciplined saving habits.`,
  //         },
  //       ],
  //     },
  //     {
  //       head: `How Do I Start Saving on ${appName}`,
  //       subList: [
  //         {
  //           text: `Saving on ${appName} is easy. Simply download the app, create an account, and fund your ${appName} wallet. You can then click on the Savings tab on your dashboard to fund your ${appName} Super Savers wallet.`,
  //         },
  //       ],
  //     },
  //     {
  //       head: `Are there any charges for savings?`,
  //       subList: [
  //         {
  //           text: `Saving with ${appName} is free! In fact, we pay you a generous interest of up to 15% per annum when you save with our Super Savers wallet.`,
  //         },
  //       ],
  //     },
  //     {
  //       head: `What interest rate does ${appName} app offer?`,
  //       subList: [
  //         {
  //           text: `${appName} offer interest rate of up to s an attractive15% on savings, which is significantly higher than interest on savings with traditional bank savings accounts.`,
  //         },
  //       ],
  //     },
  //     {
  //       head: `Can I access my savings anytime with ${appName} app? `,
  //       subList: [
  //         {
  //           text: `While ${appName} app offers the option to lock away funds for a period of time, it also provides flexibility for users to access their savings when needed, subject to any applicable terms and conditions.`,
  //         },
  //       ],
  //     },
  //   ],
  // },
  // {
  //   title: "LOANS",
  //   button: [
  //     {
  //       head: "Am I eligible for a loan? ",
  //       subList: [
  //         {
  //           text: `${appName} evaluates eligibility based on your credit profile. We take into consideration your usage of the app, savings and any other loans you may have.`,
  //         },
  //       ],
  //     },
  //     {
  //       head: "Do I need collateral to qualify for a loan?",
  //       subList: [
  //         {
  //           text: "No. We rely on your credit profile to make eligibility decisions. Applicants who are approved for loans will not require any collateral.",
  //         },
  //       ],
  //     },
  //     {
  //       head: `What is the interest rate on loans from ${appName}?`,
  //       subList: [
  //         {
  //           text: `Interest rates vary and largely depend on your credit profile but they are consistently lower than the market average. The more you take loans and repay them, the lower the interest rate we can offer you. `,
  //         },
  //       ],
  //     },
  //     {
  //       head: `What customer support options are available if I need assistance with my loan? `,
  //       subList: [
  //         {
  //           text: `${appName} offers 24/7 customer service, ensuring that support is readily available whenever you need it.`,
  //         },
  //       ],
  //     },
  //     {
  //       head: `How can I apply for a small business loan through ${appName}?`,
  //       subList: [
  //         {
  //           text: `To apply for a loan, download the ${appName} app from the Google Play Store or IOS Store, create an account, and get verified. You can then apply for a loan by clicking the Loans button on your dashboard.`,
  //         },
  //       ],
  //     },
  //   ],
  // },
  {
    title: `REFER AND EARN`,
    button: [
      {
        head: `What is ${appName}'s Refer and Earn Program?`,
        subList: [
          {
            text: "The Refer and Earn Program is a rewarding initiative that allows our users to earn rewards for signing up and for referring others to use the app.",
          },
        ],
      },
      {
        head: `How does ${appName} pay me when I pay?`,
        subList: [
          {
            text: `When you pay any utility bill using the app, we pay you back 2% of the total value of your payment. `,
          },
        ],
      },
      {
        head: `What incentives are there for ${appName} executive agents?`,
        subList: [
          {
            text: `${appName} executive agents earn a monthly stipend along with 5 naira for every utility bill payment made by referrals who use the app.`,
          },
        ],
      },
      {
        head: `How can I become a ${appName} executive agent?`,
        subList: [
          {
            text: `Anyone can become a ${appName} executive agent, however, we accept applications for ${appName} executive agent positions from time to time. We will advertise the qualifications and requirements when we do.`,
          },
        ],
      },
    ],
  },
  {
    title: "MONEY TRANSFER",
    button: [
      {
        head: `How does ${appName}'s money transfer feature work?`,
        subList: [
          {
            text: `${appName} allows you to send money to your friends and family seamlessly and without limits or restrictions, regardless of their location or financial needs.`,
          },
        ],
      },
      {
        head: `Are there any restrictions on the amount of money I can send using ${appName}?`,
        subList: [
          {
            text: `No, ${appName} allows you to send money without any limits or restrictions, subject to the applicable laws of the Federal Republic of Nigeria. `,
          },
        ],
      },
      {
        head: `How much are the fees for making transfers?`,
        subList: [
          {
            text: `${appName} charges a minimal fee of 50 naira per transfer.`,
          },
        ],
      },
      {
        head: `How fast do recipients receive transfers?`,
        subList: [
          {
            text: `The speed of money transfers through ${appName} can vary depending on factors such as the recipient's bank and the chosen transfer method. However, ${appName} strives to facilitate transfers as quickly as possible.`,
          },
        ],
      },
      {
        head: ` Is there a limit to the number of money transfers I can make with ${appName}?`,
        subList: [
          {
            text: `We do not impose a specific limit on the number of money transfers you can make.`,
          },
        ],
      },
    ],
  },
];
