import { TextField } from "@mui/material";
import { ChangeEvent } from "react";

interface propsInputCustom {
  label: string;
  fullWidth?: boolean;
  type?: string;
  value: any;
  onChange?: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  onBlur?: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  error?: boolean;
  helperText?: React.ReactNode;
  name: string;
  maxLength?: number;
  id: string;
}

export function InputCustom(props: propsInputCustom) {
  return (
    <TextField
      helperText={props.helperText}
      error={props.error}
      id={props.id}
      label={props.label}
      variant="standard"
      fullWidth={props.fullWidth}
      type={props.type ?? "text"}
      value={props.value}
      onChange={props.onChange}
      onBlur={props.onBlur}
      inputProps={{
        maxLength: props.maxLength,
      }}
    />
  );
}
