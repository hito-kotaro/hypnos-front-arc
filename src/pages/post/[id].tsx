"use client";

import { Box, IconButton } from "@mui/material";
import { useRouter } from "next/router";
import KeyboardReturnIcon from "@mui/icons-material/KeyboardReturn";
import { AppHeader } from "@/components/AppHeader";
import { usePost } from "@/hooks/usePost";
import { PostDetail } from "@/components/PostDetail";
import { useEffect, useState } from "react";

const Post = () => {
  const router = useRouter();
  const { post, isError, isLoading } = usePost(Number(router.query.id) || 0);

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
