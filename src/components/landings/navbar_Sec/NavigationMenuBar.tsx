"use client"

import * as React from "react";
import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

export function NavigationMenuBar() {
  // Define the categories and subcategories
  const categories = [
    {
      name: "Womens",
      subcategories: [
        { name: "Tops", href: "/womens/tops", description: "Explore women's tops" },
        { name: "Dresses", href: "/womens/dresses", description: "Explore women's dresses" },
      ],
    },
    {
      name: "Kids",
      subcategories: [
        { name: "Boys", href: "/kids/boys", description: "Boys Clothing" },
        { name: "Girls", href: "/kids/girls", description: "Girls Clothing" },
      ],
    },
    {
      name: "Men",
      subcategories: [
        { name: "Shirts", href: "/men/shirts", description: "Men's Shirts" },
        { name: "Jeans", href: "/men/jeans", description: "Men's Jeans" },
      ],
    },
    {
      name: "Accessories",
      subcategories: [
        { name: "Bags", href: "/accessories/bags", description: "Bags & Backpacks" },
        { name: "Jewelry", href: "/accessories/jewelry", description: "Jewelry" },
      ],
    },
    {
      name: "Toys",
      subcategories: [
        { name: "Outdoor Toys", href: "/toys/outdoor", description: "Outdoor Toys" },
        { name: "Educational Toys", href: "/toys/educational", description: "Educational Toys" },
      ],
    },
  ];

  return (
    <NavigationMenu className="w-full">
    {/* Make the list of categories scrollable */}
    <div className="w-full overflow-x-auto whitespace-nowrap">
      <NavigationMenuList className="flex justify-center space-x-6 section_container_dash">
        {categories.map((category, index) => (
          <NavigationMenuItem key={index}>
            <NavigationMenuTrigger
              className={cn(
                "hover:text-textMain",
                category.name === "Womens" ? "text-purple-600" : ""
              )}
            >
              {category.name}
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="gap-3 p-6 md:w-[400px] lg:w-[500px] w-[calc(100vw-3rem)] lg:grid-cols-[.75fr_1fr]">
                {category.subcategories.map((subcategory, subIndex) => (
                  <ListItem
                    key={subIndex}
                    href={subcategory.href}
                    title={subcategory.name}
                  >
                    {subcategory.description}
                  </ListItem>
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </div>
  </NavigationMenu>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li className="">
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block p-2 text-sm font-medium leading-none hover:bg-gray-100 rounded-md",
            className
          )}
          {...props}
        >
          <div>{title}</div>
          <p className="text-xs text-gray-500">{children}</p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";

