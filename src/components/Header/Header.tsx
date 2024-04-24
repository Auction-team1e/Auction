"use client";

import { Stack, Typography } from "@mui/material";
import { MenuDrawer } from "./MenuDrawer";
import { SearchModal } from "./SearchModal";
import { LoginModal } from "./LoginModal";

export const Header = () => {
  return (
    <Stack
      maxWidth={1920}
      height={66}
      border={`1px solid black`}
      direction={`row`}
      alignItems={`center`}
      px={7}
      justifyContent={`space-between`}
    >
      <Stack direction={`row`} alignItems={`center`}>
        <MenuDrawer />
        <img
          width={140}
          src="https://res.cloudinary.com/dlfnavahp/image/upload/v1713928002/Official_Logo_b5eask.webp"
        ></img>
      </Stack>
      <SearchModal />
      <Stack direction={`row`} alignItems={`center`} gap={3}>
        <Typography>Sell With Us</Typography>
        <LoginModal />
      </Stack>
    </Stack>
  );
};
