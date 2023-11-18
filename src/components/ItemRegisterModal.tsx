import { Box, Button, IconButton, Modal, Typography } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import React, { FC } from "react";
import { ItemListItem } from "./ItemListItem";
import { useRakutenItems } from "@/feature/rakuten/hooks/useRakutenItems";
import { RakutenItem } from "@/types/item";

type Props = {
  handleModalClose: () => void;
  keyword: string;
  isModalOpen: boolean;
  onClickSelect: (rakutenItem: RakutenItem) => void;
};

export const ItemRegisterModal: FC<Props> = React.memo((props) => {
  const {
    handleModalClose,
    keyword,
    isModalOpen,
    onClickSelect,
  } = props;

  const { rakutenItems, isLoading } = useRakutenItems(keyword);

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
          : rakutenItems.Items.map((item: { Item: RakutenItem }) => (
              <Button
                key={item.Item.itemCode}
                onClick={() => onClickSelect(item.Item)}
                fullWidth
              >
                <Box sx={{ width: "100%" }}>
                  <ItemListItem itemImageUrl={item.Item.smallImageUrls[0].imageUrl} itemName={item.Item.itemName} itemPrice={item.Item.itemPrice}  />
                </Box>
              </Button>
            ))}
      </Box>
    </Modal>
  );
});
