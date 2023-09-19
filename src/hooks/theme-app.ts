import { useState } from "react";

let handleColor: (color: string) => void;

export function useThemeApp() {
  const [color, setColor] = useState<string>("rgb(241, 99, 210)");

  handleColor = function (colorParam: string) {
    setColor(colorParam);
  };

  return {
    handleColor: (color: string) => handleColor(color),
    color: color,
  };
}
