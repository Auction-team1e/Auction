"use client";
import { Income, Order, Panel, Products } from "@/svgs";
import { ButtonBase, Stack, Typography } from "@mui/material";

const style = {
  buttonBase: {
    paddingLeft: "20px",
    justifyContent: "flex-start",
    height: "50px",
    gap: "20px",
    "&:hover": {
      backgroundColor: "#1C202414",
      transition: "background-color 0.5s ease-in-out",
    },
  },
};

export const SideMenu = () => {
  return (
    <Stack mt={"115px"}>
      <Stack pt={"30px"} bgcolor={"white"} height={"100vh"} width={"230px"}>
        <ButtonBase sx={style.buttonBase}>
          <Panel />
          <Typography>Control Panel</Typography>
        </ButtonBase>
        <ButtonBase sx={style.buttonBase}>
          <Order />
          <Typography>Order</Typography>
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
