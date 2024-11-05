import { Icon } from "@iconify/react";
import { Link, useLocation } from "react-router-dom";
import { Sidebar } from "./Sidebar";
import { Input } from "@/components/ui/input";
import { useEffect, useState } from "react";
import { isAuthenticated_4_Kyc } from "@/middlewares/IsAuthenticated";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/providers/AuthContext";

export type INavbarItems = {
  href: string;
  title: string;
  icon: JSX.Element;
  current:boolean
  // subItems?: INavbarItems[];
}
type NavbarProps = {
  navItems: INavbarItems[];
};

function Navbar({ navItems }: NavbarProps)  {
  const location = useLocation();
  // const navigate = useNavigate();
  const isLoggedIn = isAuthenticated_4_Kyc();
  const {  handleLogout} = useAuth();

  const [user] = useState(() => {
    const userFromStorage = localStorage.getItem("userProfile");
    return userFromStorage ? JSON.parse(userFromStorage) : null;
  });

  useEffect(() => {
    if (user && !isLoggedIn) {
      localStorage.removeItem("userProfile");
    }
  }, [isLoggedIn, user]);

    
  return (
    <nav
      className={`w-full flex py-5 bg-transparent ${
        location.pathname === "/" && " "
      } 2xl:px-24 xl:px-20 md:px-14 sm:px-10 px-5 mx-auto z-50`}
    >
      <div className="flex justify-between w-full">
        <Link className="flex gap-2 group items-center select-none" to="/">
          <div className="h-10 relative w-10  rounded-2xl bg-textMain flex items-center justify-center overflow-hidden">
            {/* Image slides to the left */}
            <img
              src="/img/logo/flower_ayaboo.png"
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
            <Input
              type="text"
              placeholder="Search"
              className="border-none outline-none w-[300px] h-full"
            />
            <Icon
              icon={`mynaui:search`}
              fontSize={25}
              className="text-gray-400"
            />
          </div>
          {/* ==== Search Bar ending ------ */}

          {/*  Icons Starting === */}
          <div className="md:flex hidden items-center gap-6">
            {user ? (
              <>
                <div className="bg-bg h-10 w-10 rounded-full cursor-pointer group  text-white flex justify-center items-center relative">
                  {user.name.slice(0, 1)}

                  {/* Modal should appear correctly on hover */}
                  <div className="absolute hidden group-hover:block top-full -right-1/2  z-10  items-center p-4">
                  <div className=" w-[200px] p-2 rounded-lg flex flex-col  bg-bgSoft shadow-lg">
                     <span className="text-sm font-semibold text-center text-black">{user.name}</span>
                    <Button className="mt-2" variant={'b2bStyle'}
                    onClick={()=>handleLogout('/')}
                    >Logout</Button>
                  </div>
                   
                  </div>
                </div>
              </>
            ) : (
              <>
                <Icon
                  icon={`iconamoon:profile-circle-fill`}
                  fontSize={25}
                  className=""
                />
              </>
            )}

            <Icon icon={`ph:bell-light`} fontSize={25} className="" />
            <Icon icon={`mynaui:cart`} fontSize={25} className="" />
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
