"use client";

import { cn } from "@/lib/utils";
import { ReactNode, useState } from "react";

type ToolbarContainerProps = {
  children: ReactNode;
};
export const ToolbarContainer = ({ children }: ToolbarContainerProps) => {
  const [isSelected, setIsSelected] = useState(false);

  return (
    <div className="cursor-pointer h-[36px] w-[36px] hover:bg-[#d7d5ff] flex justify-center items-center hover:border hover:rounded-xl">
      {children}
    </div>
  );
};
