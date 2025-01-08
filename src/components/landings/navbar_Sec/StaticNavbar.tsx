import { Button } from "@/components/ui/button";
import { Icon } from "@iconify/react";
import { HomeIcon } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { Sidebar } from "./Sidebar";
import Logo from "./Logo";

function StaticNavbar() {
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
    {
      title: "Register",
      href: "/register",
      icon: <HomeIcon />,
      current: false,
    },
    {
      title: "Login",
      href: "/login",
      icon: <HomeIcon />,
      current: false,
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
         {/* Navbar Logo */}
         <Logo/>

        <div className="md:flex hidden items-center gap-10">
        <ul className="flex justify-around list-none">
            {navItems
              .filter((nav) => nav.current)
              .map((item, index) => (
                <li key={index}>
                  <Link
                    to={item.href}
                    draggable={false}
                    className={`p-2 flex items-center gap-3 ${
                      item.href === location.pathname
                        ? "text-textMain underline underline-offset-4"
                        : ""
                    }`}
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
          </ul>
          <div className="">
            <Button
              variant="outline"
              className="flex gap-2 items-center text-textMain uppercase "
            >
              <Icon icon={"material-symbols:download"} /> Download App
            </Button>
          </div>
          <div className="">
            <Link to={"login"} className="">
              <Button variant="white" className="text-textMain">
                login
              </Button>
            </Link>
          </div>
        </div>
        <div className="md:hidden block">
          <Sidebar navItems={navItems} />
        </div>
      </div>
    </nav>
  );
}

export default StaticNavbar;
