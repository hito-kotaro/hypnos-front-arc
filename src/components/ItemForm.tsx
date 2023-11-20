// TODO 使ってないのでこのファイル自体不要
import { useInputTextType } from "@/hooks/useInputText";
import { Box, Button, TextField, Typography } from "@mui/material";
import React, { FC } from "react";

type Props = {
  itemInput: useInputTextType;
  handleOpen: () => void;
};
export const ItemForm: FC<Props> = React.memo((props) => {
  const { itemInput, handleOpen } = props;

  return (
    <Box>
      <Typography variant="body1" component="div" sx={{ fontWeight: "bold" }}>
        アイテムを登録
      </Typography>
      <TextField
        value={itemInput.value}
        onChange={itemInput.handleChange}
        focused={false}
        size="small"
        placeholder="アイテム名を入力"
        fullWidth
        sx={{ marginBottom: 1 }}
      />
      <Button
        disabled={itemInput.value === "" ? true : false}
        onClick={handleOpen}
        variant="contained"
        color="secondary"
        fullWidth
      >
        楽天でアイテムのURLを探す
      </Button>
    </Box>
  );
});
