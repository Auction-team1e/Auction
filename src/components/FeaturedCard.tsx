"use client";

import { Box, Stack } from "@mui/material";
import { Carousel } from "react-responsive-carousel";

const caars = [
  {
    name: "neo",
    img: "https://imgur.com/RF2a3PB.jpg",
  },
  {
    name: "neo",
    img: "https://imgur.com/RF2a3PB.jpg",
  },
  {
    name: "morpheus",
    img: "https://imgur.com/B0SNpZI.jpg",
  },
  {
    name: "trinity",
    img: "https://imgur.com/KnXHM0K.jpg",
  },
];

export const FeaturedCard = () => {
  return (
    <Stack width={"558.67px"} height={"441.8px"}>
      <Carousel>
        {caars.map((a) => {
          return <Box></Box>;
        })}
      </Carousel>
      <Stack></Stack>
    </Stack>
  );
};
