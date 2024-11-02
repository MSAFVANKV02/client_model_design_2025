import "./App.css";

import { Outlet } from "react-router-dom";
import { cn } from "./lib/utils";
import Footer from "./components/landings/footer_Sec/Footer";
import { Toaster } from "react-hot-toast";
import { useEffect } from "react";
import Navbar from "./components/landings/navbar_Sec/Navbar";
import { NavigationMenuBar } from "./components/landings/navbar_Sec/NavigationMenuBar";
import useNavbarItems from "./components/landings/navbar_Sec/navbarItems";
function AppLayout() {
  // const location = useLocation();
  const {navItems} = useNavbarItems()
  // const homePath = location.pathname === "/";
  const queryParams = new URLSearchParams(window.location.search);
  const auth = queryParams.get("auth");

  useEffect(()=>{
    if (!auth) {
      localStorage.removeItem("otp-timer");
      localStorage.removeItem("otp-finished");

    }
  },[auth]);

  return (
    <>
      <div
        className={cn(``, {
          "debug-screens": import.meta.env.MODE === "development",
        })}
      >
        <Navbar navItems={navItems}/>
        <div className="w-full bg-gray-50 border-b">
             <NavigationMenuBar/>
        </div>
       

        <Outlet />
        <Footer />
        <Toaster position="top-right" reverseOrder={false} />
      </div>
    </>
  );
}

export default AppLayout;
