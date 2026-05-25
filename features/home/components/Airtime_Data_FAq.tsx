import { appName } from '@/data/constants/app_name';
import FAQ from '@/components/widget_components/faq';

interface Question {
  title: string;
  content: string;
}
const frequentQuestions: Question[] = [
  {
    title: `How do I buy airtime on ${appName}?`,
    content: `Simply log into ${appName} and click on the Pay Bills button.`,
  },
  {
    title: `What networks can I buy airtime or data on?`,
    content:
      `You can buy data and airtime from Glo, MTN, Airtel,  9Mobile, Spectranet, Smile Network and others.`,
  },
  {
    title: `How much does it cost to buy airtime or data on ${appName}?`,
    content:
      `There are no additional charges for buying data or airtime from ${appName}. ${appName} is the most affordable way to top up your data or airtime in Nigeria.`,
  },
  {
    title: `How quickly are airtime and data purchases processed?`,
    content: `Airtime and data purchases are instant on ${appName}.`,
  },
  {
    title: `Can I purchase airtime or data for someone else using the app?`,
    content:
      `Yes! With ${appName}, you can easily buy data or airtime for yourself or for others.`,
  },
];

const Airtime_Data_FAq = () => {
  return (
    <FAQ 
      title="Airtime & Data FAQ"
      description="Everything you need to know about the Airtime and Data"
      questions={frequentQuestions}
    />
  )
}

export default Airtime_Data_FAq
