import "./App.css";

import { Outlet } from "react-router-dom";
import { cn } from "./lib/utils";
import Footer from "./components/landings/footer_Sec/Footer";
import { Toaster } from "react-hot-toast";
import StaticNavbar from "./components/landings/navbar_Sec/StaticNavbar";
import { useEffect } from "react";
function App() {
  // const location = useLocation();

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
        <StaticNavbar />

        <Outlet />
        <Footer />
        <Toaster position="top-right" reverseOrder={false} />
      </div>
    </>
  );
}

export default App;
