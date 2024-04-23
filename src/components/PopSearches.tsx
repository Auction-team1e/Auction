"use client";
import { ArrowSmall, ShortArrow, ShortArrowRight } from "@/svgs";
import { ButtonBase, Stack, Typography } from "@mui/material";
import { CarData } from "@/utils/dummyData";

export const PopSearches = () => {
  const cardsPerRow = 3;
  const cardWidth = 560;
  const totalWidth = 50 + cardsPerRow * cardWidth;

  return (
    <Stack alignItems={"center"} justifyContent={"center"} width={"1730px"}>
      <Stack marginBottom={"30px"} gap={"1400px"} direction={"row"}>
        <Typography fontSize={"27px"} fontWeight={400} lineHeight={"38px"}>
          Popular Searches
        </Typography>
        <Stack gap={"20px"} direction={"row"}>
          <ButtonBase
            sx={{ p: "8px", border: "#E0E0E0 1px solid", borderRadius: "100%" }}
          >
            <ShortArrow />
          </ButtonBase>
          <ButtonBase
            sx={{ p: "8px", border: "#E0E0E0 1px solid", borderRadius: "100%" }}
          >
            <ShortArrowRight />
          </ButtonBase>
        </Stack>
      </Stack>
      <Stack direction={"row"} height={"280px"} overflow={"hidden"}>
        <Stack
          justifyContent={"center"}
          width={`${totalWidth}px`}
          direction={"column"}
          flexWrap={"wrap"}
          gap={"20px"}
        >
          {CarData.map((car, index) => (
            <Stack
              direction={"row"}
              key={index}
              border={"#E0E0E0 solid 1px"}
              width={`${cardWidth}px`}
              height={"128px"}
              sx={{
                transition: "border-color 300ms linear",
                "&: hover": {
                  border: "black 1px solid",
                },
              }}
            >
              <Stack
                sx={{
                  "& img": {
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                  },
                }}
                width={"128px"}
                height={"126px"}
              >
                <img src={car.imgPath[0]} alt={car.carName} />
              </Stack>
              <Stack gap={"50px"} p={"15px"}>
                <Typography>{car.carName}</Typography>
                <Stack gap={"305px"} direction={"row"} alignItems={"center"}>
                  <Typography>{car.listings}</Typography>
                  <ButtonBase>
                    <ArrowSmall />
                  </ButtonBase>
                </Stack>
              </Stack>
            </Stack>
          ))}
        </Stack>
      </Stack>
    </Stack>
  );
};
