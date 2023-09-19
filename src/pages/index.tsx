import AddIcon from "@mui/icons-material/Add";
import { Box, Fab } from "@mui/material";
import { PostType } from "@/types/postType";
import { posts } from "../mockData/posts";
import { useRouter } from "next/router";
import { AppHeader } from "@/components/AppHeader";
import { PostCardItem } from "@/components/PostCardItem";
import { useEffect } from "react";
import { useBackend } from "@/axios/useBackend";

export default function Home() {
  const router = useRouter();
  const { fetchPosts, postList } = useBackend();

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <>
      <AppHeader />
      <Box sx={{ marginTop: 2 }}>
        <Box>
          {postList.map((post: PostType) => {
            return <PostCardItem key={post.id} post={post} />;
          })}
        </Box>
      </Box>
      <Fab
        color="secondary"
        aria-label="add"
        sx={{ position: "fixed", bottom: 10, right: 10 }}
        onClick={() => router.push("/post")}
      >
        <AddIcon />
      </Fab>
    </>
  );
}
