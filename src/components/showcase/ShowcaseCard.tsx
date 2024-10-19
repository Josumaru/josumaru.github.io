import { NextPage } from "next";
import { CardBody, CardContainer, CardItem } from "../ui/3d-card";
import Image from "next/image";
import { ShowcaseType } from "../../../types/showcase";

interface Props {
  data: ShowcaseType;
}

const ShowcaseCard: NextPage<Props> = ({ data }) => {
  return (
    <CardContainer className="inter-var mx-2">
      <CardBody className="bg-primary-50 hover:bg-primary-100 duration-500 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-primary-500/[0.2] border-primary-500/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
        <CardItem
          translateZ="50"
          className="text-xl font-bold text-neutral-600 dark:text-white"
        >
          {data.title}
        </CardItem>
        <CardItem
          as="p"
          translateZ="60"
          className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
        >
          {data.subtitle}
        </CardItem>
        <CardItem translateZ="100" className="w-full mt-4">
          <Image
            src={data.image.src}
            height="1000"
            width="1000"
            className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
            alt={data.alt}
          />
        </CardItem>
        <div className="flex justify-between items-center mt-5">
          <CardItem
            translateZ={20}
            href=""
            target="__blank"
            className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
          >
            Check Project
          </CardItem>
        </div>
      </CardBody>
    </CardContainer>
  );
};

export default ShowcaseCard;
