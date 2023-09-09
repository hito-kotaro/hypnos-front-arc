import AppHeader from "@/components/AppHeader";
import { Box, IconButton } from "@mui/material";
import KeyboardReturnIcon from "@mui/icons-material/KeyboardReturn";
import { useRouter } from "next/router";
import { useState } from "react";
import { PostForms } from "@/components/PostForms";
import { ItemRegisterModal } from "@/components/ItemRegisterModal";

const Post = () => {
  const router = useRouter();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleModalOpen = () => setIsModalOpen(true);
  const handleModalClose = () => setIsModalOpen(false);

  return (
    <>
      <AppHeader />
      <ItemRegisterModal
        handleModalClose={handleModalClose}
        isModalOpen={isModalOpen}
      />
      <Box sx={{ paddingX: 1 }}>
        <IconButton onClick={() => router.push("/")}>
          <KeyboardReturnIcon fontSize="large" />
        </IconButton>
        <Box>
          <PostForms handleModalOpen={handleModalOpen} />
        </Box>
      </Box>
    </>
  );
};

export default Post;
