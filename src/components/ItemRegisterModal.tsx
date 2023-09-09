import { Box, Button, IconButton, Modal, Typography } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { FC } from "react";
import { ItemListItem } from "./ItemListItem";
import { items } from "@/mockData/items";
import { itemType } from "@/types/itemType";

type Props = {
  handleModalClose: () => void;
  isModalOpen: boolean;
};
export const ItemRegisterModal: FC<Props> = (props) => {
  const { handleModalClose, isModalOpen } = props;
  return (
    <Modal open={isModalOpen} onClose={handleModalClose}>
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

        <Box sx={{ marginTop: 2 }}>
          <Button
            variant="text"
            color="secondary"
            sx={{
              padding: 0,
              borderBottom: 1,
              borderRadius: 0,
              marginBottom: 1,
            }}
          >
            アイテムの登録をスキップ
          </Button>
          <Typography gutterBottom variant="caption" component="p">
            商品が購入できるURLは登録されずにあなたが入力したアイテム名のみ表示されます。
          </Typography>
        </Box>

        {items.map((item: itemType) => (
          <Box key={item.id} sx={{ marginBottom: 1 }}>
            <ItemListItem item={item} />
          </Box>
        ))}
      </Box>
    </Modal>
  );
};
