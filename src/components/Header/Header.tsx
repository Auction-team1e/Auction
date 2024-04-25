"use client";

import { Divider, Stack, Typography } from "@mui/material";
import { MenuDrawer } from "./MenuDrawer";
import { SearchModal } from "./SearchModal";
import { LoginModal } from "./LoginModal";
import { useEffect, useState } from "react";
type dataType = { brandTitle: string; img: string };

export const Header = () => {
  const [data, setData] = useState<Array<dataType>>();
  console.log("🚀 ~ Header ~ data:", data);

  useEffect(() => {
    async function getData() {
      const res = await fetch("http://localhost:4000/api/brand");
      const brands = await res.json();
      setData(brands);
    }
    getData();
  }, []);
  return (
    <Stack width={1} position={`fixed`} zIndex={100} alignItems={`center`}>
      <Stack
        height={66}
        width={1723}
        direction={`row`}
        alignItems={`center`}
        px={7}
        justifyContent={`space-between`}
        bgcolor={`transparent`}
      >
        <Stack direction={`row`} alignItems={`center`}>
          <MenuDrawer />
          <Typography color={`white`} fontSize={24} width={140}>
            JamesEdition
          </Typography>
        </Stack>
        <SearchModal />
        <Stack height={`100%`} direction={`row`} alignItems={`center`} gap={3}>
          <Stack
            height={`100%`}
            color={`white`}
            sx={{
              cursor: `pointer`,
              ":hover": {
                borderBottom: `1px solid white`,
              },
            }}
            justifyContent={`center`}
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
      <Stack
        direction={`row`}
        alignItems={`center`}
        width={1723}
        height={46}
        gap={2.7}
        px={7}
      >
        {data?.map((val) => {
          return (
            <Typography
              key={val.brandTitle}
              color={`white`}
              fontSize={18}
              fontWeight={100}
              sx={{ cursor: `pointer` }}
            >
              {val.brandTitle}
            </Typography>
          );
        })}
      </Stack>
      <Divider
        style={{ width: "100%" }}
        sx={{ bgcolor: `rgba(255, 255, 255, .2)`, height: 1.5 }}
      ></Divider>
    </Stack>
  );
};
