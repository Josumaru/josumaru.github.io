import { NextPage } from "next";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "../ui/navigation-menu";
import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { MenuConstants } from "@/constants/MenuConstants";


const MenuNavigation: NextPage = ({}) => {
  return (
    <div className="col-span-1 flex items-center justify-center">
      <NavigationMenu>
        <NavigationMenuList>
          {MenuConstants.map((menu, index) => (
            <NavigationMenuItem key={index}>
              <Link href={menu.href} legacyBehavior passHref>
                <NavigationMenuLink className={`${navigationMenuTriggerStyle()} text-muted-foreground`}>
                  {menu.title}
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          ))}
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
};

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";

export default MenuNavigation;
