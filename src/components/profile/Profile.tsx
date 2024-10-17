import { NextPage } from "next";

import { cn } from "@/lib/utils";
import React from "react";
import { BentoGrid, BentoGridItem } from "../ui/bento-grid";
import Image from "next/image";
import {
  IconClipboardCopy,
  IconFileBroken,
  IconSignature,
  IconTableColumn,
} from "@tabler/icons-react";

import JosumaruProfile from "@/assets/images/bento-grid/josumaru.jpeg";
import { BoxIcon, User2 } from "lucide-react";
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

const logos = [nextLogo, kotlinLogo, reduxLogo, tailwindLogo];

interface Props {}

const Profile: NextPage<Props> = ({}) => {
  return (
    <div>
      <SectionTitle
        props={{
          title: "Profile Summary",
          subtile: "A little about me and my tech stack",
        }}
      />
      <BentoGrid className="max-w-4xl mx-auto md:auto-rows-[20rem] mt-20">
        {items.map((item, i) => (
          <BentoGridItem
            key={i}
            title={item.title}
            description={item.description}
            header={item.header}
            className={item.className}
            icon={item.icon}
          />
        ))}
      </BentoGrid>
    </div>
  );
};
const Skeleton = () => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl   dark:bg-dot-white/[0.2] bg-dot-black/[0.2] [mask-image:radial-gradient(ellipse_at_center,white,transparent)]  border border-transparent dark:border-white/[0.2] bg-neutral-100 dark:bg-black"></div>
);
const items = [
  {
    title: "Tech Stack",
    description:
      "I have worked on many projects and I understand that not all frameworks are good to implement, we need case studies.",
    header: (
      <div className="w-full pt-5 h-full justify-center items-center inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)] hover:bg-red-100 duration-150">
        <ul className="flex gap-5 items-center justify-center md:justify-start animate-infinite-scroll">
          {logos.map((logo, index) => (
            <Image
              key={index}
              height={40}
              src={logo}
              style={{
                filter:
                  "brightness(0) saturate(100%) invert(0%) sepia(100%) saturate(5000%) hue-rotate(180deg)",
              }}
              className="object-cover"
              alt="Logo"
            />
          ))}
        </ul>
      </div>
    ),
    className: "md:col-span-2",
    icon: <BoxIcon className="h-4 w-4 text-neutral-500" />,
  },
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
    title: "The Art of Design",
    description: "Discover the beauty of thoughtful and functional design.",
    header: <Skeleton />,
    className: "md:col-span-1",
    icon: <User2 className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "The Power of Communication",
    description:
      "Understand the impact of effective communication in our lives.",
    header: <Skeleton />,
    className: "md:col-span-2",
    icon: <IconTableColumn className="h-4 w-4 text-neutral-500" />,
  },
];

export default Profile;
