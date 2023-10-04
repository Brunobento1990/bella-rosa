import { Button } from "@mui/material";
import { useThemeApp } from "../../hooks/theme-app";

interface propsButtonCuston {
  type?: "button" | "submit" | "reset";
  variant?: "text" | "contained" | "outlined";
  size?: "small" | "large" | "medium";
  text?: string;
  fullWidth?: boolean;
}

export function ButtonCustom(props: propsButtonCuston) {
  const themeApp = useThemeApp();

  return (
    <Button
      fullWidth={props.fullWidth}
      size={props.size ?? "large"}
      sx={{ mt: 3 }}
      type={props.type ?? "submit"}
      variant={props.variant ?? "contained"}
      style={{ backgroundColor: themeApp.color.pink }}
    >
      {props.text ?? "Continue"}
    </Button>
  );
}
