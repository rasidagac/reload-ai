import loadable from "@loadable/component";
import { Skeleton } from "@components/ui/skeleton";
import React from "react";

export const Header = loadable(() => import("./Header"), {
  fallback: <Skeleton className="w-full h-16 rounded-lg" />,
});

export const Footer = loadable(() => import("./Footer"), {
  fallback: <Skeleton className="w-full rounded-lg" />,
});

type Layout = {
  children?: React.ReactNode;
};

const Layout = ({ children }: Layout) => {
  return (
    <div className="bg-background transition-colors duration-500">
      <div className="relative flex flex-col">
        <Header />
        <div className="flex-1">
          {children}
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
