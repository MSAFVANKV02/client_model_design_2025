// "use client"

// import * as React from "react";
// import { cn } from "@/lib/utils";
// import {
//   NavigationMenu,
//   NavigationMenuContent,
//   NavigationMenuItem,
//   NavigationMenuLink,
//   NavigationMenuList,
//   NavigationMenuTrigger,
// } from "@/components/ui/navigation-menu";

// export function NavigationMenuBar() {
//   // Define the categories and subcategories
//   const categories = [
//     {
//       name: "Women",
//       subcategories: [
//         { name: "Tops", href: "/womens/tops", description: "Explore women's tops" },
//         { name: "Dresses", href: "/womens/dresses", description: "Explore women's dresses" },
//       ],
//     },
//     {
//       name: "Kids",
//       subcategories: [
//         { name: "Boys", href: "/kids/boys", description: "Boys Clothing" },
//         { name: "Girls", href: "/kids/girls", description: "Girls Clothing" },
//       ],
//     },
//     {
//       name: "Men",
//       subcategories: [
//         { name: "Shirts", href: "/men/shirts", description: "Men's Shirts" },
//         { name: "Jeans", href: "/men/jeans", description: "Men's Jeans" },
//       ],
//     },
//     {
//       name: "Accessories",
//       subcategories: [
//         { name: "Bags", href: "/accessories/bags", description: "Bags & Backpacks" },
//         { name: "Jewelry", href: "/accessories/jewelry", description: "Jewelry" },
//       ],
//     },
//     {
//       name: "Toys",
//       subcategories: [
//         { name: "Outdoor Toys", href: "/toys/outdoor", description: "Outdoor Toys" },
//         { name: "Educational Toys", href: "/toys/educational", description: "Educational Toys" },
//       ],
//     },
//   ];

//   return (
//     <NavigationMenu className="w-screen">
//     {/* Make the list of categories scrollable */}
//     <div className="w-full ">
//       <NavigationMenuList className="flex pl-5  ">
//         {categories.map((category, index) => (
//           <NavigationMenuItem key={index}>
//             <NavigationMenuTrigger
//               className={cn(
//                 "hover:text-textMain",
//                 category.name === "Women" ? "text-purple-600" : ""
//               )}
//             >
//               {category.name}
//             </NavigationMenuTrigger>
//             <NavigationMenuContent>
//               <ul className="gap-3 p-6 md:w-[400px] lg:w-[500px] w-[calc(100vw-3rem)] lg:grid-cols-[.75fr_1fr]">
//                 {category.subcategories.map((subcategory, subIndex) => (
//                   <ListItem
//                     key={subIndex}
//                     href={subcategory.href}
//                     title={subcategory.name}
//                   >
//                     {subcategory.description}
//                   </ListItem>
//                 ))}
//               </ul>
//             </NavigationMenuContent>
//           </NavigationMenuItem>
//         ))}
//       </NavigationMenuList>
//     </div>
//   </NavigationMenu>
//   );
// }

// const ListItem = React.forwardRef<
//   React.ElementRef<"a">,
//   React.ComponentPropsWithoutRef<"a">
// >(({ className, title, children, ...props }, ref) => {
//   return (
//     <li className="">
//       <NavigationMenuLink asChild>
//         <a
//           ref={ref}
//           className={cn(
//             "block p-2 text-sm font-medium leading-none hover:bg-gray-100 rounded-md",
//             className
//           )}
//           {...props}
//         >
//           <div>{title}</div>
//           <p className="text-xs text-gray-500">{children}</p>
//         </a>
//       </NavigationMenuLink>
//     </li>
//   );
// });
// ListItem.displayName = "ListItem";

// =====
import { Icon } from "@iconify/react/dist/iconify.js";
import { useState, useRef } from "react";

const categories = [
  {
    name: "Television",
    subItems: [
      "Mi",
      "Vu",
      "Thomson",
      "Samsung",
      "iFFALCON by TCL",
      "Nokia",
      "LG",
      "Realme",
      "Motorola",
      "Mi",
      "Vu",
      "Thomson",
      "Samsung",
      "iFFALCON by TCL",
      "Nokia",
      "LG",
      "Realme",
      "Motorola",
      "Mi",
      "Vu",
      "Thomson",
      "Samsung",
      "iFFALCON by TCL",
      "Nokia",
      "LG",
      "Realme",
      "Motorola",
    ],
  },
  {
    name: "New Launches",
    subItems: [
      "Coocaa Smart TVs",
      "Nokia (55) 4K Android TV",
      "Mi (32) 4A Pro Android TV",
      "MarQ (43) FHD Smart TV",
    ],
  },
  {
    name: "Smart & Ultra HD",
    subItems: ["LG UHD TV", "Sony Bravia", "Samsung UHD", "OnePlus 4K"],
  },
  {
    name: "Kitchen Appliances",
    subItems: [
      "Microwave Ovens",
      "Oven Toaster Grills",
      "Juicer/Mixer/Grinder",
      "Electric Kettle",
      "Induction Cooktops",
    ],
  },
  {
    name: "Small Home Appliances",
    subItems: [
      "Irons",
      "Water Purifiers",
      "Fans",
      "Air Coolers",
      "Vacuum Cleaners",
      "Voltage Stabilizers",
    ],
  },
  
];

