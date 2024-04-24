import { ChevronLeft, ChevronRight } from "@mui/icons-material";
import { Box, Button, Stack } from "@mui/material";
import { useState } from "react";

const images = [
  {
    label: "San Francisco – Oakland Bay Bridge, United States",
    imgPath:
      "https://images.unsplash.com/photo-1537944434965-cf4679d1a598?auto=format&fit=crop&w=400&h=250&q=60",
  },
  {
    label: "Bird",
    imgPath:
      "https://images.unsplash.com/photo-1538032746644-0212e812a9e7?auto=format&fit=crop&w=400&h=250&q=60",
  },
  {
    label: "Bali, Indonesia",
    imgPath:
      "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=400&h=250",
  },
  {
    label: "Goč, Serbia",
    imgPath:
      "https://images.unsplash.com/photo-1512341689857-198e7e2f3ca8?auto=format&fit=crop&w=400&h=250&q=60",
  },
];

export const Carousel = () => {
  const [curr, setCurr] = useState(0);
  const prev = () => {
    setCurr((curr) => curr == images.length-1:curr+1);
  };

  return (
    <Stack position={"relative"} overflow={"hidden"}>
      <Stack>
        {images.map((image, index) => (
          <img key={index} src={image.imgPath} alt={image.label} />
        ))}
      </Stack>
      <Box display={"flex"} position={"absolute"}>
        <Button>
          <ChevronLeft sx={{ color: "black" }} />
        </Button>
        <Button>
          <ChevronRight sx={{ color: "black" }} />
        </Button>
      </Box>
    </Stack>
  );
};
