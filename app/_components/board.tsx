"use client";

import { useAppSelector } from "@/redux/hooks";
import React, { useEffect, useRef } from "react";

export const Board = () => {
  const canvasRef = useRef(null);
  const drawRef = useRef(false);

  const activeToolbarItem = useAppSelector(
    (state) => state.toolbar.activeToolbarItem
  );
  const { color, size } = useAppSelector(
    (state) => state.toolbarOption[activeToolbarItem]
  );

  useEffect(() => {
    if (!canvasRef.current) return;
    const canvas: any = canvasRef.current;
    const context = canvas.getContext("2d");

    function changeConfig() {
      context.strokeStyle = color;
      context.lineWidth = size;
    }
    changeConfig();
  }, [color, size]);

  //MOUNT
  useEffect(() => {
    if (!canvasRef.current) return;
    const canvas: any = canvasRef.current;
    const context = canvas.getContext("2d");

    //ON MOUNTING
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    //CANVAS WORKING
    function startPosition(e: React.MouseEvent) {
      drawRef.current = true;
    }
    function finishedPosition(e: React.MouseEvent) {
      drawRef.current = false;
      context.beginPath();
    }
    function draw(e: React.MouseEvent) {
      if (!drawRef.current) return;
      context.lineCap = "round";

      context.lineTo(e.clientX, e.clientY);
      context.stroke();
      context.beginPath();
      context.moveTo(e.clientX, e.clientY);
    }

    canvas.addEventListener("mousedown", startPosition);
    canvas.addEventListener("mousemove", draw);
    canvas.addEventListener("mouseup", finishedPosition);

    return () => {
      canvas.removeEventListener("mousedown", startPosition);
      canvas.removeEventListener("mousemove", draw);
      canvas.removeEventListener("mouseup", finishedPosition);
    };
  }, []);

  return <canvas ref={canvasRef}></canvas>;
};
