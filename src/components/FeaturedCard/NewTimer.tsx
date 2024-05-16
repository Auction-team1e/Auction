import { Stack, Typography } from "@mui/material";
import { useState } from "react";
import { useTimer } from "react-timer-hook";

export default function NewTimer({
  expiryTimestampq,
}: {
  expiryTimestampq: Date;
}) {
  const expiryTimestamp = new Date(expiryTimestampq);

  const { seconds, minutes, hours, days } = useTimer({
    expiryTimestamp,
    onExpire: () => setEnd(false),
  });
  const [end, setEnd] = useState(true);
  return (
    <Stack direction={"row"} gap={"5px"}>
      <Typography>Timed auction :</Typography>
      <Typography fontWeight={600}>
        {end === true
          ? days > 0
            ? `${days}d ${hours}h ${minutes}m ${seconds}s`
            : hours > 0
            ? `${hours}h ${minutes}m ${seconds}s`
            : minutes > 0
            ? `${minutes}m ${seconds}s`
            : `${seconds}s`
          : "Sold"}
      </Typography>
    </Stack>
  );
}
