"use client";

import { ToolbarContainer } from "@/components/toolbar-container";
import {
  ArrowRight,
  ArrowUpLeft,
  Circle,
  Diamond,
  Eraser,
  Hand,
  Image,
  Minus,
  Pilcrow,
  RectangleHorizontal,
} from "lucide-react";

export const ToolBoxContent = () => {
  return (
    <div className="bg-white h-[44px] w-[400px] shadow-lg border rounded-xl flex justify-between items-center p-1">
      <ToolbarContainer>
        <Hand className="h-4 w-4" />
      </ToolbarContainer>
      <ToolbarContainer>
        <ArrowUpLeft className="h-5 w-5" />
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
      <ToolbarContainer>
        <Eraser className="h-4 w-4" />
      </ToolbarContainer>
    </div>
  );
};
