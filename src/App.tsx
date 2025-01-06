import "./App.css";

import { Outlet } from "react-router-dom";
import { cn } from "./lib/utils";
import Footer from "./components/landings/footer_Sec/Footer";
import { Toaster } from "react-hot-toast";
import StaticNavbar from "./components/landings/navbar_Sec/StaticNavbar";
import { useEffect, useState } from "react";
import PreloaderPage from "./preloader-page";
function App() {
  // const location = useLocation();
  const [loading, setLoading] = useState(false);  // State to track loading

  // Detect page refresh using `beforeunload` event
  useEffect(() => {
    const handleBeforeUnload = () => {
      setLoading(true);  // Show preloader when page is being refreshed
    };

    // Add event listener for page refresh or unload
    window.addEventListener('beforeunload', handleBeforeUnload);

    // Cleanup the event listener when the component unmounts
    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, []);

  // Simulate loading behavior (for example: waiting for API/data to load or the app to be ready)


  if (loading) {
    return <PreloaderPage />;  // Show preloader
  }

  // const homePath = location.pathname === "/";
  // const queryParams = new URLSearchParams(window.location.search);
  // const auth = queryParams.get("auth");

  // useEffect(()=>{
  //   if (!auth) {
  //     localStorage.removeItem("otp-timer");
  //     localStorage.removeItem("otp-finished");

  //   }
  // },[auth]);

  return (
    <>
      <div
        className={cn(``, {
          "debug-screens": import.meta.env.MODE === "development",
        })}
      >
        <StaticNavbar />
        
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
