import { useRakutenApi } from "@/axios/useRakutenApi";
import { AppHeader } from "@/components/AppHeader";
import { ItemListItem } from "@/components/ItemListItem";
import { ItemRegisterModal } from "@/components/ItemRegisterModal";
import { PostForms } from "@/components/PostForms";
import { useModal } from "@/hooks/useModal";
import { useSelectedItem } from "@/hooks/useSelectedItem";
import { RakutenItemType, SelectedItemType } from "@/types/itemType";
import { NewPostType } from "@/types/postType";
import { Box, Button, Typography } from "@mui/material";
import { useRouter } from "next/router";

const Post = () => {
	const router = useRouter()
  const { isOpen, handleOpen, handleClose } = useModal();
  console.log("親コンポーネントがレンダリング");
  const { rakutenItemList, isLoading, searchItem } = useRakutenApi();
  const { selectedItemList, pushSelectedItem, removeSelectedItem } =
    useSelectedItem();

  const onClickSearchItem = async (keyword: string) => {
    searchItem(keyword);
    handleOpen();
  };

  const onClickSelect = (rakutenItem: RakutenItemType) => {
    pushSelectedItem(rakutenItem);
    handleClose();
  };

  const handleModalOpen = (keyword: string) => {
    handleClose();
    onClickSearchItem(keyword);
  };

  const handleNewPost = (
    handleName: string,
    postTitle: string,
    postBody: string,
  ) => {
    // Create S3 path
    // and upload
    const s3Path = "hogehoge/fugafuga/piyopiyo.png";
    const post: NewPostType = {
      handleName,
      postTitle,
      postBody,
      postImageUrl: s3Path,
      createdAt: new Date(),
    };
    console.log(post);
		router.push('/post/1')
  };


  return (
    <>
      <ItemRegisterModal
        isLoading={isLoading}
        handleModalClose={handleClose}
        isModalOpen={isOpen}
        rakutenItems={rakutenItemList}
        onClickSelect={onClickSelect}
      />
      <AppHeader />
      <Box sx={{ marginTop: 2 }}>
        <PostForms handleModalOpen={handleModalOpen} handleNewPost={handleNewPost} />
      </Box>

      <Box sx={{ marginTop: 2 }}>
        <Typography variant="body1" component="div" sx={{ fontWeight: "bold" }}>
          選択中のアイテム
        </Typography>
        {selectedItemList.map((selectedItem: SelectedItemType) => (
          <Box key={selectedItem.uuid} sx={{ marginBottom: 3 }}>
            <Box
              sx={{ display: "flex", justifyContent: "end", marginBottom: 1 }}
            >
              <Button
                variant="contained"
                color="error"
                onClick={() => removeSelectedItem(selectedItem.uuid)}
              >
                削除
              </Button>
            </Box>
            <ItemListItem item={selectedItem} />
          </Box>
        ))}
      </Box>
    </>
  );
};

export default Post;
