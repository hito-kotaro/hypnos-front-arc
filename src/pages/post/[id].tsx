"use client";

import { Box, IconButton } from "@mui/material";
import { useRouter } from "next/router";
import KeyboardReturnIcon from "@mui/icons-material/KeyboardReturn";
import { AppHeader } from "@/components/AppHeader";
import { usePost } from "@/hooks/usePost";
import { PostDetail } from "@/components/PostDetail";

const Post = () => {
  const router = useRouter();

  const { post, isError, isLoading } = usePost(
    // パスパラメータからのID取得だと、レンダリング時にundefinedになってしまうのでlocalStorageを経由
    Number(localStorage.getItem("post_id")) || 0,
  );

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
        {isLoading ? "NOW LOADING" : <PostDetail post={post} />}
        <Box> ItemList</Box>
      </Box>
    </>
  );
};

export default Post;
