"use client";
import { NextPage } from "next";
import * as React from "react";
import { NavigationMenu } from "@/components/ui/navigation-menu";
import TooltipButton from "../other/TooltipButton";
import { Button } from "../ui/button";
import { ArrowUpRightFromSquare } from "lucide-react";
import LeadingNavigation from "./LeadingNavigation";
import githubIcon from "@/assets/images/svg/icons/github.svg";
import instagramIcon from "@/assets/images/svg/icons/instagram.svg";
import twitterIcon from "@/assets/images/svg/icons/twitter.svg";
import htbIcon from "@/assets/images/svg/icons/htb.svg";

const Navigation: NextPage = ({}) => {

  const socialData = [
    {
      icon: githubIcon,
      alt: "Github",
      title: "@Josumaru",
      url: "https://github.com/Josumaru",
    },
    {
      icon: instagramIcon,
      alt: "Instagram",
      title: "@josutomaru",
      url: "https://www.instagram.com/josutomaru/",
    },
    {
      icon: twitterIcon,
      alt: "Twitter",
      title: "@josumaru",
      url: "https://twitter.com/josumaru",
    },
    {
      icon: htbIcon,
      alt: "Hack The Box",
      title: "Josumaru@hacker",
      url: "https://app.hackthebox.com/profile/josumaru",
    },
  ];

  return (
    <nav className="flex fixed top-0 z-50 w-full px-5 py-4 items-center justify-between backdrop-blur-md border-b border-primary-500 border-opacity-20">
      <LeadingNavigation />

      <NavigationMenu>
        {socialData.map((social, index) => (
          <TooltipButton key={index} data={social} />
        ))}
        <Button>
          <p className="font-bold">Hire Me</p>
          <ArrowUpRightFromSquare />
        </Button>
      </NavigationMenu>
    </nav>
  );
};

export default Navigation;
