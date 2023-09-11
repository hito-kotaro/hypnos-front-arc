import { Box, Button, TextField, Typography } from "@mui/material";
import Image from "next/image";
import { FC, ReactElement, useRef } from "react";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import useImage from "@/hooks/useImage";
import { usePostRequest } from "@/hooks/usePostRequest";
import { useInputText, useInputTextType } from "@/hooks/useInputText";
import { useRakutenApi } from "@/axios/useRakutenApi";

type Props = {
  handleModalOpen: () => void;
  itemInput: useInputTextType;
};

export const PostForms: FC<Props> = (props) => {
  const { handleModalOpen, itemInput } = props;
  const handleNameInput = useInputText();
  const titleInput = useInputText();
  const bodyInput = useInputText();
  const inputRef = useRef(null);
  const { imageUrl, uploadToClient, clearImage } = useImage();
  const { newPost } = usePostRequest();
	const {isLoading,  setIsLoading, instance} = useRakutenApi()

  const handleNewPost = () => {
    handleNameInput.clearValue();
    titleInput.clearValue();
    bodyInput.clearValue();
    clearImage();
    newPost();
  };

  const wrapHandleModalOpen = () => {
		setIsLoading(true)
    console.log("fetchData");

    console.log("open modal");
    handleModalOpen();
    console.log("loading data");
    console.log("set state");
  };

  return (
    <>
      <Box>
        <Button
          disabled={
            handleNameInput.value === "" ||
            titleInput.value === "" ||
            bodyInput.value === ""
              ? true
              : false
          }
          onClick={handleNewPost}
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
            <Box>
              <Button onClick={clearImage} variant="contained" color="error">
                画像を削除
              </Button>
              <Image src={imageUrl} alt="test" width="320" height="240" />
            </Box>
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
            onClick={wrapHandleModalOpen}
            variant="contained"
            color="secondary"
            fullWidth
          >
            アイテムを探す
          </Button>
        </Box>
      </Box>
    </>
  );
};
