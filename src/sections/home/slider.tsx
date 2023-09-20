import { Box } from "@mui/material";
import { useState } from "react";

interface PropsSlider {
  images: any[];
}

export function Slider(props: PropsSlider) {
  const [active, setActive] = useState<number>(0);

  setTimeout(() => {

    if (active === (props.images.length - 1)) {
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
      }}
      src={props.images[active]}
    />
  );
}
