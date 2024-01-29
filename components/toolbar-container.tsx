"use client";

import { cn } from "@/lib/utils";
import { HTMLAttributes, MouseEventHandler, ReactNode, useState } from "react";

type ToolbarContainerProps = {
  children: ReactNode;
  onClick?: MouseEventHandler;
  className?: string;
};
export const ToolbarContainer = ({
  children,
  onClick,
  className,
}: ToolbarContainerProps) => {
  const [isSelected, setIsSelected] = useState(false);

  return (
    <div
      className={cn(
        "cursor-pointer h-[36px] w-[36px] hover:bg-[#d7d5ff] flex justify-center items-center hover:border hover:rounded-xl",
        className,
      )}
      onClick={onClick}
    >
      {children}
    </div>
  );
};
