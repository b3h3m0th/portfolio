import { useState, useEffect } from "react";

export function useMousePosition() {
  const [point, setPoint] = useState({ x: 0, y: 0 });

  const updateMousePosition = ({ clientX, clientY }: MouseEvent) => {
    setPoint({ x: clientX, y: clientY });
  };

  useEffect(() => {
    window.addEventListener("mousemove", updateMousePosition);

    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
    };
  }, []);

  return point;
}
