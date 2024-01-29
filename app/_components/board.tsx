"use client";

import { useEffect, useRef } from "react";

export const Board = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    if (!canvasRef.current) return;
    const canvas: any = canvasRef.current;
    // const context = canvas.getContext("2d");

    //ON MOUNTING
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }, [canvasRef]);
  return <canvas ref={canvasRef}></canvas>;
};
