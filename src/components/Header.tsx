import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";

import SearchSharpIcon from "@mui/icons-material/SearchSharp";

export default function Header() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ bgcolor: "transparent" }}>
        <Toolbar sx={{ boxShadow: 0 }}>
          <IconButton sx={{ mr: 2, color: "black" }}>
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, color: "black" }}
          >
            JamesAuction
          </Typography>
          <SearchSharpIcon />
          <Button
            disableElevation={true}
            variant="contained"
            sx={{
              textTransform: "none",
              color: "#717171",
              fontSize: "16",
              background: "#fff",
              borderRadius: "100px",
              "&:hover": { background: "#fff" },
              width: 540,
              height: 38,
            }}
          >
            Search Cars
          </Button>

          <Button sx={{ color: "black", borderRadius: "1" }}>Log in</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
