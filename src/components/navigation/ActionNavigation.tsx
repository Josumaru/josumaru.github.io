import { NextPage } from "next";
import { NavigationMenu } from "../ui/navigation-menu";
import TooltipButton from "../other/TooltipButton";
import { Button } from "../ui/button";
import { ArrowUpRightFromSquare } from "lucide-react";
import githubIcon from "@/assets/images/svg/icons/github.svg";
import instagramIcon from "@/assets/images/svg/icons/instagram.svg";
import twitterIcon from "@/assets/images/svg/icons/twitter.svg";
import htbIcon from "@/assets/images/svg/icons/htb.svg";
import HoverGradientButton from "../other/HoverGradientButton";
import { HoverBorderGradient } from "../ui/hover-border-gradient";

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
    title: "@josumaru",
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

const ActionNavigation: NextPage = ({}) => {
  return (
    <div className="col-span-1 flex items-center justify-end">
      <NavigationMenu className="flex justify-end items-end w-full">
        {socialData.map((social, index) => (
          <TooltipButton key={index} data={social} />
        ))}
          <Button className="ml-1">
            <p className="font-bold text-opacity-90 text-white">Hire Me</p>
            <ArrowUpRightFromSquare />
          </Button>
      </NavigationMenu>
    </div>
  );
};

export default ActionNavigation;
