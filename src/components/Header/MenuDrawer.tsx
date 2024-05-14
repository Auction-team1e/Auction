"use client";

import {
  Box,
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Stack,
  Typography,
} from "@mui/material";

import { useEffect, useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import { useCarData, ContextType } from "@/context/DataContext";
import Link from "next/link";

type dataType = { brandTitle: string };

export const MenuDrawer = () => {
  const [openDrawer, setOpenDrawer] = useState<boolean>(false);
  const { scrolling, setOpen, item } = useCarData() as ContextType;
  const [data, setData] = useState<Array<dataType>>();
  const [logger, setLogger] = useState<string>(
    item == true ? `Log in` : `Sign Out`
  );

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpenDrawer(newOpen);
  };

  useEffect(() => {
    async function getData() {
      const res = await fetch("http://localhost:4000/api/brand");
      const brands = await res.json();
      setData(brands);
      setLogger;
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
          <Link
            key={index}
            href={`/cars/${text.brandTitle}`}
            style={{ textDecoration: "none", color: `black` }}
          >
            <ListItem key={index} disablePadding>
              <ListItemButton>
                <ListItemText primary={text.brandTitle} sx={{ pl: 6 }} />
              </ListItemButton>
            </ListItem>
          </Link>
        ))}
      </List>
      <Divider />
      <Stack
        onClick={() => {
          setOpen(true);
        }}
      >
        <ListItemButton>
          <ListItemText primary={logger} sx={{ pl: 6 }} />
        </ListItemButton>
      </Stack>
    </Box>
  );
  return (
    <Stack mr={3} sx={{ cursor: `pointer` }}>
      <MenuIcon
        sx={scrolling ? { color: `black` } : { color: `white` }}
        onClick={toggleDrawer(true)}
      />
      <Drawer open={openDrawer} onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
    </Stack>
  );
};
