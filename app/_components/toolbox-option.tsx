"use client";

import colors from "@/lib/constant";
import { useTheme } from "next-themes";
import React, { useEffect } from "react";

export const ToolboxOptions = () => {
  const { theme } = useTheme();

  function updateBrushStroke(e: React.ChangeEvent<HTMLInputElement>) {}
  return (
    <div className="mx-5 my-5 max-h-[404px] max-w-[210px] bg-white dark:bg-[[#232329] py-2 px-2 rounded-xl shadow-lg border ">
      <div>
        <h4> Stroke Color</h4>
        <div className="flex items-center">
          {theme === "light" ? (
            <div
              style={{ background: colors.black.value }}
              className="h-7 w-7 rounded-sm cursor-pointer mr-2 p-1 hover:border-2 hover:border-white"
            />
          ) : (
            <div
              className="h-7 w-7 rounded-sm cursor-pointer mr-2 p-1 hover:border-2 hover:border-white"
              style={{ background: colors.white.value }}
            />
          )}
          <div
            className="h-7 w-7 rounded-sm cursor-pointer mr-2 p-1 hover:border-2 hover:border-white"
            style={{ background: colors.red.value }}
          />
          <div
            className="h-7 w-7 rounded-sm cursor-pointer mr-2 p-1 hover:border-2 hover:border-white"
            style={{ background: colors.green.value }}
          />
          <div
            className="h-7 w-7 rounded-sm cursor-pointer mr-2 p-1 hover:border-2 hover:border-white"
            style={{ background: colors.blue.value }}
          />
          <div
            className="h-7 w-7 rounded-sm cursor-pointer mr-2 p-1 hover:border-2 hover:border-white hover:border-solid"
            style={{ background: colors.yellow.value }}
          />
        </div>
      </div>
      <div>
        <h4>Brush Strokes</h4>
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
    </div>
  );
};
