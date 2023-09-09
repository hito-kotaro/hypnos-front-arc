import { Box, Button, TextField, Typography } from "@mui/material";
import Image from "next/image";
import useInputText from "./useSearchWindow";
import { FC, useRef, useState } from "react";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import useImage from "./useImage";
import { usePostRequest } from "./usePostRequest";

type Props = {
  handleModalOpen: () => void;
};
export const PostForms: FC<Props> = (props) => {
  const { handleModalOpen } = props;

  const handleNameInput = useInputText();
  const titleInput = useInputText();
  const bodyInput = useInputText();
  const itemInput = useInputText();
  const inputRef = useRef(null);

  const { imageUrl, uploadToClient } = useImage();
  const { newPost } = usePostRequest();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    handleModalOpen();
  };

  return (
    <>
      <Box>
        <Button
          onClick={newPost}
          variant="contained"
          color="secondary"
          fullWidth
        >
          投稿する
        </Button>
        <TextField
          value={handleNameInput.value}
          onChange={handleNameInput.handleChange}
          focused={false}
          size="small"
          placeholder="ハンドルネーム"
          fullWidth
          margin="dense"
        />
        <TextField
          value={titleInput.value}
          onChange={titleInput.handleChange}
          focused={false}
          size="small"
          placeholder="投稿タイトル"
          fullWidth
          margin="dense"
        />
        <TextField
          multiline
          rows={5}
          value={bodyInput.value}
          onChange={bodyInput.handleChange}
          focused={false}
          size="small"
          placeholder="本文"
          fullWidth
          margin="dense"
        />
        <Button
          component="label"
          variant="contained"
          startIcon={<CloudUploadIcon />}
        >
          画像を選択
          <input
            accept="image/*"
            ref={inputRef}
            hidden
            type="file"
            onChange={uploadToClient}
          />
        </Button>

        <Box sx={{ display: "flex", justifyContent: "center", marginTop: 2 }}>
          {imageUrl ? (
            <Image src={imageUrl} alt="test" width="320" height="240" />
          ) : (
            ""
          )}
        </Box>
        <Box>
          <Typography
            variant="body1"
            component="div"
            sx={{ fontWeight: "bold" }}
          >
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
      </Box>
    </>
  );
};
