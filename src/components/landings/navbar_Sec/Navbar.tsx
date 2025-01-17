import { Icon } from "@iconify/react";
import { useLocation } from "react-router-dom";
import { Sidebar } from "./Sidebar";
import { Input } from "@/components/ui/input";
import AccountMenu from "./AccountMenu";
import Logo from "./Logo";

import { useAppDispatch, useAppSelector } from "@/redux/hook";
import { useEffect } from "react";
import { fetchAdminDetails } from "@/redux/userSide/UserAuthSlice";

export type INavbarItems = {
  href: string;
  title: string;
  icon: JSX.Element;
  current: boolean;
  // subItems?: INavbarItems[];
};
type NavbarProps = {
  navItems: INavbarItems[];
};

function Navbar({ navItems }: NavbarProps) {
  const dispatch = useAppDispatch();
  const { isUserLogged} = useAppSelector(state=> state.auth)
  const location = useLocation();
  // console.log(user,'slice');
  
  // const navigate = useNavigate();
  // const isLoggedIn4Kyc = isAuthenticated_4_Kyc();
  // const { handleLogout } = useAuth();

  useEffect(()=>{
    if(isUserLogged){
      dispatch(fetchAdminDetails());
    }
  },[]);

  // const [user] = useState(() => {
  //   const userFromStorage = localStorage.getItem("userProfile");
  //   return userFromStorage ? JSON.parse(userFromStorage) : null;
  // });

  // useEffect(() => {
  //   if (user && !isLoggedIn4Kyc) {
  //     localStorage.removeItem("userProfile");
  //   }
  //   if(!user){
  //     Cookies.remove("us_tkn_kyc");
  //   Cookies.remove('us_b2b_tkn');
  //   }
  // }, [isLoggedIn4Kyc, user]);

  return (
    <nav
      className={`w-full  flex py-5 bg-transparent ${
        location.pathname === "/" && " "
      } 2xl:px-24 xl:px-20 md:px-14 sm:px-10 px-5 mx-auto z-50`}
    >
      <div className="flex justify-between w-full">
        {/* Navbar Logo */}
        <Logo />

        <div className="lg:flex hidden items-center ">
          {/* ==== Search Bar  starting------ */}

          <div className="flex items-center border rounded-lg h-fit overflow-hidden">
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
          <div className="">
            {/* {user ? (
              <>
                <div className="bg-bg h-10 w-10 rounded-full cursor-pointer group  text-white flex justify-center items-center relative">
                  {user.name.slice(0, 1)}

                  Modal should appear correctly on hover
                  <div className="absolute hidden group-hover:block top-full -right-1/2  z-10  items-center p-4">
                    <div className=" w-[200px] p-2 rounded-lg flex flex-col  bg-bgSoft shadow-lg">
                      <span className="text-sm font-semibold text-center text-black">
                        {user.name}
                      </span>
                      <Button
                        className="mt-2"
                        variant={"b2bStyle"}
                        onClick={() => {
                          Cookies.remove("us_tkn_kyc");
                          handleLogout("/");
                        }}
                      >
                        Logout
                      </Button>
                    </div>
                  </div>
                </div>
              </>
            ) : (
              <>
          
                <AccountMenu />
              </>
            )} */}
            {
             isUserLogged &&(
                <AccountMenu />
              )
            }

            {/* <Icon icon={`ph:bell-light`} fontSize={25} className="" /> */}
            {/* <Icon icon={`mynaui:cart`} fontSize={25} className="" /> */}
          </div>
        </div>

        <div className="lg:hidden block  ">
          <Sidebar navItems={navItems} />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
