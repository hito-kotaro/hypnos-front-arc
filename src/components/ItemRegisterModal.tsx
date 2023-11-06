import { Box, Button, IconButton, Modal, Typography } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import React, { FC } from "react";
import { RakutenItemType } from "@/types/itemType";
import { ItemListItem } from "./ItemListItem";

type Props = {
  isLoading: boolean;
  handleModalClose: () => void;
  isModalOpen: boolean;
  rakutenItems: RakutenItemType[];
  onClickSelect: (rakutenItem: RakutenItemType) => void;
};

export const ItemRegisterModal: FC<Props> = React.memo((props) => {
  const {
    isLoading,
    handleModalClose,
    isModalOpen,
    rakutenItems,
    onClickSelect,
  } = props;

  return (
    <Modal open={isModalOpen}>
      <Box
        sx={{
          position: "absolute",
          top: "10px",
          width: "100%",
          height: "100%",
          background: "#F5F5F5",
          overflowY: "scroll",
        }}
      >
        <Box sx={{ display: "flex", justifyContent: "end" }}>
          <IconButton onClick={handleModalClose}>
            <CloseIcon />
          </IconButton>
        </Box>

        <Typography variant="body1" component="div" sx={{ fontWeight: "bold" }}>
          あなたの睡眠のオトモを教えてください
        </Typography>
        <Typography gutterBottom variant="caption" component="p">
          あなたがおすすめするアイテムをみんなが購入できるようにURLをシェアしてくれますか？
        </Typography>

        {isLoading
          ? "Loading"
          : rakutenItems.map((item: RakutenItemType) => (
              <Button
                key={item.itemCode}
                onClick={() => onClickSelect(item)}
                fullWidth
              >
                <Box sx={{ width: "100%" }}>
                  <ItemListItem item={item} />
                </Box>
              </Button>
            ))}
      </Box>
    </Modal>
  );
});
