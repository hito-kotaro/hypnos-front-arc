import { postType } from "@/types/postType";
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
  post: postType;
};

export const PostCardItem: FC<Props> = (props) => {
  const { post } = props;
  const router = useRouter();

  return (
    <Card>
      <CardActionArea onClick={() => router.push(`/post/${post.id}`)}>
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
              {`Posted by ${post.postedBy}`}
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
