import KeyboardReturnIcon from "@mui/icons-material/KeyboardReturn";
import { AppHeader } from "@/components/AppHeader";
import { ItemListItem } from "@/components/ItemListItem";
import { ItemRegisterModal } from "@/components/ItemRegisterModal";
import { PostForms } from "@/components/PostForms";
import { useModal } from "@/hooks/useModal";
import { useSelectedItem } from "@/hooks/useSelectedItem";
import { PickedRakutenItem, RakutenItem } from "@/types/item";
import { NewPost } from "@/types/post";
import { Box, Button, IconButton, TextField, Typography } from "@mui/material";
import { useRouter } from "next/router";
import { useRef, useState } from "react";

const Post = () => {
  const router = useRouter();
  const { isOpen, handleOpen, handleClose } = useModal();
  const { pickedItemList, pickItem, removeItem } = useSelectedItem();

  //  ここ、キーワードの入力は、useRefを使う(レンダリングさせない)
  // 「検索する」ボタンをクリックした時に、useStateに確定した値を保持させてmodalに渡す
  // modalはキーワードが""の時にはAPIにアクセスさせない
  const [itemName, setItemName] = useState("");
  const inputEl = useRef<HTMLInputElement>(null);

  const onClickSearchItem = async (keyword: string) => {
    //searchItem(keyword);
    // handleOpen();
  };

  const handleClick = () => {
    if (inputEl.current) {
      handleOpen();
      console.log(inputEl.current.value);
      setItemName(inputEl.current.value);
    } else {
      setItemName("");
    }
  };

  const registerNewPost = (post: NewPost) => {
    console.log(post);
  };

  const onClickSelect = (rakutenItem: RakutenItem) => {
    pickItem(rakutenItem);
    handleClose();
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
        handleModalClose={handleClose}
        isModalOpen={isOpen}
        onClickSelect={onClickSelect}
        keyword={itemName}
      />
      <AppHeader />
      <Box sx={{ marginY: 1 }}>
        <IconButton onClick={() => router.push("/")}>
          <KeyboardReturnIcon fontSize="large" />
        </IconButton>
      </Box>
      <Box sx={{ marginTop: 2 }}>
        <PostForms handleNewPost={handleNewPost} />
      </Box>

      {/* ItemFormから切り出して持ってきた部分*/}
      <Box>
        <Typography variant="body1" component="div" sx={{ fontWeight: "bold" }}>
          アイテムを登録
        </Typography>
        <TextField
          inputRef={inputEl}
          focused={false}
          size="small"
          placeholder="アイテム名を入力"
          fullWidth
          sx={{ marginBottom: 1 }}
        />
        <Button
          onClick={handleClick}
          variant="contained"
          color="secondary"
          fullWidth
        >
          楽天でアイテムのURLを探す
        </Button>
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
