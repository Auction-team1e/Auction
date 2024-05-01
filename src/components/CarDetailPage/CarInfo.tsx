"use client";
import { useEffect, useState } from "react";

import { Stack, Typography } from "@mui/material";

const customStyle = {
  fontSize: "26px",
  color: "#151515",
  fontWeight: 400,
  lineHeight: "44px",
};
const custStySec = {
  fontSize: "16px",
  color: "#151515",
  fontWeight: 400,
  lineHeight: "24px",
};
// const moreOrLess = {
//   WebkitLineClamp: 2,
//   WebkitBoxOrient: "vertical",
//   overflow: "hidden",
//   display: "-webkit-box",
// };
type carInfo = {
  brand: string;
  carModel: string;
  carDetails: string[];
  description: string;
  startPrice: number;
};

export const CarInfo = () => {
  const [info, setInfo] = useState<carInfo[]>([]);
  console.log(info);
  useEffect(() => {
    async function fetchData() {
      const res = await fetch(`http://localhost:4000/api/car`);
      const data = await res.json();
      setInfo(data);
    }
    fetchData();
  }, []);

  return (
    <Stack width={"1720px"}>
      {info.length > 0 && (
        <Stack borderBottom={"1px solid #E0E0E0"} gap={"8px"}>
          <Stack direction={"row"} justifyContent={"space-between"}>
            <Typography sx={customStyle}>{info[0].brand}</Typography>
            <Typography sx={customStyle}>{"$" + info[0].startPrice}</Typography>
          </Stack>
          <Stack mb={"24px"}>
            <Typography
              fontSize={"14px"}
              fontWeight={"400"}
              lineHeight={"22px"}
            >
              {info[0].carDetails[1]}
            </Typography>
          </Stack>
        </Stack>
      )}
      <Stack mt={"25px"}>
        <Typography fontSize={"20px"} fontWeight={"400"} lineHeight={"32px"}>
          About This Car
        </Typography>
        <Stack alignItems={"center"} borderBottom={"1px solid #E0E0E0"}>
          <Stack>{info[0]?.description}</Stack>
        </Stack>
      </Stack>
      <Stack borderBottom={"1px solid #E0E0E0"} gap={"16px"} mt={"25px"}>
        <Typography sx={customStyle}>Car Details</Typography>
        <Stack mb={"25px"} gap={"16px"}>
          <Typography style={{ color: "#717171" }} sx={custStySec}>
            Year {info[0]?.carDetails[0]}
          </Typography>
          <Typography style={{ color: "#717171" }} sx={custStySec}>
            Location
          </Typography>
          <Typography style={{ color: "#717171" }} sx={custStySec}>
            Address
          </Typography>
          <Typography style={{ color: "#717171" }} sx={custStySec}>
            Mileage
          </Typography>
          <Typography style={{ color: "#717171" }} sx={custStySec}>
            Engine
          </Typography>
          <Typography style={{ color: "#717171" }} sx={custStySec}>
            Gearbox
          </Typography>
          <Typography style={{ color: "#717171" }} sx={custStySec}>
            Car type
          </Typography>
          <Typography style={{ color: "#717171" }} sx={custStySec}>
            Drive
          </Typography>
          <Typography style={{ color: "#717171" }} sx={custStySec}>
            Drive train
          </Typography>
          <Typography style={{ color: "#717171" }} sx={custStySec}>
            Fuel type
          </Typography>
          <Typography style={{ color: "#717171" }} sx={custStySec}>
            Power
          </Typography>
          <Typography style={{ color: "#717171" }} sx={custStySec}>
            Condition
          </Typography>
          <Typography style={{ color: "#717171" }} sx={custStySec}>
            Color
          </Typography>
          <Typography style={{ color: "#717171" }} sx={custStySec}>
            Interior color
          </Typography>
        </Stack>
      </Stack>
    </Stack>
  );
};
