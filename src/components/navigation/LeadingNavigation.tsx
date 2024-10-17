import { NextPage } from "next";

const LeadingNavigation: NextPage = ({}) => {
  return (
    <p className="col-span-1 flex items-center gap-1">
      Josumaru <span> / </span> <strong>Portfolio</strong>
    </p>
  );
};

export default LeadingNavigation;
