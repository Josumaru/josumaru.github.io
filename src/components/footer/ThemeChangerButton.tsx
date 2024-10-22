"use client";
import { IconImageConstants } from "@/constants/IconImageConstants";
import { NextPage } from "next";
import { useTheme } from "next-themes";
import Image from "next/image";
import { Button } from "../ui/button";

const ThemeChangerButton: NextPage = ({}) => {
  const { theme, setTheme } = useTheme();
  const handleClick = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };
  return (
    <Button
      variant={"ghost"}
      className="rounded-lgduration-500"
      onClick={handleClick}
    >
      <Image
        alt={"sun"}
        src={
          theme == "light" ? IconImageConstants.sun : IconImageConstants.moon
        }
        className="m-2 dark:invert"
      />
    </Button>
  );
};

export default ThemeChangerButton;
