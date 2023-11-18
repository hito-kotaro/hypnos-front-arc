import { useRakutenApi } from "@/axios/useRakutenApi";
import KeyboardReturnIcon from "@mui/icons-material/KeyboardReturn";
import { AppHeader } from "@/components/AppHeader";
import { ItemListItem } from "@/components/ItemListItem";
import { ItemRegisterModal } from "@/components/ItemRegisterModal";
import { PostForms } from "@/components/PostForms";
import { useModal } from "@/hooks/useModal";
import { useSelectedItem } from "@/hooks/useSelectedItem";
import { PickedRakutenItem, RakutenItem } from "@/types/item";
import { NewPost } from "@/types/post";
import { Box, Button, IconButton, Typography } from "@mui/material";
import { useRouter } from "next/router";

const Post = () => {
  const router = useRouter();
  const { isOpen, handleOpen, handleClose } = useModal();
  const { rakutenItemList, isLoading, searchItem } = useRakutenApi();
  const { pickedItemList, pickItem, removeItem } = useSelectedItem();

  const onClickSearchItem = async (keyword: string) => {
    //searchItem(keyword);
    handleOpen();
  };

  const registerNewPost = (post: NewPost) => {
    console.log(post);
  };

  const onClickSelect = (rakutenItem: RakutenItem) => {
    pickItem(rakutenItem);
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
    const post: NewPost = {
      handleName: handleName,
      postTitle: postTitle,
      postBody: postBody,
      postImageUrl: s3Path,
    };
    registerNewPost(post);
    // TODO ここ/1にpushしているが、本来はバックエンドからのレスポンスに含まれるidの値に遷移する
    router.push("/post/1");
  };

  return (
    <>
      <ItemRegisterModal
        //   TODO keywordが固定値なのであとで変数に修正する
        keyword="枕"
        handleModalClose={handleClose}
        isModalOpen={isOpen}
        onClickSelect={onClickSelect}
      />
      <AppHeader />
      <Box sx={{ marginY: 1 }}>
        <IconButton onClick={() => router.push("/")}>
          <KeyboardReturnIcon fontSize="large" />
        </IconButton>
      </Box>
      <Box sx={{ marginTop: 2 }}>
        <PostForms
          handleModalOpen={handleModalOpen}
          handleNewPost={handleNewPost}
        />
      </Box>

      <Box sx={{ marginTop: 2 }}>
        <Typography variant="body1" component="div" sx={{ fontWeight: "bold" }}>
          選択中のアイテム
        </Typography>
        {pickedItemList.map((item: PickedRakutenItem) => (
          <Box key={item.uuid} sx={{ marginBottom: 3 }}>
            <Box
              sx={{ display: "flex", justifyContent: "end", marginBottom: 1 }}
            >
              <Button
                variant="contained"
                color="error"
                onClick={() => removeItem(item.uuid)}
              >
                削除
              </Button>
            </Box>
            <ItemListItem
              itemImageUrl={item.smallImageUrls[0].imageUrl}
              itemName={item.itemName}
              itemPrice={item.itemPrice}
            />
          </Box>
        ))}
      </Box>
    </>
  );
};

export default Post;
