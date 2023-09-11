import { ExtendItemType, RakutenFetchedItemType } from "@/types/itemType";
import { Box, Typography } from "@mui/material";
import Image from "next/image";
import { FC } from "react";

type Props = {
  item: ExtendItemType|RakutenFetchedItemType;
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
      <Image src={item.imageUrl} alt={item.name} width="100" height="100" />
      <Box sx={{ color: "#050A30", marginLeft: 1 }}>
        <Typography sx={{ color: "#050A30" }}>{item.name}</Typography>
        <Typography>{`${item.price}JPY`}</Typography>
      </Box>
    </Box>
  );
};
