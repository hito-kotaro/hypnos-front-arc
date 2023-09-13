import AddIcon from "@mui/icons-material/Add";
import { Box, Fab } from "@mui/material";
import { postType } from "@/types/postType";
import { posts } from "../mockData/posts";
import { useRouter } from "next/router";
import { AppHeader } from "@/components/AppHeader";
import { PostCardItem } from "@/components/PostCardItem";

export default function Home() {
  const router = useRouter();

  return (
    <>
      <AppHeader />
      <Box sx={{ marginTop: 2 }}>
        <Box>
          {posts.map((post: postType) => (
            <PostCardItem key={post.id} post={post} />
          ))}
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
