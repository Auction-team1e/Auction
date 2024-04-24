"use client";
import React, { useState } from "react";
import { ArrowSmall, ShortArrow, ShortArrowRight } from "@/svgs";
import { ButtonBase, Stack, Typography } from "@mui/material";
import { CarData } from "@/utils/dummyData";

export const PopSearches = () => {
  const [startIdx, setStartIdx] = useState(0);

  const prev = () => {
    setStartIdx((prevStartIdx) =>
      prevStartIdx === 0 ? CarData.length - 6 : prevStartIdx - 6
    );
  };

  const next = () => {
    setStartIdx((prevStartIdx) =>
      prevStartIdx + 6 >= CarData.length ? 0 : prevStartIdx + 6
    );
  };

  return (
    <Stack alignItems={"center"} justifyContent={"center"} width={"1730px"}>
      <Stack marginBottom={"30px"} gap={"1400px"} direction={"row"}>
        <Typography fontSize={"27px"} fontWeight={400} lineHeight={"38px"}>
          Popular Searches
        </Typography>
        <Stack gap={"20px"} direction={"row"}>
          <ButtonBase
            sx={{ p: "8px", border: "#E0E0E0 1px solid", borderRadius: "100%" }}
            onClick={prev}
          >
            <ShortArrow />
          </ButtonBase>
          <ButtonBase
            sx={{ p: "8px", border: "#E0E0E0 1px solid", borderRadius: "100%" }}
            onClick={next}
          >
            <ShortArrowRight />
          </ButtonBase>
        </Stack>
      </Stack>
      <Stack
        overflow={"hidden"}
        width={"1730px"}
        direction={"row"}
        height={"280px"}
      >
        <Stack
          justifyContent={"center"}
          width={"full"}
          direction={"column"}
          gap={"20px"}
          flexWrap={"wrap"}
        >
          {CarData.slice(startIdx, startIdx + 6).map((car, index) => (
            <Stack
              direction={"row"}
              key={index}
              border={"#E0E0E0 solid 1px"}
              width={"560px"}
              height={"128px"}
              sx={{
                transition: "border-color 300ms linear",
                "&:hover": {
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
