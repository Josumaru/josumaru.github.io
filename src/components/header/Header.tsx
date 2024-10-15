import { NextPage } from "next";

const Header: NextPage = ({}) => {
  return (
    <div className="h-[50rem] w-full dark:bg-black bg-white  dark:bg-grid-small-white/[0.2] bg-grid-small-black/[0.2] relative flex items-center justify-center flex-col">
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      <p className="md:text-5xl lg:text-6xl font-bold text-center max-w-[700px]">
        Making
        <span className="text-transparent px-2 bg-gradient-to-r from-blue-300 to-blue-500 bg-clip-text">
          ordinary materials
        </span>
        into something that shocks the{" "}
        <span className="text-transparent px-2 bg-gradient-to-r from-blue-300 to-blue-500 bg-clip-text">
          World
        </span>
      </p>
      <p className="max-w-screen-sm mx-auto text-xl text-muted-foreground text-center">High quality website templates built using Next.js, Tailwind CSS, Framer Motion and Shadcn-UI</p>
    </div>
  );
};

export default Header;
