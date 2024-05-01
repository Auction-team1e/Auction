"use client";
import { useRef, useEffect, useState } from "react";

import { Stack, Typography, ButtonBase } from "@mui/material";

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
const moreOrLess = {
  WebkitLineClamp: 2,
  WebkitBoxOrient: "vertical",
  overflow: "hidden",
  display: "-webkit-box",
};
type carInfo = {
  _id: string;
  carModel: string;
  brand: string;
  startPrice: number;
  description: string;
  carDetails: string[];
  img: string[];
  endTime: string;
};

export const CarInfo = ({ info }: { info: carInfo | undefined }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [showReadMore, setShowReadMore] = useState(false);
  console.log("info", info);

  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (ref.current) {
      setShowReadMore(ref.current.scrollHeight > ref.current.clientHeight);
    }
  }, [info]);
  return (
    <Stack width={"1720px"}>
      <Stack borderBottom={"1px solid #E0E0E0"} gap={"8px"}>
        <Stack direction={"row"} justifyContent={"space-between"}>
          <Typography sx={customStyle}>{info?.brand}</Typography>
          <Typography sx={customStyle}>{"$" + info?.startPrice}</Typography>
        </Stack>
        <Stack mb={"24px"}>
          <Typography fontSize={"14px"} fontWeight={"400"} lineHeight={"22px"}>
            {info?.carDetails}
          </Typography>
        </Stack>
      </Stack>

      <Stack mt={"25px"}>
        <Typography fontSize={"20px"} fontWeight={"400"} lineHeight={"32px"}>
          About This Car
        </Typography>
        <Stack alignItems={"center"} borderBottom={"1px solid #E0E0E0"}>
          <Stack
            sx={{ ...custStySec, ...(isOpen ? null : moreOrLess) }}
            ref={ref}
          >
            {info?.description}
          </Stack>
          <Stack width={"100px"} mb={"25px"}>
            {showReadMore && (
              <ButtonBase
                sx={{ height: "30px", borderRadius: "50px" }}
                onClick={() => setIsOpen(!isOpen)}
              >
                {isOpen ? "Read Less" : "Read More ..."}
              </ButtonBase>
            )}
          </Stack>
        </Stack>
      </Stack>
      <Stack borderBottom={"1px solid #E0E0E0"} gap={"16px"} mt={"25px"}>
        <Typography sx={customStyle}>Car Details</Typography>
        <Stack mb={"25px"} gap={"16px"}>
          <Typography style={{ color: "#717171" }} sx={custStySec}>
            Year {info?.carDetails}
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
