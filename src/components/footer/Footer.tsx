"use client";
import { NextPage } from "next";
import GithubIcon from "@/assets/images/svg/icons/github.svg";
import instagramIcon from "@/assets/images/svg/icons/instagram.svg";
import twitterIcon from "@/assets/images/svg/icons/twitter.svg";
import htbIcon from "@/assets/images/svg/icons/htb.svg";
import Image from "next/image";
import Link from "next/link";
import TooltipButton from "../other/TooltipButton";
import { SocialImageConstants } from "@/constants/SocialImageConstants";
import { IconImageConstants } from "@/constants/IconImageConstants";
import ThemeChangerButton from "./ThemeChangerButton";

const Footer: NextPage = ({}) => {
  const links = [
    {
      title: "Service",
      subtitles: [
        {
          name: "Website Developtment",
          url: "",
        },
        {
          name: "Android Developtment",
          url: "",
        },
        {
          name: "Backend Developtment",
          url: "",
        },
      ],
    },
    {
      title: "Product",
      subtitles: [
        {
          name: "Raijin",
          url: "",
        },
        {
          name: "Sheesh",
          url: "",
        },
        {
          name: "UMS IID",
          url: "",
        },
      ],
    },
    {
      title: "Overlogic",
      subtitles: [
        {
          name: "Websites",
          url: "",
        },
        {
          name: "Instagram",
          url: "",
        },
        {
          name: "Linkedin",
          url: "",
        },
        { name: "Discord", url: "" },
      ],
    },
    {
      title: "Overlogic",
      subtitles: [
        {
          name: "Websites",
          url: "",
        },
        {
          name: "Instagram",
          url: "",
        },
        {
          name: "Linkedin",
          url: "",
        },
        { name: "Discord", url: "" },
      ],
    },
  ];
  return (
    <div className="w-full">
      <div className="[mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)] border-t border-primary-500/20 " />
      <div className="flex items-center w-full p-5 md:justify-center py-10 mt-2">
        <div className="flex flex-col md:flex-row max-w-7xl">
          <div className="md:w-1/3">
            <p className="mb-5">
              Josumaru / <strong>Portfolio</strong>
            </p>
            <div className="flex gap-2 h-10">
              {SocialImageConstants.map((social, index) => (
                <Link
                  href={social.url}
                  target="_blank"
                  key={index}
                  className={`duration-200 hover:pt-2`}
                >
                  <Image
                    src={social.icon}
                    alt={social.alt}
                    className="dark:invert"
                  />
                </Link>
              ))}
            </div>
          </div>
          <div className="grid gap-2 grid-cols-3 md:flex md:flex-row w-full justify-between">
            {links.map((link, index) => {
              return (
                <div key={index} className="w-full mb-5 md:w-1/4 flex flex-col">
                  <p className="text-base font-medium">{link.title}</p>
                  {link.subtitles.map((subtitle, index) => (
                    <Link
                      target="_blank"
                      href={subtitle.url}
                      key={index}
                      className="text-sm mt-1 hover:pl-1 cursor-pointer hover:text-primary-500 hover:underline text-muted-foreground duration-150"
                    >
                      {subtitle.name}
                    </Link>
                  ))}
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className="[mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)] border-t border-primary-500/20 " />
      <div className="flex items-center justify-center gap-4 text-sm sm:text-base md:text-lg font-medium py-5">
        <div className="max-w-7xl px-5 w-full flex items-center justify-between">
          <p className="text-xs text-muted-foreground">
            © 2024 Josumaru. All rights reserved.
          </p>
          <ThemeChangerButton />
        </div>
      </div>
    </div>
  );
};

export default Footer;
