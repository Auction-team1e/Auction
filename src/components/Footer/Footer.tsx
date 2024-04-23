"use client";

import { Stack, Typography } from "@mui/material";
import { FooterSelect } from "./FooterSelect";
import { currency, footer, language } from "@/utils/dummyData";

export const Footer = () => {
  return (
    <Stack
      px={"96px"}
      direction={"row"}
      bgcolor={"black"}
      color={"white"}
      pt={"48px"}
      justifyContent={"space-between"}
    >
      <Stack direction={"row"}>
        {footer.map((a, index) => {
          return (
            <Stack width={"200px"} height={"700px"} key={index} gap={"16px"}>
              <Typography
                fontSize={"12px"}
                fontWeight={600}
                textTransform={"uppercase"}
                color={"#ADADAD"}
              >
                {a.title}
              </Typography>
              <Stack gap={"20px"}>
                {a.subTitles.map((b) => {
                  return (
                    <Typography fontWeight={400} fontSize={"14px"}>
                      {b}
                    </Typography>
                  );
                })}
              </Stack>
            </Stack>
          );
        })}
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
  );
};
