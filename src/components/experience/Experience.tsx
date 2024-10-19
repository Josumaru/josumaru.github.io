"use client";
import React from "react";
import Image from "next/image";
import { twMerge } from "tailwind-merge";
import { TracingBeam } from "../ui/tracing-beam";

import { NextPage } from "next";
import SectionTitle from "../other/SectionTitle";

interface Props {}

const Experience: NextPage<Props> = ({}) => {
  return (
    <div>
      <div className="my-20">
        <SectionTitle
          data={{
            title: "Experiences",
            subtile: "This is my journey in technology",
          }}
        />
      </div>
      <TracingBeam className="pl-6">
        <div className="antialiased pt-4 relative">
          {content.map((item, index) => (
            <div key={`content-${index}`} className="mb-10">
              <p className={twMerge("text-xl mb-4")}>{item.title}</p>
              <div className="text-sm  prose prose-sm dark:prose-invert">
                {item?.image && (
                  <Image
                    src={item.image}
                    alt="Experiences"
                    height="1000"
                    width="1000"
                    className="rounded-lg w-full mb-10 object-cover"
                  />
                )}
                {item.description}
              </div>
            </div>
          ))}
        </div>
      </TracingBeam>
    </div>
  );
};

export default Experience;

const content = [
  {
    title: "Android Developtment Coohort at Bangkit by Google GOTO",
    description: (
      <>
        <p>
          Sit duis est minim proident non nisi velit non consectetur. Esse
          adipisicing laboris consectetur enim ipsum reprehenderit eu deserunt
          commodo et labore dolore commodo pariatur.
        </p>
      </>
    ),
    badge: "React",
    image: image,
  },
  {
    title: "Android Developtment Coohort at Bangkit by Google GOTO",
    description: (
      <>
        <p>
          Sit duis est minim proident non nisi velit non consectetur. Esse
          adipisicing laboris consectetur enim ipsum reprehenderit eu deserunt
          commodo et labore dolore commodo pariatur.
        </p>
      </>
    ),
    badge: "React",
    image: image,
  },
  {
    title: "Android Developtment Coohort at Bangkit by Google GOTO",
    description: (
      <>
        <p>
          Sit duis est minim proident non nisi velit non consectetur. Esse
          adipisicing laboris consectetur enim ipsum reprehenderit eu deserunt
          commodo et labore dolore commodo pariatur.
        </p>
      </>
    ),
    badge: "React",
    image: image,
  },
  {
    title: "Android Developtment Coohort at Bangkit by Google GOTO",
    description: (
      <>
        <p>
          Sit duis est minim proident non nisi velit non consectetur. Esse
          adipisicing laboris consectetur enim ipsum reprehenderit eu deserunt
          commodo et labore dolore commodo pariatur.
        </p>
      </>
    ),
    badge: "React",
    image: image,
  },
];

import image from "@/assets/images/showcase/ez-quotes.png";
