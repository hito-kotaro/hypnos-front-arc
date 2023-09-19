import { RakutenItemType } from "@/types/itemType";
import { Box, Typography } from "@mui/material";
import Image from "next/image";
import { FC } from "react";

type Props = {
  item: RakutenItemType;
};

export const ItemListItem: FC<Props> = (props) => {
  const { item } = props;

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
        src={item.itemImageUrl}
        alt={item.itemName}
        width="64"
        height="64"
      />
      <Box sx={{ color: "#050A30", marginLeft: 1 }}>
        <Typography sx={{ color: "#050A30" }}>{item.itemName}</Typography>
        <Typography>{`${item.itemPrice}JPY`}</Typography>
      </Box>
    </Box>
  );
};
