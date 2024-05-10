"use client";

import { Search } from "@/svgs";
import { ButtonBase, Stack, TextField } from "@mui/material";
import { Typography } from "@mui/material";
import * as React from "react";

const textStyle = {
  p: "20px",
  fontsize: "14px",
  fontweight: "400",
  lineheight: "16px",
  letterspacing: "-0.3px",
  color: "#3F4145",
};

export const OrderTabs = () => {
  return (
    <Stack
      width={"1180px"}
      direction={"row"}
      justifyContent={"space-between"}
      alignItems={"center"}
      borderBottom={"1px solid #ECEDF0"}
      mb={"35px"}
    >
      <Stack direction={"row"}>
        <ButtonBase>
          <Typography sx={textStyle}>All</Typography>
        </ButtonBase>
        <ButtonBase>
          <Typography sx={textStyle}>Auction</Typography>
        </ButtonBase>
        <ButtonBase>
          <Typography sx={textStyle}>Sell</Typography>
        </ButtonBase>
        <ButtonBase>
          <Typography sx={textStyle}>Fail</Typography>
        </ButtonBase>
      </Stack>
      <Stack
        direction="row"
        alignItems="center"
        bgcolor="white"
        width={300}
        height={38}
        color="#717171"
        gap={1}
        borderRadius="8px"
        border="1px solid #ECEDF0"
        sx={{ cursor: "text" }}
      >
        <Stack ml="10px">
          <Search />
        </Stack>
        <TextField
          id="email-phone-input"
          variant="standard"
          placeholder="Email, Phone number"
          InputProps={{
            disableUnderline: true,
            sx: { fontSize: "14px", fontWeight: 400, lineHeight: "20px" },
          }}
        />
      </Stack>
    </Stack>
  );
};
