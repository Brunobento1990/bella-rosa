import { Box } from "@mui/material";
import { useState } from "react";
import { Banner } from "../../interfaces/banner";

interface PropsSlider {
  banner: Banner[];
}

export function Slider(props: PropsSlider) {
  const [active, setActive] = useState<number>(0);

  setTimeout(() => {

    if (active === (props.banner.length - 1)) {
      setActive(0)
    } else {
      setActive(active + 1)
    }
  }, 2000)

  return (
    <Box
      component="img"
      sx={{
        height: 200,
        top: 0,
        right: 0,
        width: "100%",
        transition:'1s ease-in-out 1s'
      }}
      src={`data:image/jpeg;base64,${props.banner[active]?.photograph ?? ''}`}
    />
  );
}
