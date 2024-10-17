"use client";
import { NextPage } from "next";
import * as React from "react";
import LeadingNavigation from "./LeadingNavigation";
import MenuNavigation from "./MenuNavigation";
import ActionNavigation from "./ActionNavigation";

const Navigation: NextPage = ({}) => {
  return (
    <nav className="flex fixed top-0 z-50 w-full px-5 py-4 items-center justify-between backdrop-blur-md border-b border-primary-500 border-opacity-20">
      <LeadingNavigation />
      <MenuNavigation />
      <ActionNavigation />
    </nav>
  );
};

export default Navigation;
