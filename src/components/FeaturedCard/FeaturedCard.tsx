"use client";
import {
  Button,
  CircularProgress,
  Divider,
  Input,
  Stack,
  Typography,
} from "@mui/material";
import { CarouselSlider } from "./CarouselSlider";
import { EndTimeCounter } from "./EndTimeCounter";
import { io } from "socket.io-client";
import { useEffect, useState } from "react";
import { BidField } from "./BidField";
import { NumericFormat } from "react-number-format";
import { Bids } from "./Bids";
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
  const [newBid, setNewBid] = useState<string>(``);
  const [auctionId, setAuctionId] = useState();
  const [userEmail, setUserEmail] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [nextBid, setNextBid] = useState<number>();
  useEffect(() => {
    async function getData() {
      setUserEmail(localStorage.getItem("userEmail"));
    }
    getData();
  }, []);
  const socket = io("http://localhost:5000", {
    transports: ["websocket"],
  });
  socket.on("connect", () => {
    console.log("connected socket");
  });
  socket.on("chat-message", (data) => {
    setAuctionId(data._id);
    setNewBid(data.bidOrder);
    setNextBid(Number(data.bidOrder) + (Number(data.bidOrder) * 10) / 100);
  });
  const handleSubmit = async (e: any) => {
    e.preventDefault();
    var today = new Date();
    today.setSeconds(0, 0);
    const options = {
      timeZone: "Asia/Ulaanbaatar",
      hour12: false,
    };
    const presentTime = today.toLocaleString("en-US", options);
    const carInfo = {
      id: _id,
      startPrice: bidOrder,
      email: userEmail,
      bidCreatedAt: presentTime,
    };
    setLoading(true);
    await fetch("http://localhost:4000/api/car", {
      method: "PUT",
      body: JSON.stringify(carInfo),
      headers: { "Content-Type": "application/json" },
    });
    socket.emit("send-bid-message", { bidOrder, _id });
    setLoading(false);
    setBidOrder(``);
    const loggedUserEmail = localStorage.getItem("userEmail");
    setUserEmail(loggedUserEmail);
  };
  let other = startPrice + (startPrice * 10) / 100;
  return (
    <Stack border={"1px solid #e0e0e0"}>
      <CarouselSlider img={img} _id={_id} brand={brand} />
      <Stack px={3} py={3} gap={"10px"}>
        <Stack direction={"row"} justifyContent={"space-between"} mt={"10px"}>
          <Stack justifyContent={"center"}>
            <Typography fontWeight={700}>{carModel}</Typography>
            <Typography color={"#606060"}>{carDetail[1]}</Typography>
          </Stack>
          <Stack gap={"3px"} justifyContent={"center"} direction={"row"}>
            <Input
              value={bidOrder || ``}
              onChange={(e) => setBidOrder(e.target.value)}
              type="number"
              placeholder="Max bid(usd)"
              disableUnderline
              sx={{
                border: "0.1px solid grey",
                borderRadius: "5px",
                px: "10px",
                height: "40px",
              }}
            ></Input>
            {loading ? (
              <CircularProgress sx={{ color: `#006C75` }} />
            ) : (
              <Button
                onClick={handleSubmit}
                sx={{
                  backgroundColor: "#006C75",
                  color: "white",
                  height: "40px",
                  width: 90,
                  fontSize: 12,
                }}
              >
                Place Bid
              </Button>
            )}
          </Stack>
        </Stack>
        <Stack direction={"row"} mt={"10px"} justifyContent={`space-between`}>
          <Stack gap={0.4}>
            <BidField
              label={"Current bid"}
              id={_id}
              auctionId={auctionId}
              bid={newBid}
              dataPrice={startPrice}
            />
            <Stack direction={"row"} gap={"5px"} alignItems={"center"}>
              <Typography noWrap>Next minimum bid</Typography>
              <NumericFormat
                value={_id == auctionId ? nextBid : other}
                thousandSeparator=","
                suffix="$"
                disabled
                style={{
                  border: "none",
                  backgroundColor: "white",
                  fontWeight: "600",
                  fontSize: "16px",
                  color: "black",
                  width: `120px`,
                }}
              />
            </Stack>
          </Stack>
          <Divider sx={{ bgcolor: `gray` }} orientation="vertical" flexItem />
          <Stack gap={0.4}>
            <EndTimeCounter endDate={endDate} />
            <Bids id={_id} />
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
};
