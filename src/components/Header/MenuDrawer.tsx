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

import { useEffect, useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import { useCarData, ContextType } from "@/context/DataContext";

type dataType = { brandTitle: string };

export const MenuDrawer = () => {
  const [open, setOpen] = useState(false);
  const { scrolling } = useCarData() as ContextType;
  const [data, setData] = useState<Array<dataType>>();

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  useEffect(() => {
    async function getData() {
      const res = await fetch("http://localhost:4000/api/brand");
      const brands = await res.json();
      setData(brands);
    }
    getData();
  }, []);

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
        Welcome!
      </Typography>
      <Divider />
      <List>
        {data?.map((text, index) => (
          <ListItem key={index} disablePadding>
            <ListItemButton>
              <ListItemIcon></ListItemIcon>
              <ListItemText />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {["Journal", "Sell with us", "About", "Contact", "Log in"].map(
          (text, index) => (
            <ListItem key={index} disablePadding>
              <ListItemButton>
                <ListItemIcon></ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          )
        )}
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