const NavigationMenuBar = () => {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [dropdownHover, setDropdownHover] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Ensure active category is reset to first category by default when mouse leaves
  const handleMouseEnter = (categoryName: string) => {
    setActiveCategory(categoryName);
    // console.log(categoryName);
    
  };

  const handleMouseLeave = () => {
    if (!dropdownHover) {
      setActiveCategory(null);
    }
  };

  const handleDropdownEnter = () => {
    setDropdownHover(true);
  };

  const handleDropdownLeave = () => {
    setDropdownHover(false);
    setActiveCategory(null);
  };

  // Ensure dropdown always starts from the first category in the list
  // const getColumnData = () => {
  //   const columns: { name: string; subItems: string[] }[][] = [[]];
  //   let currentHeight = 0;
    

  //   categories.forEach((category) => {
  //     const sectionHeight = 30 + category.subItems.length * 30;

  //     if (currentHeight + sectionHeight > 600 && columns.length < 5) {
  //       columns.push([category]);
  //       currentHeight = sectionHeight;
  //     } else {
  //       columns[columns.length - 1].push(category);
  //       currentHeight += sectionHeight;
  //     }
  //   });

  //   return columns;
  // };
  const getColumnData = () => {
    if (!activeCategory) return [];
    const activeCategoryData = categories.find(
      (category) => category.name === activeCategory
    );

    if (!activeCategoryData) return [];

    const { subItems } = activeCategoryData;
    const columns: string[][] = [[]];
    let currentHeight = 0;

    subItems.forEach((item) => {
      const itemHeight = 30; // Assume each item takes 30px height
      if (currentHeight + itemHeight > 600 && columns.length < 5) {
        columns.push([item]);
        currentHeight = itemHeight;
      } else {
        columns[columns.length - 1].push(item);
        currentHeight += itemHeight;
      }
    });

    return columns;
  };

  return (
    <nav className="relative z-50  ">
      <div className="flex gap-8 p-4 bg-gray-100 overflow-x-auto  text-black scrollbar-none xl:px-24 md:px-10">
        {categories.map((category, idx) => (
          <div
            key={idx}
            onMouseEnter={() => handleMouseEnter(category.name)}
            onMouseLeave={handleMouseLeave}
            className="cursor-pointer hover:underline sm:text-sm text-xs flex-shrink-0 min-w-max whitespace-nowrap text-ellipsis overflow-hidden"
            >
            <span className={` capitalize sm:text-sm text-xs flex items-center gap-2
              ${activeCategory === category.name ? "text-textMain":"text-black"}
              `}>
            {category.name}
            <Icon icon="simple-line-icons:arrow-down" fontSize={10} className={`   ${activeCategory === category.name ? "text-textMain rotate-180 ":"text-black"} duration-300 transition-all`} />
            </span>
            {activeCategory === category.name && (
              <div
                ref={containerRef}
                onMouseEnter={handleDropdownEnter}
                onMouseLeave={handleDropdownLeave}
                className="absolute left-0 top- sm:w-[80vw] w-full p-4  z-40 overflow-x-auto whitespace-nowrap sm:max-h-[700px] max-h-[500px]"
              >
                <div className="flex gap-4 bg-white p-5 shadow-md overflow-auto">
                  {getColumnData().map((column, colIdx) => (
                    <div
                      key={colIdx}
                      className={`flex flex-col p-4 min-h-[600px] ${
                        colIdx % 2 === 0 ? "bg-gray-100" : "bg-gray-200"
                      }`}
                      style={{
                        minWidth: "200px",
                        maxHeight: "500px",
                      }}
                    >
                      {column.map((item, subIdx) => (
                        <div key={subIdx}>
                          {/* <h6 className="font-bold">{item.name}</h6> */}
                          <ul className="m space-y-1">
                          
                              <li
                                key={subIdx}
                                className="text-sm text-gray-600 cursor-pointer hover:text-gray-800"
                                onClick={() => alert(`Selected: ${item}`)}
                              >
                                {item}
                              </li>
                           
                          </ul>
                        </div>
                      ))}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </nav>
  );
};

export default NavigationMenuBar;
