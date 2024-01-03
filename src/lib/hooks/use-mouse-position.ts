import { useState, useEffect } from "react";

export function useMousePosition() {
  const [point, setPoint] = useState({
    clientX: 0,
    clientY: 0,
    screenX: 0,
    screenY: 0,
  });

  const updateMousePosition = ({
    clientX,
    clientY,
    screenX,
    screenY,
  }: MouseEvent) => {
    setPoint({ clientX, clientY, screenX, screenY });
  };

  useEffect(() => {
    window.addEventListener("mousemove", updateMousePosition);

    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
    };
  }, []);

  return point;
}
