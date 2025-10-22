import { NextPage } from "next";
import { Spotlight } from "@/components/ui/spotlight";
import { ArrowRight } from "lucide-react";
import BlurIn from "@/components/ui/blur-in";
import { Button } from "../ui/button";
import Link from "next/link";

const Header: NextPage = ({}) => {
  return (
    <div
      id="home"
      className="py-56 overflow-hidden w-full dark:bg-grid-white/[0.1] bg-grid-black/[0.1] relative flex items-center justify-center flex-col"
    >
   <Spotlight
  gradientFirst="radial-gradient(68.54% 68.72% at 55.02% 31.46%, hsl(var(--primary)/0.08) 0%, hsl(var(--primary)/0.2) 50%, hsl(var(--primary)/0) 80%)"
  gradientSecond="radial-gradient(50% 50% at 50% 50%, hsl(var(--primary)/0.06) 0%, hsl(var(--primary)/0.02) 80%, transparent 100%)"
  gradientThird="radial-gradient(50% 50% at 50% 50%, hsl(var(--primary)/0.04) 0%, hsl(var(--primary)/0.02) 80%, transparent 100%)"
/>

      <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-background [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
      <div className="container px-3 flex items-center justify-center flex-col">
        <div className="z-30">
          <div className="relative inline-flex h-8 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-primary-400 focus:ring-offset-2 focus:ring-offset-background my-5">
            <span
              className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] 
    bg-[conic-gradient(from_90deg_at_50%_50%,theme(colors.primary.200)_0%,theme(colors.primary.500)_50%,theme(colors.primary.700)_100%)]
    dark:bg-[conic-gradient(from_90deg_at_50%_50%,theme(colors.primary.300)_0%,theme(colors.primary.600)_50%,theme(colors.primary.800)_100%)]"
            />
            <span className="inline-flex h-full w-full items-center justify-center rounded-full bg-background px-3 py-1 text-sm font-medium text-primary-700 dark:text-primary-200 backdrop-blur-3xl">
              <p className="inline animate-gradient bg-gradient-to-r from-primary-300 via-primary-600 to-primary-300 bg-[length:var(--bg-size)_100%] bg-clip-text text-transparent">
                Software Engineer
              </p>
            </span>
          </div>
        </div>
        <div>
          <p className="text-4xl z-[99] md:text-5xl lg:text-6xl xl:text-7xl font-bold text-center max-w-[700px]">
            <BlurIn text="Alone" /> is Another Word for{" "}
            <BlurIn text="Splendid" />
          </p>
        </div>
        <p className="max-w-screen-sm mx-auto md:text-xl text-muted-foreground text-center">
          High quality <strong>Software</strong> built using High Quality{" "}
          <strong>Programs</strong>
        </p>
        <div className="flex flex-col md:flex-row gap-2 w-full items-center justify-center my-5 ">
          <Link
            target="_blank"
            href="https://wa.me/62895383211221?text=Halo%20Joko%2C%20saya%20tertarik%20dengan%20layanan%20Anda.%20Bisa%20diskusi%3F"
            className="w-full md:w-auto"
          >
            <Button className="group flex w-full h-12 hover:shadow-xl hover:shadow-primary-500/75  duration-500 items-center justify-center gap-1 border border-primary-500 bg-primary-500 hover:bg-primary-600 rounded-2xl sm:flex-1 md:w-96 text-sm md:text-md font-medium text-white">
              <p className="font-bold">Chat with Me</p>
              <div className="w-8">
                <ArrowRight className="group-hover:ml-2 duration-300" />
              </div>
            </Button>
          </Link>
          <Link
            target="_blank"
            href="https://github.com/Josumaru/"
            className="w-full md:w-auto"
          >
            <Button className="bg-primary-100 w-full max-sm:flex-1 dark:bg-neutral-800 h-12 rounded-2xl sm:w-full md:w-96 text-sm md:text-md border border-primary-300 dark:border-neutral-700 hover:dark:border-neutral-600 dark:hover:bg-neutral-800 dark:hover:shadow-none font-medium text-primary-500 dark:text-white hover:bg-primary-200/90 hover:shadow-xl hover:shadow-primary-500/20 duration-500">
              <p className="m-6 font-bold">GitHub</p>
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
