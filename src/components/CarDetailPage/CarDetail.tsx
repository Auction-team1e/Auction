"use client";
import { BreadCrumbArrow, Camera, Heart, UpRightArrow } from "@/svgs";
import { ButtonBase, CardMedia, Stack, Typography } from "@mui/material";
import { useState } from "react";
type imgType = {
  _id: string;
  carModel: string;
  brand: string;
  startPrice: number;
  description: string;
  carDetails: string[];
  img: string[];
  endTime: string;
};
const style = {
  borderRadius: "100px",
  p: "9px 24px",
  gap: "10px",
  bgcolor: "white",
};
export const CarDetail = ({ dataAr }: { dataAr: imgType[] | undefined }) => {
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
        <Typography fontSize={"14px"} fontWeight={"400"} color={"#717171"}>
          Cars
        </Typography>
        <BreadCrumbArrow />
        <Typography fontSize={"14px"} fontWeight={"400"} color={"#717171"}>
          Bugatti
        </Typography>
        <BreadCrumbArrow />
        <Typography fontSize={"14px"} fontWeight={"400"} color={"#717171"}>
          Chiron
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
          position="relative"
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
              src={dataAr && dataAr[0].img[0]}
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
            position="absolute"
            bottom={"24px"}
            left={"24px"}
          >
            <ButtonBase sx={style}>
              <Heart />
              <Typography>Save</Typography>
            </ButtonBase>
            <ButtonBase sx={style}>
              <UpRightArrow />
              <Typography>Share</Typography>
            </ButtonBase>
          </Stack>
        </Stack>
        <Stack width={"870px"} height={"500px"} flexWrap={"wrap"} gap={"4px"}>
          {dataAr &&
            dataAr[0].img.map((e: string, index: number) => (
              <Stack
                key={index}
                sx={{ overflow: "hidden", borderRadius: "5px" }}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <Stack
                  style={{
                    width: "428px",
                    height: "248px",
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
                </Stack>
              </Stack>
            ))}
        </Stack>
        <Stack position={"absolute"} right={"20px"} bottom={"20px"}>
          <ButtonBase
            sx={{
              borderRadius: "100px",
              padding: "9px 23px",
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
              {dataAr?.length + " Photos"}
            </Typography>
          </ButtonBase>
        </Stack>
      </Stack>
    </Stack>
  );
};
