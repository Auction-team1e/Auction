"use client";
import { Stack, Typography } from "@mui/material";
import dayjs from "dayjs";
import { useEffect, useState } from "react";

export const EndTimeCounter = ({ endDate }: { endDate: string }) => {
  const [day, setDay] = useState(0);
  const [hour, setHour] = useState(0);
  const [minute, setMinute] = useState(0);
  const [second, setSecond] = useState(0);
  const [end, setEnd] = useState(true);

  const deadLine = dayjs(endDate);

  useEffect(() => {
    const counting = setInterval(() => {
      let now = new Date().getTime();
      const duration = deadLine.diff(now);
      let days = Math.floor(duration / (1000 * 60 * 60 * 24));
      let hours = Math.floor(
        (duration % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      let minutes = Math.floor((duration % (1000 * 60 * 60)) / (1000 * 60));
      let seconds = Math.floor((duration % (1000 * 60)) / 1000);
      setSecond(seconds);
      setDay(days);
      setHour(hours);
      setMinute(minutes);
      duration > 0 ? setEnd(true) : setEnd(false);
    }, 1000);

    if (second < 0) {
      clearInterval(counting);
    }
  }, []);

  return (
    <Stack direction={"row"} gap={"5px"}>
      <Typography>Auction Ends</Typography>
      <Typography fontWeight={600}>
        {end == true
          ? day > 0
            ? `${day}d ${hour}h ${minute}m`
            : `${hour}h ${minute}m`
          : "Sold"}
      </Typography>
    </Stack>
  );
};
