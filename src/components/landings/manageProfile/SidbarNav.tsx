import React from "react";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import classNames from "classnames";

interface SidebarNavProps extends React.HTMLAttributes<HTMLElement> {
  items: {
    href: string;
    title: string;
  }[];
}

export function SidebarNav({ className, items, ...props }: SidebarNavProps) {
  const location = useLocation();

  return (
    <nav
      className={classNames(
        "flex flex-wrap lg:flex-col lg:space-x-0 lg:space-y-1",
        className
      )}
      {...props}
    >
      {items.map((item) => (
        <Link
          key={item.href}
          to={item.href}
          className={classNames(
            "px-4 py-3 rounded-lg text-sm font-medium",
            location.pathname === item.href
              ? "bg-bg text-white hover:bg-muted"
              : "hover:bg-transparent hover:underline",
            "justify-start"
          )}
        >
          {item.title}
        </Link>
      ))}
    </nav>
  );
}
