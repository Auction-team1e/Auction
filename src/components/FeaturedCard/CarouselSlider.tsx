"use client";

import { Box, Stack } from "@mui/material";
import Carousel from "react-material-ui-carousel";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";

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
      <Carousel
        NextIcon={<NavigateNextIcon />}
        PrevIcon={<NavigateBeforeIcon />}
        autoPlay={false}
        indicatorContainerProps={{
          style: { position: "absolute", bottom: 0, zIndex: 100 },
        }}
      >
        {cars.map((a, index) => (
          <Stack
            width={"560px"}
            height={"344px"}
            sx={{
              backgroundImage: `url(${a.img})`,
              backgroundRepeat: "no-repeat",
              objectFit: "cover",
            }}
            key={index}
          ></Stack>
        ))}
      </Carousel>
    </Box>
  );
};
