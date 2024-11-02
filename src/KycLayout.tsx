import { Toaster } from "react-hot-toast";

import { Outlet } from "react-router-dom";
import Footer from "@/components/landings/footer_Sec/Footer";
import { cn } from "@/lib/utils";
import Navbar from "@/components/landings/navbar_Sec/Navbar";
import { HomeIcon } from "lucide-react";

function App() {
  // const location = useLocation();

  // const homePath = location.pathname === "/";
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
    <>
      <div
        className={cn(``, {
          "debug-screens": import.meta.env.MODE === "development",
        })}
      >
     
        <Navbar navItems={navItems}/>
        <div className="">
          <Outlet />   
        </div>
     
        <Footer />
        <Toaster position="top-right" reverseOrder={false} />
      </div>
    </>
  );
}

export default App;
