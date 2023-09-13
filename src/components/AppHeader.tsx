import { AppBar, Toolbar, Typography } from "@mui/material";

export const AppHeader = () => {
  return (
    <AppBar position="sticky" color="primary" sx={{ borderRadius: 3 }}>
      <Toolbar>
        <Typography
          variant="h6"
          component="div"
          color="secondary"
          sx={{ fontWeight: "bold" }}
        >
          Gussleep
        </Typography>
      </Toolbar>
    </AppBar>
  );
};
