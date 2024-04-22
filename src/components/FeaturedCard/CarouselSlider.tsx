"use client";

import { Box, Stack } from "@mui/material";
import Carousel from "react-material-ui-carousel";

const cars = [
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

export const CarouselSlider = () => {
  return (
    <Box width={"560.66px"} height={"343.78px"}>
      <Carousel fullHeightHover={false} NextIcon="next" PrevIcon="prev">
        {cars.map((a) => (
          <Stack
            width={"560px"}
            height={"344px"}
            sx={{
              backgroundImage: `url(${a.img})`,
              backgroundRepeat: "no-repeat",
              objectFit: "cover",
            }}
          ></Stack>
        ))}
      </Carousel>
    </Box>
  );
};
