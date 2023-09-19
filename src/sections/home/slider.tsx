import { Box } from "@mui/material";
import { useState } from "react";

interface PropsSlider {
  images: any[];
}

export function Slider(props: PropsSlider) {
  const [active, setActive] = useState<number>(0);

  function handleSlider(){
    if(active === props.images.length){
        setActive(0)
    }else{
        setActive(active + 1)
    }
  }

  setTimeout(() => {
    handleSlider()
  },2000)

  return (
    <Box
      component="img"
      sx={{
        height: 350,
        display: "block",
        overflow: "hidden",
        width: "100%",
        borderRadius: 2,
        marginTop: -5,
      }}
      src={props.images[active]}
    />
  );
}
