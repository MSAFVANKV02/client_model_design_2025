import { Icon } from "@iconify/react";
import { useLocation } from "react-router-dom";
import { Sidebar } from "./Sidebar";
import { Input } from "@/components/ui/input";
import { useEffect, useState } from "react";
import { isAuthenticated_4_Kyc } from "@/middlewares/IsAuthenticated";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/providers/AuthContext";
import AccountMenu from "./AccountMenu";
import Logo from "./Logo";

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
        {/* Navbar Logo */}
       <Logo/>

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
                {/* <Icon
                  icon={`iconamoon:profile-circle-fill`}
                  fontSize={25}
                  className=""
                /> */}
                <AccountMenu/>
              </>
            )}

            {/* <Icon icon={`ph:bell-light`} fontSize={25} className="" /> */}
            {/* <Icon icon={`mynaui:cart`} fontSize={25} className="" /> */}
          </div>
        </div>

        <div className="md:hidden block  ">
          <Sidebar navItems={navItems} />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
