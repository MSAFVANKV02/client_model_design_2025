

import './App.css'
import Navbar from './components/landings/navbar_Sec/Navbar'
import { Outlet } from "react-router-dom";
import { cn } from './lib/utils';
import Footer from './components/landings/footer_Sec/Footer';
import { Toaster } from 'react-hot-toast';
function App() {


  return (
    <>
    <div className={cn(``, {
              "debug-screens": import.meta.env.MODE === "development",
            })}>
      <Navbar/>
        <Outlet/>
        <Footer/>
        <Toaster position="top-right" reverseOrder={false} />
    </div>
    </>
  )
}

export default App
