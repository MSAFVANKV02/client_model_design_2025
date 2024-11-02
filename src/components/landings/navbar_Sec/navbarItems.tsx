import { HomeIcon } from 'lucide-react';


export default function useNavbarItems() {
    const navItemsKyc = [
        {
          title: "Home",
          href: "/",
          icon: <HomeIcon />,
          current: true,
        },
        {
          title: "About",
          href: "/about",
          icon: <HomeIcon />,
          current: true,
        },
      ];

      const navItems = [
        {
          title: "Home",
          href: "/",
          icon: <HomeIcon />,
          current: true,
        },
        {
          title: "About",
          href: "/about",
          icon: <HomeIcon />,
          current: true,
        },
      ];
  return {
    navItemsKyc,
    navItems
  }
}