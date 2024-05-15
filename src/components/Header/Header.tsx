"use client";

import { Divider, Link, Stack, Typography } from "@mui/material";
import { MenuDrawer } from "./MenuDrawer";
import { SearchModal } from "./SearchModal";
import { LoginModal } from "./LoginModal";
import { useEffect, useState } from "react";
import { useCarData, ContextType } from "@/context/DataContext";
import { useRouter } from "next/navigation";

type dataType = { brandTitle: string; img: string };

export const Header = () => {
  const [data, setData] = useState<Array<dataType>>();
  const { scrolling, setScrolling } = useCarData() as ContextType;
  const router = useRouter();

  const handleScroll = () => {
    if (window.scrollY > 20) {
      setScrolling(true);
    } else {
      setScrolling(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });

  useEffect(() => {
    async function getData() {
      const res = await fetch("http://localhost:4000/api/brand");
      const brands = await res.json();
      setData(brands);
    }
    getData();
  }, []);

  return (
    <Stack
      className={scrolling ? "navbar-scroll" : ""}
      sx={{ transition: `all 0.3s ease` }}
      width={1}
      position={`fixed`}
      zIndex={100}
      alignItems={`center`}
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
          <Stack
            color={scrolling ? "black" : `white`}
            fontSize={24}
            width={`fit-content`}
            sx={{ cursor: `pointer` }}
            onClick={() => router.push("/")}
          >
            Prestige
          </Stack>
        </Stack>
        <SearchModal />
        <Stack height={`100%`} direction={`row`} alignItems={`center`} gap={3}>
          <Link href={"/sellWithUs"} style={{ textDecoration: "none" }}>
            <Stack
              height={`100%`}
              color={scrolling ? "black" : `white`}
              sx={
                scrolling
                  ? {
                      cursor: `pointer`,
                      ":hover": {
                        borderBottom: `1px solid black`,
                      },
                    }
                  : {
                      cursor: `pointer`,
                      ":hover": {
                        borderBottom: `1px solid white`,
                      },
                    }
              }
              justifyContent={`center`}
              fontSize={14}
            >
              Sell With Us
            </Stack>
          </Link>

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
        width={1}
        height={46}
        gap={2.7}
        px={7}
      >
        {data?.map((val) => {
          return (
            <Typography
              key={val.brandTitle}
              color={scrolling ? "black" : `white`}
              fontSize={14}
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
