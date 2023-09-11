import { Box, Button, IconButton, Modal, Typography } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import React, { FC, ReactElement } from "react";
import { ExtendItemType, RakutenFetchedItemType } from "@/types/itemType";
import { ItemListItem } from "./ItemListItem";

type Props = {
  handleModalClose: () => void;
  handleModalOpen: () => void;
  isModalOpen: boolean;
  handleClickItem: (item: RakutenFetchedItemType) => void;
  //children: ReactElement;
  rakutenItems: RakutenFetchedItemType[];
};

export const ItemRegisterModal: FC<Props> = React.memo((props) => {
  const { handleModalClose, isModalOpen, handleClickItem, rakutenItems } =
    props;

  console.log("小コンポーネントレンダリング");
  console.log(props);
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

        {rakutenItems.map((item: RakutenFetchedItemType) => (
          <Button
            key={item.itemCode}
            fullWidth
            onClick={() => handleClickItem(item)}
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
