import { NextPage } from 'next'
import { NavigationMenu } from '../ui/navigation-menu';
import TooltipButton from '../other/TooltipButton';
import { Button } from '../ui/button';
import { ArrowUpRightFromSquare } from 'lucide-react';
import githubIcon from "@/assets/images/svg/icons/github.svg";
import instagramIcon from "@/assets/images/svg/icons/instagram.svg";
import twitterIcon from "@/assets/images/svg/icons/twitter.svg";
import htbIcon from "@/assets/images/svg/icons/htb.svg";

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
  return <NavigationMenu>
  {socialData.map((social, index) => (
    <TooltipButton key={index} data={social} />
  ))}
  <Button>
    <p className="font-bold">Hire Me</p>
    <ArrowUpRightFromSquare />
  </Button>
</NavigationMenu>
}

export default ActionNavigation