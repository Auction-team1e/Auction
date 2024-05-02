"use client";
import { Stack, Typography } from "@mui/material";
import { useEffect, useState } from "react";

interface CarData {
  brandTitle: string;
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

const style = {
  justifyContent: "space-between",
  flexDirection: "row",
  padding: "20px",
  borderBottom: "1px solid #3C3939",
  alignItems: "center",
};

export const CarBoard = () => {
  const [tableCell, setTableCell] = useState<CarData[]>([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch(`http://localhost:4000/api/brand`);
        const data: CarData[] = await res.json();
        setTableCell(data);
      } catch (error) {
        console.error("Error fetching car data:", error);
      }
    }
    fetchData();
  }, []);

  return (
    <Stack mb={"50px"}>
      <Stack
        p={"16px 20px"}
        bgcolor={"white"}
        width={"1175px"}
        borderRadius={"12px"}
      >
        <Stack justifyContent={"center"} mb={"20px"} height={"60px"}>
          <Typography sx={textStyle}>Cars</Typography>
        </Stack>
        <Stack bgcolor={"#ECEDF0"} height={"44px"} sx={style}>
          <Typography width={"100px"}>№</Typography>
          <Typography width={"500px"}>Cars</Typography>
          <Typography width={"400px"}>Auction</Typography>
          <Typography width={"200px"}>Price</Typography>
        </Stack>
        <Stack>
          {tableCell.map((e, index) => (
            <Stack key={index} height={"72px"} sx={style}>
              <Typography width={"100px"} sx={textStyleSec}>
                {index + 1}
              </Typography>
              <Typography width={"500px"} sx={textStyleSec}>
                {e.brandTitle}
              </Typography>
              <Typography width={"400px"} sx={textStyleSec}>
                {"$"}
              </Typography>
              <Typography width={"200px"} sx={textStyleSec}>
                {"$"}
              </Typography>
            </Stack>
          ))}
        </Stack>
      </Stack>
    </Stack>
  );
};
