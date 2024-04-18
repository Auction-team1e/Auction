import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";

import TextField from "@mui/material/TextField";

import SearchSharpIcon from "@mui/icons-material/SearchSharp";
import Popover from "@mui/material/Popover";

export function Header() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ bgcolor: "transparent" }}>
        <Toolbar sx={{ boxShadow: 0 }}>
          <IconButton sx={{ mr: 2, color: "black" }}>
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            News
          </Typography>
          <SearchSharpIcon />
          <TextField variant="outlined" label="Search Car"></TextField>
          <Button sx={{ color: "black" }}>Sell with us</Button>
          <Button sx={{ color: "black", borderRadius: "30%" }}>Log in</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
