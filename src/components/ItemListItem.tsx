import { itemType } from "@/types/itemType";
import { Box, Card, CardActionArea, CardMedia, Typography } from "@mui/material";
import { FC } from "react";

type Props = {
	item: itemType
}

export const ItemListItem:FC<Props> = (props) => {
	const {item} = props
	return (
	<Card>
			<CardActionArea onClick={()=>console.log('hoge')}>
				<Box sx={{padding:1, display:'flex'}}>
					<CardMedia component='img' image='/sample.png' sx={{height:100, width:100, borderRadius:2}}/>
					<Box sx={{marginLeft:1}}>
						<Typography variant='caption' component='div'>
							{item.name}
						</Typography>

						<Box sx={{display:'flex', justifyContent:'end'}}>
							<Typography>
								{`${item.price} JPY`}
							</Typography>
						</Box>
					</Box>
				</Box>
			</CardActionArea>
		</Card>
	)
};
