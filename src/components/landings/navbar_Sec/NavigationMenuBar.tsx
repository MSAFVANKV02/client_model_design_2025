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
    <NavigationMenu className="w-full bg-gray-50 border-b">
      <NavigationMenuList className="flex justify-center space-x-6 mx-5">
        {categories.map((category, index) => (
          <NavigationMenuItem key={index}>
            <NavigationMenuTrigger  className={`hover:text-textMain {category.name} === "Womens" ? "text-purple-600" : ""`}>
              {category.name}
            </NavigationMenuTrigger>
            <NavigationMenuContent className="">
            {/* <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
              <li className="row-span-3">
                <NavigationMenuLink asChild>
                  <a
                    className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                    href="/"
                  >
                   
                    <div className="mb-2 mt-4 text-lg font-medium">
                      shadcn/ui
                    </div>
                    <p className="text-sm leading-tight text-muted-foreground">
                      Beautifully designed components that you can copy and
                      paste into your apps. Accessible. Customizable. Open
                      Source.
                    </p>
                  </a>
                </NavigationMenuLink>
              </li>
             
            </ul> */}

              <ul className=" gap-3 p-6 md:w-[400px] group-hover:text-textMain lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
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

