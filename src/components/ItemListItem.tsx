import { Box, Typography } from "@mui/material";
import Image from "next/image";
import { FC } from "react";

type Props = {
  itemImageUrl: string;
  itemName: string;
  itemPrice: number;
};

export const ItemListItem: FC<Props> = (props) => {
  const { itemImageUrl, itemName, itemPrice } = props;

  return (
    <Box
      sx={{
        display: "flex",
        borderRadius: 2,
        boxShadow: 2,
        padding: 1,
      }}
    >
      <Image src={itemImageUrl} alt={itemName} width="64" height="64" />
      <Box sx={{ color: "#050A30", marginLeft: 1 }}>
        <Typography sx={{ color: "#050A30" }}>{itemName}</Typography>
        <Typography>{`${itemPrice}JPY`}</Typography>
      </Box>
    </Box>
  );
};
