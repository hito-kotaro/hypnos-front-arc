import { postType } from "@/types/postType";
import { Box, Typography } from "@mui/material";
import Avatar from "boring-avatars";
import Image from "next/image";
import { FC } from "react";

type Props = {
  post: postType;
};

export const PostDetail: FC<Props> = (props) => {
  const { post } = props;
  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          borderRadius: 3,
          boxShadow: 10,
        }}
      >
        <Image src="/sample3.png" alt="sample" width="340" height="240" />
      </Box>
      <Box sx={{ marginTop: 2 }}>
        <Typography
          gutterBottom
          variant="h6"
          component="div"
          sx={{ padding: 0, fontWeight: "bold" }}
        >
          {post ? post.postTitle : "Untitle"}
        </Typography>
        <Box sx={{ display: "flex" }}>
          <Avatar size={40} name={post ? post.postedBy : 'Unknown'} variant="beam" />
          <Typography
            gutterBottom
            variant="h6"
            component="div"
            sx={{
              padding: 0,
              fontWeight: "bold",
              lineHeight: "40px",
              marginLeft: 2,
            }}
          >
            {post ? post.postedBy : "Unknown"}
          </Typography>
        </Box>

        <Box>
          <Typography variant="caption" component="p" width="100%">
            {post ? post.createdAt : "UnDefined"}
          </Typography>
        </Box>
        <Box>
          <Typography variant="body1" component="p" width="100%">
            {post ? post.postBody : "Blank"}
          </Typography>
        </Box>
      </Box>
    </>
  );
};
