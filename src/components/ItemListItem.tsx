import { RakutenItemType, RowRakutenItemType } from "@/types/itemType";
import { Box, Typography } from "@mui/material";
import Image from "next/image";
import { FC } from "react";

type Props = {
  item: RowRakutenItemType;
};

export const ItemListItem: FC<Props> = (props) => {
  const { item } = props;
  console.log(item);

  return (
    <Box
      sx={{
        display: "flex",
        borderRadius: 2,
        boxShadow: 2,
        padding: 1,
      }}
    >
      <Image
        src={item.Item.smallImageUrls[0].imageUrl}
        alt={item.Item.itemName}
        width="64"
        height="64"
      />
      <Box sx={{ color: "#050A30", marginLeft: 1 }}>
        <Typography sx={{ color: "#050A30" }}>{item.Item.itemName}</Typography>
        <Typography>{`${item.Item.itemPrice}JPY`}</Typography>
      </Box>
    </Box>
  );
};
