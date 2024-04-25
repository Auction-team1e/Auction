"use client";

import { BreadCrumbArrow } from "@/svgs";
import { Stack, Typography } from "@mui/material";
import { useEffect, useState } from "react";

type imgType = {
  img: string;
};

export const CarDetail = () => {
  const [image, setImage] = useState<Array<imgType>>([]);

  useEffect(() => {
    async function carImg() {
      try {
        const res = await fetch(`http://localhost:4000/api/cars`);
        const data = await res.json();
        setImage(data);
      } catch (error) {
        console.error("error fetching car data:", error);
      }
    }
    carImg();
  }, []);

  return (
    <Stack width={"1720px"}>
      <Stack
        justifyContent={"flex-start"}
        direction={"row"}
        alignItems={"center"}
        gap={"10px"}
      >
        <Typography fontSize={"14px"} fontWeight={"400"} color={"#717171"}>
          Cars
        </Typography>
        <BreadCrumbArrow />
        <Typography fontSize={"14px"} fontWeight={"400"} color={"#717171"}>
          Bugatti
        </Typography>
        <BreadCrumbArrow />
        <Typography fontSize={"14px"} fontWeight={"400"} color={"#717171"}>
          Chiron
        </Typography>
      </Stack>
      <Stack gap={"4px"} direction={"row"} width={"100%"}>
        <Stack width={"860px"} height={"500px"}>
          {image.map((e, index) => (
            <Stack key={index}>
              <img src={e.img} />
            </Stack>
          ))}
        </Stack>
        <Stack
          bgcolor={"black"}
          flexWrap={"wrap"}
          width={"428px"}
          height={"248px"}
        ></Stack>
      </Stack>
    </Stack>
  );
};
