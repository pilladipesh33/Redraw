"use client";

import { ToolbarContainer } from "@/components/toolbar-container";
import { TOOLBAR_ITEMS } from "@/lib/constant";
import { toolbarItemClick } from "@/redux/features/toolbar";
import { useAppDispatch } from "@/redux/hooks";
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

  function handleMenuClick(itemName: string) {
    dispatch(toolbarItemClick(itemName));
  }
  return (
    <div className="bg-white h-[44px] w-[400px] shadow-lg border rounded-xl flex justify-between items-center p-1">
      <ToolbarContainer>
        <Hand className="h-4 w-4" />
      </ToolbarContainer>
      <ToolbarContainer onClick={() => handleMenuClick(TOOLBAR_ITEMS.PENCIL)}>
        <Pen className="h-4 w-4" />
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
      <ToolbarContainer onClick={() => handleMenuClick(TOOLBAR_ITEMS.ERASER)}>
        <Eraser className="h-4 w-4" />
      </ToolbarContainer>
    </div>
  );
};
