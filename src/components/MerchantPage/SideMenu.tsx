"use client";

import { Income } from "@/svgs/Income";
import { Order } from "@/svgs/Order";
import { Panel } from "@/svgs/Panel";
import { Products } from "@/svgs/Products";
import { ButtonBase, Stack, Typography } from "@mui/material";

const style = {
  buttonBase: {
    paddingLeft: "20px",
    justifyContent: "flex-start",
    borderRadius: "5px",
    height: "50px",
    gap: "20px",
    "&:hover": {
      backgroundColor: "#1C202414",
      transition: "background-color 0.5s ease-in-out",
    },
  },
};

const textStyle = {
  fontsize: "16px",
  fontweight: "400",
  lineheight: "13px",
};

export const SideMenu = () => {
  return (
    <Stack mt={"115px"}>
      <Stack pt={"30px"} bgcolor={"white"} height={"100%"} width={"267px"}>
        <ButtonBase sx={style.buttonBase}>
          <Panel />
          <Typography sx={textStyle}>Control Panel</Typography>
        </ButtonBase>
        <ButtonBase sx={style.buttonBase}>
          <Order />
          <Typography>Auction</Typography>
        </ButtonBase>
        <ButtonBase sx={style.buttonBase}>
          <Income />
          <Typography>Income</Typography>
        </ButtonBase>
        <ButtonBase sx={style.buttonBase}>
          <Products />
          <Typography>Cars</Typography>
        </ButtonBase>
      </Stack>
    </Stack>
  );
};
