import Nav_Bar from "@/src/components/layout/Nav_bar";
import Hero_Layout from "@/src/components/Hero_Layout";
import Transfer_Hero from "./transfer_view_components/Transfer_Hero";
import GetInTouch from "@/src/components/GetInTouch";
import FAQ from "@/src/components/FAQ";
import Full_Flex from "@/src/components/Full_Flex";
import { AfricanWoman, TransferBg } from "@/src/assets";
import SendMoney from "./transfer_view_components/SendMoney";
import Multiple_Payment from "./transfer_view_components/Multiple_Payment";
import Download_Footer from "@/src/components/Download_Footer";
import Send_Money_Easily from "./transfer_view_components/Send_Money_Easily";
import appName from "@/src/constants/data/App_Name";

const frequentQuestions = [
  {
    title: `How does ${appName}'s money transfer feature work?`,
    content: `${appName} allows you to send money to your friends and family seamlessly and without limits or restrictions, regardless of their location or financial needs.`,
  },
  {
    title: `Are there any restrictions on the amount of money I can send using ${appName}?`,
    content:
      `No, ${appName} allows you to send money without any limits or restrictions, subject to the applicable laws of the Federal Republic of Nigeria. `,
  },
  {
    title: "How much are the fees for making transfers?",
    content: `${appName} charges a minimal fee of 25 naira per transfer depending on your membership level. You can as well enjoy ${appName} zero fees on transfers if you are a Gold member.`,
  },
  {
    title: "How fast do recipients receive transfers?",
    content:
      `The speed of money transfers through ${appName} can vary depending on factors such as the recipient's bank and the chosen transfer method. However, ${appName} strives to facilitate transfers as quickly as possible.`,
  },
  {
    title: `Is there a limit to the number of money transfers I can make with ${appName}?`,
    content:
      "We do not impose a specific limit on the number of money transfers you can make.",
  },
];

const Transfer_View = () => {
  return (
    <>
      <Nav_Bar
        bgColor={"bg-[#CDF2FC]"}
        logoColor={"black"}
        linkColor={"text-black"}
        linkDColor={"text-black"}
        iconColor="text-black"
      />
      <Hero_Layout sectionClassName={"bg-[#CDF2FC]"} lower="yes" bgImage={TransferBg}>
        <Transfer_Hero />
      </Hero_Layout>
      <SendMoney />
      <Send_Money_Easily />
      <Multiple_Payment />
      <Full_Flex
        img={AfricanWoman}
        details={`Through my experience with ${appName} Money Transfer, I've seen the remarkable speed and convenience it offers. Whether sending money from ${appName} to ${appName} instantly or streamlining transactions with ${appName} Bulk Transfer, each step is seamless.`}
        subText={{
          span: "- Teniola ",
          text: ", Send money experience.",
        }}
        btnText={"Send money now"}
        styles={{
          bg: "bg-[#00DCFE]",
          textbg: "bg-[#CDF2FC]",
        }}
      />

      <FAQ
        title={`FAQs - Local Transfers`}
        description={`Everything you need to know about ${appName} transfer`}
        questions={frequentQuestions}
      />
      <GetInTouch />
      <Download_Footer bgColor="bg-[#010525]" textColor="text-white" />
    </>
  );
};

export default Transfer_View;
