import Header from "@/components/header/Header";
import Navigation from "@/components/navigation/Navigation";
import PreLoader from "@/components/other/PreLoader";
import Showcase from "@/components/showcase/Showcase";
import { NextPage } from "next";

const Page: NextPage = ({}) => {
  return (
    <>
      <Navigation />
      <Header />
      <Showcase />
    </>
  );
};

export default Page;
