
import { SidebarNav } from "@/components/landings/manageProfile/SidbarNav";

// export const metadata: Metadata = {
//   title: "User Profile",
//   description: "",
// }

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
  // {
  //   title: "Display",
  //   href: "/manage-profile/display",
  // },
];

interface SettingsLayoutProps {
  children: React.ReactNode;
}

export default function SettingsLayout({ children }: SettingsLayoutProps) {
    // const navigate = useNavigate();
  return (
    <>
      {/* onClick={() => navigate(-1)} */}
      <div className=" space-y-6 md:py-5 max-w-screen-2xl mx-auto h-[90vh]">

        <div className="flex flex-wrap flex-col space-y-4  h-[80%] lg:flex-row lg:space-x-12 lg:space-y-0">
          <aside className="-mx-4 lg:w-[15%] bg-bgSoft top-10 sticky rounded-2xl sm:p-3">
            <SidebarNav items={sidebarNavItems} />
          </aside>
          <div className="flex-1 top-10 sticky overflow-y-auto">{children}</div>
        </div>
      </div>
    </>
  );
}
