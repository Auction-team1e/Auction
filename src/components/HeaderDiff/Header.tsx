"use client";

import { Divider, Link, Stack, Typography } from "@mui/material";
import { MenuDrawer } from "./MenuDrawer";
import { SearchModal } from "./SearchModal";
import { LoginModal } from "./LoginModal";

export const HeaderDiff = () => {
  return (
    <Stack
      sx={{ transition: `all 0.3s ease` }}
      width={1}
      position={`fixed`}
      zIndex={100}
      alignItems={`center`}
      bgcolor={`white`}
    >
      <Stack
        height={66}
        width={1}
        direction={`row`}
        alignItems={`center`}
        px={7}
        justifyContent={`space-between`}
        bgcolor={`transparent`}
      >
        <Stack direction={`row`} alignItems={`center`}>
          <MenuDrawer />
          <Link href="/" sx={{ textDecoration: "none" }}>
            <Typography
              color={"black"}
              fontSize={24}
              width={140}
              sx={{ cursor: `pointer` }}
            >
              Prestige
            </Typography>
          </Link>
        </Stack>
        <SearchModal />
        <Stack height={`100%`} direction={`row`} alignItems={`center`} gap={3}>
          <Stack
            height={`100%`}
            color={"black"}
            sx={{
              cursor: `pointer`,
              ":hover": {
                borderBottom: `1px solid black`,
              },
            }}
            justifyContent={`center`}
            fontSize={14}
          >
            Sell With Us
          </Stack>
          <LoginModal />
        </Stack>
      </Stack>
      <Divider
        style={{ width: "100%" }}
        sx={{ bgcolor: `rgba(255, 255, 255, .2)`, height: 1.5 }}
      ></Divider>
    </Stack>
  );
};
