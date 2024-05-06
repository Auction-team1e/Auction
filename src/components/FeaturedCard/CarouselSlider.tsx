"use client";

import { Box, Stack } from "@mui/material";
import Carousel from "react-material-ui-carousel";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import { useRouter } from "next/navigation";

export const CarouselSlider = ({
  img,
  _id,
}: {
  img: string[];
  _id: number;
}) => {
  const router = useRouter();
  return (
    <Box>
      <Carousel
        NextIcon={<NavigateNextIcon />}
        PrevIcon={<NavigateBeforeIcon />}
        autoPlay={false}
        indicatorContainerProps={{
          style: {
            position: "absolute",
            bottom: 10,
            zIndex: 100,
          },
        }}
      >
        {img.map((a, index) => (
          <Stack
            width={"560px"}
            height={"344px"}
            sx={{
              backgroundImage: `url(${a})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
            key={index}
            onClick={() => router.push(`cars/${_id}`)}
          ></Stack>
        ))}
      </Carousel>
    </Box>
  );
};
