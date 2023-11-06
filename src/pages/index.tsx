import AddIcon from "@mui/icons-material/Add";
import { Box, Fab } from "@mui/material";
import { DBPostType, PostType } from "@/types/postType";
import { useRouter } from "next/router";
import { AppHeader } from "@/components/AppHeader";
import { PostCardItem } from "@/components/PostCardItem";
import { usePosts } from "@/hooks/usePost";
import { postToCamel } from "@/utils/toCamel";

export default function Home() {
  const router = useRouter();

  const allPosts = usePosts();

  return (
    <>
      <AppHeader />
      <Box sx={{ marginTop: 2 }}>
        <Box>
          {allPosts.isLoading
            ? "loading"
            : allPosts.posts.map((rowPost: DBPostType) => {
                const post: PostType = postToCamel(rowPost);
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
