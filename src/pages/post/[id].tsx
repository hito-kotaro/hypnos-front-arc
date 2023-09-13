import { Box, IconButton } from "@mui/material";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { dummyPost, posts } from "../../mockData/posts";
import { postType } from "@/types/postType";
import { PostDetail } from "@/components/PostDetail";
import KeyboardReturnIcon from "@mui/icons-material/KeyboardReturn";
import { AppHeader } from "@/components/AppHeader";

const Post = () => {
  const [post, setPost] = useState<postType>(dummyPost);
  const router = useRouter();
  const { id } = router.query;

  const mockFetchPostById = (postId: number) => {
    return posts.find((p: postType) => p.id === postId);
  };

  useEffect(() => {
    const pickedPost = mockFetchPostById(Number(id));
    if (pickedPost) {
      setPost(pickedPost);
    }
  }, [router]);

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
        {post.id === 0 ? "NOW LOADING" : <PostDetail post={post!} />}
        <Box> ItemList</Box>
      </Box>
    </>
  );
};

export default Post;
