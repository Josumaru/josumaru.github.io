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

const logos = [nextLogo, kotlinLogo, reduxLogo, tailwindLogo];

interface Props {}

const Profile: NextPage<Props> = ({}) => {
  return (
    <div>
      <SectionTitle
        data={{
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
            className={`${item.className} bg-primary-50 hover:bg-primary-100`}
            icon={item.icon}
          />
        ))}
      </BentoGrid>
    </div>
  );
};
const Skeleton = () => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl dark:bg-dot-white/[0.2] bg-dot-black/[0.2] [mask-image:radial-gradient(ellipse_at_center,white,transparent)]  border border-transparent dark:border-white/[0.2] bg-neutral-100 dark:bg-black"></div>
);
const items = [
  {
    title: "Tech Stack",
    description:
      "I have worked on many projects and I understand that not all frameworks are good to implement, we need case studies.",
    header: (
      <div className="w-full pt-5 h-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]">
        <div className="flex items-center justify-center md:justify-start animate-infinite-scroll">
          {logos.map((logo, index) => (
            <div className="items-center mx-2 h-[42px] w-max">
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
            <div className="items-center mx-2 h-[42px] w-max">
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
    title: "The Art of Teaching",
    description: "Computer Lab Assistant & Computer Lab Maintener at FKI UMS",
    header: <Skeleton />,
    className: "md:col-span-1",
    icon: <User2 className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Github Activity",
    description:
      "Try new things, discover the differences. It can make your life better and make you think ahead.",
    header: (
      <Image
        src="https://github-readme-activity-graph.vercel.app/graph?username=Josumaru&radius=16&theme=redical&area=true&order=5&hide_border=true&hide_title=true&bg_color=transparent&line=fb7185&point=be123c&color=0d1117"
        height="300"
        alt="activity-graph graph"
        width={300}
        className="grayscale hover:grayscale-0 object-cover duration-500 h-full w-full"
      />
    ),
    className: "md:col-span-2",
    icon: <GitBranch className="h-4 w-4 text-neutral-500" />,
  },
];

export default Profile;
