import { Search } from "@mui/icons-material";
import { Box, InputAdornment, TextField } from "@mui/material";
import useInputText from "./useSearchWindow";
import { FC } from "react";

type Props = {
	placeholder: string
}
const SearchWindow:FC<Props> = (props) => {
	const {placeholder}=props
  const { value, handleChange } = useInputText();
  return (
    <Box sx={{ display: "flex", paddingX: 1 }}>
      <TextField
        onChange={handleChange}
        value={value}
        fullWidth
        placeholder={placeholder}
        size="small"
        color="primary"
        focused={false}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <Search />
            </InputAdornment>
          ),
        }}
      />
    </Box>
  );
};

export default SearchWindow;
