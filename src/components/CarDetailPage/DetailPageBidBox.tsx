import { Stack, Typography, useMediaQuery } from "@mui/material";
import { useEffect, useState } from "react";
import { useCarData, ContextType } from "@/context/DataContext";
import { ToastContainer, toast } from "react-toastify";
import { io } from "socket.io-client";
import { EndTimeCounter } from "../FeaturedCard/EndTimeCounter";
import { NumericFormat } from "react-number-format";
import { BidField } from "../FeaturedCard/BidField";
import { BidInputForDetail } from "./BidInputForDetail";
import { BidsForDetail } from "./BidsForDetail";

export const DetailPageBidBox = ({
  _id,
  startPrice,
  endDate,
}: {
  _id: string | undefined;
  startPrice: number | undefined;
  endDate: string | undefined;
}) => {
  const { item } = useCarData() as ContextType;
  const [userEmail, setUserEmail] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [nextBid, setNextBid] = useState<number>();
  const [newBid, setNewBid] = useState<string | undefined>(undefined);
  const [auctionId, setAuctionId] = useState();
  const [bidOrder, setBidOrder] = useState<string>();
  const failed = () => toast.error("Your order must be next minimum or more");
  const mustLogged = () => toast.error("You must be logged");
  const succesfully = () => toast.success("Your order succesfully placed");

  const isMobile = useMediaQuery("(max-width: 768px)");

  useEffect(() => {
    async function getData() {
      setUserEmail(localStorage.getItem("userEmail"));
    }
    socket.on("connect", () => {
      console.log("connected socket");
    });
    socket.on("chat-message", (data) => {
      setAuctionId(data._id);
      setNewBid(data.bidOrder);
      setNextBid(Number(data.bidOrder) + (Number(data.bidOrder) * 10) / 100);
      setLoading(false);
    });
    getData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const socket = io("https://socketbackend-53dj.onrender.com", {
    transports: ["websocket"],
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
    if (item == false) {
      mustLogged();
    } else if (
      (bidOrder && Number(bidOrder) >= startPrice!) ||
      (nextBid && bidOrder !== ``)
    ) {
      setLoading(true);
      const res = await fetch("http://localhost:4000/api/car", {
        method: "PUT",
        body: JSON.stringify(carInfo),
        headers: { "Content-Type": "application/json" },
      });
      const resJson = await res.json();
      socket.emit("send-bid-message", { bidOrder, _id });
      if (resJson.message) {
        succesfully();
        setBidOrder(``);
      }
    } else {
      failed();
    }
  };

  let other = startPrice! + (startPrice! * 10) / 100;

  return (
    <Stack
      width={isMobile ? "100%" : 751}
      justifyContent={`space-between`}
      gap={1.7}
    >
      <ToastContainer />
      <Stack border={`1px solid #d4d4d5`} borderRadius={1} p={`14px`} gap={2}>
        <BidsForDetail id={_id} />
        <Stack mt={"10px"} justifyContent={`space-between`}>
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
                  fontWeight: "600",
                  fontSize: "16px",
                  color: "black",
                  width: `95px`,
                  backgroundColor: `white`,
                }}
              />
            </Stack>
          </Stack>
        </Stack>
        <form
          style={{ display: "flex", justifyContent: "center" }}
          onSubmit={handleSubmit}
        >
          <BidInputForDetail
            bidOrder={bidOrder}
            setBidOrder={setBidOrder}
            loading={loading}
          />
        </form>
      </Stack>
      <Stack gap={0.4} borderRadius={1} border={`1px solid #d4d4d5`} p={`14px`}>
        <EndTimeCounter endDate={endDate} />
      </Stack>
    </Stack>
  );
};
