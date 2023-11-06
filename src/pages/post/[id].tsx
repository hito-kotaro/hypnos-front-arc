import { Box, IconButton } from "@mui/material";
import { useRouter } from "next/router";
import { PostDetail } from "@/components/PostDetail";
import KeyboardReturnIcon from "@mui/icons-material/KeyboardReturn";
import { AppHeader } from "@/components/AppHeader";

const Post = () => {
  const router = useRouter();

  return (
    <>
      <AppHeader />
      <Box>
        <Box sx={{ marginY: 1 }}>
          <IconButton onClick={() => router.push("/")}>
            <KeyboardReturnIcon fontSize="large" />
          </IconButton>
        </Box>
        {/* 直接/post/[id]にアクセスすると一瞬ダミーの値が写ってしまうのでLOADINGで隠す */}
        {/* もっと上手いやり方がある？ */}
        {/*selectedPost ? <PostDetail post={selectedPost} /> : "NOW LOADING"*/}
        <Box> ItemList</Box>
      </Box>
    </>
  );
};

export default Post;
