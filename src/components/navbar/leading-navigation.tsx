"use client";
import { NextPage } from "next";
import { usePathname } from "next/navigation";

const LeadingNavigation: NextPage = ({}) => {
  const pathName = usePathname();

  return (
    <p className="col-span-1 flex items-center gap-1">
      Josumaru <span> / </span>{" "}
      <strong>
        {pathName === "/" ? "Portfolio" : "Blog"}
      </strong>
    </p>
  );
};

export default LeadingNavigation;
