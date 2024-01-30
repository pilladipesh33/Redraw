"use client";

import { TOOLBAR_ITEMS } from "@/lib/constant";
import { actionItemClick } from "@/redux/features/toolbar";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import React, { useEffect, useLayoutEffect, useRef } from "react";

export const Board = () => {
  const canvasRef = useRef(null);
  const drawRef = useRef(false);

  const dispatch = useAppDispatch();

  const { activeToolbarItem, actionToolbarItem } = useAppSelector(
    (state) => state.toolbar
  );
  const { color, size } = useAppSelector(
    (state) => state.toolbarOption[activeToolbarItem]
  );

  useEffect(() => {
    if (!canvasRef.current) return;
    const canvas: any = canvasRef.current;
    const context = canvas.getContext("2d");

    if (actionToolbarItem === TOOLBAR_ITEMS.DOWNLOAD) {
      const url = canvas.toDataURL();
      const anchor = document.createElement("a");
      anchor.href = url;
      anchor.download = "sketch.png";
      anchor.click();
    }
    dispatch(actionItemClick(null));
  }, [actionToolbarItem, dispatch]);

  //EFFECT
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
  useLayoutEffect(() => {
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
