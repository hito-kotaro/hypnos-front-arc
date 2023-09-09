import { Box, TextField, Typography } from "@mui/material";
import useInputText from "./useSearchWindow";

export const ItemRegisterForm = () => {
  const itemInput = useInputText();
  return (
    <Box>
      <Typography variant="body1" component="div" sx={{ fontWeight: "bold" }}>
        アイテムを登録
      </Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          value={itemInput.value}
          onChange={itemInput.handleChange}
          focused={false}
          size="small"
          placeholder="アイテム名を入力"
          fullWidth
        />
      </form>
    </Box>
  );
};
