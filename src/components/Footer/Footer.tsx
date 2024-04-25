"use client";

import { Stack, Typography } from "@mui/material";
import { FooterSelect } from "./FooterSelect";
import {
  currency,
  footerSubtitles,
  footerTitles,
  language,
} from "@/utils/dummyData";
import { useEffect, useState } from "react";

type dataType = { brandTitle: string; img: string };

export const Footer = () => {
  const [data, setData] = useState<Array<dataType>>();

  useEffect(() => {
    async function getData() {
      const res = await fetch("http://localhost:4000/api/brand");
      const brands = await res.json();
      setData(brands);
    }
    getData();
  }, []);
  return (
    <Stack bgcolor={"black"} color={"white"} pt={"48px"} alignItems={`center`}>
      <Stack direction={"row"} width={1673} justifyContent={`space-between`}>
        <Stack direction={"row"}>
          <Stack width={"200px"} height={"700px"} gap={"16px"}>
            <Typography
              fontSize={"12px"}
              fontWeight={600}
              textTransform={"uppercase"}
              color={"#ADADAD"}
            >
              JAMESEDITION
            </Typography>
            {footerTitles.map((a, index) => {
              return (
                <Stack gap={"20px"} key={index}>
                  {a}
                </Stack>
              );
            })}
          </Stack>
          <Stack width={"200px"} height={"700px"} gap={"16px"}>
            <Typography
              fontSize={"12px"}
              fontWeight={600}
              textTransform={"uppercase"}
              color={"#ADADAD"}
            >
              BRANDS
            </Typography>
            {data?.map((b, index) => {
              return (
                <Stack gap={"20px"} key={index}>
                  {b.brandTitle}
                </Stack>
              );
            })}
          </Stack>
          <Stack width={"200px"} height={"700px"} gap={"16px"}>
            <Typography
              fontSize={"12px"}
              fontWeight={600}
              textTransform={"uppercase"}
              color={"#ADADAD"}
            >
              FOR BUSINESS
            </Typography>
            {footerSubtitles.map((a, index) => {
              return (
                <Stack gap={"20px"} key={index}>
                  {a}
                </Stack>
              );
            })}
          </Stack>
        </Stack>
        <Stack width={"200px"} gap={"16px"}>
          <Typography
            fontSize={"12px"}
            fontWeight={600}
            textTransform={"uppercase"}
            color={"#ADADAD"}
          >
            Settings
          </Typography>
          <Stack>
            <FooterSelect data={language} />
            <FooterSelect data={currency} />
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
};
