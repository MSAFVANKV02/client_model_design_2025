import { Toaster } from "react-hot-toast";

import { Outlet } from "react-router-dom";
import Footer from "@/components/landings/footer_Sec/Footer";
import { cn } from "@/lib/utils";
import Navbar from "@/components/landings/navbar_Sec/Navbar";
import useNavbarItems from "./components/landings/navbar_Sec/navbarItems";

function App() {
  // const location = useLocation();
  const {navItemsKyc} = useNavbarItems()

  // const homePath = location.pathname === "/";


  return (
    <>
      <div
        className={cn(``, {
          "debug-screens": import.meta.env.MODE === "development",
        })}
      >
     
        <Navbar navItems={navItemsKyc}/>
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
