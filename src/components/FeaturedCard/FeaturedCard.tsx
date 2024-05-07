"use client";

import { Button, Input, Stack, Typography } from "@mui/material";
import { CarouselSlider } from "./CarouselSlider";
import { NumericFormat } from "react-number-format";
import { EndTimeCounter } from "./EndTimeCounter";
import { io } from "socket.io-client";
import { useState } from "react";

export const FeaturedCard = ({
  _id,
  carModel,
  startPrice,
  img,
  carDetail,
  endDate,
  brand,
}: {
  _id: number;
  carModel: string;
  startPrice: number;
  img: string[];
  carDetail: string[];
  endDate: string;
  brand: string;
}) => {
  const [bidOrder, setBidOrder] = useState<string>();
  const socket = io("http://localhost:5000", {
    transports: ["websocket"],
  });

  socket.on("connect", () => {
    console.log("connected socket");
  });

  socket.on("chat-message", (data) => {
    console.log("🚀 ~ socket.on ~ data:", data);
  });

  return (
    <Stack border={"1px solid #e0e0e0"}>
      <CarouselSlider img={img} _id={_id} brand={brand} />
      <Stack px={3} py={3} gap={"10px"}>
        <Stack direction={"row"} justifyContent={"space-between"} mt={"10px"}>
          <Stack justifyContent={"center"}>
            <Typography fontSize={"16px"} fontWeight={700}>
              {carModel}
            </Typography>
            <Typography color={"#606060"}>{carDetail[1]}</Typography>
          </Stack>
          <Stack gap={"3px"} justifyContent={"center"} direction={"row"}>
            <Input
              onChange={(e) => setBidOrder(e.target.value)}
              type="number"
              placeholder="Max bid(usd)"
              disableUnderline
              sx={{
                border: "0.1px solid grey",
                borderRadius: "5px",
                px: "10px",
                height: "50px",
              }}
            ></Input>
            <Button
              onClick={() => {
                socket.emit("send-bid-message", bidOrder);
              }}
              sx={{
                backgroundColor: "#006C75",
                color: "white",
                height: "50px",
              }}
            >
              Bid
            </Button>
          </Stack>
        </Stack>
        <Stack direction={"row"} mt={"10px"}>
          <Stack direction={"row"} gap={"5px"} alignItems={"center"}>
            <Typography noWrap>Opening bid</Typography>
            <NumericFormat
              value={`${startPrice}`}
              thousandSeparator=","
              suffix="$"
              disabled
              style={{
                border: "none",
                backgroundColor: "white",
                fontWeight: "600",
                fontSize: "16px",
                color: "black",
                width: `90px`,
              }}
            />
          </Stack>
          <EndTimeCounter endDate={endDate} />
        </Stack>
      </Stack>
    </Stack>
  );
};
