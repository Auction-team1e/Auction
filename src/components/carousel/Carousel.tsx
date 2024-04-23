"use client";

import { ChevronLeft, ChevronRight } from "@mui/icons-material";
import { Box, Button, Stack } from "@mui/material";
import { useState } from "react";

const images = [
  {
    imgPath:
      "https://images.unsplash.com/photo-1537944434965-cf4679d1a598?auto=format&fit=crop&w=400&h=250&q=60",
  },
  {
    imgPath:
      "https://images.unsplash.com/photo-1538032746644-0212e812a9e7?auto=format&fit=crop&w=400&h=250&q=60",
  },
  {
    imgPath:
      "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=400&h=250",
  },
  {
    imgPath:
      "https://images.unsplash.com/photo-1512341689857-198e7e2f3ca8?auto=format&fit=crop&w=400&h=250&q=60",
  },
];

export const Carousel = () => {
  const [curr, setCurr] = useState(0);
  const prev = () => {
    setCurr((curr) => (curr === 0 ? images.length - 1 : curr - 1));
  };
  const next = () => {
    setCurr((curr) => (curr === images.length - 1 ? 0 : curr + 1));
  };

  return (
    <Stack position="relative">
      <Stack
        position="relative"
        direction="row"
        sx={{ transform: `translateX(-${curr * 100}%)` }}
      >
        {images.map((image, index) => (
          <Stack
            sx={{ overflow: "hidden" }}
            key={index}
            component="img"
            src={image.imgPath}
          />
        ))}
      </Stack>

      <Box
        display="flex"
        justifyContent="space-between"
        position="absolute"
        bottom={0}
      >
        <Button onClick={prev}>
          <ChevronLeft sx={{ color: "black" }} />
        </Button>
        <Button onClick={next}>
          <ChevronRight sx={{ color: "black" }} />
        </Button>
      </Box>
    </Stack>
  );
};
