"use client";
import { Box, Stack, IconButton } from "@mui/material";
import { Carousel } from "react-responsive-carousel";
import { ChevronLeft, ChevronRight } from "@mui/icons-material";
import "react-responsive-carousel/lib/styles/carousel.min.css";

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

export const CarouselComp = () => {
  return (
    <Stack style={{ height: "960px" }}>
      <Carousel
        autoPlay
        interval={2000}
        infiniteLoop
        showThumbs={false}
        showStatus={false}
        showIndicators={true}
        transitionTime={500}
        renderArrowPrev={(clickHandler, hasPrev) =>
          hasPrev && (
            <IconButton
              onClick={clickHandler}
              sx={{
                position: "absolute",
                top: "50%",
                left: 10,
                zIndex: 2,
              }}
            >
              <ChevronLeft style={{ color: "white" }} />
            </IconButton>
          )
        }
        renderArrowNext={(clickHandler, hasNext) =>
          hasNext && (
            <IconButton
              onClick={clickHandler}
              sx={{
                position: "absolute",
                top: "50%",
                right: 10,
                zIndex: 2,
              }}
            >
              <ChevronRight style={{ color: "white" }} />
            </IconButton>
          )
        }
      >
        {images.map((image, index) => (
          <Box sx={{ height: "960px" }} key={index}>
            <img
              style={{ height: "500px", width: "100%" }}
              src={image.imgPath}
              alt={`Slide ${index}`}
            />
          </Box>
        ))}
      </Carousel>
    </Stack>
  );
};
