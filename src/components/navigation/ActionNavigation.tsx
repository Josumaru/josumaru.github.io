import { NextPage } from "next";
import { NavigationMenu } from "../ui/navigation-menu";
import TooltipButton from "../other/TooltipButton";
import { Button } from "../ui/button";
import { ArrowUpRightFromSquare, DownloadCloudIcon } from "lucide-react";
import githubIcon from "@/assets/images/svg/icons/github.svg";
import instagramIcon from "@/assets/images/svg/icons/instagram.svg";
import twitterIcon from "@/assets/images/svg/icons/twitter.svg";
import htbIcon from "@/assets/images/svg/icons/htb.svg";
import HoverGradientButton from "../other/HoverGradientButton";
import { HoverBorderGradient } from "../ui/hover-border-gradient";
import Link from "next/link";

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
        <div className="hidden xl:block">
          {socialData.map((social, index) => (
            <TooltipButton key={index} data={social} />
          ))}
        </div>
        <div className="ml-1 hover:shadow-xl hover:shadow-primary-500/75 rounded-xl duration-500">
          <Button  className="rounded-xl bg-gradient-to-r from-primary-400 via-primary-500 to-primary-400">
            <Link href={"https://www.linkedin.com/in/josumaru/"} target="_blank">
              <p className="font-bold text-opacity-90 text-white">Connect Linkedin</p>
            </Link>
            <ArrowUpRightFromSquare className="dark:text-white"/>
          </Button>
        </div>
      </NavigationMenu>
    </div>
  );
};

export default ActionNavigation;
