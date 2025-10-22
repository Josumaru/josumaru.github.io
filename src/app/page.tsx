import Experience from '@/components/experience/experience';
import FrequentlyAskQuestion from '@/components/faq/frequently-ask-question';
import Header from '@/components/header/header';
import Profile from '@/components/profile/Profile';
import Showcase from '@/components/showcase/showcase';
import { NextPage } from 'next';

const Page: NextPage = ({}) => {
  return (
    <>
      <Header />
      <Showcase />
      <Profile />
      <Experience />
      <FrequentlyAskQuestion />
    </>
  );
};

export default Page;
