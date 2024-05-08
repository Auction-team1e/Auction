"use client";

import { Stack, Typography } from "@mui/material";
import { NumericFormat } from "react-number-format";

export const BidField = ({
  id,
  auctionId,
  bid,
  dataPrice,
  label,
}: {
  id: number;
  auctionId: undefined;
  bid: string | number;
  dataPrice: number;
  label: string;
}) => {
  return (
    <Stack direction={"row"} gap={"5px"} alignItems={"center"}>
      <Typography noWrap>{label}</Typography>
      <NumericFormat
        value={id == auctionId ? bid : dataPrice}
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
  );
};
