import {
  Box,
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Stack,
  Typography,
} from "@mui/material";

import { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import { useCarData, ContextType } from "@/context/DataContext";

export const MenuDrawer = () => {
  const [open, setOpen] = useState(false);
  const { scrolling } = useCarData() as ContextType;

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  const DrawerList = (
    <Box sx={{ width: 315 }} role="presentation" onClick={toggleDrawer(false)}>
      <Typography
        sx={{
          color: "#717171",
          px: "20px",
          height: "42px",
          alignItems: "center",
          display: "flex",
          fontSize: "14px",
        }}
      >
        Good morning,
      </Typography>
      <Divider />
      <List>
        {[
          "Bugatti",
          "Pagani",
          "Koenigsegg",
          "Ferrari",
          "Lamborghini",
          "Mercedes",
          "Rolls-Royce",
          "Mclaren",
          "Brabus",
          "Porsche",
          "Aston Martin",
          "Bentley",
          "Maybach",
          "BMW",
        ].map((text, index) => (
          <ListItem key={index} disablePadding>
            <ListItemButton>
              <ListItemIcon></ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {[
          "Journal",
          "Sell with us",
          "Help & FAQ",
          "About",
          "Contact",
          "Sign Out",
        ].map((text, index) => (
          <ListItem key={index} disablePadding>
            <ListItemButton>
              <ListItemIcon></ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );
  return (
    <Stack mr={3} sx={{ cursor: `pointer` }}>
      <MenuIcon
        sx={scrolling ? { color: `black` } : { color: `white` }}
        onClick={toggleDrawer(true)}
      />
      <Drawer open={open} onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
    </Stack>
  );
};
