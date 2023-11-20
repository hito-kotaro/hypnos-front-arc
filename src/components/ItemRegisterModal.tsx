import { Box, Button, IconButton, Modal, Typography } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import React, { FC } from "react";
import { RakutenItem } from "@/types/item";
import { useRakutenItems } from "@/feature/rakuten/hooks/useRakutenItems";
import { ItemListItem } from "./ItemListItem";

type Props = {
  handleModalClose: () => void;
  isModalOpen: boolean;
  onClickSelect: (rakutenItem: RakutenItem) => void;
  keyword: string;
};

export const ItemRegisterModal: FC<Props> = React.memo((props) => {
  const { handleModalClose, isModalOpen, onClickSelect, keyword } = props;
  const { rakutenItems, isError, isLoading } = useRakutenItems(keyword);
  console.log(rakutenItems);

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
          : rakutenItems ? rakutenItems.Items.map((item: { Item: RakutenItem }) => (
              <Button
                key={item.Item.itemCode}
                onClick={() => onClickSelect(item.Item)}
                fullWidth
              >
                <Box sx={{ width: "100%" }}>
                  <ItemListItem
                    itemImageUrl={item.Item.smallImageUrls[0].imageUrl}
                    itemName={item.Item.itemName}
                    itemPrice={item.Item.itemPrice}
                  />
                </Box>
              </Button>
            )) : 'アイテム名を入力してください。'}
      </Box>
    </Modal>
  );
});
