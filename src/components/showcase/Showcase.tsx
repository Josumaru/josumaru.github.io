import Sass from "@/assets/images/showcase/ez-quotes.png";

import { NextPage } from "next";
import ShowcaseCard from "./ShowcaseCard";
import { ShowcaseType } from "../../../types/showcase";
import SectionTitle from "../other/SectionTitle";

const Showcase: NextPage = ({}) => {
  const data: ShowcaseType[] = [
    {
      subtitle: "Some SUbtitles",
      alt: "",
      url: "",
      image: Sass,
      title: "Sheesh",
    },
    {
      subtitle: "Some SUbtitles",
      alt: "",
      url: "",
      image: Sass,
      title: "Raijin",
    },
    {
      subtitle: "Some SUbtitles",
      alt: "",
      url: "",
      image: Sass,
      title: "Fostifest 24",
    },
    {
      subtitle: "Some SUbtitles",
      alt: "",
      url: "",
      image: Sass,
      title: "UMS International Invention Day",
    },
    {
      subtitle: "Some SUbtitles",
      alt: "",
      url: "",
      image: Sass,
      title: "Anugerah Coating Powder",
    },
  ];

  return (
    <div>
      <SectionTitle
        props={{ title: "Hall of Fame", subtile: "Projects I have worked on" }}
      />
      <div className="w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]">
        <div className="flex items-center justify-center md:justify-start animate-infinite-scroll">
          {data.map((data, index) => (
            <ShowcaseCard key={index} data={data} />
          ))}
        </div>
        <div className="flex items-center justify-center md:justify-start animate-infinite-scroll">
          {data.map((data, index) => (
            <ShowcaseCard key={index} data={data} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Showcase;
