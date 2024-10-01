

import './App.css'
import Navbar from './components/landings/navbar_Sec/Navbar'
import { Outlet } from "react-router-dom";
import { cn } from './lib/utils';
import Footer from './components/landings/footer_Sec/Footer';
function App() {


  return (
    <>
    <div className={cn(``, {
              "debug-screens": import.meta.env.MODE === "development",
            })}>
      <Navbar/>
        <Outlet/>
        <Footer/>
    </div>
    </>
  )
}

export default App
