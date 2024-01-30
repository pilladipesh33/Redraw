"use client";

import { MenuContainer } from "@/components/menu-container";
import { LoginPane } from "./login-pane";
import { ToolBoxContent } from "./toolbox";

export const Navbar = () => {
  return (
    <div className="w-full bg-black">
      {/* <MenuContainer /> */}
      <ToolBoxContent />
      {/* <LoginPane /> */}
    </div>
  );
};
