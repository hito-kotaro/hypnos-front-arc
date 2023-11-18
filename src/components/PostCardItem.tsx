"use client";
import { Post } from "@/types/post";
import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { useRouter } from "next/router";
import { FC } from "react";

type Props = {
  post: Post;
};

export const PostCardItem: FC<Props> = (props) => {
  const { post } = props;
  const router = useRouter();

  const onClick = () => {
    localStorage.setItem("post_id", String(post.id));
    router.push(`/post/${post.id}`);
  };

  return (
    <Card>
      <CardActionArea onClick={onClick}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            padding: 2,
          }}
        >
          <CardContent sx={{ padding: 0 }}>
            <Typography
              gutterBottom
              variant="h6"
              component="div"
              sx={{ padding: 0, fontWeight: "bold" }}
            >
              {post.postTitle}
            </Typography>
            <Typography gutterBottom variant="body1" component="p" width="100%">
              {post.postBody}
            </Typography>
            <Typography variant="caption" component="p" width="100%">
              {`Posted by ${post.handleName}`}
            </Typography>
          </CardContent>

          <CardMedia
            component="img"
            image={post.postImageUrl}
            alt="postImage"
            sx={{ height: 100, width: 100, borderRadius: 2 }}
          />
        </Box>
      </CardActionArea>
    </Card>
  );
};
