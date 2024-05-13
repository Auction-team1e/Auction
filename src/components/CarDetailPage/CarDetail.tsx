"use client";
import { BreadCrumbArrow, Camera } from "@/svgs";
import { Box, ButtonBase, CardMedia, Stack, Typography } from "@mui/material";
import Link from "next/link";
import { useState } from "react";
type dataType = {
  brand: string;
  carModel: string;
  startPrice: number;
  description: string;
  carDetails: string[];
  img: string[];
  endTime: string;
  _id: string;
};
// const style = {
//   borderRadius: "100px",
//   p: "9px 24px",
//   gap: "10px",
//   bgcolor: "white",
// };
export const CarDetail = ({ data }: { data: dataType | undefined }) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [mainImageHovered, setMainImageHovered] = useState<boolean>(false);

  return (
    <Stack width={"1720px"}>
      <Stack
        justifyContent={"flex-start"}
        direction={"row"}
        alignItems={"center"}
        gap={"10px"}
        marginBottom={"15px"}
      >
        <Link href={`/cars/${data?.brand}`} style={{ textDecoration: "none" }}>
          <Box fontSize={"14px"} fontWeight={"400"} color={"#717171"}>
            {data?.brand}
          </Box>
        </Link>
        <BreadCrumbArrow />
        <Typography fontSize={"14px"} fontWeight={"400"} color={"#717171"}>
          {data?.carModel}
        </Typography>
      </Stack>
      <Stack
        position="relative"
        gap={"4px"}
        direction={"row"}
        width={"100%"}
        height={"500px"}
      >
        <Stack
          overflow="hidden"
          width={"865px"}
          height={"100%"}
          borderRadius={"8px"}
        >
          <Stack
            style={{
              position: "relative",
              width: "100%",
              height: "100%",
              transform: mainImageHovered ? "scale(1.02)" : "scale(1)",
              transition: "transform 0.5s",
            }}
            onMouseEnter={() => setMainImageHovered(true)}
            onMouseLeave={() => setMainImageHovered(false)}
          >
            <CardMedia
              component={"img"}
              src={data?.img[0]}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
            />
          </Stack>
          <Stack
            direction={"row"}
            gap={"8px"}
            bottom={"24px"}
            left={"24px"}
          ></Stack>
        </Stack>
        <Stack width={"870px"} height={"500px"} flexWrap={"wrap"} gap={"4px"}>
          {data?.img.map((e: string, index: number) => (
            <Stack
              key={index}
              sx={{ overflow: "hidden", borderRadius: "5px" }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div
                style={{
                  width: "428px",
                  height: "248px",
                  position: "relative",
                  transform:
                    hoveredIndex === index ? "scale(1.02)" : "scale(1)",
                  transition: "transform 0.5s",
                }}
              >
                <CardMedia
                  component={"img"}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                  }}
                  src={e}
                />
              </div>
            </Stack>
          ))}
          <Stack position={"absolute"} bottom={"20px"} right={"20px"}>
            <ButtonBase
              sx={{
                borderRadius: "100px",
                p: "9px 24px",
                gap: "8px",
                bgcolor: "rgba(21, 21, 21, 0.5)",
                "&:hover": {
                  bgcolor: "rgba(21, 21, 21, 0.8)",
                },
              }}
            >
              <Camera />
              <Typography
                sx={{
                  color: "white",
                }}
              >
                {data?.img.length + "Photos"}
              </Typography>
            </ButtonBase>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
};
