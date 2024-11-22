import { TextField } from "@mui/material";
import React from "react";

export interface Props {
  value: string;
  onChange: (value: string) => void;
  onSelect: (value: string) => void;
}

export const SearchBar: React.FC<Props> = (props) => {
  return (
    <TextField
      id="outlined-controlled"
      label="Search Pokemon"
      value={props.value}
      onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
        props.onChange(event.target.value);
      }}
    />
    // <Autocomplete
    //   value={props.value}
    //   onChange={(_, newValue: string | null) => {
    //     props.onChange(newValue ?? "");
    //   }}
    //   inputValue={props.value}
    //   onInputChange={(_, newInputValue) => {
    //     props.onChange(newInputValue);
    //   }}
    //   options={[]}
    //   renderInput={(params) => <TextField {...params} label="Search Pokemon" />}
    // />
  );
};
