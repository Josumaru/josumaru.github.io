import Experience from "@/components/experience/Experience";
import Header from "@/components/header/Header";
import Navigation from "@/components/navigation/Navigation";
import Profile from "@/components/profile/Profile";
import Showcase from "@/components/showcase/Showcase";
import { NextPage } from "next";

const Page: NextPage = ({}) => {
  return (
    <>
      <Navigation />
      <Header />
      <Showcase />
      <Profile />
      <Experience />
    </>
  );
};

export default Page;
