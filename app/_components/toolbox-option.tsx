"use client";

import { TOOLBAR_ITEMS, colors } from "@/lib/constant";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { useTheme } from "next-themes";
import React, { useEffect } from "react";
import {
  changeBrushSize,
  changeColor,
} from "@/redux/features/toolbox-option-slice";
import { cn } from "@/lib/utils";

export const ToolboxOptions = () => {
  const { theme } = useTheme();
  const dispatch = useAppDispatch();

  const activeToolbarItem = useAppSelector(
    (state) => state.toolbar.activeToolbarItem
  );
  const { color, size } = useAppSelector(
    (state) => state.toolbarOption[activeToolbarItem]
  );

  const showStrokeToolOption = activeToolbarItem === TOOLBAR_ITEMS.PENCIL;

  const showBrushStrokeToolOption =
    activeToolbarItem === TOOLBAR_ITEMS.PENCIL ||
    activeToolbarItem === TOOLBAR_ITEMS.ERASER;

  function updateBrushStroke(e: React.ChangeEvent<HTMLInputElement>) {
    dispatch(
      changeBrushSize({ item: activeToolbarItem, size: e.target.value })
    );
  }

  function updateColorPalette(newColor: string) {
    dispatch(changeColor({ item: activeToolbarItem, color: newColor }));
  }

  return (
    <div className="mx-5 my-5 max-h-[404px] max-w-[210px] bg-white dark:bg-[[#232329] py-2 px-2 rounded-xl shadow-lg border ">
      {showStrokeToolOption && (
        <div>
          <h4> Stroke Color</h4>
          <div className="flex items-center">
            {theme === "light" ? (
              <div
                onClick={() => updateColorPalette(colors.black.name)}
                style={{ background: colors.black.value }}
                className={cn(
                  "h-7 w-7 rounded-sm cursor-pointer mr-2 p-1 hover:border-2 hover:border-[#4440BF] hover:p-2",
                  color == "Black"
                    ? "border-2 border-[#4440BF]"
                    : "border-2 border-transparent"
                )}
              />
            ) : (
              <div
                onClick={() => updateColorPalette(colors.white.name)}
                className={cn(
                  "h-7 w-7 rounded-sm cursor-pointer mr-2 p-1 hover:border-2 hover:border-[#4440BF] hover:p-2",
                  color == "White"
                    ? "border-2 border-[#4440BF]"
                    : "border-2 border-transparent"
                )}
                style={{ background: colors.white.value }}
              />
            )}
            <div
              className={cn(
                "h-7 w-7 rounded-sm cursor-pointer mr-2 p-1 hover:border-2 hover:border-[#4440BF] hover:p-2",
                color == "Red"
                  ? "border-2 border-[#4440BF]"
                  : "border-2 border-transparent"
              )}
              style={{ background: colors.red.value }}
              onClick={() => updateColorPalette(colors.red.name)}
            />
            <div
              className={cn(
                "h-7 w-7 rounded-sm cursor-pointer mr-2 p-1 hover:border-2 hover:border-[#4440BF] hover:p-2",
                color == "Green"
                  ? "border-2 border-[#4440BF]"
                  : "border-2 border-transparent"
              )}
              style={{ background: colors.green.value }}
              onClick={() => updateColorPalette(colors.green.name)}
            />
            <div
              className={cn(
                "h-7 w-7 rounded-sm cursor-pointer mr-2 p-1 hover:border-2 hover:border-[#4440BF] hover:p-2",
                color == "Blue"
                  ? "border-2 border-[#4440BF]"
                  : "border-2 border-transparent"
              )}
              style={{ background: colors.blue.value }}
              onClick={() => updateColorPalette(colors.blue.name)}
            />
            <div
              className={cn(
                "h-7 w-7 rounded-sm cursor-pointer mr-2 p-1 hover:border-2 hover:border-[#4440BF] hover:p-2",
                color == "Yellow"
                  ? "border-2 border-[#4440BF]"
                  : "border-2 border-transparent"
              )}
              style={{ background: colors.yellow.value }}
              onClick={() => updateColorPalette(colors.yellow.name)}
            />
          </div>
        </div>
      )}
      {showBrushStrokeToolOption && (
        <div className="pt-5">
          <h4>{activeToolbarItem} Strokes</h4>
          <div>
            <input
              id="slider"
              type="range"
              min={1}
              max={10}
              step={1}
              onChange={updateBrushStroke}
              translate="yes"
            />
          </div>
        </div>
      )}
    </div>
  );
};
