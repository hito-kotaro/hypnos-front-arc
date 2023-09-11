import AppHeader from "@/components/AppHeader";
import Image from "next/image";
import KeyboardReturnIcon from "@mui/icons-material/KeyboardReturn";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import { Box, Button, IconButton, TextField, Typography } from "@mui/material";
import { ItemRegisterModal } from "@/components/ItemRegisterModal";
import { ExtendItemType, RakutenFetchedItemType } from "@/types/itemType";
import { ItemListItem } from "@/components/ItemListItem";
import { useRouter } from "next/router";
import { useModal } from "@/hooks/useModal";
import { useItemList } from "@/hooks/useItemList";
import { useInputText } from "@/hooks/useInputText";
import { useCallback, useRef, useState } from "react";
import useImage from "@/hooks/useImage";
import { usePostRequest } from "@/hooks/usePostRequest";
import { useRakutenApi } from "@/axios/useRakutenApi";
import { v4 as uuidv4 } from "uuid";

const Post = () => {
  const router = useRouter();
  const { isOpen, handleOpen, handleClose } = useModal();
  const { itemList, addItem, removeItem, clearItemList } = useItemList();
  const [fetchedItemList, setFetchedItemList] = useState<
    RakutenFetchedItemType[]
  >([]);

  const itemInput = useInputText();
  const handleNameInput = useInputText();
  const titleInput = useInputText();
  const bodyInput = useInputText();
  const inputRef = useRef(null);
  const { imageUrl, uploadToClient, clearImage } = useImage();
  const { newPost } = usePostRequest();
  const { isLoading, setIsLoading, instance } = useRakutenApi();

  const wrapHandleModalOpen = async () => {
    setIsLoading(true);
    handleOpen();
    const result = await instance.get("http://localhost:3001/rakuten");
    setIsLoading(false);
    setFetchedItemList(result.data);
  };

  const handleNewPost = () => {
    handleNameInput.clearValue();
    titleInput.clearValue();
    bodyInput.clearValue();
    itemInput.clearValue();
    clearItemList();
    clearImage();
    newPost();
  };

  const registerItem = useCallback(
    (fetchedItemList?: RakutenFetchedItemType) => {
      let extendItem: ExtendItemType;
      if (fetchedItemList) {
        extendItem = {
          ...fetchedItemList,
          listId: uuidv4(),
        };
        handleClose();
      } else {
        extendItem = {
          listId: uuidv4(),
          name: itemInput.value,
          description: "",
          imageUrl: "/sample.png",
          price: 0,
        };
      }
      addItem(extendItem);
      itemInput.clearValue();
    },

    [itemList],
  );

  console.log("親コンポーネントがレンダリング");

  return (
    <>
      <AppHeader />
      <ItemRegisterModal
        handleModalClose={handleClose}
        handleModalOpen={handleOpen}
        isModalOpen={isOpen}
        handleClickItem={registerItem}
        rakutenItems={fetchedItemList}
      />
      <Box sx={{ paddingX: 1 }}>
        <IconButton onClick={() => router.push("/")}>
          <KeyboardReturnIcon fontSize="large" />
        </IconButton>
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
              楽天でアイテムのURLを探す
            </Button>
            <Button
              onClick={() => registerItem()}
              disabled={itemInput.value === "" ? true : false}
              variant="text"
              color="secondary"
              sx={{
                marginTop: 1,
                padding: 0,
                borderBottom: 1,
                borderRadius: 0,
              }}
            >
              アイテム名だけ登録
            </Button>
          </Box>
        </Box>
        <Box>
          {itemList.map((item: ExtendItemType) => (
            <Box key={item.listId} sx={{ marginBottom: 2 }}>
              <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                <Typography noWrap variant="body1" component="p">
                  {item.name}
                </Typography>
                <Button
                  onClick={() => removeItem(item.listId)}
                  variant="contained"
                  color="error"
                  size="small"
                >
                  削除
                </Button>
              </Box>
              <Box>
                <ItemListItem item={item} />
              </Box>
            </Box>
          ))}
        </Box>
      </Box>
    </>
  );
};

export default Post;
