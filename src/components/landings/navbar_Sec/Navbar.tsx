import { Icon } from "@iconify/react";
import { HomeIcon } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { Sidebar } from "./Sidebar";
import { Input } from "@/components/ui/input";

function Navbar() {
  const location = useLocation();
  const navItems = [
    {
      title: "Home",
      href: "/",
      icon: <HomeIcon />,
      current: true,
    },
    {
      title: "About",
      href: "/about",
      icon: <HomeIcon />,
      current: true,
    },
    // {
    //   title: "Services",
    //   href: "/services",
    //   icon: <HomeIcon />,
    //   current: true,
    // }
  ];

  return (
    <nav
      className={`w-full flex py-5 bg-transparent ${
        location.pathname === "/" && " absolute top-0 left-0 right-0"
      } 2xl:px-24 xl:px-20 md:px-14 sm:px-10 px-5 mx-auto z-50`}
    >
      <div className="flex justify-between w-full">
        <Link className="flex gap-2 group items-center select-none" to="/">
          <div className="h-10 relative w-10  rounded-2xl bg-textMain flex items-center justify-center overflow-hidden">
            {/* Image slides to the left */}
            <img
              src="/src/assets/images/logo/flower_ayaboo.png"
              alt="navbar logo"
              className="absolute w-[50%]  group-hover:w-0 group-hover:translate-x-[-150%] transition-all duration-300 ease-in"
            />

            {/* Icon slides in from the right */}
            <Icon
              icon="fluent:home-28-filled"
              fontSize={20}
              color="#ffff"
              className="absolute translate-x-[150%] group-hover:translate-x-0 transition-all duration-500 ease-in-out"
            />
          </div>
          <h4 className="font-bold">Ayaboo</h4>
        </Link>

        <div className="flex items-center gap-16">
          {/* ==== Search Bar  starting------ */}

          <div className="md:flex hidden items-center border rounded-lg h-fit overflow-hidden">
            <Input type="text" placeholder="Search" className="border-none outline-none w-[300px] h-full" />
            <Icon icon={`mynaui:search`} fontSize={25} className="text-gray-400"/>
          </div>
          {/* ==== Search Bar ending ------ */}

          {/*  Icons Starting === */}
          <div className="md:flex hidden items-center gap-6">
          <Icon icon={`iconamoon:profile-circle-fill`} fontSize={25} className=""/>
          <Icon icon={`ph:bell-light`} fontSize={25} className=""/>
          <Icon icon={`mynaui:cart`} fontSize={25} className=""/>

          </div>
        </div>

        <div className="md:hidden block">
          <Sidebar navItems={navItems} />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
