import { NextPage } from "next";

import React from "react";
import { BentoGrid, BentoGridItem } from "../ui/bento-grid";
import Image from "next/image";

import JosumaruProfile from "@/assets/images/bento-grid/josumaru.jpeg";
import { BoxIcon, GitBranch, User2 } from "lucide-react";
import SectionTitle from "../other/SectionTitle";

import nextLogo from "@/assets/images/svg/logos/nextjs.svg";
import typeScriptLogo from "@/assets/images/svg/logos/typescript.svg";
import androidLogo from "@/assets/images/svg/logos/android.svg";
import dartLogo from "@/assets/images/svg/logos/dart.svg";
import expoLogo from "@/assets/images/svg/logos/expo.svg";
import kotlinLogo from "@/assets/images/svg/logos/kotlin.svg";
import reactLogo from "@/assets/images/svg/logos/react.svg";
import reduxLogo from "@/assets/images/svg/logos/redux.svg";
import tailwindLogo from "@/assets/images/svg/logos/tailwind.svg";
import flutterLogo from "@/assets/images/svg/logos/flutter.svg"
import bunLogo from "@/assets/images/svg/logos/bun.svg"
import javaScriptLogo from "@/assets/images/svg/logos/javascript.svg"
import linuxLogo from "@/assets/images/svg/logos/linux.svg"
import GithubActivity from "./GithubActivity";

const logos = [nextLogo, reduxLogo, expoLogo, bunLogo, tailwindLogo, typeScriptLogo, javaScriptLogo, reactLogo, linuxLogo, dartLogo, flutterLogo, androidLogo, kotlinLogo];

const Profile: NextPage = ({}) => {

  return (
    <div id="profile" className="flex items-center justify-center flex-col">
      <SectionTitle
        data={{
          title: "Profile Summary",
          subtile: "A little about me and my tech stack",
        }}
      />
      <BentoGrid className="mx-2 max-w-7xl md:auto-rows-[20rem] mt-20">
        {items.map((item, i) => (
          <BentoGridItem
            key={`Grid Item ${i}`}
            title={item.title}
            description={item.description}
            header={item.header}
            className={`${item.className} bg-primary-50/5 hover:bg-primary-50/10`}
            icon={item.icon}
          />
        ))}
      </BentoGrid>
    </div>
  );
};

const items = [
  {
    title: "Joko Supriyanto",
    description: "Dive into the transformative power of technology.",
    header: (
      <Image
        src={JosumaruProfile}
        alt="Josumaru"
        className="rounded-lg h-full object-cover fill-neutral-50 grayscale hover:grayscale-0 duration-300"
      />
    ),
    className: "md:col-span-1",
    icon: <User2 className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Tech Stack",
    description:
      "I have worked on many projects and I understand that not all frameworks are good to implement, we need case studies.",
    header: (
      <div className="w-full max-md:h-[200px] pt-5 h-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]">
        <div className="flex items-center justify-center md:justify-start animate-infinite-scroll">
          {logos.map((logo, index) => (
            <div className="items-center mx-2 h-[42px] w-max" key={index}>
              <Image
                key={index}
                src={logo}
                className="object-cover w-auto h-full grayscale hover:grayscale-0 duration-500"
                alt="Logo"
              />
            </div>
          ))}
        </div>
        <div className="flex items-center justify-center md:justify-start animate-infinite-scroll">
          {logos.map((logo, index) => (
            <div className="items-center mx-2 h-[42px] w-max" key={index}>
              <Image
                key={index}
                src={logo}
                className="object-cover w-auto h-full grayscale hover:grayscale-0 duration-500"
                alt="Logo"
              />
            </div>
          ))}
        </div>
      </div>
    ),
    className: "md:col-span-2",
    icon: <BoxIcon className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "The Art of Teaching",
    description: "Computer Lab Assistant & Computer Lab Maintener at FKI UMS",
    header: <div className="flex max-md:h-[200px] items-center justify-center text-primary-500 h-full">undefined image</div>,
    className: "md:col-span-2",
    icon: <User2 className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Github Activity",
    description:
      "Try new things, discover the differences. It can make your life better and make you think ahead.",
    header: <GithubActivity />,
    className: "md:col-span-2",
    icon: <GitBranch className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Github Activity",
    description:
      "Try new things, discover the differences. It can make your life better and make you think ahead.",
    header: <GithubActivity />,
    className: "md:col-span-3",
    icon: <GitBranch className="h-4 w-4 text-neutral-500" />,
  },
];

export default Profile;
