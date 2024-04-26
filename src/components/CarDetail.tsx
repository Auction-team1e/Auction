"use client";
import { BreadCrumbArrow, Camera, Heart, UpRightArrow } from "@/svgs";
import { ButtonBase, CardMedia, Stack, Typography } from "@mui/material";
import { useEffect, useState } from "react";

type imgType = {
  img: string[];
};

export const CarDetail = () => {
  const [dataAr, setDataAr] = useState<Array<imgType>>();

  useEffect(() => {
    async function carImg() {
      try {
        const res = await fetch(`http://localhost:4000/api/car`);
        const data = await res.json();
        console.log(data);
        setDataAr(data);
      } catch (error) {
        console.error("error fetching car data:", error);
      }
    }
    carImg();
  }, []);

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
      <Stack gap={"4px"} direction={"row"} width={"100%"} height={"500px"}>
        <Stack width={"865px"} height={"100%"} position="relative">
          <CardMedia
            component={"img"}
            src={dataAr && dataAr[0].img[0]}
            style={{
              width: "100%",
              height: "100%",
              borderRadius: "8px",
            }}
          />
          <Stack
            direction={"row"}
            gap={"8px"}
            position="absolute"
            bottom={"24px"}
            left={"24px"}
          >
            <ButtonBase
              sx={{
                borderRadius: "100px",
                p: "9px 24px",
                gap: "10px",
                bgcolor: "white",
              }}
            >
              <Heart />
              <Typography>Save</Typography>
            </ButtonBase>
            <ButtonBase
              sx={{
                borderRadius: "100px",
                p: "9px 24px",
                gap: "10px",
                bgcolor: "white",
              }}
            >
              <UpRightArrow />
              <Typography>Share</Typography>
            </ButtonBase>
          </Stack>
        </Stack>
        <Stack width={"870px"} height={"500px"} flexWrap={"wrap"} gap={"4px"}>
          {dataAr &&
            dataAr[0].img.map((e: string, index: number) => (
              <Stack width={"428px"} height={"248px"} key={index}>
                <CardMedia
                  component={"img"}
                  style={{
                    borderRadius: "5px",
                    width: "100%",
                    height: "100%",
                    objectFit: "fill",
                  }}
                  src={e}
                />
              </Stack>
            ))}
          <Stack position={"absolute"} bottom={"24px"} right={"94px"}>
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
                19 Photos
              </Typography>
            </ButtonBase>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
};
