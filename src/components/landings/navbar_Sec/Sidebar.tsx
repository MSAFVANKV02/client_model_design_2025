import { useState } from "react";
import { Icon } from "@iconify/react";
import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerTrigger,
  DrawerContent,
  DrawerHeader,
  DrawerFooter,
  DrawerClose,
} from "@/components/ui/drawer";
import { Link, useLocation } from "react-router-dom";

type NavItem = {
  href: string;
  title: string;
};

// type FooterLink = {
//   href: string;
//   label: string;
// };

type IPropsNavbar = {
  // logo?: string;
  navItems?: NavItem[]; // Array of NavItem type
  // footerLinks?: FooterLink[]; // Array of FooterLink type
};


export function Sidebar({ navItems = [] }: IPropsNavbar) {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation(); // Ensure this is used for active link styling

  // Define footer links
  const footerLinks = [
    { href: "/careers", label: "Careers" },
    { href: "/about", label: "About Us" },
    { href: "/contact", label: "Contact Us" },
    { href: "/facebook", label: "Facebook" },
    { href: "/instagram", label: "Instagram" },
    { href: "/twitter", label: "Twitter" },
    { href: "/terms", label: "Terms of Use" },
    { href: "/privacy", label: "Privacy Policy" },
  ];
  return (
    <Drawer
      direction="left"
      open={isOpen}
      onOpenChange={(open) => setIsOpen(open)}
    >
      {/* Hamburger Icon for opening the Drawer */}
      <DrawerTrigger asChild>
      <Icon icon={"quill:hamburger"} fontSize={30} className="text-textMain"/>
      </DrawerTrigger>

      {/* Drawer Content */}
      <DrawerContent className="bg-black text-white w-full border-none">
        <DrawerHeader className="p-4">
          <img
            src="img/logo/Logo_white.svg"
            alt="Logo"
            className="h-10"
          />
          {/* Close button */}
          <DrawerClose asChild>
            <Button
              variant="noStyle"
              className="absolute bg-transparent text-white font-bold border-none text-xl  top-4 right-4"
            >
              <Icon icon={"mdi:close"} />
            </Button>
          </DrawerClose>
        </DrawerHeader>

        {/* Menu Items */}
        <div className="my-auto">
          <div className="flex flex-col items-center p-4 space-y-6">
            {navItems.map((item:  NavItem, index: number) => (
              <DrawerClose asChild key={index}>
                <Link
                  to={item.href}
                  className={`text-lg ${
                    item.href === location.pathname
                      ? "text-purple-500 underline underline-offset-4 font-semibold"
                      : "text-white"
                  }`}
                >
                  {item.title}
                </Link>
              </DrawerClose>
            ))}
          </div>

          {/* Download App Button */}
          <div className="px-4 mt-4 flex items-center justify-center">
            <Button
              variant="outline"
              className="w-2/3 flex items-center justify-center bg-transparent gap-2 text-purple-500 border-purple-500"
            >
              <Icon icon="material-symbols:download" className="text-lg" />
              Download App
            </Button>
          </div>
        </div>

        {/* Footer Links */}
        <DrawerFooter
          className="p-4"
          style={{
            backgroundImage: `url('img/Background Images/DoodleBG_image.png')`,
            backgroundSize: "contain",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div>
            {/* Footer sub title starts */}
            <ul className="grid grid-cols-3 justify-between text-sm">
              {footerLinks.map((link, index) => (
                <li key={index}>
                  <DrawerClose asChild>
                    <Link to={link.href} className="text-gray-300">
                      {link.label}
                    </Link>
                  </DrawerClose>
                </li>
              ))}
            </ul>
            {/* Footer sub title ends */}
          </div>
          <div className="space-y-2">
            <h5 className="text-textSec font-bold">Get in touch!</h5>
            <p className="text-gray-400">We can help you, Send your queries.</p>
            <div className="flex gap-2">
              <input
                type="text"
                placeholder="Message"
                className="w-full p-2 text-black text-xs rounded-md"
              />
              <Button className="text-white bg-purple-500 hover:bg-purple-600">
                <Icon icon="mdi:send" />
              </Button>
            </div>
          </div>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}
