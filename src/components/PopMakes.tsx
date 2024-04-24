"use client";
import { Stack, Typography, ButtonBase } from "@mui/material";
import { useEffect, useState } from "react";
type ObjType = {
  name: string;
  img: string;
};

export const PopMakes = () => {
  const [brand, setBrand] = useState<Array<ObjType>>();

  useEffect(() => {
    async function fetchCarData() {
      try {
        const res = await fetch(`http://localhost:4000/api/brand`);
        const data = await res.json();
        console.log(data);
        setBrand(data);
      } catch (error) {
        console.error("error fetching car data:", error);
      }
    }
    fetchCarData();
  }, []);

  return (
    <Stack alignItems={"center"} justifyContent={"center"} width={"1730px"}>
      <Stack marginBottom={"30px"} gap={"1470px"} direction={"row"}>
        <Typography fontSize={"27px"} fontWeight={400} lineHeight={"38px"}>
          Popular Makes
        </Typography>
        <ButtonBase sx={{ width: "60px", height: "24px", alignSelf: "center" }}>
          <Typography fontSize={"16px"} fontWeight={500} lineHeight={"24px"}>
            View all
          </Typography>
        </ButtonBase>
      </Stack>
      <Stack
        justifyContent={"space-between"}
        gap={"20px"}
        direction="row"
        flexWrap={"wrap"}
      >
        {brand?.map((e: { img: string }, index: number) => (
          <Stack
            key={index}
            width={"195px"}
            height={"148px"}
            sx={{
              border: "#E0E0E0 1px solid",
              transition: "border-color 300ms linear",
              "&:hover": {
                border: "black 1px solid",
              },
              "& img": {
                width: "100%",
                height: "100%",
                objectFit: "cover",
              },
            }}
          >
            <img src={e.img} alt={`Car ${index}`} />
          </Stack>
        ))}
      </Stack>
    </Stack>
  );
};
