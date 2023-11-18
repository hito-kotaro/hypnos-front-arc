import AddIcon from "@mui/icons-material/Add";
import { Box, Fab } from "@mui/material";
import { useRouter } from "next/router";
import { AppHeader } from "@/components/AppHeader";
import { PostCardItem } from "@/components/PostCardItem";
import { usePosts } from "@/hooks/usePost";
import { Post } from "@/types/post";

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
            : allPosts.posts.map((post: Post) => {
							// ダミーデータ(id:0)だけは表示させない
								if(post.id !== 0){
                return <PostCardItem key={post.id} post={post} />;
							}
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
