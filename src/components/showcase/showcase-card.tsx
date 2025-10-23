"use client";
import { NextPage } from "next";
import Image from "next/image";
import { ShowcaseType } from "@/types/showcase";
import Link from "next/link";
import { toast } from "sonner";
interface Props {
  data: ShowcaseType;
}

const ShowcaseCard: NextPage<Props> = ({ data }) => {
  return (
    <div className="col-span-1 border border-primary-100 dark:border-zinc-800 p-5 rounded-2xl hover:bg-primary-50 dark:hover:bg-zinc-800 transition-colors">
      {data.url == "#" ? (
        <div onClick={()=> toast.error("Private project, not available publicly")}>
          <div className="gap-2 flex flex-col">
            <div className="text-xl font-bold text-neutral-600 dark:text-white line-clamp-1">
              {data.title}
            </div>
            <p className="text-neutral-500 text-sm max-w-sm dark:text-neutral-300">
              {data.subtitle}
            </p>
            <div className="flex gap-1">
              {data.tags.map((tag, index) => (
                <div
                  key={index}
                  className="p-1 text-xs px-2 bg-primary-200 dark:bg-zinc-900 rounded-lg border border-primary-300 dark:border-zinc-800"
                >
                  {tag}
                </div>
              ))}
            </div>
            <Image
              src={data.image.src}
              height="1000"
              width="1000"
              className="w-full object-cover rounded-xl group-hover/card:shadow-xl"
              alt={data.alt}
            />
          </div>
        </div>
      ) : (
        <Link href={data.url} target="_blank">
          <div className="gap-2 flex flex-col">
            <div className="text-xl font-bold text-neutral-600 dark:text-white line-clamp-1">
              {data.title}
            </div>
            <p className="text-neutral-500 text-sm max-w-sm dark:text-neutral-300">
              {data.subtitle}
            </p>
            <div className="flex gap-1">
              {data.tags.map((tag, index) => (
                <div
                  key={index}
                  className="p-1 text-xs px-2 bg-primary-200 dark:bg-zinc-900 rounded-lg border border-primary-300 dark:border-zinc-800"
                >
                  {tag}
                </div>
              ))}
            </div>
            <Image
              src={data.image.src}
              height="1000"
              width="1000"
              className="w-full object-cover rounded-xl group-hover/card:shadow-xl"
              alt={data.alt}
            />
          </div>
        </Link>
      )}
    </div>
  );
};

export default ShowcaseCard;
