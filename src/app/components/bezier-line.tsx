"use client";

import { useRef, useEffect } from "react";

interface MouseEvent {
  movementY: number;
  clientX: number;
}

export function BezierLine() {
  const path = useRef<SVGPathElement>(null);

  let progress = 0;
  let x = 0.5;
  let time = Math.PI / 2;
  let requestId: number | null = null;

  useEffect(() => {
    setPath(progress);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const setPath = (progress: number) => {
    const width = path?.current?.parentElement?.clientWidth ?? 0;

    path.current?.setAttributeNS(
      null,
      "d",
      `M0 250 Q${width * x} ${250 + progress}, ${width} 250`
    );
  };

  const lerp = (x: number, y: number, a: number) => x * (1 - a) + y * a;

  const handleMouseEnter = () => {
    if (requestId) {
      cancelAnimationFrame(requestId);
      resetAnimation();
    }
  };

  const handleMouseMove = (e: MouseEvent) => {
    const { movementY, clientX } = e;

    const pathBound = path.current?.getBoundingClientRect();

    if (pathBound) {
      x = (clientX - pathBound.left) / (pathBound.width || 1);
      progress += movementY;
      setPath(progress);
    }
  };

  const handleMouseLeave = () => {
    animateOut();
  };

  const animateOut = () => {
    const newProgress = progress * Math.sin(time);
    progress = lerp(progress, 0, 0.025);
    time += 0.2;

    setPath(newProgress);

    if (Math.abs(progress) > 0.75) {
      requestId = requestAnimationFrame(animateOut);
    } else {
      resetAnimation();
    }
  };

  const resetAnimation = () => {
    time = Math.PI / 2;
    progress = 0;
  };

  return (
    <div className="relative w-full h-px">
      <div
        onMouseEnter={() => handleMouseEnter()}
        onMouseMove={(e) => handleMouseMove(e)}
        onMouseLeave={() => handleMouseLeave()}
        className="relative z-10 h-10 w-full top-[-40px] translate-y-1/2"
      ></div>
      <svg className="absolute pointer-events-none w-full h-[500px] top-[-250px]">
        <path
          ref={path}
          className="stroke-current w-full text-neutral-300 stroke-[1px] fill-none"
        ></path>
      </svg>
    </div>
  );
}
