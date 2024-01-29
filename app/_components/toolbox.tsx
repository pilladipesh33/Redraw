"use client";

import { ToolbarContainer } from "@/components/toolbar-container";
import { TOOLBAR_ITEMS } from "@/lib/constant";
import { cn } from "@/lib/utils";
import { toolbarItemClick } from "@/redux/features/toolbar";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";

import {
  ArrowRight,
  ArrowUpLeft,
  Circle,
  Diamond,
  Eraser,
  Hand,
  Image,
  Minus,
  Pen,
  Pilcrow,
  RectangleHorizontal,
} from "lucide-react";

export const ToolBoxContent = () => {
  const dispatch = useAppDispatch();
  const activeToolbarItem = useAppSelector(
    (state) => state.toolbar.activeToolbarItem,
  );

  function handleMenuClick(itemName: string) {
    dispatch(toolbarItemClick(itemName));
  }
  return (
    <div className="bg-white h-[44px] w-[400px] shadow-lg border rounded-xl flex justify-between items-center p-1">
      <ToolbarContainer>
        <Hand className="h-4 w-4" />
      </ToolbarContainer>
      <ToolbarContainer
        onClick={() => handleMenuClick(TOOLBAR_ITEMS.PENCIL)}
        className={
          activeToolbarItem === "PENCIL"
            ? "bg-[#4440bf] rounded-xl"
            : "bg-white"
        }
      >
        <Pen
          className={cn(
            "h-4 w-4",
            activeToolbarItem === "PENCIL" ? "text-white" : "text-black",
          )}
        />
      </ToolbarContainer>
      <ToolbarContainer>
        <Diamond className="h-4 w-4" />
      </ToolbarContainer>
      <ToolbarContainer>
        <RectangleHorizontal className="h-4 w-4" />
      </ToolbarContainer>
      <ToolbarContainer>
        <Circle className="h-4 w-4" />
      </ToolbarContainer>
      <ToolbarContainer>
        <ArrowRight className="h-5 w-5" />
      </ToolbarContainer>
      <ToolbarContainer>
        <Minus className="h-4 w-4" />
      </ToolbarContainer>
      <ToolbarContainer>
        <Pilcrow className="h-4 w-4" />
      </ToolbarContainer>
      <ToolbarContainer>
        <Image className="h-4 w-4" />
      </ToolbarContainer>
      <ToolbarContainer
        onClick={() => handleMenuClick(TOOLBAR_ITEMS.ERASER)}
        className={
          activeToolbarItem === "ERASER"
            ? "bg-[#4440bf] rounded-xl"
            : "bg-white"
        }
      >
        <Eraser
          className={cn(
            "h-4 w-4",
            activeToolbarItem === "ERASER" ? "text-white" : "text-black",
          )}
        />
      </ToolbarContainer>
    </div>
  );
};
