"use client";
import { ArrowBlack } from "@/svgs/ArrowBlack";
import { ButtonBase, Stack, Typography } from "@mui/material";
import { useEffect, useState } from "react";

interface infoType {
  brandTitle: string;
  firstName: string;
  email: string;
}

const textStyle = {
  fontSize: "24px",
  fontWeight: "700",
  lineHeight: "13px",
};

const textStyleSec = {
  fontSize: "14px",
  fontWeight: "400",
  lineHeight: "20px",
};

const cusStyle = {
  fontSize: "14px",
  fontWeight: "600",
  lineHeight: "16px",
};

const style = {
  justifyContent: "space-between",
  flexDirection: "row",
  padding: "20px",
  borderBottom: "1px solid #D6D8DB",
  alignItems: "center",
};

export const OrderBoard = () => {
  const [info, setInfo] = useState<infoType[]>([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch(`http://localhost:4000/api/user`);
        const data = await res.json();
        console.log("info", data);
        setInfo(data);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    }
    fetchData();
  }, []);

  return (
    <Stack mb={"50px"}>
      <Stack
        borderRadius={"12px"}
        p={"16px 20px"}
        bgcolor={"white"}
        width={"1175px"}
        border={"1px solid #ECEDF0"}
      >
        <Stack justifyContent={"center"} mb={"20px"} height={"60px"}>
          <Typography sx={textStyle}>Auction</Typography>
        </Stack>
        <Stack bgcolor={"#ECEDF0"} height={"44px"} sx={style}>
          <Typography width={"300px"}>Order ID number</Typography>
          <Typography width={"300px"}>Costumer</Typography>
          <Typography width={"150px"}>Time</Typography>
          <Typography width={"150px"}>Price</Typography>
          <Typography width={"300px"}>Status</Typography>
          <Typography width={"100px"}>More</Typography>
        </Stack>
        <Stack>
          {info.map((e, index) => (
            <Stack key={index} height={"72px"} sx={style}>
              <Typography width={"300px"} sx={textStyleSec}>
                {index + 1}
              </Typography>
              <Stack width={"300px"}>
                <Typography sx={cusStyle}>{e.firstName}</Typography>
                <Typography sx={textStyleSec}>{e.email}</Typography>
              </Stack>

              <Typography width={"150px"} sx={textStyleSec}>
                {"$"}
              </Typography>
              <Typography width={"150px"} sx={textStyleSec}>
                {"$"}
              </Typography>
              <Stack alignItems={"start"} width={"300px"}>
                <Stack>
                  <Typography
                    sx={{
                      padding: "4px 10px",
                      alignSelf: "center",
                      borderRadius: "50px",
                      bgcolor: "#C1E6CF",
                    }}
                  >
                    Sell
                  </Typography>
                </Stack>
              </Stack>

              <Stack alignItems={"start"} width={"100px"}>
                <ButtonBase sx={{ borderRadius: "30px" }}>
                  <ArrowBlack />
                </ButtonBase>
              </Stack>
            </Stack>
          ))}
        </Stack>
      </Stack>
    </Stack>
  );
};
