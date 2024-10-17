import { NextPage } from "next";
import { Spotlight } from "../ui/spotlight";
import { ArrowRight } from "lucide-react";
import BlurIn from "@/animations/BlurIn";

const Header: NextPage = ({}) => {
  return (
    <div className="h-[50rem] w-full dark:bg-black bg-white  dark:bg-grid-small-white/[0.2] bg-grid-small-black/[0.2] relative flex items-center justify-center flex-col">
      <Spotlight
        fill="red"
        className="-top-40 left-0 w-40 md:left-60 md:-top-20"
      />
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
      <div className="z-50">
        <div className="relative inline-flex h-8 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-primary-400 focus:ring-offset-2 focus:ring-offset-primary-500 my-5">
          <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#FFFFFF_0%,#d66578_50%,#d66578_100%)]" />
          <span className="inline-flex h-full w-full items-center justify-center rounded-full bg-jwhite px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl bg-white">
            <p className="inline animate-gradient bg-gradient-to-r from-primary-300 via-primary-600 to-primary-300 bg-[length:var(--bg-size)_100%] bg-clip-text text-transparent">
              Software Engineer
            </p>
          </span>
        </div>
      </div>
      <div>
        <p className="text-5xl md:text-6xl lg:text-7xl font-bold text-center max-w-[700px]">
          <BlurIn text="Alone" /> is Another Word for <BlurIn text="Splendid" />
        </p>
      </div>
      <p className="max-w-screen-sm mx-auto text-xl text-muted-foreground text-center">
        High quality <strong>Software</strong> built using High Quality{" "}
        <strong>Programs</strong>
      </p>
      <div className="flex sm:flex-col md:flex-row gap-2 w-full items-center justify-center my-5">
        <button className="group flex items-center justify-center gap-2 border border-primary-500 bg-primary-500 hover:bg-primary-600 p-2 rounded-xl sm:w-full md:w-96 text-xl font-medium text-white">
          <p>Connect </p>
          <ArrowRight className="group-hover:ml-4 duration-300" />
        </button>
        <button className="bg-primary-100 p-2 rounded-xl sm:w-full md:w-96 text-xl border border-primary-300 font-medium text-black">
          GitHub
        </button>
      </div>
    </div>
  );
};

export default Header;
