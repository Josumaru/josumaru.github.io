"use client";
import { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import { SocialImageConstants } from "@/constants/SocialImageConstants";
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
          name: "Raijin Streaming Apps",
          url: "https://github.com/Josumaru/raijin",
        },
        {
          name: "UMS IID",
          url: "https://ums-iid.com/",
        },
        {
          name: "Anugerah",
          url: "https://anugerahpowdercoating.com/",
        },
      ],
    },
    {
      title: "Overlogic",
      subtitles: [
        {
          name: "Websites",
          url: "https://overlogic.id",
        },
        {
          name: "Instagram",
          url: "https://www.instagram.com/overlogic.id/",
        },
        {
          name: "Linkedin",
          url: "https://www.linkedin.com/in/overlogic",
        },
        { name: "Discord", url: "https://discord.com/app" },
      ],
    },
    {
      title: "Domain",
      subtitles: [
        {
          name: "josumaru.my.id",
          url: "https://josumaru.my.id",
        },
        {
          name: "raijin.josumaru.my.id",
          url: "https://raijin.josumaru.my.id/api/anime/ongoing/1",
        },
        {
          name: "vido.josumaru.my.id",
          url: "https://vido.josumaru.my.id",
        },
        {
          name: "hpc.josumaru.my.id",
          url: "https://hpc.josumaru.my.id",
        },
      ],
    },
  ];
  return (
    <div className="w-full">
      {/* <div className="[mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)] border-t border-primary-500/20 " /> */}
      <div className="flex items-center w-full p-5 md:justify-center py-10 mt-2">
        <div className="flex flex-col justify-between w-full md:flex-row max-w-7xl">
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
