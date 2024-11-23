import { SidebarNav } from "@/components/landings/manageProfile/SidbarNav";
import AyButton from "@/components/myUi/AyButton";

import { useEffect } from "react";

const sidebarNavItems = [
  {
    title: "Profile",
    href: "/my-account",
  },
  {
    title: "Order",
    href: "/my-account/my-orders",
  },
  {
    title: "Wishlist",
    href: "/my-account/my-wishlist",
  },
  {
    title: "Chat with us",
    href: "/my-account/chat",
  },
  {
    title: "Return or Replace",
    href: "/my-account/return",
  },
];

interface SettingsLayoutProps {
  children: React.ReactNode;
}

export default function SettingsLayout({ children }: SettingsLayoutProps) {
  // const navigate = useNavigate();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);
  return (
    <>
      <div className=" space-y-6 md:py-5 section_container_dash mx-auto lg:min-h-[90vh]">
        <div className="flex flex-wrap flex-col space-y-4   lg:flex-row lg:space-x-12 lg:space-y-0">
          <aside className="xl:-mx-4 lg:w-[18%] lg:h-[70vh] bg-bgHardSoft sticky z-[10002] top-10  rounded-2xl sm:p-3 p-1 md:mt-0 mt-4 lg:flex hidden flex-col justify-between h-[80%]">
            <SidebarNav items={sidebarNavItems} />

            <div className="mt-4">
              <AyButton
                title="Sign Out"
                outLineColor="black"
                variant="outlined"
                sx={{
                  width: "100%",
                  color: "gray",
                  border: "1px solid gray",
                  "&:hover": {
                    bgcolor: "var(--hardSoftColor)", // Optional hover color
                  },
                }}
              />
            </div>
          </aside>
          <div className="md:flex-1   overflow-y-aut ">{children}</div>
        </div>
      </div>
    </>
  );
}
